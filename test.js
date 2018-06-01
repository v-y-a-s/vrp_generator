// Solution parser for Opta planner VRP 
var shipments = [];
var vehicles = [];
var parseString = require('xml2js').parseString;
var xml = `<vehicleList id="155">
<VrpVehicle id="156">
    <id>0</id>
    <capacity>48000</capacity>
    <depot reference="154"/>
</VrpVehicle>
<VrpVehicle id="157">
    <id>1</id>
    <capacity>48000</capacity>
    <depot reference="154"/>
    <nextCustomer id="158">
        <id>81409620</id>
        <location class="VrpRoadLocation" reference="63"/>
        <demand>42290</demand>
        <previousStandstill class="VrpVehicle" reference="157"/>
        <vehicle reference="157"/>
    </nextCustomer>
</VrpVehicle>
</vehicleList> `;
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
}
catch (err) {
  console.log("Something is wrong with the Vehicle List XML input");
}


