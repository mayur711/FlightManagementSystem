import React, { Component } from 'react';
import './addflight.css';

import AdminService from '../services/adminService';
class AddFlight extends Component{
    constructor(props){
        super(props);
    
            this.handleChange = this.handleChange.bind(this);
            this.addFlight=this.addFlight.bind(this);
            this.state={
                FlightId:'',
                FlightName:'',
                From:'',
                To:'',
                Date:' ',
                price:'',
                flights:[],
                hasError:false
            };
          
        }
    
        handleChange(e) {
            this.setState({ [e.target.name]: e.target.value });
           
          }
        
        addFlight(){
           
            AdminService.add(this.state.FlightId,this.state.FlightName,this.state.From,this.state.To,this.state.Date,this.state.price)
                         .then(res => {
                           this.setState({...this.state,
                             flights:res
                           })
                         })
                         .catch(err => {
                           this.setState({hasError:true})
                         })
                         alert("Flight Added Successfully");  
          }

    render() {
        return (
            <div class="form-style-5">
              <form>
            <input type="text" name="FlightId"  value={this.state.FlightId} onChange={this.handleChange}  placeholder="Enter Flight ID  *" />
            <input type="text" name="FlightName" value={this.state.FlightName} onChange={this.handleChange}  placeholder="Enter Flight Name  *" />
            <input type="text" name="From" value={this.state.From} onChange={this.handleChange}  placeholder="Enter Flight From *" />
            <input type="text" name="To" value={this.state.To} onChange={this.handleChange}  placeholder="Enter Flight To *" />
            <input type="date" name="Date" value={this.state.Date} onChange={this.handleChange}  placeholder="Enter Flight Date *" />
            <input type="text" name="price" value={this.state.price} onChange={this.handleChange}  placeholder="Enter Flight Price *" />
            <input type="submit" onClick={ this.addFlight} value="Add" />
            <div>
            </div>
            </form>
              </div>
        );
    }
}

export default AddFlight;