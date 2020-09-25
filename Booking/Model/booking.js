const mongoose = require('mongoose');   

// mongoose.Schema.Types.ObjectId
const bookingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    FlightId:{ type: String, required: true } ,
    FlightName: { type: String, required: true },
    From: { type: String, required: true },
    To: { type: String, required: true },
    Date:{type:Date,required:true},
    price: { type: String, required: true },
    PassengerName:{type:String,required:true},
    PassengerAge:{type:String,required:true},
    PassengerPhoneNo:{type:String,required:true},
    
});

module.exports = mongoose.model('Booking', bookingSchema)