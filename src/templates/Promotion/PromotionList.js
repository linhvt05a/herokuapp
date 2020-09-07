import React from 'react';
import { CardPromotion } from './Layout'

const PromotionList = (props) => {

    return (
        <div className="promotionDetailPage">
            <CardPromotion headerBodyClassName="label_filter--heading" labelHeader="Royal Garden" limit={9} options detail />
        </div>
    )
}
export default PromotionList;
