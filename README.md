# VRP file generator for Opta Planner

## Instructions:

1. Clone this repositroy.
2. Make sure you have installed Node JS 
3. Open the direcotry and run npm install to download dependencies
4. To run the server, open the directory and in cmd type => node matrix_creator.js
5. Open a REST client 
6. VRP Generator is now listening at localhost:3000
7. Post your data set in the JSON format payload mentioned in apit_test.rest using rest client. 
8. The Address to VRP generation is available at "/go" using "POST"
9. The output VRP file is stored as D:/res/problems_usa_zekleer+timestemamp.vrp
10. open this path, get the .vrp file and feed it to the CVRP solver in opta planner. 
11. The Opta planner gives a solution XML file. 
12. "POST" the XML file contents for the tag <vehicleList> alone at "/parse" 
13. A JSON output of grouped shipments are created and shipment count is shown.
14. Use http://json2table.com/ to tabulate the results. 
15. Check if it satisfies the required output 👍

Other Details 

1. The Vehicle fleet number can be mentioned in the property "VEHICLES"
2. The Max capacity of each truck is in the propoerty "CAPACITY"
3. Only one depot is considered as source. 
4. The first location is always the depot. 
5. The weight of the first location should be WT:0 
6. The first Location should be the address of the depot 

### Helper Tools : 

#### The below online utility lets you create the payload in a jiffy ! 

http://nimbletext.com/Live/

Data: 227 W Monroe St Chicago IL 60606 USA	,	0	,	9999999999

Pattern : {"LOC": "$0","WT": $1,"ID":"$2"},

Result : {"LOC": "227 W Monroe St Chicago IL 60606 USA","WT": 0,
"ID":"9999999999"},

#### JSON Payload formatting:

https://jsonformatter.curiousconcept.com/

http://jsonviewer.stack.hu/ 

#### JSON to table tool: 

Can be used to check the tabular output of the shipment orders created

http://json2table.com/ 

### APIs Used : 

#### Gmaps - Geocoding

Personal API key - Rate limited. 

#### Graphhopper - Matrix Distance Calculation API 

Free Key - 20x20 Matrix. 

Trial Key - 80x80 Matrix. 

License Key - MxN Matrix. 