import React, {useState} from "react";
import CardHeader from '../../components/common/CardHeader'
import TopBanner from "../../components/common/TopBanner";
import {LeftGuideBar, RightGuideBar} from './index'

const ShoppingGuide = ()=> {
    const [selected, setSelected] = useState(false)
        return (
            <div className="direction_product">
            <div className="container container-sm container-md">
                <CardHeader label= "Shopping guide"/>
            <div className="row">
                <LeftGuideBar selected={!selected} setSelected={()=>setSelected(!selected)}/>
                <RightGuideBar selected={!selected}/>
            </div>
            </div>
        </div>
        )
}
export default ShoppingGuide;
