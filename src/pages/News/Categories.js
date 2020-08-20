import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Trans } from 'react-i18next';

const Categories = ()=>{
    return(
        <ul className="news_menu bg_white mb-45">
        <label className="news_menu__title">
            <Trans>Categories</Trans>
        </label>
        <li>
            <Link to="#">
                <i className="fas fa-angle-right mr-2" />
                <Trans>Market</Trans>
            </Link>
        </li>
        <li>
            <Link to="#">
                <i className="fas fa-angle-right mr-2" />
                <Trans>Department</Trans>
            </Link>
        </li>
        <li>
            <Link to="#">
                <i className="fas fa-angle-right mr-2" />
                <Trans>House</Trans>
            </Link>
        </li>
        <li>
            <Link to="#">
                <i className="fas fa-angle-right mr-2" />
                <Trans>Analysis report</Trans>
            </Link>
        </li>
        <li>
            <Link to="#">
                <i className="fas fa-angle-right mr-2" />
                <Trans>Category 01</Trans>
            </Link>
        </li>
    </ul>
    
    )
}
export default Categories