import React from 'react';

const TabDistributionchannel = () => {
    return (
        <div>
            <div class="row mt-2 mb-2 pl-3">
                <div class="col-12 col-sm-12 col-md-4 col-lg-3">
                    <div class="form-group mb-2 mb-md-0">
                        <label class="fw-medium">Distribution channel type
                            <span class="uni_star_e94c4c">*</span>
                        </label>
                        <select name="distribution_channel_type" data-placeholder="Select distribution channel type" tabindex="-1" aria-hidden="true" class="form-control js-select2">
                            <option value=""></option>
                            <option value="1">Channel Agent</option>
                            <option value="2">Channel internal</option>
                        </select>

                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-8 col-lg-6">
                    <div class="form-group mb-0">
                        <label class="fw-medium">Distribution channel name
                            <span class="uni_star_e94c4c">*</span>
                        </label>
                        <select class="form-control m_select_change js-select2 select2-hidden-accessible" data-placeholder="Select distribution channel name">
                            <option value="" data-select2-id="2802"></option>
                        </select>
                    </div>
                </div>
                <div class="col-12 col-sm-3  align-items-end">
                    <button type="button" id="btn-add-distribution-channel" class="btn-uni-purple min-height-40">Add</button>
                </div>
            </div>

            <div class="row">
                <div class="col-12 mt-4">
                    <h6 class="text-uppercase uni_text_6d30ab">
                        Distribution channel list
                    </h6>
                </div>
            </div>
            <div class="m_table m_table--sales table-height min-width-100-pc mb-0">
                <table class="table table-sticky-01">
                    <thead>
                        <tr>
                            <th class="pl-0 col-1">No.</th>
                            <th class="col-3">Type</th>
                            <th class="col-4">Name</th>
                            <th class="col-3">Email</th>
                            <th class="col-1 text-center">
                                <i class="icon las la-cog"></i>
                            </th>
                        </tr>
                    </thead>
                </table>
                <tbody>
                    <tr>
                        <td class="pl-0 col-1">1</td>
                        <td class="col-3">
                            <span class="fw-medium">Channel Agent</span>
                        </td>
                        <td class="col-4">Kênh phân phối thử nghiệm 123</td>
                        <td class="col-3">phuongnd@minerva.vn</td>
                        <td class="col-1 text-center">
                            <div class="dropdown">
                                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="icon-dots las la-ellipsis-h"></i>
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" target="_blank">
                                        <i class="icon-dropdown las la-edit uni_text_6d30ab fs-22"></i>
                                        Edit</a>

                                    <a class="dropdown-item">
                                        <i class="icon-dropdown las la-trash uni_text_6d30ab fs-22"></i>
                                        Delete</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </div>
        </div>
    )
}

export default TabDistributionchannel;