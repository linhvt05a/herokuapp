import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { TabInformation, TabOrder, TabJoinProject, TabPayment, TabFeedback } from "../index";

const Manage = (props) => {
    let { activeTab } = props;
    return (
        <div className="tab-content">
            <TabInformation activeTab={activeTab} />
            <TabOrder activeTab={activeTab} status={false} />
            <TabJoinProject activeTab={activeTab} />
            <TabPayment activeTab={activeTab} />
            <TabFeedback activeTab={activeTab} />
        </div>
    )
}
export default Manage;