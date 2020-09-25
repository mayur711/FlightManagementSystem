const mongoose =require('mongoose');
const AddFlight=require("../Model/UserModel");

//const mm=require("../Routes/admin");
const bodyParser=require("body-parser");


exports.search_Flight = (req, res, next) => {
  console.log("inside controller");
    const from=req.body.From;
    const to=req.body.To;
  const date=req.body.Date;

    AddFlight.find({From:from,To:to,Date:date})
      .exec()
      .then(docs => {
        if (!docs) {
          return res.status(404).json({
            message: "Flight not found"
          });
        }
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
  

  
  