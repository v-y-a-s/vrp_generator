## vrp_generator

#### VRP file generator for Octa Planner

Instructions:

1. Clone this repositroy.
2. Make sure you have installed Node JS 
3. Open the direcotry and run npm install to download dependencies
4. To run the server do node matrix_creator.js
5. Open a REST client 
6. VRP Generator is now listening at localhost:3000
7. Post your data set in the below JSON format mentioned in apit_test.rest using rest client. 
8. The output VRP file is stored as D:/res/problems_usa_zekleer+timestemamp.vrp
9. open this path, get the .vrp file and feed it to the CVRP solver in opta planner. 
10. Check if it satisfies the required output 👍

Other Details 

1. The Vehicle fleet number can be mentioned in the property "VEHICLES"
2. The Max capacity of each truck is in the propoerty "CAPACITY"
3. Only one depot is considered as source. 
4. The first location is always the depot. 
5. The weight of the first location should be WT:0 
6. The first Location should be the address of the depot 