import axios from "axios";
//import authHeader from './auth.service'

const API_URL = "http://localhost:4444/user/addbooking";
const API_URL2="http://localhost:4444/user/checkdetails/"
class BookingService{
   // FlightId=this.FlightId;

    
add(FlightId,FlightName,From,To,Date,price,PassengerName,PassengerAge,PassengerPhoneNo){
   console.log("inside booking service");
   console.log(FlightName);
   return  axios
   .post(API_URL,{
      FlightId,
      FlightName,
      From,
      To,
      Date,
      price,
      PassengerName,
      PassengerAge,
      PassengerPhoneNo
   })
   .then(response =>{
     console.log("returned");
      return response.data.createdProduct;
   });
}

findOne(BookingId){
   console.log(BookingId);
    return  axios
 .get(API_URL2+BookingId)
 .then(response =>{
   console.log(response);
    return response.data.orders;
 });
};


} 
    export default new BookingService();