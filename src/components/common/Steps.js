import React from 'react';
const Step = ({ ...props }) => {
    return (
        <div className="create-contract__steps">
            <div className="create-contract__step active">
                <span className="number">1</span>
                <span className="text">Thông tin BÊN MUA</span>
            </div>
            <div className="create-contract__step">
                <span className="number">2</span>
                <span className="text">LỰA CHỌN KHUYẾN MÃI</span>
            </div>
            <div className="create-contract__step">
                <span className="number">3</span>
                <span className="text">THANH TOÁN</span>
            </div>
            <div className="create-contract__step">
                <span className="number">4</span>
                <span className="text">THÔNG TIN ĐƠN HÀNG</span>
            </div>
            <div className="create-contract__step">
                <span className="number">5</span>
                <span className="text">Hoàn thành hồ sơ</span>
            </div>
        </div>
    );
}

export default Step;