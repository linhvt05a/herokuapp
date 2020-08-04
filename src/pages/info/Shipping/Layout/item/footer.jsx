import React from 'react';

const footer = props => {
    return (
        <div class="m_pager mt-lg-4">
            <input type="hidden" name="page" id="pagination_page" value="" />
            <ul>
                <li class="text-page">Trang:</li>
                <li class="first"><a>Đầu</a></li>
                <li class="disable"><a href="javaScript:void(0);">Trước</a></li>
                <li class="active">
                    <a href="#" page-number="1">1</a>
                </li>
                <li class="">
                    <a href="#" page-number="2">2</a>
                </li>
                <li class="disable"><a href="javaScript:void(0);">Kế Tiếp</a></li>
                <li><a>Cuối</a></li>
                <li class="page-current">
                    <b>1</b> tới <b>2</b> của 7 mục
        </li>
                <li class="vertical-dash">|</li>
                <li class="text-page d-inline-flex">Tìm trang : &nbsp;
            <div class="form-group" style={{ maxWidth: `41px`, justifyContent: "center" }}>
                        <input type="text" class="form-control
                        square page-number" placeholder="Số" onkeypress="find_page(event,
                        this.value)"></input>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default footer;