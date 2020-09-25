import React, { Component } from 'react';
import '../AddFlight/addflight.css';
import AdminService from '../services/adminService.js';

class DeleteFlight extends Component{
    constructor(props){
        super(props);
    
            this.handleChange = this.handleChange.bind(this);
            this.deleteFlight=this.deleteFlight.bind(this);
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
    
        
        deleteFlight(){
            console.log(this.state.FlightId)
            AdminService.deleteFlight(this.state.FlightId)
                         .then(res => {
                           this.setState({...this.state,
                             flights:res
                           })
                         })
                         .catch(err => {
                           this.setState({hasError:true})
                         })
                  console.log(this.state.flights);  
                  alert("Flight "+this.state.FlightId+"Deleted SuccessFully");   
          }
          
    render() {
        return (
          <div class="form-style-5">
          <input type="text" value={this.state.FlightId} onChange={this.handleChange}  placeholder="Enter Flight ID you want to Delete *" />
          <input type="submit" onClick={this.deleteFlight} value="delete" />
            <div>
      
            
            </div>
        </div>
        );
    }
}

export default DeleteFlight;