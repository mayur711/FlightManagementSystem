import React, { Component } from 'react';
import './userData.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import BookTicket from './bookTicket';
import UserService from './userService/userService';


class Userdata extends Component{
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.search=this.search.bind(this);
        this.state={
             From:'',
            To:'',
            Date:' ',
            flights:[],
            hasError:false
        };
      
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
       
    }

    search(){
               UserService.findOne(this.state.From,this.state.To,this.state.Date)
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
               <Router>
              <div>
              <div class="form-style-5" >  
                
           <input type="text" name="From" value={this.state.From} onChange={this.handleChange}  placeholder="Enter Flight From *" required />
            <input type="text" name="To" value={this.state.To} onChange={this.handleChange}  placeholder="Enter Flight To *"  required/>
            <input type="date" name="Date" value={this.state.Date} onChange={this.handleChange}  placeholder="Enter Flight Date *" required/>
             <input type="submit" onClick={this.search} value="Search" />
            
             </div>
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
    {/* <td> <NavLink className="nav-link" to="/bookticket">BOOK</NavLink></td> */}
    <li className="nav-item">
    
    <NavLink className="nav-link" to="/bookticket">BOOK</NavLink>
  
    </li>
    {/* <button to="/bookticket">Book</button> */}
  </tr>
  ))}

</table>
</div>
{/* {<BookTicket id={this.state.FlightId}/>} */}
<Route path="/bookticket" component={BookTicket } /> 

                </div> 
                </Router>

        );
    }
}

export default Userdata;