//libs
import React, { useState, useEffect, useRef , useLayoutEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import configureStore from './store';
import TopBanner from "./components/common/Header/TopBanner";
import { MAIN, PATHS } from "./routes"
import { Error404 } from './templates/ErrorPage';

const Pages = () => {

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
    },[]);

    return (
       
            <div className="page_wrapper" style={{ paddingTop: dimensions.height }}>

                <Switch >
                    {MAIN.map((data, idx) => (
                        <Route exact key={idx} path={data.path}>
                            <TopBanner data={data} />
                            <data.component />
                        </Route>
                    ))}
                    <Route component={Error404 } />
                </Switch>
            
            </div>

    );
}

export default Pages;
