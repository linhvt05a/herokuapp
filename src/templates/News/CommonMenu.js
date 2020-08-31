import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import {InputBase} from '../../components/base/index'

const CommonMenu = (props) =>{
  const{label, dataMenu, onClick, navigate} = props
    return(
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="card">
          <div className="options mb-4 bg_grey">
            <ul className="options__menu">
              <label className="options__menu-title">
              <Trans>
                  {label}
              </Trans>
              </label>
              {dataMenu && dataMenu.map((item, index)=>
                <li className="options__menu-item" key={index}>
                  <a className={navigate === item.id ? "active": ''} onClick={()=>onClick(item.id)}>
                    <i className="icon fas fa-angle-right mr-2" />
                      <Trans>{item.label}</Trans>
                  </a>
                </li>
              ) }
            </ul>
           {/* <Search label="Search"/> */}
          </div>
        </div>
      </div>
    )
}

const Search = (props) =>{
  return(
    <div className="options__search">
    <div className="text">{props.label}</div>
    <i className="icon fas fa-search" />
    <div className="search form-group">
      <InputBase name= "search" />
    </div>
  </div>
  )
}

export default CommonMenu