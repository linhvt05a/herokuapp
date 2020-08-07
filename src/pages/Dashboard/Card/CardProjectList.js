import React, { useEffect } from 'react';
import { Trans } from 'react-i18next';

import { projectListRequest } from '../../../store/action/dashboard';
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from '../../../components/common';

const CardProjectList = (props) => {
    const { updateLocation, projectListSuccess, projectListRes, page, totalPage, totalRecord, onItemClick } = props;

    const changePage = (value) => {
        var params = page
        updateLocation(params);
    }

    return (
        <div className="card square h-100 mb-0 mb-lg-4">
            <div className="card-body">
                <div className="mb-0 m_table m_table--list_project m_table--sales min-width-100-pc max-height-100 table_fixed">
                        <table style={{minWidth: "1050px !important"}}>
                            <thead>
                                <tr>
                                    <th style={{width: "30%"}} className="col-1 pl-0"><Trans>No.</Trans></th>
                                    <th className="col-2"><Trans>ProjectName</Trans></th>
                                    <th className="col-2"><Trans>ProjectStatus</Trans></th>
                                    <th className="col-2 text-right"><Trans>ExpectedRevenue</Trans><span className="current_currency_name">(VND)</span></th>
                                    <th className="col-2 text-right"><Trans>ActualRevenue</Trans><span className="current_currency_name">(VND)</span></th>
                                    <th className="col-2 text-right"><Trans>Cost</Trans><span className="current_currency_name">(VND)</span></th>
                                </tr>
                            </thead>
                            {
                                projectListSuccess &&
                                <tbody style={{maxHeight: "250px"}}>
                                {
                                    projectListRes && projectListRes.map((item, index) => (
                                        <RowProject key={index} data={item} serial={index + 1} onItemClick={onItemClick} index={index} />
                                    ))
                                }
                                </tbody>
                            }
                        </table>
                </div>
                {
                    projectListSuccess &&
                    <Pagination total_page={totalPage} total_record={totalRecord} page={page} change={changePage} />
                }
            </div>
        </div>
    )
}

const RowProject = (props) => {
    const { index, onItemClick } = props

    const onClick = () => {
        onItemClick(index)
    }

    return (
        <tr style={{cursor: "pointer"}} onClick={onClick}>
            <td style={{width: "30%"}} className="col-1 pl-0">{props.serial}</td>
            <td className="col-2"><span className="fw-medium" style={{color: "#6d30ab"}}><a><u>{props.data.project_name}</u></a></span></td>
            <td className="col-2">
                <span style={{color:    props.data.status_id === 1 ? "#219dfd" :
                                        props.data.status_id === 2 ? "#f7b84b" :
                                        props.data.status_id === 3 ? "#1abc9c" :
                                        props.data.status_id === 4 ? "#fd7e14" : "#f33652"}}>
                    {props.data.status_name}
                </span>
            </td>
            <td className="col-2 uni_text_6d30ab fw-medium text-right"><span style={{color: "#6d30ab"}}>{props.data.total_expected_revenue}</span></td>
            <td className="col-2 uni_text_6d30ab fw-medium text-right"><span style={{color: "#e94c4c"}}>{props.data.total_actual_revenue}</span></td>
            <td className="col-2 uni_text_6d30ab fw-medium text-right"><span style={{color: "#fb9334"}}>{props.data.total_cost}</span></td>
        </tr>
    )
}

export default CardProjectList;