import React, { Component } from 'react';

const JuridicalCategories = (props) =>{
    const {data} = props
    return (
        <ul className="options__menu">
            <label className="options__menu-title">{props.label}</label>
                {data && data.map((item, index)=><CategoriesItem key={index} item={item}/>)}
        </ul>
    )
}

const CategoriesItem = (props) =>{
    return(
        <li className="options__menu-item">
            <a href="" className="active">
                <i className="icon fas fa-angle-right mr-2" />
                {props.item.title}
            </a>
        </li>
    )
}
export default JuridicalCategories