import React from 'react';

const OtherTable = () => {
    return (
        <div class="row mt-4">
            <div class="col-12">
                <p class="m_heading--title mb-2 uni_text_6d30ab">
                    <span class="font-weight-bold">KHÁC</span>
                    <span class="sub-title">Cập nhật các tài liệu khác</span>
                </p>
                <div class="m_table m_table--sales mb-3">
                    <table class="w-100">
                        <thead>
                            <tr>
                                <th class="pl-0">STT</th>
                                <th>TÊN TÀI LIỆU </th>
                                <th>NỘI DUNG </th>
                                <th>CẬP NHẬT BỞI</th>
                                <th>TÀI LIỆU ĐÍNH KÈM </th>
                                <th class="text-center"><i class="icon las la-cog"></i></th>
                            </tr>
                        </thead>
                        <tbody><tr>
                            <td class="pl-0">1</td>
                            <td>
                                <div class="form-group mb-0">
                                    <input type="text" class="form-control w-100" placeholder="Nhập tên tài liệu " value="" />
                                </div>
                            </td>
                            <td>
                                <div class="form-group mb-0">
                                    <input type="text" class="form-control w-100" placeholder="Nhập nội dung" value="" />
                                </div>
                            </td>
                            <td>
                                -
                                                        </td>
                            <td>
                                <a href="#" class="uni_text_6d30ab">
                                    <i class="las la-plus uni_text_6d30ab fs-14"></i>
                                                                Upload file tài liệu
                                                            </a>
                            </td>
                            <td class="text-center">
                                <a href="#" data-toggle="dropdown">
                                    <i class="icon las la-ellipsis-h"></i>
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="javascript:void(0)">
                                        <i class="icon-dropdown las la-trash"></i> Delete
                                                                </a>
                                    <a class="dropdown-item open_modal_update_file" href="javascript:void(0)">
                                        <i class="icon-dropdown las la-plus"></i> Upload document file
                                                                </a>
                                </div>
                            </td>
                        </tr>
                        </tbody></table>
                </div>
                <a href="#" class="uni_text_6d30ab">
                    <i class="las la-plus"></i>Thêm file đính kèm
                                            </a>
            </div>
        </div>
    );
}

export default OtherTable;