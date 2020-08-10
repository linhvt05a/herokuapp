import React from 'react';

const TabBanking = () => {
    return (
        <div>
            {/* <div class="row mt-2 mb-2 pl-3">
                <div class="col-xl-10 col-lg-10 col-md-12 col-sm-12">
                    <div class="form-group mb-0">
                        <label class="fw-medium">Banking name
                            <span class="uni_star_e94c4c">*</span>
                        </label>
                        <select name="bank_name" class="form-control m_select_change js-select2" data-placeholder="Choose banking name" tabindex="-1" aria-hidden="true" data-select2-id="2818">
                            <option value="" data-select2-id="2820"></option>
                            <option value="51">short_name - banking 1</option>
                            <option value="52">short_name - banking 1</option>
                            <option value="58">short_name - banking 1</option>
                            <option value="39">short_name - banking 1</option>
                            <option value="59">short_name - banking 1</option>
                            <option value="60">short_name - banking 1</option>
                            <option value="22">short_name - banking 1</option>
                            <option value="47">ARB - AGRIBANK (Test)</option>
                            <option value="62">short_name - banking 1</option>
                            <option value="64">short_name - banking 1</option>
                            <option value="65">short_name - banking 1</option>
                            <option value="66">short_name - banking 1</option>
                            <option value="68">short_name - banking 1</option>
                            <option value="69">short_name - banking 1</option>
                            <option value="1">short_name - banking 1</option>
                        </select>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12  align-items-end">
                    <button type="button" id="btn-add-bank" class="btn-uni-purple min-height-40" data-href="/backend/project/add_project_bank/" style={{marginTop: "27px"}}>Add</button>
                </div>
            </div>

            <div class="row">
                <div class="col-12 mt-3">
                    <h6 class="text-uppercase uni_text_6d30ab">
                        Bank list
                    </h6>
                </div>
            </div> */}
            <div class="m_table m_table--sales min-width-100-pc table-height mb-0">
                <table class="table table-sticky-01">
                    <thead>
                        <tr>
                            <th class="pl-0 col-1" style={{width: "5%"}}>No.</th>
                            <th class="col-3" style={{width: "25%"}}>Banking</th>
                            <th class="col-2" style={{width: "20%"}}>Short name</th>
                            <th class="col-2" style={{width: "20%"}}>Sell open</th>
                            <th class="col-3" style={{width: "25%"}}>Office</th>
                            <th class="col-1 text-center" style={{width: "5%"}}>
                                <i class="icon las la-cog"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{maxHeight: "400px"}}>
                        <tr>
                            <td class="pl-0 col-1" style={{width: "5%"}}>1</td>
                            <td class="col-3" style={{width: "25%"}}>
                                <span class="fw-medium">Ngân hàng phát triển nông thôn
                                </span>
                            </td>
                            <td class="col-2" style={{width: "20%"}}>Agribank</td>
                            <td class="col-2" style={{width: "20%"}}>
                                <a href="#" class="link_href_6d30ab fw-medium">
                                    Sell open list [5]
                                </a>
                            </td>
                            <td class="col-3" style={{width: "25%"}}>Số 2 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội</td>
                            <td class="text-center col-1" style={{width: "5%"}}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TabBanking;