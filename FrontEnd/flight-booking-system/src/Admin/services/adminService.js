import axios from "axios";
//import authHeader from './auth.service'
const API_URL = "http://localhost:5000/admin/";

class AdminService{
   FlightId=this.FlightId;

    find(){
            return  axios
         .get(API_URL+"getallflights")
         .then(response =>{
           
            return response.data.orders;
         });
    };
   //  localhost:5000/admin/getbyid/B001
    findOne(FlightId){
       console.log(FlightId);
        return  axios
     .get(API_URL+"getbyid/"+FlightId)
     .then(response =>{
       console.log(response);
        return response.data.orders;
     });
};

deleteFlight(FlightId){
   return  axios
   .delete(API_URL+"deleteflight/"+FlightId)
   .then(response =>{
     
      return response.data.Deleted;
   });
}

add(FlightId,FlightName,From,To,Date,price){
   return  axios
   .post(API_URL+"addflight",{
      FlightId,
      FlightName,
      From,
      To,
      Date,
      price
   })
   .then(response =>{
     
      return response.data.createdproduct;
   });
}

} 
    export default new AdminService();