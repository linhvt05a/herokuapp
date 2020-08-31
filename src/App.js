//libs
import React, { useState, useEffect, useRef , useLayoutEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './store';


//components
import PagesWrapper from './Pages';
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Notification from "./components/common/Notification";
import Social from "./components/common/Social_fixed";

import { withTranslation, Trans } from 'react-i18next'
import { useTranslation } from 'react-i18next';


const dataNotifications = [
    'Căn hộ B6 - F02 của Dự Án Royal Garden vừa được bán Dự Án Royal Garden vừa được bán'
]


const App = () => {
    const store = configureStore();
    const { t } = useTranslation();

    return (
        <Provider store={store}>
            <Router>

                <Header />

                <Notification datas={dataNotifications} />
                
                <PagesWrapper />

                <Footer />

                <Social />

            </Router>
        </Provider>
    );
}

export default withTranslation()(App);
