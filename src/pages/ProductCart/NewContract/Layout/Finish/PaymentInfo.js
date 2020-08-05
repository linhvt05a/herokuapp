import React from 'react';

const PaymentInfo = () => {
    return (
        <div class="col-12 col-md-12 col-lg-6 d-flex flex-column">
            <div class="h-100 create-contract__summary">
                <div class="text-uppercase uni_text_6d30ab fw-medium fs-18 mb-2">
                    thông tin THANH TOÁN
                                            </div>
                <div class="create-contract__summary-item">
                    <div class="fs-12 uni_text_000">
                        <i class="pr-2 uni_text_6d30ab fs-16 las la-file-alt"></i>Tổng số tiền
                                                </div>
                    <div class="uni_text_e94c4c fw-medium text-right">10.485.000.000 (vnd)</div>
                </div>
                <div class="create-contract__summary-item">
                    <div class="fs-12 uni_text_000">
                        <i class="pr-2 uni_text_6d30ab fs-16 las la-file-alt"></i>Chính sách
                                                </div>
                    <div class="uni_text_000 fw-medium text-right">Chính sách A</div>
                </div>
                <div class="create-contract__summary-item">
                    <div class="fs-12 uni_text_000">
                        <i class="pr-2 uni_text_6d30ab fs-16 las la-list-alt"></i>Tiến độ thanh toán
                                                </div>
                    <div class="uni_text_000 fw-medium text-right">Tiến độ chuẩn</div>
                </div>
                <div class="create-contract__summary-item">
                    <div class="fs-12 uni_text_000">
                        <i class="pr-2 uni_text_6d30ab fs-16 las la-percentage"></i>Chiết khấu
                                                </div>
                    <div class="uni_text_000 fw-medium text-right">3%</div>
                </div>
                <div class="create-contract__summary-item">
                    <div class="fs-12 uni_text_000">
                        <i class="pr-2 uni_text_6d30ab fs-16 las la-envelope"></i>Số đợt thanh toán
                                                </div>
                    <div class="uni_text_000 fw-medium text-right">10</div>
                </div>
            </div>
        </div>
    )
}

export default PaymentInfo;