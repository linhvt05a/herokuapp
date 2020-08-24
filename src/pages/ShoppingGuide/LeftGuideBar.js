import React, {useState } from "react";
import {SupportGuide} from './index'

const guide = [
    {step: "Step 1", title: "PRODUCT SEARCH",guideLine:"Guide customers to find products to buy.", active: true},
    {step:"Step 2" , title:"ORDER TO BUY PRODUCTS",guideLine :"Guide customers how to order products, discuss loan policy", active:false}
]

const LeftGuideBar = (props) => {
    const {selected, setSelected}= props
return (
    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 direction_product--left">
        <div className="tabs h-100">
            <ul className="nav square nav-tabs" role="tablist">
                {guide && guide.map((item, index)=> <SupportGuide item={item} key ={index} selected={selected} onClick={setSelected}/>)}
            </ul>
        </div>
    </div>
)
}
export default LeftGuideBar;
