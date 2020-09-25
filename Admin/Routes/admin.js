
const express = require("express");
const router = express.Router();
const AdminController = require('../Controllers/admins');

/**
*@swagger
* /admin/addflight:
*   post:
*     tags:
*     summary: This should add a flight to database.
*     description: This is where Admin will provide all the flight details like FlightId,FlightName,Date ,From,To and Price,and on clicking on add button it will get added to the database.
*   responses:
*        200:
*           description:Flight Added   
*/
router.post("/addflight", AdminController.add_Flight);

/**
*@swagger
* /admin/getallflights:
*   get:
*     tags:
*     summary: This should retrive all flights from database.
*     description: This is where Admin will get all the flights details like FlightId,FlightName,Date ,From,To and Price,and on clicking on search button it will get added to the database.
*   responses:
*        200:
*           description:Flights Data retrived   
*/
router.get("/getallflights",AdminController.flights_get_all);

/**
*@swagger
* /admin/getbyid/B002:
*   paths:
*      /admin/getbyid/B002
*   get:
*     tags:
*     summary: This should retrive flight details according to the Flight Id provided from the database.
*     description: This is where Admin will provide FlightId to retrive all the flight details like FlightId,FlightName,Date ,From,To and Price,and on clicking on Search button it will get added to the database.
*   responses:
*        200:
*           description:Flight Retrived   
*/
router.get("/getbyid/:FlightId", AdminController.flight_get_byId);


/**
*@swagger
* /deleteflight/:FlightId:
*   delete:
*     tags:
*     summary: This should delete a flight according to FlightId provided from the  database.
*     description: This is where Admin Will provide the Flight Id which need to be deleted and it will get deleted from the database on clicking delete button.
*   responses:
*        200:
*           description:Flight Deleted   
*/
router.delete("/deleteflight/:FlightId",AdminController.flight_delete_byId);

module.exports = router;