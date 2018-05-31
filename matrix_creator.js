var http = require("https");
var fs = require('fs');
var NodeGeocoder = require('node-geocoder');
var Ajv = require('ajv');
var ajv = new Ajv({ allErrors: true });
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var touch = require("touch")
var port = process.env.PORT || 3000;

var path = 'D:/file.vrp';


app.use(bodyParser.json());
// Parse for urlencoded payload
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/go", function (req, response) {

  final_buffer = new Buffer("");
  var this_ts;
  var new_path;
  var json_schema =
    {
      "type": "object",
      "required":
        [
          "CAPACITY",
          "VEHICLES",
          "LOC_WT"
        ],
      "properties":
        {
          "LOC_WT":
            {
              "type": "array",
              "minItems": 2,
              "items":
                {
                  "required":
                    [
                      "LOC",
                      "WT"
                    ],
                  "properties":
                    {
                      "LOC":
                        {
                          "type": "string",
                          "minLength": 1,
                          "maxLength": 256
                        },
                      "WT":
                        {
                          "type": "number"
                        }
                    }
                }
            }
        }
    };

  var valid_inp = 0;
  var validate = ajv.compile(json_schema);
  function test(data) {
    var valid = validate(data);
    if (valid) {
      valid_inp = 1;
      console.log('Valid!');
    }
    else {
      //console.log('Invalid: ' + ajv.errorsText(validate.errors));
      res.status(400).type('application/json').send({
        Result: ajv.errorsText(validate.errors)
      });
    }
  }

  test(req.body);

  // prepare arrays 

  if (valid_inp === 1) {
    // Array pre populate 
    var content = req.body;
    var input_locations = [];
    var input_demands = [];
    content.LOC_WT.forEach(element => {
      input_locations.push(element.LOC);
      input_demands.push(element.WT);
    });

    var geo_options = {
      provider: 'google',

      // Optional depending on the providers
      httpAdapter: 'https', // Default
      apiKey: 'AIzaSyC30Jrgb9rlnvvyhAtxbVwdDdvmWrGncjQ', // for Mapquest, OpenCage, Google Premier
      formatter: null         // 'gpx', 'string', ...
    };

    var geocoder = NodeGeocoder(geo_options);
    var geocodes = [];
    var points = [];
    geocoder.batchGeocode(input_locations, function (err, results) {
      // Return an array of type {error: false, value: []}
      //console.log(JSON.stringify(results));
      results.forEach(function (element, i) {
        //console.log(element);
        if (element.error != null) {
          geocodes.push([i, 'ERR', 'ERR', 'ERR']);
          points.push('ERR');
        }
        else if (element.value.length === 0) {
          geocodes.push([i, 'ERR', 'ERR', 'ERR']);
          points.push('ERR');
        }
        else {
          geocodes.push([i, element.value[0].latitude, element.value[0].longitude, element.value[0].extra.googlePlaceId]);
          // insert to points array for computing distance matrix
          points.push([element.value[0].latitude, element.value[0].longitude]);
        }
      });

      this_ts = new Date().valueOf();
      b1 = new Buffer("NAME : problems_usa_zekleer" + this_ts + "\n");
      console.log("NAME : problems_usa_zekleer" + this_ts);
      b2 = new Buffer("COMMENT : Vyas Saranagapani's Node VRP Generator" + "\n");
      console.log("COMMENT : Vyas Saranagapani's Node VRP Generator");
      b3 = new Buffer("TYPE : CVRP" + "\n");
      console.log("TYPE : CVRP");
      b4 = new Buffer("DIMENSION : " + (geocodes.length) + "\n");
      console.log("DIMENSION : " + (geocodes.length));
      b5 = new Buffer("EDGE_WEIGHT_TYPE: EXPLICIT" + "\n");
      console.log("EDGE_WEIGHT_TYPE: EXPLICIT");
      b6 = new Buffer("EDGE_WEIGHT_FORMAT: FULL_MATRIX" + "\n");
      console.log("EDGE_WEIGHT_FORMAT: FULL_MATRIX");
      b7 = new Buffer("EDGE_WEIGHT_UNIT_OF_MEASUREMENT: km" + "\n");
      console.log("EDGE_WEIGHT_UNIT_OF_MEASUREMENT: km");
      b8 = new Buffer("CAPACITY : "+content.CAPACITY+"\n");
      console.log("CAPACITY : "+content.CAPACITY);

      //  PRINTING  NODE COORD 
      console.log("NODE_COORD_SECTION");
      bnc = new Buffer("NODE_COORD_SECTION" + "\n");
      final_buffer = Buffer.concat([b1, b2, b3, b4, b5, b6, b7, b8, bnc]);
      geocodes.forEach(function (element) {
        b9 = new Buffer(' ' + element.join(" ") + "\n");
        final_buffer = Buffer.concat([final_buffer, b9]);
        console.log(' ' + element.join(" "));
      });


      var query = '';
      var err_block = 0;
      // all addresses shd have lat long
      points.forEach(function (element, i) {
        if (element === 'ERR') {
          err_block = 1;
          console.log("Fix the addresses at Number : " + (i + 1));
        }
      });

      // IF addresses have lat long
      if (err_block != 1) {
        points.forEach(function (element) {
          query = query.concat('&from_point=');
          query = query.concat(element);
          query = query.concat('&to_point=');
          query = query.concat(element);
        });


        //console.log(query);

        var options = {
          "method": "get",
          "hostname": "graphhopper.com",
          "port": null,
          "path": "/api/1/matrix?out_array=distances&out_array=times&key=b43ae00c-0b71-47a4-af78-4915b7205011&vehicle=car" + query,
          "headers": {}
        };

        var req = http.request(options, function (res) {
          var chunks = [];

          res.on("data", function (chunk) {
            chunks.push(chunk);
          });

          res.on("end", function () {
            var body = Buffer.concat(chunks);
            var result = JSON.parse(body.toString());
            var dist = result.distances;
            console.log(dist);
            // convert meters to miles
            for (var i = 0; i < dist.length; i++) {
              var nest = dist[i];
              for (var j = 0; j < nest.length; j++) {
                dist[i][j] = nest[j] / 1609.334;
              }
            }
            // PRINTING MATRIX
            b10 = new Buffer("EDGE_WEIGHT_SECTION" + "\n");
            console.log("EDGE_WEIGHT_SECTION");
            final_buffer = Buffer.concat([final_buffer, b10]);
            dist.forEach(element => {
              b11 = new Buffer(element.join(" ") + "\n");
              final_buffer = Buffer.concat([final_buffer, b11]);
              console.log(element.join(" "));
            });
            // PRINTING DEMAND SECTIONS
            b12 = new Buffer("DEMAND_SECTION" + "\n");
            console.log("DEMAND_SECTION");
            final_buffer = Buffer.concat([final_buffer, b12]);
            input_demands.forEach(function (element, i) {
              b13 = new Buffer(i + ' ' + Math.ceil(element) + "\n");
              final_buffer = Buffer.concat([final_buffer, b13]);
              console.log(i + ' ' + Math.ceil(element));
            });
            // DEPOT SECTION 
            b14 = new Buffer("DEPOT_SECTION" + "\n");
            console.log("DEPOT_SECTION");
            b15 = new Buffer(" 0" + "\n");
            console.log(" 0");
            b16 = new Buffer(" -1" + "\n");
            console.log(" -1");
            b17 = new Buffer("EOF" + "\n");
            console.log("EOF");
            final_buffer = Buffer.concat([final_buffer, b14, b15, b16, b17]);


            new_path = 'D:/res/problems_usa_zekleer' + this_ts + '-road-km-d1-n' + geocodes.length + '-k'+content.VEHICLES+'.vrp';
            fs.writeFile(new_path, '', (err) => {
              if (err) throw err;

              console.log("The file was succesfully saved!");
            });

            fs.open(new_path, 'w', function (err, fd) {
              if (err) {
                throw 'error opening file: ' + err;
              }

              fs.write(fd, final_buffer, 0, final_buffer.length, null, function (err) {
                if (err) throw 'error writing file: ' + err;
                fs.close(fd, function () {
                  console.log('file written');
                  // valid input if
                  response.status(200).type('application/json').send({
                    "File Path": new_path
                  });
                })
              });
            });

          });
        });

        req.end();
        // err block != 1 
      }

    });

  }



});

app.listen(port);