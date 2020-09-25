import React, { Component } from 'react';
import './userData.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import BookingService from './userService/bookingservice';


class CheckDetails extends Component{
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.search=this.search.bind(this);
        this.state={
            BookingId:'',
             From:'',
            To:' ',
            Date:' ',
            flights:[],
            hasError:false
        };
      
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
       
    }

    search(){
        console.log(this.state.BookingId)
        BookingService.findOne(this.state.BookingId)
                     .then(res => {
                       console.log(res);
                       this.setState({...this.state,
                         flights:res
                       })
                     })
                     .catch(err => {
                       this.setState({hasError:true})
                     })
              console.log(this.state.flights);       
      }
      

    render() {
        return (
        
              <div>
              <div class="form-style-5" >  
                
           <input type="text" name="BookingId" value={this.state.BookingId} onChange={this.handleChange}  placeholder="Enter Booking Id *" required />
             <input type="submit" onClick={this.search} value="Search" />
            
             </div>
           <div >  
              <table id="customers">
  <tr>
        <th>FlightId</th>
    <th>Flight Name</th>
    <th>From</th>
    <th>To</th>
    <th>Date</th>
    <th>Price</th>
    <th>Passenger Name</th>
    <th>Passenger Age</th>
    <th>Passenger PhoneNo</th>
  </tr>
  {this.state.flights.map(item => (
  <tr>

    <td>{item.FlightId}</td>
    <td>{item.FlightName}</td>
    <td>{item.From}</td>
    <td>{item.To}</td>
    <td>{item.Date}</td>
    <td>{item.price}</td>
    <td>{item.PassengerName}</td>
    <td>{item.PassengerAge}</td> 
    <td>{item.PassengerPhoneNo}</td>
    
  
  </tr>
  ))}

</table>
</div>

 

                </div> 
              

        );
    }
}

export default CheckDetails;