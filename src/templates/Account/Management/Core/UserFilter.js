import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";

const UserFilter = (props) => {
    return (
        <div class="user-acc__filter">
            <div class="filter__left">
                <div class="form-group">
                    <input type="text" placeholder="Nhập mã đơn hàng" class="form-control"/>
                    <a href="#" class="btn btn_green">
                        TÌM KIẾM
                    </a>
                </div>
            </div>
            <div class="filter__right">
                <a href="#" class="icon fas fa-calendar-alt"></a>
            </div>
        </div>
    )
}
export default UserFilter;