import React from 'react';

const PriceTable = () => {
    return (
        <div class="col-12 col-lg-4 mb-4 mb-lg-0">
                    <div class="text-uppercase uni_text_6d30ab fw-medium fs-18 mb-2 mt-4">
                        GIÁ KÝ HĐMB
                                        </div>
                    <table class="w-100 create-contract__table-summary">
                        <thead>
                            <tr>
                                <th>GIÁ NIÊM YẾT</th>
                                <th>10.500.000.000 (vnd)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="pt-3"><b class="uni_text_6d30ab">*</b> Giá chưa VAT</td>
                                <td class="pt-3">10.000.000.000 (vnd)</td>
                            </tr>
                            <tr>
                                <td><b class="uni_text_6d30ab">*</b> VAT</td>
                                <td>500.000.000 (vnd)</td>
                            </tr>
                            <tr>
                                <td class="uni_text_25b15f">
                                    <div class="d-flex">
                                        <b class="pr-1">*</b>
                                        <span>Khuyến mãi 1 <br />Giảm 10.000.000 vnđ</span>
                                    </div>
                                </td>
                                <td class="uni_text_25b15f align-bottom">10.000.000 (vnd)</td>
                            </tr>
                            <tr>
                                <td class="uni_text_25b15f pb-3">
                                    <div class="d-flex">
                                        <b class="pr-1">*</b>
                                        <span>Khuyến mãi 2 <br />Giảm 10.000.000 vnđ</span>
                                    </div>
                                </td>
                                <td class="uni_text_25b15f pb-3 align-bottom">5.000.000 (vnd)</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Giá ký HĐMB</td>
                                <td class="fs-16"><b>10.485.000.000 (vnd)</b></td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
    )
}

export default PriceTable;