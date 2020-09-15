import React, { Component, useState } from 'react';
import { Trans } from 'react-i18next';
import {Link} from 'react-router-dom'
import CardNoData from '../../components/common/CardNoData';

const CommonMenu = (props) =>{
  const{label, dataMenu, onClick, navigate, className, disableDisplay, catesId, linkTo} = props
    return(
          <div className= {className}>
            <ul className="options__menu">
              <label className="options__menu-title">
              <Trans>
                  {label}
              </Trans>
              </label>
              {dataMenu && dataMenu .length > 0 ? dataMenu.map((item, index)=>
                <li className="options__menu-item" key={index}>
                  <Link className={ navigate === item.category_id ? "active": ''} 
                        to={{ pathname: linkTo, state:{category_id: item.category_id}}} 
                        onClick={()=>onClick( item.category_id)}
                  >
                    <i className="icon fas fa-angle-right mr-2" />
                      <Trans>{item.category_name}</Trans>
                  </Link>
                </li>
              ) : <CardNoData />}
            </ul>
           {disableDisplay && <Search label="Search"/>}
          </div>
    )
}

const Search = (props) =>{

    const detectKey = (e)=>{
      const value = e.target.value
      if(e.key === 'Enter'){
        console.log(value)
      }
  }
  return(
    <div className="options__search">
    <div className="text"><Trans>{props.label}</Trans></div>
    <i className="icon fas fa-search" />
    <div className="search form-group" onKeyPress={detectKey}>
            <input
              type="text"
              className="w-100 form-control"
              placeholder="Nhập nội dung"
            />
    </div>
  </div>
  )
}

export default CommonMenu