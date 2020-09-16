// polyfills 
import "@babel/polyfill";
import "./polyfills/classList.min";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import * as serviceWorker from "./serviceWorker";
import '../public/styles/cssLibs';
import '../public/styles/scss/main.scss';

import {MODE_ENV} from '../config/env';


// console.log('MODE_ENV:',MODE_ENV);
if (MODE_ENV.show_log == false){    
    console.log = () => {};
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
