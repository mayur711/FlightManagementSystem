import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import fire from '../config/fire';
import './home.css';
import './home1.js';

import AdminData from '../Admin/adminData';
import UserData from '../User/userData';
import AdminAuth from './adminAuth';
import UserHome from '../User/UserHome'
// import 'bootstrap/dist/css/bootstrap.css';
// import'bootstrap/dist/css/bootstrap.min.css';
class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
     
    }

    // pass(){
    //   return({
    //     <HomeData />
    //   });
      
    // }
  

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            
            // <div>
            <header class="header">
                 <div class="logo">Flight Booking System</div>  
            <Router>
                
                <div class="body">    
                          
<nav >
        
<input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <i class="fas fa-bars">Menu</i>
      </label>
      <ul>
<li className="nav-item">
     <NavLink className="nav-link" to="/adminauth">Admin</NavLink>
    </li>

    <li className="nav-item">
     <NavLink className="nav-link" to="/user">User</NavLink>
    </li>
   
<li className="nav-item"  onClick={this.logout}><a href="#">Logout</a></li>
</ul>

<li className="nav-item">
    </li>

<Route path="/adminauth" component={AdminAuth} />   
<Route path="/admin" component={AdminData} /> 
<Route path="/user" component={UserHome} />   
</nav>
</div> 

</Router>
</header>
        );

    }

}

export default Home;
