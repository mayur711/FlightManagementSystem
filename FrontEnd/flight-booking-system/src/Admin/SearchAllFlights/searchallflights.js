import React, { Component } from 'react';
// import '../AddFlight/addflight.css';
import AdminService from '../services/adminService';
import '../SearchAllFlights/searchallflight.css'
import 'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/css/bootstrap.min.css';

class ShowAllFlight extends Component{
        constructor(props){
        super(props);
        this.state ={
            flights: [],
            hasError:false
          };  
    }

    componentDidMount(){
        AdminService.find()
                     .then(res => {
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
    <div class="divScroll">
      <div class="form-style-5">
        
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
    </div>
    );
    }
}

export default ShowAllFlight;