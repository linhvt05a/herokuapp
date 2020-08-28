import React from 'react';
import { SliderRange } from '../base/Slider/index'
import { InputSelect } from '../base/Select/index'
import { Trans } from 'react-i18next';

const CardInputSliderFilter = (props) => {

    const { title, inputSelectDatas, sliderDatas, onFilterClick } = props

    return(
        <div className="searchProject">
            <div className="searchProject__title">
                <Trans>{title}</Trans>
            </div>
            {
                inputSelectDatas && inputSelectDatas.map((item, index) => (
                    index === 0 ?
                    <InputSelect key={index} classNameGroup="form-group mt-3" placeholder={item.placeholder} datas={item.datas} onChange={item.onChange} /> :
                    <InputSelect key={index} placeholder={item.placeholder} datas={item.datas} onChange={item.onChange} />
                ))
            }
            <div className="map_search--range">
                {
                    sliderDatas && sliderDatas.map((item, index) => (
                        <div className="range_item price" key={index}>
                            <label className="label">
                                <Trans>{item.label}</Trans>
                                {
                                    item.label.length > 10 ? <br /> : " "
                                }
                                <i>(<Trans>{item.unit}</Trans>)</i>
                            </label>
                            <SliderRange defaultValue={[0, 0]} changeRange={item.onChange} min={item.min} max={item.max} />
                        </div>
                    ))
                }
            </div>
            <a className="btn btn_green text-uppercase w-100" onClick={onFilterClick}><Trans>filter</Trans></a>
        </div>
    )
}

export default CardInputSliderFilter