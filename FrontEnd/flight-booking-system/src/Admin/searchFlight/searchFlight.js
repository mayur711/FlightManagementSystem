import React, { Component } from 'react';
import '../AddFlight/addflight.css';

import AdminService from '../services/adminService.js';



class SearchFlight extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.search=this.search.bind(this);
        this.state={
            FlightId:'',
            flights:[],
            hasError:false
        };
    }

    handleChange(e) {
        this.setState({ FlightId: e.target.value })
        // console.log(e.target.value);
      }

    
    search(){
        console.log(this.state.FlightId)
        AdminService.findOne(this.state.FlightId)
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
        

        <div class="form-style-5">
          <input type="text" value={this.state.FlightId} onChange={this.handleChange} name="id" placeholder="Enter Flight ID you want to Search *" />
          <input type="submit" onClick={this.search} value="Search" />
          <table>
  <tr>
        <th>FlightId</th>
    <th>Flight Name</th>
    <th>From</th>
    <th>To</th>
    <th>Date</th>
    <th>Price</th>
  </tr>
  {this.state.flights.map(item => (
  <tr>

    <td>{item.FlightId}</td>
    <td>{item.FlightName}</td>
    <td>{item.From}</td>
    <td>{item.To}</td>
    <td>{item.Date}</td>
    <td>{item.price}</td> 
  </tr>
  ))}

</table>
        </div>
        
        );
    }
}

export default SearchFlight;