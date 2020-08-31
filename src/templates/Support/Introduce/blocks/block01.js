import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Tabs } from 'antd';
import Parse from 'html-react-parser';


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

    const datasImages = [
        { image_url: './images/in_overview01.jpg', image_alt: "test" },
        { image_url: './images/in_overview01.jpg', image_alt: "test" },
        { image_url: './images/in_overview01.jpg', image_alt: "test" },
        { image_url: './images/in_overview01.jpg', image_alt: "test" },
        { image_url: './images/in_overview01.jpg', image_alt: "test" },
    ]

    const datasTabContent = [
        { 
            tab_label: 'Về chúng tôi',
            tab_content: '<p>Được thành lập Tháng 4/2017. Công ty Minerva hoạt động trong lĩnh vực mua bán, cho thuê căn hộ, Shophouse thương mại, biệt thự tại Hồ Chí Minh với các dự án tại Bình Thạnh, Quận 1, Quận 2.<br>Với đội ngũ nhân sự cao cấp trong nhiều lĩnh vực, chúng tôi phát triển hệ thống phân phối bất động sản trực tuyến, cung cấp dịch vụ môi giới hoàn hảo, tạo ra một quá trình mua, bán, cho thuê</p><p class="mb-0">Bất động sản thông minh và hiệu suất cao, dựa trên sự kết hợp giữa công nghệ hiện đại và các chuyên viên tư vấn hàng đầu..</p>'
        },
        { 
            tab_label: 'Tầm nhìn',
            tab_content: '<p>Công ty Minerva hoạt động trong lĩnh vực mua bán, cho thuê căn hộ, Shophouse thương mại, biệt thự tại Hồ Chí Minh với các dự án tại Bình Thạnh, Quận 1, Quận 2.<br>Với đội ngũ nhân sự cao cấp trong nhiều lĩnh vực, chúng tôi phát triển hệ thống phân phối bất động sản trực tuyến, cung cấp dịch vụ môi giới hoàn hảo, tạo ra một quá trình mua, bán, cho thuê</p><p class="mb-0">Bất động sản thông minh và hiệu suất cao, dựa trên sự kết hợp giữa công nghệ hiện đại và các chuyên viên tư vấn hàng đầu..</p>'
        },
        { 
            tab_label: 'Sứ mệnh',
            tab_content: '<p>Bất động sản thông minh và hiệu suất cao, dựa trên sự kết hợp giữa công nghệ hiện đại và các chuyên viên tư vấn hàng đầu..</p>'
        },
    ]

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
                                {datasImages.length > 0 && datasImages.map((data, index) => {
                                    return (<Block01Slider key={index} item={data} />)
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
                        <div className="introduce_overview--right justify-content-center d-flex flex-column">
                            <h3 className="heading">
                                Thành lập từ năm 1999
                            </h3>

                            <Tabs defaultActiveKey="1" type="card" onChange={callback}>
                                { datasTabContent && datasTabContent.map((data, index) => {
                                    return ( <TabPane tab={data.tab_label} key={index}> {Parse(data.tab_content)} </TabPane> )
                                })}
                            </Tabs>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block01;

