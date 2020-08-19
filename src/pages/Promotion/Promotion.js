import React from 'react'
import { CardPromotion } from './Layout/index'
import { CardSaleFlash } from '../Home/Layout/index'

const Promotion = (props) => {

    return(
        <div className="homePage" style={{paddingTop: "228px"}}>
            <CardSaleFlash headerBodyClassName="label_filter--heading" labelHeader="flash_sale" datas={["a", "iu", "e", "vl", "wa", "di"]} banner readmore/>
        </div>
    )
}

export default Promotion