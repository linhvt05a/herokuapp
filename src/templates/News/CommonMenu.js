import React, { Component } from 'react';
import { Trans } from 'react-i18next';

const CommonMenu = (props) =>{
  const{label, dataMenu, onClick, navigate, className, disableDisplay} = props
  
    return(
          <div className= {className}>
            <ul className="options__menu">
              <label className="options__menu-title">
              <Trans>
                  {label}
              </Trans>
              </label>
              {dataMenu && dataMenu.map((item, index)=>
                <li className="options__menu-item" key={index}>
                  <a className={navigate === item.category_id ? "active": ''} onClick={()=>onClick(item.category_id)}>
                    <i className="icon fas fa-angle-right mr-2" />
                      <Trans>{item.category_name}</Trans>
                  </a>
                </li>
              ) }
            </ul>
           {disableDisplay && <Search label="Search"/>}
          </div>
    )
}

const Search = (props) =>{
  return(
    <div className="options__search">
    <div className="text"><Trans>{props.label}</Trans></div>
    <i className="icon fas fa-search" />
    <div className="search form-group">
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