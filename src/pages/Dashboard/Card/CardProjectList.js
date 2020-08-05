import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';

import { CardHeader } from '../../../components/common';
import { mappingListToSelectList, InputSelect } from '../../../components/input';
import { regionListRequest, typeListRequest, statusListRequest, provinceListRequest } from '../../../store/action/dashboard';
import { useDispatch, useSelector } from "react-redux";

const CardProjectList = (props) => {
    
    return (
        <div className="row">
            <div className="col-12">
                <div className="card square">
                    <div className="card-body">
                        <div className="m_table m_table--list_project">
                            <div className="table-responsive">
                                <table className="table table-detail-project m_table" id="list_projects">
                                    <thead>
                                        <tr>
                                            <th scope="col"><Trans>No.</Trans></th>
                                            <th scope="col"><Trans>Project Name</Trans></th>
                                            <th scope="col"><Trans>Project Status</Trans></th>
                                            <th scope="col"><Trans>Updated At</Trans></th>
                                            <th scope="col"><Trans>Updated By</Trans></th>
                                            <th scope="col"><Trans>Detail</Trans></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.datas && this.state.datas.map((item, index) => (
                                            <RowProject key={index} data={item} serial={index + 1} />
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <Pagination total_page={this.state.total_page} total_record={this.state.total_record} page={this.state.page} change={this.changePage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProjectList;