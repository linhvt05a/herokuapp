import React from 'react';
import { CardSaleFlash } from '../Home/Layout/index'

const FlashSaleList = (props) => {

    return (
        <div className="promotionDetailPage">
            <CardSaleFlash headerBodyClassName="label_filter--heading" labelHeader="Royal Garden" datas={["a", "iu", "e", "vl", "wa", "di", "test"]} timeLine options detail />
        </div>
    )
}
export default FlashSaleList;
