import React from 'react';
const Step = ({ ...props }) => {
    return (
        <div class="create-contract__steps">
            <div class="create-contract__step active">
                <span class="number">1</span>
                <span class="text">Thông tin BÊN MUA</span>
            </div>
            <div class="create-contract__step">
                <span class="number">2</span>
                <span class="text">LỰA CHỌN KHUYẾN MÃI</span>
            </div>
            <div class="create-contract__step">
                <span class="number">3</span>
                <span class="text">THANH TOÁN</span>
            </div>
            <div class="create-contract__step">
                <span class="number">4</span>
                <span class="text">THÔNG TIN ĐƠN HÀNG</span>
            </div>
            <div class="create-contract__step">
                <span class="number">5</span>
                <span class="text">Hoàn thành hồ sơ</span>
            </div>
        </div>
    );
}

export default Step;