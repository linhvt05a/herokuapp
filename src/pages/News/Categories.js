import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Trans } from 'react-i18next';

const Categories = (props)=>{
    const{cateTitle, label} = props
    return(
        <ul className="news_menu bg_white mb-45">
        <label className="news_menu__title">
            <Trans>{label}</Trans>
        </label>
        {
            cateTitle && cateTitle.map((item, index)=>
                <CategoriesName key={index} data={item}/>
            )
        }
    </ul>
    
    )
}

const CategoriesName = (props) =>{
    const{data} = props
    return(
        <li>
            <Link to="#">
                <i className="fas fa-angle-right mr-2" />
                <Trans>{data.title}</Trans>
            </Link>
        </li>
    )
}

export default Categories