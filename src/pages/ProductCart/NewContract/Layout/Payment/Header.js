import React, { useEffect } from 'react';
import { Select, Input } from '../../../../../components/base';
import { useDispatch, useSelector } from "react-redux";
import { policyListRequest, policyProgressListRequest } from '../../../../../store/action/contract'

const HeaderPayment = (props) => {
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
                        <Select />
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="form-group">
                        <label class="fw-medium w-auto">Tiến độ thanh toán <span
                            class="uni_star_e94c4c">*</span></label>
                        <Select />
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="form-group">
                        <label class="fw-medium w-auto">Chiết khấu</label>
                        <Input addonAfter='%' disabled />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderPayment;