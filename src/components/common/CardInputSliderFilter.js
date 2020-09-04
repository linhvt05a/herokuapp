import React from 'react';
import { SliderRange, SelectCustom } from '../base'
import { Trans } from 'react-i18next';

const CardInputSliderFilter = (props) => {

    const { title, inputSelectDatas, sliderDatas, onFilterClick, filterWhite } = props
    
    return(
        <div className={filterWhite ? "map_search--content pd_search_content" : "searchProject"} style={filterWhite ? {maxWidth: "100%"} : undefined}>
            {
                filterWhite ?
                    <div className="top_title_filter">
                        <h5 className="fw-bold uni-text-6d30ab text-uppercase"><Trans>{title}</Trans></h5>
                        <span className="color_e94c4c delete_search fw-medium"><Trans>button_delete_filter</Trans></span>
                    </div> :
                    <div className={filterWhite ? "map_search--content pd_search_content" : "searchProject__title"}>
                        <Trans>{title}</Trans>
                    </div>
            }
            {
                filterWhite ?
                <div className="row">
                    {
                        inputSelectDatas && inputSelectDatas.map((item, index) => (
                            <SelectCustom key={index} className="col-12 col-sm-12 col-md-6" placeholder={item.placeholder} datas={item.datas} onChange={item.onChange} trans={item.trans ? item.trans : undefined} />
                        ))
                    }
                </div> :
                inputSelectDatas && inputSelectDatas.map((item, index) => (
                    index === 0 ?
                    <SelectCustom key={index} classNameGroup="form-group mt-3" placeholder={item.placeholder} datas={item.datas} onChange={item.onChange} trans={item.trans ? item.trans : undefined} /> :
                    <SelectCustom key={index} placeholder={item.placeholder} datas={item.datas} onChange={item.onChange} trans={item.trans ? item.trans : undefined} />
                ))
            }
            {
            sliderDatas &&
                <div className={filterWhite ? "map_search--range mr_search_range" : "map_search--range"}>
                    {
                        filterWhite ?
                        <div className="row">
                            {
                                sliderDatas.map((item, index) => (
                                    <div className="col-12 col-sm-12 col-md-6" key={index}>
                                        <div className="range_item price">
                                            <label className="label">
                                                <Trans>{item.label}</Trans>
                                                {
                                                    item.label.length > 10 ? <br /> : " "
                                                }
                                                <i>(<Trans>{item.unit}</Trans>)</i>
                                            </label>
                                            <SliderRange defaultValue={[0, 0]} onAfterChange={item.onAfterChange} min={item.min} max={item.max} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div> :
                        sliderDatas.map((item, index) => (
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
            }
            {
                !filterWhite && <a className="btn btn_green text-uppercase w-100" onClick={onFilterClick}><Trans>filter</Trans></a>
            }
        </div>
    )
}

export default CardInputSliderFilter