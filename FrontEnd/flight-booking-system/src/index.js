import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js'
import'bootstrap/dist/js/bootstrap.bundle.min';
import { app } from 'firebase';

ReactDOM.render(
    
    <App />, document.getElementById('root'));

registerServiceWorker();
