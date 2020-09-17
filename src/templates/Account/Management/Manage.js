import React, { useState, useEffect } from 'react';
import { Trans } from "react-i18next";
import { TabInformation, TabOrder, TabJoinProject, TabPayment, TabFeedback } from "../index";

const Manage = (props) => {
    let { activeTab } = props;
    const renderTab = () => {
        switch (activeTab) {
            case 0:
                return <TabInformation activeTab={activeTab} />
            case 1:
                return <TabOrder activeTab={activeTab} status={false} />
            case 2:
                return <TabJoinProject activeTab={activeTab} />
            case 3:
                return <TabPayment activeTab={activeTab} />
            case 4:
                return <TabFeedback activeTab={activeTab} />

        }
    }
    return (
        <div className="tab-content">
            {/* <TabInformation activeTab={activeTab} />
            <TabOrder activeTab={activeTab} status={false} />
            <TabJoinProject activeTab={activeTab} />
            <TabPayment activeTab={activeTab} />
            <TabFeedback activeTab={activeTab} /> */}
            {renderTab()}
        </div>
    )
}
export default Manage;