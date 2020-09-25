import axios from "axios";
//import authHeader from './auth.service'
const API_URL = "http://localhost:4000/user/getflight";

class UserService{
    
findOne(From,To,Date){
     return  axios
  .post(API_URL,{
    From,
    To,
    Date
  })
  .then(response =>{
    console.log(response);
     return response.data.orders;
  });
};
}
export default new UserService();