
const express = require("express");
const router = express.Router();
const BookingController = require('../Controller/bookingController');


console.log("inside booking routes");
router.post("/addbooking",BookingController.add);

router.get("/checkdetails/:PassengerPhoneNo",BookingController.find_by_Id);

module.exports = router;