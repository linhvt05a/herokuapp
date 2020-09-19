import React, { useState } from "react";
import CardHeader from '../../../components/common/CardHeader'
import { LeftGuideBar, RightGuideBar } from './index'

const ShoppingGuide = () => {
    const [selected, setSelected] = useState(true)
    return (
        <div className="direction_product">
            <div className="container container-sm container-md">
                <CardHeader label="Shopping guide" />
                <div className="row">
                    <LeftGuideBar selected={selected} setSelected={setSelected} />
                    <RightGuideBar selected={selected} />
                </div>
            </div>
        </div>
    )
}
export default ShoppingGuide;
