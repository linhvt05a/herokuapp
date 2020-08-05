import React from 'react';

const TabSellopenlist = () => {
    return (
        <div role="tabpanel" className="tab-pane show fade pt-2 pb-3" id="on_open_sale">
            <div className="m_table m_table--sales min-width-100-pc table-height mb-0">
                <table className="table table-sticky-01">
                    <thead>
                        <tr>
                            <th className="pl-0 col-1">No.</th>
                            <th className="col-2">Sell open</th>
                            <th className="col-2">From date</th>
                            <th className="col-2">To date</th>
                            <th className="col-2">Total channel agent</th>
                            <th className="col-2">Total channel internal</th>
                            <th className="col-1 text-center">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="pl-0 col-1">1</td>
                            <td className="col-2">
                                <div className="form-group mb-0 input_open_sale">
                                    <input type="text" className="form-control text-uppercase" value="Sell open 1" readonly=""/>
                                </div>
                            </td>
                            <td className="col-2">20/07/2020</td>
                            <td className="col-2">30/07/2020</td>
                            <td className="col-2">
                                <span className="uni_text_6d30ab">-</span>
                            </td>
                            <td className="col-2">
                                <span className="uni_text_6d30ab">-</span>
                            </td>
                            <td className="col-1 text-center">
                                <a className="uni_text_6d30ab fw-medium" href="/backend/sell-open/13/">
                                    <u>See details</u>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TabSellopenlist;