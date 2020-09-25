import React, { Component } from 'react';
import './userData.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import {Route ,Redirect} from 'react-router-dom'

import UserService from './userService/userService';
import AdminService from '../Admin/services/adminService';
import BookingService from './userService/bookingservice';
import UserData from './userData';
class BookTicket extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.book=this.book.bind(this);
        this.state={
            PassengerName:'',
            PassengerAge:'',
            PassengerPhoneNo:'',
            FlightId:'',
            flight:'',
            x:'',
            flights:[],
            flightss:[],
            hasError:false

        }
      }

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

      book(){
        AdminService.findOne(this.state.FlightId)
                     .then(res => {
                      this.setState({...this.state,
                        flights:res
                      })
                      {this.state.flights.map(item => (
                        // console.log(item.FlightName);
                    BookingService.add(item.FlightId,item.FlightName,item.From,item.To,item.Date,item.price,this.state.PassengerName,this.state.PassengerAge,this.state.PassengerPhoneNo)
                    .then(result =>{
                      this.setState({...this.state,
                        flightss:result

                    })
                     })
                      
                     .catch(err => {
                      this.setState({hasError:true})
                    })
                      ))}
                    })
                     .catch(err => {
                       this.setState({hasError:true})
                     })
              alert("Ticket Booked SuccessFully !!!"+"Your BookingId is :"+this.state.PassengerPhoneNo);
              
    }
      render(){
          return(
            <Router>
              <div class="form-style-5">
                  <form>
                  <input type="text" name="FlightId" value={this.state.FlightId} onChange={this.handleChange}  placeholder="Enter FlightId *" />
                  <input type="text" name="PassengerName" value={this.state.PassengerName} onChange={this.handleChange}  placeholder="Enter Passenger Name *" />
            <input type="text" name="PassengerAge" value={this.state.PassengerAge} onChange={this.handleChange}  placeholder="Enter Passenger Age *" />
            <input type="text" name="PassengerPhoneNo" value={this.state.PassengerPhoneNo} onChange={this.handleChange}  placeholder="Enter Passenger PhoneNo. *" />
                  </form>
          <input type="submit" onClick={this.book} value="BOOK" />
              </div>
              </Router>
          )
      }
}

export default BookTicket;