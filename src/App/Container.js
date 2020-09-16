//libs
import React, { useState, useEffect, useRef, useLayoutEffect, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import { Spin } from 'antd';

import TopBanner from "../components/common/Header/TopBanner";
import { MAIN, PATHS } from "../routes"
import { Error404 } from '../templates/ErrorPage';
import i18n from '../i18n'

const Container = () => {

    const [dimensions, setDimensions] = React.useState({
        height: 50,
    })
    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: document.getElementsByClassName('header')[0].clientHeight
            })
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('load', handleResize)
        }
    }, []);

    return (
        <I18nextProvider i18n={i18n}>
            <div className="page_container" style={{ paddingTop: dimensions.height }}>
                <Suspense fallback={loading()}>
                    <Switch >
                        {MAIN.map((data, idx) => (
                            <Route exact key={idx} path={data.path}>
                                <TopBanner data={data} />
                                <data.component />
                            </Route>
                        ))}
                        <Route component={Error404} />
                    </Switch>
                </Suspense>
            </div>
        </I18nextProvider>
    );
}

const loading = () => {
    return (
        <div className="container">
            <Spin className="loading_full" tip="Loading..."></Spin>
        </div>
    )
}

export default Container;
