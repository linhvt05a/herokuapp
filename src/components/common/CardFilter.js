import React, { Component } from "react";
import { Trans } from "react-i18next";
import {ButtonStyle, Sliders, SelectCustom} from '../../components/base'

const CardFilter = (props) => {
  const {title1,title2, currency1, item1, item2, label, styleButton, data, data1, currency2, reverse,titleButton, tooltipVisible, range, onChange, placeholder, name, datas1, datas2} = props
  return (
    <div className="col-sm-12 col-md-12 col-xl-12">
      <div className="searchProject">
        <div className="searchProject__title">
            <Trans>{label}</Trans></div>
        <div className="form-group mt-3">
          <SelectCustom placeholder={placeholder} name={name} onChange={onChange} datas={datas1}/>
        </div>
        <div className="form-group">
          <SelectCustom placeholder={placeholder} name={name} onChange={onChange} datas ={datas2}/>
        </div>
        <div className="map_search--range" >
          <div className="range_item price">
            <label className="label">
                <Trans>{title1}</Trans>
              <br />
                <i>({currency1})</i>
            </label>
            <Sliders  defaultValue={data} reverse ={reverse} tooltipVisible = {tooltipVisible} range ={range} />
          </div>
          <div className="range_item area">
            <label className="label">
                <Trans>{title2}</Trans>
              <i>({item1}<sup>{item2}</sup>)</i>
            </label>
            <Sliders  defaultValue={data1} reverse ={reverse} tooltipVisible = {tooltipVisible} range ={range} />
          </div>
        </div>
        <div className="text-center">
          <ButtonStyle className={styleButton} label={titleButton}/>
        </div>
      </div>
    </div>
  );
};
export default CardFilter;
