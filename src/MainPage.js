import React from 'react';
//components
import Container from './Container';
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Notification from "./components/common/Notification";
import Social from "./components/common/Social_fixed";
import { withTranslation } from 'react-i18next';

const dataNotifications = [
    'Căn hộ B6 - F02 của Dự Án Royal Garden vừa được bán Dự Án Royal Garden vừa được bán'
]
const MainPage = (props) => {

    return(
        <>
            <Header />
            <Notification datas={dataNotifications} />
            <Container />
            <Footer />
            <Social />
        </>
    ) ;
}

export default withTranslation()(MainPage);