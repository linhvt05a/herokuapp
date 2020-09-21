import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Modal } from 'antd';

//components
import Container from './Container';
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import Notification from "../components/common/Notification";
import Social from "../components/common/Social_fixed";
import { IMAGE_URL, TIMEOUT_ADS, LOADING_ADS } from "../contant";


const dataNotifications = [
    'Căn hộ B6 - F02 của Dự Án Royal Garden vừa được bán Dự Án Royal Garden vừa được bán'
]

const MainPage = (props) => {

    const [visible, setVisible] = useState(true)

    document.addEventListener("DOMContentLoaded", function (event) {
        setTimeout(() => {
            setVisible(!visible)
        }, TIMEOUT_ADS)
    });

    const handleCancel = props => {
        setVisible(props)
    };

    return (
        <>
            <Modal
                title="loading_ads"
                // visible={visible}
                visible={LOADING_ADS}
                mask={true}
                onCancel={() => handleCancel(!visible)}
                width={996}
                centered={true}
                className="loading_ads"
            >
                <figure>
                    <img className="w-100" src={`${IMAGE_URL}images/popup_promotion.jpg`} alt="popup_promotion" />
                </figure>
            </Modal>

            <Header />
            <Notification datas={dataNotifications} />
            <Container />
            <Footer />
            <Social />
        </>
    );
}

export default withTranslation()(MainPage);