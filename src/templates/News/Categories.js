import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import { Trans } from 'react-i18next';

const Categories = (props)=>{
    const{cateTitle, label} = props
    const [navigate, setNavigate] = useState({})

    const navigateTo = (id) =>{
        setNavigate(id)
    }
    return(
        <ul className="news_menu bg_white mb-45">
        <label className="news_menu__title">
            <Trans>{label}</Trans>
        </label>
        {
            cateTitle && cateTitle.map((item, index)=>
                <CategoriesName key={index} data={item} direc={navigate} navigateTo ={()=>navigateTo(item.id)}/>
            )
        }
    </ul>
    )
}

const CategoriesName = (props) =>{
    const{data, navigateTo, direc} = props
    return(
        <li className="options__menu-item">
            <a onClick={navigateTo} style={{color:direc === data.id ? "#6d30ab": ""}}>
                <i className="fas fa-angle-right mr-2" />
                <Trans>{data.title}</Trans>
            </a>
        </li>
    )
}

export default Categories