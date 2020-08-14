import React from 'react';
import Nodata from '../NoData';

const DiscountList = (props) => {
    return (
        <div class="col-12 col-lg-8">
            <div class="text-uppercase uni_text_6d30ab fw-medium fs-18 mb-2 mt-4">
                LỰA CHỌN KHUYẾN MÃI
            </div>
            <div class="mb-4 m_table m_table--sales m_table--collapse min-width-100-pc max-height-100">
                <table style={{ minWidth: "1000px !important" }}>
                    <thead>
                        <tr>
                            <th class="pl-0">STT</th>
                            <th class="">LOẠI </th>
                            <th class="pl-0">NỘI DUNG</th>
                            <th class="">CHI PHÍ</th>
                            <th class="">QUY ĐỔI TỐI ĐA</th>
                            <th class="text-center">LỰA CHỌN </th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr class="parent" data-parent="row01">
                            <td class="pl-0">1</td>
                            <td class="" colspan="4">
                                <div class="d-flex">
                                    <span class="bg_color_6d30ab fw-medium text-uppercase min-height-40 d-inline-flex align-items-center text-white pl-3 pr-3 pt-2 pb-2">
                                        Khuyến mãi tặng voucher
                                                                </span>
                                    <span class="border_6d30ab uni_text_6d30ab fw-medium min-height-40 d-inline-flex align-items-center pl-3 pr-3 pt-2 pb-2">
                                        Tổng số khuyến mãi: 2
                                                                </span>
                                </div>
                            </td>
                            <td class="pr-0">
                                <div class="d-flex justify-content-between">
                                    <label class="checkbox-inline ml-4">
                                        <input name="checkbox-2" type="checkbox" class="checkbox-custom" value="1" />
                                        <span class="checkbox-custom-dummy"></span>
                                    </label>
                                    <i class="icon icon_collapse las la-plus-circle active"></i>
                                </div>
                            </td>
                        </tr>
                        <tr class="child child-row01 active">
                            <td colspan="2" class="pl-0 border-bottom-none">
                                <span class="voucher_type">NGHỈ DƯỠNG</span>
                            </td>
                            <td class="pl-0" style={{ width: "20%" }}>
                                <span class="uni_text_6d30ab fw-medium">1 đêm ở khách sạn 5 sao ở TPHCM </span>
                            </td>
                            <td class="">
                                <div class="form-group mb-0">
                                    <div class="input-group mb-0">
                                        <input type="text" class="form-control text-right" placeholder="-" value="999.999.999" disabled="" />
                                        <div class="input-group-append">
                                            <div class="input-group-text pl-2 pr-2">vnd</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                -
                                                        </td>
                            <td>
                                <label class="checkbox-inline ml-4">
                                    <input name="checkbox-2" type="checkbox" class="checkbox-custom" value="1" />
                                    <span class="checkbox-custom-dummy"></span>
                                </label>
                            </td>
                        </tr>
                        <tr class="child child-row01 active">
                            <td colspan="2" class="pl-0">
                                <span class="voucher_type">NGHỈ DƯỠNG</span>
                            </td>
                            <td class="pl-0" style={{ width: "20%" }}>
                                <span class="uni_text_6d30ab fw-medium">1 đêm ở khách sạn 5 sao ở TPHCM </span>
                            </td>
                            <td>
                                <div class="input-group mb-0">
                                    <input type="text" class="form-control text-center" placeholder="-" value="3" disabled="" />
                                    <div class="input-group-append">
                                        <div class="input-group-text pl-3 pr-3">%</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <label class="checkbox-inline mr-2">
                                        <input name="checkbox-2" type="checkbox" class="checkbox-custom" value="1" />
                                        <span class="checkbox-custom-dummy"></span>
                                    </label>
                                    <div class="input-group mb-0">
                                        <input type="text" class="form-control text-center" placeholder="-" value="100.010.000.000" disabled="" />
                                        <div class="input-group-append">
                                            <div class="input-group-text pl-2 pr-2">vnd</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <label class="checkbox-inline ml-4">
                                    <input name="checkbox-2" type="checkbox" class="checkbox-custom" value="1" />
                                    <span class="checkbox-custom-dummy"></span>
                                </label>
                            </td>
                        </tr>

                        <tr class="parent" data-parent="row02">
                            <td class="pl-0">1</td>
                            <td class="" colspan="4">
                                <div class="d-flex">
                                    <span class="bg_color_6d30ab fw-medium text-uppercase min-height-40 d-inline-flex align-items-center text-white pl-3 pr-3 pt-2 pb-2">
                                        Khuyến mãi tặng hiện vật
                                                                </span>
                                    <span class="border_6d30ab uni_text_6d30ab fw-medium min-height-40 d-inline-flex align-items-center pl-3 pr-3 pt-2 pb-2">
                                        Tổng số khuyến mãi: 2
                                                                </span>
                                </div>
                            </td>
                            <td class="pr-0">
                                <div class="d-flex justify-content-between">
                                    <label class="checkbox-inline ml-4">
                                        <input name="checkbox-2" type="checkbox" class="checkbox-custom" value="1" />
                                        <span class="checkbox-custom-dummy"></span>
                                    </label>
                                    <i class="icon icon_collapse las la-plus-circle"></i>
                                </div>
                            </td>
                        </tr>
                        <tr class="child child-row02">
                            <td colspan="2" class="pl-0"></td>
                            <td class="pl-0" style={{ width: "20%" }}>
                                <span class="uni_text_6d30ab fw-medium">1 đêm ở khách sạn 5 sao ở TPHCM </span>
                            </td>
                            <td>
                                <div class="input-group mb-0">
                                    <input type="text" class="form-control text-center" placeholder="-" value="100.010.000.000" disabled="" />
                                    <div class="input-group-append">
                                        <div class="input-group-text pl-2 pr-2">vnd</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <label class="checkbox-inline mr-2 invisible">
                                        <input name="checkbox-2" type="checkbox" class="checkbox-custom" value="1" />
                                        <span class="checkbox-custom-dummy"></span>
                                    </label>
                                    <div class="input-group mb-0">
                                        <input type="text" class="form-control text-center" placeholder="-" value="100.010.000.000" disabled="" />
                                        <div class="input-group-append">
                                            <div class="input-group-text pl-2 pr-2">vnd</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <label class="checkbox-inline ml-4">
                                    <input name="checkbox-2" type="checkbox" class="checkbox-custom" value="1" />
                                    <span class="checkbox-custom-dummy"></span>
                                </label>
                            </td>
                        </tr>
                        <tr class="child child-row02">
                            <td colspan="2" class="pl-0"></td>
                            <td class="pl-0" style={{ width: "20%" }}>
                                <span class="uni_text_6d30ab fw-medium">1 đêm ở khách sạn 5 sao ở TPHCM </span>
                            </td>
                            <td>
                                <div class="input-group mb-0">
                                    <input type="text" class="form-control text-center" placeholder="-" value="100.010.000.000" disabled="" />
                                    <div class="input-group-append">
                                        <div class="input-group-text pl-2 pr-2">vnd</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <label class="checkbox-inline mr-2">
                                        <input name="checkbox-2" type="checkbox" class="checkbox-custom" value="1" />
                                        <span class="checkbox-custom-dummy"></span>
                                    </label>
                                    <div class="input-group mb-0">
                                        <input type="text" class="form-control text-center" placeholder="-" value="100.010.000.000" disabled="" />
                                        <div class="input-group-append">
                                            <div class="input-group-text pl-2 pr-2">vnd</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <label class="checkbox-inline ml-4">
                                    <input name="checkbox-2" type="checkbox" class="checkbox-custom" value="1" />
                                    <span class="checkbox-custom-dummy"></span>
                                </label>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DiscountList;