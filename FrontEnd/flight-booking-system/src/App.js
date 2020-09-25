import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
import Home from './Login/home';
import Login from './Login/login';
// import 'bootstrap/dist/css/bootstrap.css';
// import'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  

  render() {
    return (
      <div class="body" className="App">
        {this.state.user ? (
          <Home />
        ) :
          (
            <Login />
          )}
      </div>
    );
  }
}

export default App;
