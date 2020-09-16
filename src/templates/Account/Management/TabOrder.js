import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import { UserFilter, TableFilter, ViewHorizontal, ViewVertical, ViewTableOrder, ViewPaymentInfor, ViewBenefit } from "../index";

const TabOrder = (props) => {
    let { activeTab } = props;
    const dispatch = useDispatch();
    const [state, setState] = useState({
        orderDetail: props.status
    });

    const handleOrderDetail = () => {
        setState({ orderDetail: true })
    }
    return (
        <div className={`tab-pane fade ${activeTab === 1 ? "active show" : ""}`} id="tab_02" role="tabpanel">
            <div className="row user-acc__order">
                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                    {
                        !state.orderDetail ?
                            <>
                                <UserFilter filterTab={activeTab} />
                                <TableFilter onOrderDetail={handleOrderDetail} />
                            </> :
                            <>
                                <div className="project_item__detail">
                                    <ViewHorizontal />
                                    <ViewVertical />
                                </div>
                                <div className="user-acc__total_sales">
                                    <div className="project_item__list table-order-info">
                                        <ViewTableOrder />
                                    </div>
                                </div>
                            </>
                    }
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-4 mb-lg-0">
                    <ViewPaymentInfor />
                    <ViewBenefit />
                </div>
            </div>
        </div>
    )
}
export default TabOrder;