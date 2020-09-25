import React, { Component } from 'react';
// import './homeData.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route'

import 'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/css/bootstrap.min.css';
import UserData from './userData';
import CheckDetail from './checkDetails';
class UserHome extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            // <div>
            <Router>
                <div>    
                 
<nav>
  
      
<input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <i class="fas fa-bars">User Menu</i>
      </label>
      <ul>
<li className="nav-item">
    <NavLink className="nav-link" to="/SearchFlight">Search Flight</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/CheckDetails">Check Booking Details</NavLink>
    </li>
     
</ul>



<Route path="/SearchFlight" component={UserData} />  
<Route path="/CheckDetails" component={CheckDetail} />  
</nav>
</div> 

</Router>
        );
    }
}

export default UserHome;