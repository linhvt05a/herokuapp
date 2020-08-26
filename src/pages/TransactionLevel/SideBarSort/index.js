import React, { Component } from 'react'
import Incentives from '../../../components/common/Incentives'
import SortAccordion from '../SortAccordion/SortAccordion';

export default class SideBarSort extends Component {
    render() {
        const { data } = this.props;
        return (
            data ?
                <div className="col-12 col-sm-12 col-lg-4">
                    
                    <div className="exchanges_filter">
                        <div className="heading">
                            <span className="title">Sản phẩm khối B</span>
                            <span className="icon_filter fas fa-filter" />
                        </div>
                        <div className="searchProject">
                            <div className="form-group">
                                <select className="select2 js-select2 mt-3 select2-hidden-accessible" tabIndex={-1} aria-hidden="true" data-select2-id={251}>
                                    <option selected disabled data-select2-id={253}>Số phòng ngủ</option>
                                    <option>TPHCM</option>
                                    <option>Hà Nội</option>
                                    <option>Đà Nẵng</option>
                                    <option>Bình Dương</option>
                                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={252} style={{ width: '300px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-j5dv-container"><span className="select2-selection__rendered" id="select2-j5dv-container" role="textbox" aria-readonly="true" title="Số phòng ngủ">Số phòng ngủ</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                            </div>
                            <div className="form-group">
                                <select className="select2 js-select2 mt-3 select2-hidden-accessible" tabIndex={-1} aria-hidden="true" data-select2-id={258}>
                                    <option selected disabled data-select2-id={260}>Hướng nhà</option>
                                    <option>Quận 1</option>
                                    <option>Trúc Bạch</option>
                                    <option>Sơn Trà</option>
                                    <option>Tân Uyên</option>
                                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id={259} style={{ width: '300px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-f8lm-container"><span className="select2-selection__rendered" id="select2-f8lm-container" role="textbox" aria-readonly="true" title="Hướng nhà">Hướng nhà</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                            </div>
                            {/*PHẠM VI GIÁ*/}
                            <div className="map_search--range">
                                <div className="range_item price">
                                    <label className="label">Phạm vi giá <br /> <i>(tỷ đồng)</i></label>
                                    <div className="slider-wrapper">
                                        <div className="slider slider-horizontal" id><div className="slider-track"><div className="slider-track-low" style={{ left: '0px', width: '0%' }} /><div className="slider-selection" style={{ left: '0%', width: '60%' }} /><div className="slider-track-high" style={{ right: '0px', width: '40%' }} /></div><div className="tooltip tooltip-main top" role="presentation" style={{ left: '30%' }}><div className="tooltip-arrow" /><div className="tooltip-inner">0,60</div></div><div className="tooltip tooltip-min top" role="presentation" style={{ left: '0%' }}><div className="tooltip-arrow" /><div className="tooltip-inner">0</div></div><div className="tooltip tooltip-max top" role="presentation" style={{ left: '60%' }}><div className="tooltip-arrow" /><div className="tooltip-inner">60</div></div><div className="slider-handle min-slider-handle round" role="slider" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} tabIndex={0} style={{ left: '0%' }} /><div className="slider-handle max-slider-handle round" role="slider" aria-valuemin={0} aria-valuemax={100} aria-valuenow={60} tabIndex={0} style={{ left: '60%' }} /></div><input className="input-range" type="text" data-slider-step={1} data-slider-value="0, 60" data-slider-min={0} data-slider-max={100} data-slider-range="true" data-slider-tooltip_split="true" data-value="0,60" defaultValue="0,60" style={{ display: 'none' }} />
                                    </div>
                                </div>
                                <div className="range_item area">
                                    <label className="label">Diện tích <i>(m<sup>2</sup>)</i></label>
                                    <div className="slider-wrapper">
                                        <div className="slider slider-horizontal" id><div className="slider-track"><div className="slider-track-low" style={{ left: '0px', width: '8%' }} /><div className="slider-selection" style={{ left: '8%', width: '92%' }} /><div className="slider-track-high" style={{ right: '0px', width: '0%' }} /></div><div className="tooltip tooltip-main top" role="presentation" style={{ left: '54%' }}><div className="tooltip-arrow" /><div className="tooltip-inner">80,1000</div></div><div className="tooltip tooltip-min top" role="presentation" style={{ left: '8%' }}><div className="tooltip-arrow" /><div className="tooltip-inner">80</div></div><div className="tooltip tooltip-max top" role="presentation" style={{ left: '100%' }}><div className="tooltip-arrow" /><div className="tooltip-inner">1000</div></div><div className="slider-handle min-slider-handle round" role="slider" aria-valuemin={0} aria-valuemax={1000} aria-valuenow={80} tabIndex={0} style={{ left: '8%' }} /><div className="slider-handle max-slider-handle round" role="slider" aria-valuemin={0} aria-valuemax={1000} aria-valuenow={1000} tabIndex={0} style={{ left: '100%' }} /></div><input className="input-range" type="text" data-slider-step={1} data-slider-value="80, 1000" data-slider-min={0} data-slider-max={1000} data-slider-range="true" data-slider-tooltip_split="true" data-value="80,1000" defaultValue="80,1000" style={{ display: 'none' }} />
                                    </div>
                                </div>
                            </div>
                            {/*TÌM KIẾM*/}
                            <div className="text-center">
                                <a href="#" className="btn btn_green text-uppercase w-100">tìm kiếm</a>
                            </div>
                        </div>
                        <SortAccordion data={data}/>
                    </div>
                    
                    <Incentives />
                </div>
                : ""

        )
    }
}
