import React, { Component } from 'react';
import TabsSlider from './TabsSlider';
import SideBar from './SideBar';
import SalesAccordion from './SalesAccordion';
import Parser from 'html-react-parser';
import { Trans } from 'react-i18next';
import TimeLine from '../../components/common/TimeLine';
import Promotion from '../../components/common/Promotion';
import IconLikeDown from '../../components/common/IconLikeDown';
import { productAction } from "../../store/action";

const ProductItem = (props) => {
    const { data } = props;
    
    return (
        data ?
        <div className="project_detail--apartment bg_grey">
            <div className="container container-sm container-md">
                <h2 className="main_heading"><span>{data.address_house}</span></h2>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-8">
                        <div className="slider_in_tab">
                            <TimeLine datas={['00', '20', '35']} />
                            <TabsSlider />
                            <Promotion />
                            <IconLikeDown />
                        </div>
                        <div className="description">
                            {/* <div key={index}>{Parser(item)}</div> */}
                        </div>
                        <SalesAccordion />
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4">
                        <SideBar dataInfo={data} />
                    </div>
                </div>
            </div>
        </div> : ""
    )
}
export default ProductItem;