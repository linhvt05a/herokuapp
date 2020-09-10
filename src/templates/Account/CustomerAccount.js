import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { Manage } from "./index";

var tab = [
    {tabTitle: "THÔNG TIN CHUNG"},
    {tabTitle: "ĐƠN HÀNG"},
    {tabTitle: "DỰ ÁN THAM GIA"},
    {tabTitle: "THANH TOÁN"},
    {tabTitle: "PHẢN HỒI"}
]
const CustomerAccount = (props) => {
    let { data } = props;
    const [account, setStateAccount] = useState({
        activeTab: 0,
    });
    const onItemClickTab = (index) => {
        setStateAccount({...account, activeTab: index})
    }
    return (
        <div class="bg_grey user-acc">
            <div class="container container-sm container-md">
                <div class="user-acc__heading">
                    <h2 class="main_heading">
                        <span>Quản lý</span>
                    </h2>
                    <ul class="user-acc__tab nav nav-tabs">
                        {tab && tab.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a className={`nav-link ${account.activeTab != index ? "" : 'active'}`} onClick={event => onItemClickTab(index)} >
                                    <Trans>{item.tabTitle}</Trans></a>
                            </li>
                        ))}
                    </ul>
                </div>
                <Manage activeTab={account.activeTab} />
            </div>
        </div>
    )
}
export default CustomerAccount;


