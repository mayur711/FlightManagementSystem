import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../config/fire';
import './login.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import'bootstrap/dist/css/bootstrap.min.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    //this.validateForm=this.validateForm.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }

   validateForm(e,f) {
    var x = e.target.value;
    var y = f.target.value;
    if (x == " ") {
      alert("Name must be filled out");
     
    }
  }

  render() {
    return (
<div class="form-group">
<div class="login">
    <h1>Login</h1>
    <form method="post">
        <input type="email" value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  required="required" />
        <input type="password" name="password"  value={this.state.password} onChange={this.handleChange} type="password"  class="form-control" id="exampleInputPassword1" placeholder="Password" required="required" />
        <button type="submit" onClick={this.login} class="btn btn-primary">Let me in.</button>
        <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
    </form>
</div>
</div>
    );
  }
}
export default Login;