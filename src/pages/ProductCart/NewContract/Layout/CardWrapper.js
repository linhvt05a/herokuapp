import React from 'react';
import CardHeader from '../../../../components/Card/CardHeader';
import PropTypes from 'prop-types';
import Steps from '../../../../components/common/Steps'

const CardWrapper = ( props ) => {
    const { currentStep, children} = props;
    const stepsData = [
        { label: "1", description: 'Thông tin BÊN MUA', active: 1 },
        { label: "2", description: 'LỰA CHỌN KHUYẾN MÃI', active: 2 },
        { label: "3", description: 'THANH TOÁN', active: 3 },
        { label: "4", description: 'THÔNG TIN ĐƠN HÀNG', active: 4 },
        { label: "5", description: 'Hoàn thành hồ sơ', active: 5 },
    ]
    return (
        <div>
            <CardHeader label='Tạo hợp đồng'/>
            <div class="card square">
                <div class="card-body pt-5 pb-5 create-contract">
                    <Steps steps={stepsData} currentStep={currentStep} />
                    { children }
                </div>
            </div>
        </div>
    );
}

export default CardWrapper;

CardWrapper.propTypes = {
    cardHeader: PropTypes.object
}