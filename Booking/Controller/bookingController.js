const mongoose =require('mongoose');
const Booking=require("../Model/booking");

//const mm=require("../Routes/admin");
const bodyParser=require("body-parser");

exports.add= (req, res, next) => {
    const date=new Date(req.body.Date);
    const addbooking = new Booking({
      _id : new mongoose.Types.ObjectId(),
               FlightId: req.body.FlightId,
              FlightName: req.body.FlightName,
              From: req.body.From,
              To: req.body.To,
              Date:date,
              price: req.body.price,
              PassengerName:req.body.PassengerName,
              PassengerAge:req.body.PassengerAge,
              PassengerPhoneNo:req.body.PassengerPhoneNo
    });
    addbooking
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Booking Added successfully",
          createdProduct: {
            FlightId: req.body.FlightId,
               FlightName: req.body.FlightName,
               From: req.body.From,
               To: req.body.To,
               Date:req.body.Date,
               price: req.body.price,
               PassengerName:req.body.PassengerName,
               PassengerAge:req.body.PassengerAge,
               PassengerPhoneNo:req.body.PassengerPhoneNo,
            request: {
              type: "GET",
              url: "http://localhost:5000/flights/" + result._id
            }
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

  exports.find_by_Id = (req, res, next) => {

    Booking.find({PassengerPhoneNo:req.params.PassengerPhoneNo})
      .exec()
      .then(docs => {
       
        res.status(200).json({
          count: docs.length,
          orders: docs.map(doc => {
            return {
              FlightId: doc.FlightId,
              FlightName: doc.FlightName,
              From: doc.From,
              To: doc.To,
              Date:doc.Date,
              price:doc.price,
              PassengerName:doc.PassengerName,
              PassengerAge:doc.PassengerAge,
              PassengerPhoneNo:doc.PassengerPhoneNo,
              request: {
                type: "GET",
                url: "http://localhost:5000/flights/" + doc._id
              }
            };
          })
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  };
  