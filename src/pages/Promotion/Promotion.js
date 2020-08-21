import React, { useState } from 'react'
import TopBanner from "../../components/common/TopBanner";
import { Paginations } from '../../components/base/index';
import { CardPromotion } from './Layout/index'
import { CardSaleFlash } from '../Home/Layout/index'

const tab = [
    { id: 1, label: "CÁC DỰ ÁN", tabs: true },
    { id: 2, label: "KHÁCH HÀNG", tabs: false }
]

const Promotion = () => {

    const [selected, setSelected] = useState(true)

    return (
        <div className="homePage">
            <CardSaleFlash headerBodyClassName="label_filter--heading" labelHeader="flash_sale" datas={["a", "iu", "e", "vl", "wa", "di"]} banner readmore timeLine />
            <div className="overview" >
                <div className="container container-sm container-md">
                    <h2 className="overview_heading" style={{ marginTop: 200 }}>
                        Ưu đãi và khuyến mãi
                <span className="sub">
                            Tại đây chúng tôi cung cấp tới khách hàng thông tin về chương trình ưu
                            đãi cập nhật mới nhất và hấp dẫn nhất khi mua bất động sản của chúng
                            tôi
                </span>
                    </h2>
                    <ul className="nav tab_promotion " id="myTab" role="tablist">
                        {tab && tab.map((item, index) => <CustomTab label={item.label} tabs={item.tabs} selected={selected} />)}
                    </ul>
                    <div className="latest_news p-0 ">
                        <div className="container container-sm container-md tab-content">
                            <div className="latest_news--content tab-pane fade active show" id="home">
                                {
                                    selected === true ?
                                        <div className="row">
                                            <RowPromotion />
                                            <RowPromotion />
                                            <RowPromotion />
                                            <RowPromotion />
                                        </div> : <></>
                                }
                            </div>
                        </div>
                        <Paginations />
                    </div>
                </div>
            </div>
            <CardPromotion headerBodyClassName="label_filter--heading" labelHeader="hot_promotion" datas={["a", "iu", "e", "vl", "wa", "di"]} banner readmore />
        </div>
    )
}


const CustomTab = (props) => {
    return (
        <li className="nav-item">
            <a className={!props.selected ? "nav-link active" : 'nav-link'} onClick={() => console.log(props.tabs)}>{props.label}</a>
        </li>
    )

}

const RowPromotion = () => {
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column" style={{ marginTop: 20 }}>
            <div className="item h-100">
                <figure className="img">
                    <img
                        className="w-100"
                        src="./assets/images/four-brown-wooden-chairs-2635038.jpg"
                        alt="Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM"
                    />
                </figure>
                <div className="box">
                    <h4 className="name">
                        <a href="#">Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM</a>
                    </h4>
                    <div className="des">
                        Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà
                        soát lại khiến thị trường bất động sản lớn nhất nước rơi vào
                        tình trạng cung giảm.
                </div>
                    <span className="time">
                        <i className="icon far fa-clock" />
                    9:00 - 27/02/2020
                </span>
                </div>
            </div>
        </div>
    )
}

export default Promotion