import React from 'react';
import Sell_Open from "../modal/sell_open"

const progress = props => {
    return (
        <div >
            <div className="m_heading">
                <button className="m_button no-event"><span>THỐNG KÊ CÁC ĐỢT MỞ BÁN</span></button>
            </div>

            <div className="card square ">
                <div className="card-body p-0 d-flex flex-column justify-content-between">
                    <div className="top pt-3 pl-3 pr-3">
                        <div className="sales_status mb-2">
                            <p className="title">Note</p>
                            <p className="item">
                                <span className="square sales_status_style02_01_bg"></span>
                                <span className="text sales_status_style02_01_text">Expected</span>
                            </p>
                            <p className="item">
                                <span className="square sales_status_style02_02_bg"></span>
                                <span className="text sales_status_style02_02_text">Reality</span>
                            </p>
                        </div>

                        <div className="mb-3 m_table m_table--list_project m_table--sales max-height-100 table_fixed">
                            <Sell_Open data={props.dataSellOpen} />
                        </div>
                    </div>

                    <div className="statistical_list_href">
                        <a className="statistical_list_href_01" href="javascript:void(0)" data-toggle="modal" data-target="#listAgencyChannel">List of participating agents
                                        [5]</a>
                        <a className="statistical_list_href_02" href="javascript:void(0)" data-toggle="modal" data-target="#listInternalChannel">List of internal sales
                                        [8]</a>
                    </div>
                </div>
            </div>   </div >

    )
}
export default progress