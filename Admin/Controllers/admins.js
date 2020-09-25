const mongoose =require('mongoose');
const Flight=require("../Model/AdminModel");
//const mm=require("../Routes/admin");
const bodyParser=require("body-parser");


// const Order =mongoose.model("")

// exports.add_Flight = (req, res, next) => {
//   console.log("hi");
//     Flight.findOne({FlightId:req.params.FlightId})
//     .exec()
//       .then(fligh => {
//         if (!fligh) {
//           return res.status(404).json({
//             message: "Flight Already Exist"
//           });
//         }
      
//         const addFlight = new Flight({
//           _id : new mongoose.Types.ObjectId(),
//             FlightId: req.body.FlightId,
//             FlightName: req.body.FlightName,
//             From: req.body.From,
//             To: req.body.To,
//             price: req.body.price
//         });
//         return addFlight.save();
//       })
//       .then(result => {
//         console.log(result);
//         res.status(201).json({
//           message: "Request stored",
//           Added_Flight: {
//             FlightId: result.FlightId,
//             FlightName: result.FlightName,
//             From: result.From,
//             To: result.To,
//             price: result.price
//           } ,
//            request: {
//              type: "GET",
//              url: "http://localhost:5000/flights/" + result.FlightId
//            }
//         });
//       })
    
//       .catch(err => {
//         console.log(err);
//         res.status(500).json({
//           error: err
//         });
//       });
//   };

//const AddFlight=mongoose.model("AddFlight")
// console.log("controller");

exports.add_Flight = (req, res, next) => {
  const date=new Date(req.body.Date);
  const addFlight = new Flight({
    _id : new mongoose.Types.ObjectId(),
             FlightId: req.body.FlightId,
            FlightName: req.body.FlightName,
            From: req.body.From,
            To: req.body.To,
            Date:date,
            price: req.body.price
  });
  addFlight
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Flight Added successfully",
        createdProduct: {
          FlightId: req.body.FlightId,
             FlightName: req.body.FlightName,
             From: req.body.From,
             To: req.body.To,
             Date:req.body.Date,
             price: req.body.price,
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


exports.flights_get_all = (req, res, next) => {
  Flight.find()
    .select("FlightId FlightName From To Date price _id")
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

// exports.flight_get_byId = (req, res, next) => {
//   Flight.findOne({FlightId:req.params.FlightId})
//     .exec()
//     .then(order => {
//       if (!order) {
//         return res.status(404).json({
//           message: "Flight not found"
//         });
//       }
//       res.status(200).json({
//         order: order,
//         request: {
//           type: "GET",
//           url: "http://localhost:5000/flights"
//         }
//       });
//     })
//     .catch(err => {
//       res.status(500).json({
//         error: err
//       });
//     });
// };

exports.flight_get_byId = (req, res, next) => {

  Flight.find({FlightId:req.params.FlightId})
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


exports.flight_delete_byId = (req, res, next) => {
  Flight.remove({ FlightId: req.params.FlightId })
    .exec()
    .then(result => {
      res.status(200).json({
        Deleted:{
        FlightId:req.body.FlightId,
        FlightName:req.body.FlightName,
        message: "Order deleted",
        request: {
          type: "POST",
          url: "http://localhost:5000/flights"
         }
        }
        });
      })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};


// exports.add_Flight = (req, res, next) => {
//     const addFlight = new AddFlight({
//       _id : new mongoose.Types.ObjectId(),
//                FlightId: req.body.FlightId,
//               FlightName: req.body.FlightName,
//               From: req.body.From,
//               To: req.body.To,
//               price: req.body.price
//     });
//     addFlight.save().then(result =>{
//       res.status(201).send({
//         message:"flight added",
//         flight:result
//       });
//     }).catch(err =>{
//             console.log(err);
//             res.status(500).json({
//               error: err
//             });
//           });
//         };