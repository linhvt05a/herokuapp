import React from 'react';
import { CardSaleFlash } from '../Home/Layout/index'

const FlashSaleList = (props) => {

    return (
        <div className="promotionDetailPage">
            <CardSaleFlash headerBodyClassName="label_filter--heading" labelHeader="Royal Garden" limit={9} timeLine options detail />
        </div>
    )
}
export default FlashSaleList;
