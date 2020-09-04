import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import {InputBase, InputDatePicker, SelectCustom, ButtonStyle} from '../../components/base/index'

const CommonFilter = (props) => {
    const {handleChange,dateFrom, dateTo, changeSelect, changeDateFrom,defaultValue,titleNews, changeDateTo, handleFilter,name,datas,paramsSearch, title, placeholder} = props
    return (
        <div className="searchProject">
            <div className="searchProject__title" style={{marginBottom: 20}}>
                <Trans>{title}</Trans>
            </div>
            <InputBase name ={name} placeholder={placeholder} onChange={handleChange}/>
            <SelectCustom defaultValue={defaultValue} datas={datas} onChange ={changeSelect}/>
            <InputDatePicker   onChange={changeDateFrom}/>
            <InputDatePicker   onChange={changeDateTo}/>
            <ButtonStyle className="btn btn_green text-uppercase w-100" href="/news" dateFrom={dateFrom} dateTo={dateTo} paramsSearch={paramsSearch} titleNews={titleNews} label="SEARCH" onClick = {handleFilter}/>
        </div>
    )
}

export default CommonFilter
