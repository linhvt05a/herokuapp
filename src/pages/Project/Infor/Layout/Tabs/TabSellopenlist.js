import React from 'react';
import { Trans } from 'react-i18next';

const TabSellopenlist = () => {
    return (
        <div className="m_table m_table--sales min-width-100-pc table-height mb-0">
            <table className="table table-sticky-01">
                <thead>
                <tr>
                    <th className="pl-0 col-1" style={{width: "5%"}}><Trans>No.</Trans></th>
                    <th className="col-2" style={{width: "25%"}}><Trans>Sell open</Trans></th>
                    <th className="col-2" style={{width: "15%"}}><Trans>From date</Trans></th>
                    <th className="col-2" style={{width: "15%"}}><Trans>To date</Trans></th>
                    <th className="col-2" style={{width: "15%"}}><Trans>Total channel agent</Trans></th>
                    <th className="col-2" style={{width: "15%"}}><Trans>Total channel internal</Trans></th>
                    <th className="col-1 text-center" style={{width: "10%"}}><Trans>Detail</Trans></th>
                </tr>
                </thead>
                <tbody style={{maxHeight: "400px"}}>
                    <tr>
                        <td className="pl-0 col-1" style={{width: "5%"}}>1</td>
                        <td className="col-2" style={{width: "25%"}}>
                            <div className="form-group mb-0 input_open_sale" style={{width: "80%"}}>
                                <input type="text" className="form-control text-uppercase" value="Sell open 1" readonly=""/>
                            </div>
                        </td>
                        <td className="col-2" style={{width: "15%"}}>20/07/2020</td>
                        <td className="col-2" style={{width: "15%"}}>30/07/2020</td>
                        <td className="col-2" style={{width: "15%"}}>
                            <span className="uni_text_6d30ab">-</span>
                        </td>
                        <td className="col-2" style={{width: "15%"}}>
                            <span className="uni_text_6d30ab">-</span>
                        </td>
                        <td className="col-1 text-center" style={{width: "10%"}}>
                            <a className="uni_text_6d30ab fw-medium" href="/backend/sell-open/13/">
                                <u>See details</u>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TabSellopenlist;