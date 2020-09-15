//libs
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from '../store';
import MainPage from "./MainPage";

const App = () => {
    const store = configureStore();

    return (
        <Provider store={store}>
            <Router>
                <MainPage />
            </Router>
        </Provider>
    );
}

export default App;
