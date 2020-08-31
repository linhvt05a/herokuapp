import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import InputBase from '../../../components/base/Input/InputBase'

const JuridicalSearch = (props)=>{
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

export default JuridicalSearch