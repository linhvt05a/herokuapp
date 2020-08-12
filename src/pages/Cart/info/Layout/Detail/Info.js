import React from 'react';
import moment from "moment";
import { SliderImage } from '../../../../../components/common';
import { convertAcreagetoInt, formatCurrency } from "../../../../../utils/Utils"

const info = props => {
    let { data } = props;
    return (
        <div className="card square h-100">
            <div className="card-body">
                <div className="row h-100">
                    <div className="col-12 col-sm-12 col-md-12 col-xl-5">
                        {data.image_list && data.image_list.length > 0 ?
                            <SliderImage className="m_slider w-100" datas={data.image_list} />
                            :
                            <figure className="image default_image_minerva">
                                <img src='http://superapp.minerva.vn:9210/static/img/default_image_minerva.png' alt="Minerva" />
                            </figure>
                        }
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-xl-7 content-right-info-project">
                        <div className="row m_grid--list_project">
                            <div className="item mb-0 border-0">
                                <div className="content">
                                    <p className="name">{data.name}<span className="address">{data.full_address}</span>
                                    </p>
                                    <ul className="details">
                                        <li>
                                            <i className="las la-calendar"></i>
                                            <span className="title">Ngày hoạt động:</span>
                                            <span className="text">{moment(data.date_opened).format("DD/MM/YYYY")}</span>
                                        </li>

                                        <li>
                                            <i className="las la-calendar-check"></i>
                                            <span className="title">Thời hạn sử dụng đất: </span>
                                            <span className="text">{data.project_duration_type > 0 ? `${data.project_duration_type} (Y)` : 0}</span>
                                            {/* <span className="text">{data.project_duration_type}</span> */}
                                        </li>

                                        <li>
                                            <i className="las la-money-bill-wave-alt"></i>
                                            <span className="title">Tiền thuê đất hàng năm:</span>
                                            {data.rent_cost > 0 ?
                                                <span className="text" style={{ textTransform: "uppercase" }}>{formatCurrency(data.rent_cost)} ({data.rent_cost_unit_name})</span> :
                                                <span className="text" style={{ textTransform: "uppercase" }}>0</span>}
                                        </li>

                                        <li>
                                            <i className="las la-arrows-alt"></i>
                                            <span className="title">Tổng diện tích đất: </span>
                                            <span className="text">{convertAcreagetoInt(data.project_acreage)}(M²) </span>
                                        </li>

                                        <li>
                                            <i className="las la-sort-amount-up"></i>
                                            <span className="title">Số tầng: </span>
                                            <span className="text">{data.number_of_floor > 0 ? `${data.number_of_floor} (T)` : 0}</span>
                                            {/* <span className="text">{data.number_of_floor} (T)</span> */}
                                        </li>

                                        <li>
                                            <i className="las la-sort-amount-up"></i>
                                            <span className="title">Chiều cao tối đa: </span>
                                            <span className="text">{data.maximum_height_met > 0 ? `${data.maximum_height_met} (M)` : 0}</span>
                                            {/* <span className="text">{data.maximum_height_met} (M) </span> */}
                                        </li>

                                        <li>
                                            <i className="las la-sort-amount-down"></i>
                                            <span className="title">Số tầng hầm tối đa: </span>
                                            <span className="text">{data.number_of_basement > 0 ? `${data.number_of_basement} (T)` : 0}</span>
                                        </li>

                                        <li>
                                            <i className="las la-brush"></i>
                                            <span className="title">Mật độ xây dựng:</span>
                                            <span className="text">{data.building_density > 0 ? `${data.building_density} (%)` : 0}</span>
                                            {/* <span className="text">{data.building_density} % </span> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}
export default React.memo(info)