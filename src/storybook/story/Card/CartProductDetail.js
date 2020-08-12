/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect } from 'react';
import { CardProduct, CardProductFilter, CardNodata } from '../../../components/Card';

const CardStory = props => {
    return (
        <div className="card">
            <div className="card-body">
                <CardProductFilter
                    dataFilter={[
                        { color: "m_text_a8c200", id: 1, name: "Chung Cư Căn Hộ" },
                        { color: "m_text_f35e5e", id: 2, name: "Văn Phòng Cho Thuê" },
                        { color: "m_text_e9c301", id: 4, name: "Trung Tâm Thương Mại" },
                        { color: "m_text_fb9334", id: 2, name: "Biệt Thự Cao Cấp" },
                        { color: "m_text_212529", id: 2, name: "Siêu Thị" },

                    ]} />
                <br />
                <div className="m_grid m_grid--list_project">
                    <div className="row">
                        <CardProduct
                            data={{
                                avatar_url: 'http://cloudapi.minerva.vn/cdn/sunnyworld-workflow-dev/eb698cb8fd492c8ef6ea13.jpg',
                                project_name: 'Project Name',
                                address: "122-124 Xuân Thủy, Phú Thuận, Quận 7, Hồ Chí Minh",
                                setting_type_name: "Văn Phòng Cho Thuê",
                                setting_type_bg_color: "f35e5e",
                                investor_name: "Công Ty Cổ Phần Đầu Tư Sản Xuất Kinh Doanh Sài Gòn Cửu Long",
                                project_acreage: "15.900,00 m²",
                                number_of_floor: "30"
                            }}
                        /> <CardProduct
                            data={{
                                avatar_url: 'http://cloudapi.minerva.vn/cdn/sunnyworld-workflow-dev/eb698cb8fd492c8ef6ea13.jpg',
                                project_name: 'Project Name',
                                address: "122-124 Xuân Thủy, Phú Thuận, Quận 7, Hồ Chí Minh",
                                setting_type_name: "Văn Phòng Cho Thuê",
                                setting_type_bg_color: "f35e5e",
                                investor_name: "Công Ty Cổ Phần Đầu Tư Sản Xuất Kinh Doanh Sài Gòn Cửu Long",
                                project_acreage: "15.900,00 m²",
                                number_of_floor: "30"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardStory;