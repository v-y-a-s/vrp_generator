var http = require("https");
var fs = require('memfs');
var NodeGeocoder = require('node-geocoder');
var Ajv = require('ajv');
var ajv = new Ajv({ allErrors: true });
var express = require("express");
var bodyParser = require('body-parser');
var xmlparser = require('express-xml-bodyparser');
var app = express();
var touch = require("touch")
var port = process.env.PORT || 3000;
var new_path;
var path = 'D:/file.vrp';

// parsers only for XML 
app.use('/parse', function (req, res, next) {
  var data = '';
  req.setEncoding('utf8');
  req.on('data', function (chunk) {
    data += chunk;
  });

  req.on('end', function () {
    req.body = data;
    next();
  });
});
app.post('/parse', function (req, response) {
  // Solution parser for Opta planner VRP 
  var shipments = [];
  var vehicles = [];
  var total_delivery_itmes = 0;
  var total_delivery_weight = 0;
  var deliver_line_item_groups = [];
  var parseString = require('xml2js').parseString;
  console.log(req.body);
  var xml = req.body;
  try {
    parseString(xml, function (err, result) {

      // Total Number of Vehicles.
      console.log("Allocated Maximum Number of Vehicles: " + result.vehicleList.VrpVehicle.length);
      // Each Vehicle ID + List of deliveries it handles and in that order.
      result.vehicleList.VrpVehicle.forEach(element => {
        //console.log(JSON.stringify(element));
        //console.log("Vehicle ID: "+element.id);
        var ress = [];
        ress = recursiveIteration(element, ress)
        console.log(ress);
        vehicles.push({ "ID": element.id[0], "Delivery_Orders": ress });
        console.log(vehicles);
        // Groupings which are non empty - Non empty vehicles.
        if (ress.length > 0) {
          // Calculate sum of delivery weights. 
          var sum = 0;
          ress.forEach(function (element, i) {
            sum = sum + parseInt(element.demand);
          });
          // Creating shipments 
          // Total Delivery Items
          total_delivery_itmes = total_delivery_itmes + ress.length;
          // Total weight of all deliveries 
          total_delivery_weight = total_delivery_weight + sum;
          shipments.push({ "ID": (shipments.length + 1), "Total_Weight": sum, "Delivery_Count": ress.length, "Delivery_Orders": ress });
        }
      });

    });

    function recursiveIteration(object, res_arr) {

      //console.log(JSON.stringify(object));
      if (object.hasOwnProperty("nextCustomer")) {
        // First is the customer ID and then Demand
        var x = {};
        x.delivery_id = object.nextCustomer[0].id[0];
        x.demand = object.nextCustomer[0].demand[0];
        res_arr.push(x);
        //console.log(object.nextCustomer[0].id, object.nextCustomer[0].demand);
        if (object.nextCustomer[0].hasOwnProperty("nextCustomer")) {
          //console.log("GG"+JSON.stringify(object.nextCustomer[0]));
          recursiveIteration(object.nextCustomer[0], res_arr);
        }
        else {
          return res_arr;
        }
      }
      else {
        //console.log("No Delivery Assigned");
        return res_arr;
      }
      return res_arr;
    }
    // if everything goes well - solution
    // Calculate performance parameters:
    var vehicle_count = shipments.length;
    // Delivery grouping list
    shipments.forEach(function (element) {
      var inp = element.ID;
      console.log(inp);
      element.Delivery_Orders.forEach(function (element) {
        var x = {};
        x.group_id = inp;
        x.delivery_id = element.delivery_id;
        x.demand = element.demand;
        deliver_line_item_groups.push(x);
      });
    });
    //console.log(deliver_line_item_groups);
    // efficiency = Total weight of all deliveries / Total weight capacity of trucks  
    var eff = total_delivery_weight / (vehicle_count * 48000);
    response.status(200).type('application/json').send({
      Delivery_Items_Count: total_delivery_itmes,
      Shipment_Count: shipments.length,
      Vehicle_Count: vehicle_count,
      Total_Shipment_Weight: total_delivery_weight,
      Total_Fleet_Weight_Capacity: vehicle_count * 48000,
      Truck_Fill_Efficency: eff,
      Result: shipments,
      Delivery_Items_Grouped_List: deliver_line_item_groups
    });
  }
  // Opps something broke due to xml 
  catch (err) {
    //console.log("Something is wrong with the Vehicle List XML input");
    response.status(400).type('application/json').send({
      Error: "Something is wrong with the Vehicle List XML input"
    });
  }

});


// body parse only for JSON payloads 
app.use(bodyParser.json());
// Parse for urlencoded payload
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/go", function (req, response) {

  final_buffer = new Buffer("");
  var this_ts;

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
                        },
                      "ID":
                        {
                          "type": "string",
                          "minLength": 1,
                          "maxLength": 256
                        },
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
      response.status(400).type('application/json').send({
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
    var input_ids = [];
    content.LOC_WT.forEach(element => {
      input_locations.push(element.LOC);
      input_demands.push(element.WT);
      input_ids.push(element.ID);
    });

    var geo_options = {
      provider: 'google',

      // Optional depending on the providers
      httpAdapter: 'https', // Default
      apiKey: 'AIzaSyDDTRbgT4Bt0B5urIa20OI_stNPWrS_wJY', // for Mapquest, OpenCage, Google Premier
      formatter: null         // 'gpx', 'string', ...
    };

    var geocoder = NodeGeocoder(geo_options);
    var geocodes = [];
    var points = [];
    geocoder.batchGeocode(input_locations, function (err, results) {
      // Return an array of type {error: false, value: []}
      console.log(JSON.stringify(results));
      results.forEach(function (element, i) {
        //console.log(element);
        if (element.error != null) {
          geocodes.push([input_ids[i], 'ERR', 'ERR', 'ERR']);
          points.push('ERR');
        }
        else if (element.value.length === 0) {
          geocodes.push([input_ids[i], 'NO_VAL', 'NO_VAL', 'NO_VAL']);
          points.push('ERR');
        }
        else {
          geocodes.push([input_ids[i], element.value[0].latitude, element.value[0].longitude, element.value[0].extra.googlePlaceId]);
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
      b8 = new Buffer("CAPACITY : " + content.CAPACITY + "\n");
      console.log("CAPACITY : " + content.CAPACITY);

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
      var lat_long_err = [];
      points.forEach(function (element, i) {
        if (element === 'ERR') {
          err_block = 1;
          lat_long_err.push(input_ids[i]);
          console.log("Fix the addresses at Number : " + (input_ids[i]));
        }
      });

      if (err_block === 1) {
        response.status(400).type('application/json').send({
          error: "Check the Addresses for the following lines - GMaps API Failed to get Lat Longs",
          error_count: lat_long_err.length,
          address_indexes: lat_long_err
        });
      }

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
            console.log(result);
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
              b13 = new Buffer(input_ids[i] + ' ' + Math.ceil(element) + "\n");
              final_buffer = Buffer.concat([final_buffer, b13]);
              console.log(input_ids[i] + ' ' + Math.ceil(element));
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
            new_path = '/problems_usa_zekleer-road-km-d1-n' + geocodes.length + '-k' + content.VEHICLES + '.vrp';
            fs.writeFileSync(new_path, final_buffer);
            response.status(200).type('application/json').send({
              "File Path": new_path
            });
          });
        });
        req.end();
        // err block != 1 
      }
    });
  }
});

// Read 
app.get("/vrp", function (req, res) {
  res.setHeader("Content-Disposition", "attachment; filename=" + new_path);
  res.status(200).type('application/octet-stream').send(fs.readFileSync(new_path, 'utf8'));
});

app.listen(port);