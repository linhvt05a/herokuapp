import React from 'react';

const TabSalespolicy = () => {
    return (
        <div className="m_table m_table--sales min-width-100-pc sales_house-selected">
            <table>
                <thead>
                    <tr>
                        <th className="pl-0">No.</th>
                        <th className="pl-0">Sell open</th>
                        <th className="pl-0">Distribution channel</th>
                        <th>Applicable policy</th>
                        <th>Status policy</th>
                        <th>From date</th>
                        <th>To date</th>
                        <th>Status sell open</th>
                        <th>Note</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="parent">
                        <td className="number pl-0">1</td>
                        <td colspan="2" className="pl-0">
                            <div className="floor_selected">
                                <div className="floor text-uppercase min-width-110">Sell open 1</div>
                                <a className="agency channel min-width-230 uni_text_6d30ab text-underline border-right-0">
                                    Total number of distribution units: 1
                                </a>
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                            20/07/2020
                        </td>
                        <td>
                            30/07/2020
                        </td>
                        <td>
                            <span className="d-inline-flex align-items-center justify-content-center m_text_status_2 m_border_status_2 min-height-40 pl-3 pr-3 width-110">
                                Opening
                            </span>
                        </td>
                        <td></td>
                        <td className="text-center">
                            <i className="icon icon_collapse las la-plus-circle"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TabSalespolicy;