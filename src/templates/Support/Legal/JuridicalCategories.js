import React, { Component, useState } from 'react';

const JuridicalCategories = (props) =>{
    const {data} = props
    const [navigate, setNavigate] = useState({})
    const navigateTo = (id) =>{
        setNavigate(id)
    }
    return (
        <ul className="options__menu">
            <label className="options__menu-title">{props.label}</label>
                {data && data.map((item, index)=>{
                    return (<CategoriesItem key={index} item={item} direct={navigate} navigateTo ={()=>navigateTo(item.id)}/>)})}
        </ul>
    )
}

const CategoriesItem = (props) =>{
    const {navigateTo, direct} = props
    return(
        <li className="options__menu-item" >
            <a className={direct === props.item.id ? "active" :''} onClick={navigateTo}>
                <i className="icon fas fa-angle-right mr-2" />
                {props.item.title}
            </a>
        </li>
    )
}
export default JuridicalCategories