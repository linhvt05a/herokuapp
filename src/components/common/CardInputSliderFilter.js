import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { SliderRange, SelectCustom } from '../base';
import { Trans } from 'react-i18next';
import { productAction } from "../../store/action/index";
import { DIRECTION_TYPE } from "../../contant";
import { translate } from '../../functions/Utils'

const CardInputSliderFilter = (props) => {

    const { title, onFilterChange, onDeleteFilterClick, filterWhite } = props
    const product = useSelector(state => state.productReducer);
    const isGetProductTypeListSuccess = product.productTypeList.success;
    const productTypeList = isGetProductTypeListSuccess ? product.productTypeList.detail : null;
    const dispatch = useDispatch();

    const [productTypeMapDatas, setProductTypeMapDatasState] = useState(null)
    const [productType, setProductTypeState] = useState(null)
    const [direction, setDirectionState] = useState(null)
    const [price, setPriceState] = useState([])
    const [acreage, setAcreageState] = useState([])

    useEffect(() => {
        dispatch(productAction.loadProductTypeList({}));
    }, []);

    useEffect(() => {
        var projectTypeDatas =[{value: 0, label: translate("project_all")}] 
        if (productTypeList && productTypeList != null && productTypeList.length > 0) {
            for (var i = 0; i < productTypeList.length; i++) {
                projectTypeDatas.push({value: productTypeList[i].architecture_id, label: productTypeList[i].architecture_name})
            }
        }
        setProductTypeMapDatasState(projectTypeDatas)
    }, [productTypeList]);

    const onProductTypeChange = (value) => {
        setProductTypeState(value);
        onFilterChange(value, direction, price, acreage);
    }

    const onHouseDirectionChange = (value) => {
        setDirectionState(value);
        onFilterChange(productType, value, price, acreage);
    }

    const onAfterPriceRangeChange = (value) => {
        onFilterChange(productType, direction, value, acreage);
    }

    const onAfterAreaChange = (value) => {
        onFilterChange(productType, direction, price, value);
    }

    const onPriceRangeChange = (value) => {
        setPriceState(value);
    }

    const onAreaChange = (value) => {
        setAcreageState(value);
    }

    const actionDeleteFilter = () => {
        setProductTypeState(null);
        setDirectionState(null);
        setPriceState([]);
        setAcreageState([]);
        onDeleteFilterClick();
    }
    
    return(
        <div className={filterWhite ? "map_search--content pd_search_content" : "searchProject"} style={filterWhite ? {maxWidth: "100%"} : undefined}>
            {
                filterWhite ?
                    <div className="top_title_filter">
                        <h5 className="fw-bold uni-text-6d30ab text-uppercase"><Trans>{title}</Trans></h5>
                        <span onClick={actionDeleteFilter} className="color_e94c4c delete_search fw-medium"><Trans>button_delete_filter</Trans></span>
                    </div> :
                    <div className={filterWhite ? "map_search--content pd_search_content" : "searchProject__title"}>
                        <Trans>{title}</Trans>
                    </div>
            }
            {
                filterWhite ?
                <div className="row">
                    <SelectCustom className="col-12 col-sm-12 col-md-6" placeholder="product_type" value={productType} datas={productTypeMapDatas} onChange={onProductTypeChange} />
                    <SelectCustom className="col-12 col-sm-12 col-md-6" placeholder="house_direction" value={direction} datas={DIRECTION_TYPE} onChange={onHouseDirectionChange} trans />
                </div> :
                [
                    <SelectCustom key={1} classNameGroup="form-group mt-3" placeholder="product_type" value={productType} datas={productTypeMapDatas} onChange={onProductTypeChange} />,
                    <SelectCustom key={2} placeholder="house_direction" value={direction} datas={DIRECTION_TYPE} onChange={onHouseDirectionChange} trans />
                ]
            }
            <div className={filterWhite ? "map_search--range mr_search_range" : "map_search--range"}>
                {
                    filterWhite ?
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="range_item price">
                                <label className="label">
                                    <Trans>price_range</Trans>
                                    <br />
                                    <i>(<Trans>project_billions_dong</Trans>)</i>
                                </label>
                                <SliderRange data={price} changeRange={onPriceRangeChange} onAfterChange={onAfterPriceRangeChange} min={0} max={100} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="range_item price">
                                <label className="label">
                                    <Trans>area</Trans>
                                    <i> (<Trans>project_area_unit</Trans>)</i>
                                </label>
                                <SliderRange data={acreage} changeRange={onAreaChange} onAfterChange={onAfterAreaChange} min={0} max={1000} />
                            </div>
                        </div>
                    </div> :
                    [
                        <div className="range_item price" key={3}>
                            <label className="label">
                                <Trans>price_range</Trans>
                                <br />
                                <i>(<Trans>project_billions_dong</Trans>)</i>
                            </label>
                            <SliderRange data={price} changeRange={onPriceRangeChange} onAfterChange={onAfterPriceRangeChange} min={0} max={100} />
                        </div>,
                        <div className="range_item price" key={4}>
                            <label className="label">
                                <Trans>area</Trans>
                                <i> (<Trans>project_area_unit</Trans>)</i>
                            </label>
                            <SliderRange data={acreage} changeRange={onAreaChange} onAfterChange={onAfterAreaChange} min={0} max={1000} />
                        </div>
                    ]
                }
            </div>
        </div>
    )
}

export default CardInputSliderFilter