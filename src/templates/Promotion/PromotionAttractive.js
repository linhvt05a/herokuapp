import React from 'react';
import CardPromotion from './CardPromotion'
import TopBannerCustom from '../../components/common/TopBanner/TopBannerCustom'
import { BANNER_URL } from '../../contant'

const PromotionAttractive = (props) => {

    return (
        <div className="promotion-attractive">
            <TopBannerCustom className="flash_sale" img={BANNER_URL.promotions_attractive_banner_url} />
            <CardPromotion headerBodyClassName="label_filter--heading" labelHeader="Royal Garden" limit={9} options detail />
        </div>
    )
}
export default PromotionAttractive;
