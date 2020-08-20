import React, { useState } from 'react'
import TopBanner from "../../components/common/TopBanner";
import {Paginations} from '../../components/base/index';
import { CardPromotion } from './Layout/index'
import { CardSaleFlash } from '../Home/Layout/index'

const tab = [
    {id: 1, label:"CÁC DỰ ÁN", tabs: true},
    {id: 2, label:"KHÁCH HÀNG", tabs: false}
]
const promotion =
 [
    {
        id: 1, 
        title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM', 
        description:'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
        time:'9:00 - 27/02/2020'
    },
    {
        id: 2, 
        title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM', 
        description:'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
        time:'9:00 - 27/02/2020'
    },
    {
        id: 3, 
        title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM', 
        description:'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
        time:'9:00 - 27/02/2020'
    },
    {
        id: 4, 
        title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM', 
        description:'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
        time:'9:00 - 27/02/2020'
    }
]
const Promotion = () =>{
    const [selected, setSelected] = useState(false)

    const setTab = () =>{
        setSelected(!selected)
    }
    return(
        <div className="overview" >
          <div className="container container-sm container-md">
            <h2 className="overview_heading" style={{marginTop: 200}}>
              Ưu đãi và khuyến mãi
              <span className="sub">
                Tại đây chúng tôi cung cấp tới khách hàng thông tin về chương trình ưu
                đãi cập nhật mới nhất và hấp dẫn nhất khi mua bất động sản của chúng
                tôi
              </span>
            </h2>
                <ul className="nav tab_promotion " id="myTab" role="tablist">
                    {tab && tab.map((item, index)=><CustomTab label={item.label} tabs ={item.tabs} selected={selected} setTab={setTab}/>) }
                </ul>
                <div className="latest_news p-0 ">
                    <div className="container container-sm container-md tab-content">
                        <div className="latest_news--content tab-pane fade active show" id="home">
                            {
                                selected === false?
                                    <div className="row">
                                        {promotion && promotion.map((data)=><PromotionProject data={data}/>)}
                                    </div>
                                    :<div className="row">
                                        {promotion && promotion.map((data)=><CustomerPromotion />)}
                                    </div>
                            }
                            {promotion && promotion.length > 3 ? <Paginations /> : ''}
                        </div>
                      
                    </div>
                </div>
        </div>
    </div>
    )
}

const PromotionProject = (props) =>{
    return(
     <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column"  style={{marginTop: 20}}>
        <div className="item h-100">
            <figure className="img">
                <img
                    className="w-100"
                    src="./assets/images/four-brown-wooden-chairs-2635038.jpg"
                    alt="Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM"
                />
            <div className="sell_status selling">Tin mới</div>
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

const CustomerPromotion = (props) =>{
    return(
       <></>
    )
}

const CustomTab = (props) =>{
    return(
        <li className="nav-item">
            <a className='nav-link' onClick={props.setTab} style={{color:props.selected === !props.tabs ? '#6d30ab':'black'}}>{props.label}</a>
        </li>
    )
}

export default Promotion