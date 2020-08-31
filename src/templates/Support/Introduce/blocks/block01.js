import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Tabs } from 'antd';
import Parse from 'html-react-parser';

import { DATA_INTRODUCE } from '../../../../contant'


import Block01Slider from '../Slider/block01Slider';

const Block01 = (props) => {

    const { TabPane } = Tabs;
    
    const block01Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    console.log(DATA_INTRODUCE);

    const callback = (key) =>{
        // console.log(key);
    }

    return (
        <div className="introduce_overview">
            <div className="container container-sm container-md">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7">
                        <div className="introduce_overview--left">
                            <Slider {...block01Settings}>
                                {
                                    DATA_INTRODUCE.list_images.length > 0 ? DATA_INTRODUCE.list_images.map((data, index) => {
                                        return (<Block01Slider key={index} item={data} />)
                                    }) : null
                                }
                            </Slider>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
                        <div className="introduce_overview--right justify-content-center d-flex flex-column">
                            <h3 className="heading">
                                Thành lập từ năm 1999
                            </h3>

                            <Tabs defaultActiveKey="1" type="card" onChange={callback}>
                                { 
                                    DATA_INTRODUCE.tab_content ?  DATA_INTRODUCE.tab_content.map((data, index) => {
                                        return ( <TabPane tab={data.tab_label} key={index}> {Parse(data.tab_content)} </TabPane> )
                                    }) : null
                                }
                            </Tabs>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block01;

