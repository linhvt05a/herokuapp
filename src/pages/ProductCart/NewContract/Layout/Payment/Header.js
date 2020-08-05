import React from 'react';

const HeaderPayment = () => {
    return (
        <div>
            <div class="d-flex align-items-center justify-content-between mb-3 mt-4">
                <div class="text-uppercase uni_text_6d30ab fw-medium fs-18">
                    THÔNG TIN THANH TOÁN
                                    </div>
                <table class="create-contract__table-summary">
                    <tfoot>
                        <tr>
                            <td>Giá ký HĐMB</td>
                            <td class="fs-16"><b>10.485.000.000 (vnd)</b></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="form-group">
                        <label class="fw-medium w-auto">Chính sách <span class="uni_star_e94c4c">*</span></label>
                        <select><option>test</option></select>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="form-group">
                        <label class="fw-medium w-auto">Tiến độ thanh toán <span class="uni_star_e94c4c">*</span></label>
                        <select><option>test</option></select>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="form-group">
                        <label class="fw-medium w-auto">Chiết khấu</label>
                        <div class="input-group mb-2">
                            <input type="text" class="form-control" placeholder="-" value="" disabled="" />
                            <div class="input-group-append">
                                <div class="input-group-text pl-4 pr-4">%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderPayment;