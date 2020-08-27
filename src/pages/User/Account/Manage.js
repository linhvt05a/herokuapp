import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { TabInformation } from "../index";

const Manage = (props) => {
    let { activeTab } = props;
    return (
        <div class="tab-content">
            <TabInformation />
        </div>
    )
}
export default Manage;