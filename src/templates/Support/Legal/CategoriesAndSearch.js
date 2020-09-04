import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import {InputBase} from '../../../components/base/index'

const CategoriesAndSearch = (props) => {
    const {className, title, dataCategories, titleSearch, navigate} = props
    return (
        <div className={className}>
        <ul className="options__menu">
          <label className="options__menu-title"><Trans>{title}</Trans></label>
         {dataCategories && dataCategories.map((item, index)=>
            <li className="options__menu-item" key={index}>
            <a href="#" className={navigate === item.category_id ? "active": ''} onClick={()=>onClick(item.category_id)}>
              <i className="icon fas fa-angle-right mr-2" />
                {item.label}
            </a>
          </li>
         ) }
        </ul>
        <div className="options__search">
          <div className="text"><Trans>{titleSearch}</Trans></div>
          <i className="icon fas fa-search" />
          <div className="search form-group">
            <input
              type="text"
              className="w-100 form-control"
              placeholder="Nhập nội dung"
            />
          </div>
        </div>
      </div>
    )
}
export default CategoriesAndSearch
