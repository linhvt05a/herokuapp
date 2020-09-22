import React from 'react';

const BorrowerInformation = props => {
    let { data } = props
    return (
        <div className="loan_online--wrap active" data-step={4}>
            <div className="loan_online--item">
                <div className="loan_online--info_borrower mt-2">
                    <div className="avatar mt-2">
                        <img src="../images/avatar_logged.jpg" className="img-fluid" alt="avatar" />
                    </div>
                    <div className="information">
                        <div className="name_info">
                            <span className="title_grey">Thông tin người vay</span>
                            <span className="name">Trần Thị Thu Hoài</span>
                        </div>
                        <div className="personal_info">
                            <div className="detail_info">
                                <span className="title_grey">Địa chỉ</span>
                                <span className="detail">26/03 Trần Hưng Đạo</span>
                            </div>
                            <div className="detail_info">
                                <span className="title_grey">Điện thoại</span>
                                <span className="detail">0123456789</span>
                            </div>
                            <div className="detail_info">
                                <span className="title_grey">Email</span>
                                <span className="detail">vana@minerva.vn</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {data && data.length > 0 && data.map((item, index) => {
                return (
                    <div className="loan_online--item" key={index}>
                        <div className="heading ">DỰ ÁN ROYAL GARDEN</div>
                        {data.map((value, i) => {
                            return [
                                <div className="border-split" key={"a1" + i} />,
                                <div className="loan_online--apartment_id" key={"a2" + i}>
                                    <div className="name_apartment"> Căn hộ B6 - F01 </div>
                                    <div className="file_number"> Mã số hồ sơ vay <span className="d-block text_51c471">#ID123450</span>
                                    </div>
                                </div>,
                                <div className="loan_online--policy" key={"a3" + i}>
                                    <div className="policy_list">
                                        <div className="title">
                                            <i className="icon las la-money-bill-wave" /> CHÍNH SÁCH VAY </div>
                                        <div className="content">
                                            <div className="list">
                                                <span className="list_style_01--item">Số tiền vay (vnd)</span>
                                                <span className="d-block money text_4a3bcc">500.000.000</span>
                                            </div>
                                            <div className="list">
                                                <span className="list_style_01--item">Thời gian vay (năm)</span>
                                                <span className="d-block money">10</span>
                                            </div>
                                            <div className="list">
                                                <span className="list_style_01--item">Tổng tiền trả (vnd)</span>
                                                <span className="d-block money color_e94c4c">1.333.677.000</span>
                                            </div>
                                        </div>
                                    </div>,
                            <div className="bank" key={"a4" + i}>
                                        <img src="../images/bank04.jpg" className="img-fluid" alt="logo-bank" />
                                    </div>
                                </div>
                            ]
                        })}

                    </div>
                )
            })}

        </div>

    )
}
export default BorrowerInformation;