import React from 'react';
import TopBannerCustom from '../../components/common/TopBanner/TopBannerCustom';
import { CardSaleFlash } from '../Home/Layout/index'
import { BANNER_URL } from '../../contant'


const FlashSaleList = (props) => {

    return (
        <div className="promotionDetailPage">
            <TopBannerCustom className="flash_sale" img={BANNER_URL.flashSaleList_banner_url} />
            <CardSaleFlash headerBodyClassName="label_filter--heading" labelHeader="flash_sale" limit={9} timeLine options detail />
        </div>
    )
}
export default FlashSaleList;
