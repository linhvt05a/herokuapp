import React from 'react';
import Title from "../../../../../components/common/CardHeader"
import moment from "moment";
import LogoDefault from '../../../../../../public/static/images/logo.svg';

const info = props => {
    let { data } = props;
    return (
        <div className="card square h-100">
            <div className="card-body">
                <div className="row h-100">
                    <div className="col-12 col-sm-12 col-md-12 col-xl-5">
                        <div className="m_slider w-100">
                            <div className="slider slider-single">
                                {data.image_list && data.image_list.length > 0 ?
                                    data.image_list.map((image, index) => {
                                        return (
                                            <figure key={index}><img src={image.project_image_url} alt="" /></figure>
                                        )
                                    })
                                    :
                                    <figure>
                                        { LogoDefault }
                                    </figure>
                                }
                                <figure><img src={data.project_avatar_url} alt="" /></figure>

                            </div>

                        </div>
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
                                            <span className="text">{data.project_duration_type}</span>
                                        </li>

                                        <li>
                                            <i className="las la-money-bill-wave-alt"></i>
                                            <span className="title">Tiền thuê đất hàng năm:</span>
                                            <span className="text">{data.rent_cost} {data.rent_cost_unit_name}</span>
                                        </li>

                                        <li>
                                            <i className="las la-arrows-alt"></i>
                                            <span className="title">Tổng diện tích đất: </span>
                                            <span className="text">{data.project_acreage} </span>
                                        </li>

                                        <li>
                                            <i className="las la-sort-amount-up"></i>
                                            <span className="title">Số tầng: </span>
                                            <span className="text">{data.number_of_floor} (T)</span>
                                        </li>

                                        <li>
                                            <i className="las la-sort-amount-up"></i>
                                            <span className="title">Chiều cao tối đa: </span>
                                            <span className="text">{data.maximum_height_met} (M) </span>
                                        </li>

                                        <li>
                                            <i className="las la-sort-amount-down"></i>
                                            <span className="title">Số tầng hầm tối đa: </span>
                                            <span className="text">{data.number_of_basement} (T)</span>
                                        </li>

                                        <li>
                                            <i className="las la-brush"></i>
                                            <span className="title">Mật độ xây dựng:</span>
                                            <span className="text">{data.building_density} % </span>
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
export default info