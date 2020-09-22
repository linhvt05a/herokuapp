import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CardFilterList from '../../components/common/CardFilterList';
import { productAction } from '../../store/action';
import ProductList from "./ProductList";
import {PRODUCT_LIST_TYPE_VALUE} from "../../functions/Helper";
import {BANNER_URL} from "../../contant";
import TopBannerCustom from "../../components/common/TopBanner/TopBannerCustom";

const FlashSalePage = (props) => {
    const dispatch = useDispatch();
    const limit = 9

    const onFilterSubmit = ({ province_id, district_id, status_id, area_min, area_max, money_min, money_max, project_sale_status }) => {
        dispatch(productAction.loadHotProductList({
            page: 1, limit: limit,
            province_id,
            district_id,
            status_id,
            area_min,
            area_max,
            money_min,
            money_max,
            list_product_type_id: project_sale_status
        }))
    }
    return (
        <div className="promotionDetailPage">
            <TopBannerCustom className="flash_sale" img={BANNER_URL.promotions_attractive_banner_url} />
            <ProductList  labelHeader="attractive_promotion" numberItem={limit}  showFilter
                          productListType={PRODUCT_LIST_TYPE_VALUE('promotion-product').id}  classSaleQuick="sales_quick" />
        </div>
    )
}
export default FlashSalePage;
