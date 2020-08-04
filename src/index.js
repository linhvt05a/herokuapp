import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/scss/sales.css';


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
//    <React.StrictMode>
//    </React.StrictMode>,

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
