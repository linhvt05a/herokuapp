import React, { useState } from 'react'
import TopBanner from "../../components/common/TopBanner";
import Pagination from '../../components/common/Pagination'
import { CardPromotion } from './Layout/index'
import { CardSaleFlash } from '../Home/Layout/index'
import { Trans } from 'react-i18next';

const promotions =
    [
        {
            id: 0,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/news_card_1.jpg'
        },
        {
            id: 1,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/news_card_1.jpg'
        },
        {
            id: 2,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/news_card_1.jpg'
        },
        {
            id: 3,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/news_card_1.jpg'
        },
        {
            id: 4,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/news_card_1.jpg'
        },
        {
            id: 5,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/news_card_1.jpg'
        },
        {
            id: 6,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/news_card_1.jpg'
        },
        {
            id: 7,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/news_card_1.jpg'
        },
        {
            id: 8,
            title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
            description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
            time: '27/02/2020',
            image: './assets/images/news_card_1.jpg'
        }
    ]
const Promotion = () => {
    return (
        <div className="homePage">
            <CardSaleFlash headerBodyClassName="label_filter--heading" labelHeader="flash_sale" datas={["a", "iu", "e", "vl", "wa", "di"]} banner readmore timeLine />
          
            <div className="overview" >
                <div className="container container-sm container-md">
                    <h2 className="overview_heading">
                        <Trans>Offers and promotions</Trans>
                <span className="sub">
                            Tại đây chúng tôi cung cấp tới khách hàng thông tin về chương trình ưu
                            đãi cập nhật mới nhất và hấp dẫn nhất khi mua bất động sản của chúng
                            tôi
                </span>
                    </h2>
                    <div className="latest_news p-0 ">
                        <div className="container container-sm container-md tab-content">
                            <div className="latest_news--content tab-pane fade active show" id="home">
                                <div className="row">
                                    {promotions && promotions.map((item, index)=><RowPromotion data ={item} index={item.id}/>)}     
                                </div>
                            </div>
                        </div>
                        <Pagination total_page={20} total_record={4} page={1}/>
                    </div>
                </div>
            </div>
            <CardPromotion headerBodyClassName="label_filter--heading" labelHeader="hot_promotion" datas={["a", "iu", "e", "vl", "wa", "di"]} banner readmore />
        </div>
    )
}


const RowPromotion = (props) => {
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column" key={props.index}>
            <div className="item h-100">
                <figure className="img">
                    <img className="w-100" src={props.data.image} />
                </figure>
                <div className="box">
                    <h4 className="name">
                        <a href="#">{props.data.title}</a>
                    </h4>
                    <div className="des">{props.data.description}</div>
                    <span className="time">
                        <i className="icon far fa-clock" />{props.data.time}
                </span>
                </div>
            </div>
        </div>
    )
}

export default Promotion