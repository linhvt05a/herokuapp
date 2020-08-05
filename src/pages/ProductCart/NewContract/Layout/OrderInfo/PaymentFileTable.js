import React from 'react';

const PaymentTable = () => {
    return (
        <div class="row mt-4">
            <div class="col-12">
                <p class="m_heading--title mb-2 uni_text_6d30ab">
                    <span class="fw-medium">HỒ SƠ THANH TOÁN </span>
                    <i class="uni_star_e94c4c">*</i>
                    <span class="sub-title">Cập nhật hồ sơ thanh toán </span>
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
                                    <input type="text" class="form-control w-100" placeholder="Nhập tên tài liệu" value="Sổ hồng" />
                                </div>
                            </td>
                            <td>
                                <div class="form-group mb-0">
                                    <input type="text" class="form-control w-100" placeholder="Nhập nội dung" value="Sổ hồng của khách hàng Nguyễn Văn A" />
                                </div>
                            </td>
                            <td>
                                <p class="mb-0">Nguyễn Anh Đào </p>
                                <p class="time_update mb-0">11/11/2019 - 09:36:12 </p>
                            </td>
                            <td>
                                <div class="files">
                                    <figure class="file_image">
                                        <img src="../images/all/833px-PDF_file_icon.svg@2x.png" alt="" />
                                    </figure>
                                    <div class="file_name uni_text_6d30ab fw-medium">
                                        Tiêu_chuẩn_bàn_giao.pdf
                                                                </div>
                                </div>
                            </td>
                            <td class="text-center">
                                <a href="#" data-toggle="dropdown">
                                    <i class="icon las la-ellipsis-h"></i>
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item">
                                        <i class="icon-dropdown las la-trash"></i> Delete
                                                                </a>
                                    <a class="dropdown-item open_modal_update_file">
                                        <i class="icon-dropdown las la-plus"></i> Upload document file
                                                                </a>
                                </div>
                            </td>
                        </tr>
                            <tr>
                                <td class="pl-0">1</td>
                                <td>
                                    <div class="form-group mb-0">
                                        <input type="text" class="form-control w-100" placeholder="Nhập tên tài liệu" value="Sổ hồng" />
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group mb-0">
                                        <input type="text" class="form-control w-100" placeholder="Nhập nội dung" value="Sổ hồng của khách hàng Nguyễn Văn A" />
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">Nguyễn Anh Đào </p>
                                    <p class="time_update mb-0">11/11/2019 - 09:36:12 </p>
                                </td>
                                <td>
                                    <div class="files">
                                        <figure class="file_image">
                                            <img src="../images/all/833px-PDF_file_icon.svg@2x.png" alt="" />
                                        </figure>
                                        <div class="file_name uni_text_6d30ab fw-medium">
                                            Tiêu_chuẩn_bàn_giao.pdf
                                                                </div>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <a href="#" data-toggle="dropdown">
                                        <i class="icon las la-ellipsis-h"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item">
                                            <i class="icon-dropdown las la-trash"></i> Delete
                                                                </a>
                                        <a class="dropdown-item open_modal_update_file">
                                            <i class="icon-dropdown las la-plus"></i> Upload document file
                                                                </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
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
                                        <a class="dropdown-item">
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

export default PaymentTable;