/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Sell_Open from "../modal/sell_open";
import ModalAgent from "../modal/ModalAgent";
import ModalInternal from "../modal/ModalInternal"
import { Trans } from 'react-i18next';

const progress = props => {
    const [state, setState] = useState({
        AgentsStatus: false,
        InternalStatus: false
    });
    return (

        <div className="card square h-100">
            <div className="card-body p-0 d-flex flex-column justify-content-between">
                <div className="top pt-3 pl-3 pr-3">
                    <div className="sales_status mb-2">
                        <p className="title"><Trans>Note</Trans></p>
                        <p className="item">
                            <span className="square sales_status_style02_01_bg"></span>
                            <span className="text sales_status_style02_01_text"><Trans>Expected</Trans></span>
                        </p>
                        <p className="item">
                            <span className="square sales_status_style02_02_bg"></span>
                            <span className="text sales_status_style02_02_text"><Trans>Reality</Trans></span>
                        </p>
                    </div>

                    <div className="mb-3 m_table m_table--list_project m_table--sales max-height-100 table_fixed">
                        <Sell_Open data={props.dataSellOpen} />
                    </div>
                </div>

            </div>
        </div>

    )
}
export default progress