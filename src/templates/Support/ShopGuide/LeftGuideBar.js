import React, {useState } from "react";
import {SupportGuide} from './index'



const LeftGuideBar = (props) => {
    const {selected, setSelected}= props
    
return (
    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 direction_product--left">
        <div className="tabs h-100">
            <ul className="nav square nav-tabs" role="tablist">
                <SupportGuide 
                    step="Step 1" 
                    title = "PRODUCT SEARCH" 
                    content={
                        selected === true ? 
                        <div className="active">
                            <img src="../images/review.png" />
                        </div>
                        : 
                        <div className="no_active">
                            <img src="../images/review_purple.png" />
                        </div>
                    } 
                    guideLine="Guide customers to find products to buy."
                    onSelectItem={()=> setSelected(true)}
                    active = {selected == true ? "nav-link active" : "nav-link"}
                />
                <SupportGuide 
                    step ="Step 2" 
                    title = "ORDER TO BUY PRODUCTS" 
                    content={ 
                        selected == false ? 
                        <div className="no_actived">
                            <img src="../images/order_white.png" />
                        </div>
                        :
                        <div className="active">
                            <img src="../images/order.png" />
                        </div>
                    } 
                    guideLine ="Guide customers how to order products, discuss loan policy" 
                    onSelectItem ={()=> setSelected(false)}
                    active = {selected == false ? "nav-link active" : "nav-link"}
                />
            </ul>
        </div>
    </div>
)
}
export default LeftGuideBar;
