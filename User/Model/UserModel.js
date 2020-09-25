const mongoose = require('mongoose');   

// mongoose.Schema.Types.ObjectId
const addFlightSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    FlightId:{ type: String, required: true } ,
    FlightName: { type: String, required: true },
    From: { type: String, required: true },
    To: { type: String, required: true },
    Date:{type:Date,required:true},
    price: { type: String, required: true },
    
});

module.exports = mongoose.model('AddFlight', addFlightSchema)