
const express = require("express");
const router = express.Router();
const UserController = require('../Controllers/users');


console.log("helo");
/**
*@swagger
* /getflight:
*   paths:
*       /addflight
*   post:
*     tags:
*     summary: This should return flights as per the User fileter from database.
*     description: This is where User will provide the flight details like Date ,From and To and on clicking search button it will Show all the flights which satisfies the given condition.
*   responses:
*        200:
*           description:Flight details Retrived  
*/
router.post("/getflight", UserController.search_Flight);
// router.get("/",AdminController.flights_get_all);
// router.get("/:FlightId", AdminController.flight_get_byId);

// router.delete("/:FlightId",AdminController.flight_delete_byId);



module.exports = router;