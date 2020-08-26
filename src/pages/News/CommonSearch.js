import React, { Component } from "react";
import { Trans } from "react-i18next";
import {ButtonStyle, Sliders} from '../../components/base/index'
import {InputSelect} from '../../components/base/Select/index';

const CommonSearch = (props) => {
  const {title1,title2, currency1, item1, item2, label, data, data1, currency2, reverse, tooltipVisible, range} = props
  return (
    <div className="col-sm-12 col-md-12 col-xl-12">
      <div className="searchProject">
        <div className="searchProject__title">
            <Trans>{label}</Trans></div>
        <div className="form-group mt-3">
          <InputSelect />
        </div>
        <div className="form-group">
          <InputSelect />
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
          <ButtonStyle className="btn btn_green text-uppercase w-100" label="Search"/>
        </div>
      </div>
    </div>
  );
};
export default CommonSearch;
