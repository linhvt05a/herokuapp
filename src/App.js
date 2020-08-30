//libs
import React, { useState, useEffect, useRef , useLayoutEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './store';
//components
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Chat from "./components/common/Chat";

//pages

import Notifi from "./components/common/Notifi";
// import PageIndex from "./pages/index";

import PagesWrapper from './Pages';


const App = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <Router>

                <Header />
                <Notifi />

                <PagesWrapper />

                <Footer />
                <Chat />

            </Router>
        </Provider>
    );
}

export default App;
