import React, { Component } from 'react';

import './home.css';
import './home1.js';

import AdminData from '../Admin/adminData';


class AdminAuth extends Component {
    constructor(props) {
        super(props);
         
        this.handleChange = this.handleChange.bind(this);
        this.checkPassword=this.checkPassword.bind(this);
        this.state={
            password:'',
     
    };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
       
    }

checkPassword(e){
    console.log(this.state.password);
   
    if(this.state.password ==="admin")
    {
        this.props.history.push('/admin');
        window.location.reload();
        
    }
    else{
        alert("Wrong Password");
    }
}


    render() {
        return (
            <div class="form-style-5">
                        
           <input type="password" name="password" value={this.state.password} onChange={this.handleChange}  placeholder="Enter Admin Password *" />
           <input type="submit" onClick={this.checkPassword} value="LogIn" />
            </div>
            
        );

}
}

export default AdminAuth;
