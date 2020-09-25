import React, { Component } from 'react';
import './homeData.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route'

import addFlight from './AddFlight/addflight';
import deleteFlight from './Delete Flight/deleteFlight';
import searchFlight from './searchFlight/searchFlight';
import showallflight from './SearchAllFlights/searchallflights';
import 'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/css/bootstrap.min.css';
class Homedata extends Component{
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
        <i class="fas fa-bars">Admin Menu</i>
      </label>
      <ul>
<li className="nav-item">
    <NavLink className="nav-link" to="/addflight">Add Flight</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/deleteflight">Delete Flight</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/searchflight">Search Flight</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/showallflight">Show All Flights</NavLink>
    </li>
</ul>



<Route path="/addflight" component={addFlight} />  
<Route path="/deleteflight" component={deleteFlight} />  
<Route path="/searchflight" component={searchFlight} />  
<Route path="/showallflight" component={showallflight} />  
</nav>
</div> 

</Router>
        );
    }
}

export default Homedata;