import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { Pagination, CardHeader, Spinner } from '../common';
import { regions, ancestor } from '../../constant';
import { mapping } from '../input';
import api from '../../services/api';

class Task extends Component {
    onClickTask = (e) => {
        this.props.onClickTask(this.props.data.id)
    }
    render() {
        return (
            <tr><td width="5%">{this.props.index}</td>
                <td width="40%" className="fw-medium">
                    <a className="uni_text_000" onClick={this.onClickTask}>
                        [1] Đơn đề nghị xác nhận hoàn tất bồi thường
                    </a>
                </td>
                <td width="10%">
                    <span className="priority_type_3">High</span>
                </td>
                <td width="15%">Nguyễn Văn PL1</td>
                <td width="15%">Trưởng Phòng Pháp Lý Dự Án</td>
                <td width="10%">15-05-2020</td>
                <td width="10%" className="text-detail">
                    <a onClick={this.onClickTask}>Detail</a>
                </td>
            </tr>
        )
    }
}

class CardTask extends Component {
    render() {
        let pageSize = this.props.page * api.LIMIT - api.LIMIT
        return (
            <div className={this.props.className ? this.props.className : ""}>
                <CardHeader label="task_list" purpleData={ancestor}
                    purpleLabel={this.props.group ? mapping(ancestor, this.props.group).label : ""}
                    onPurpleFilter={this.props.onFilterTaskList} />
                <div className="card square">
                    <div className="card-body task-list_pagination">
                        <div className="m_table m_table--list_project min-m_table">
                            <div className="table-responsive">
                                <table className="table p-0 uni-fsproject-table">
                                    <thead>
                                        <tr>
                                            <th scope="col"><Trans>No.</Trans></th>
                                            <th scope="col"><Trans>Project Task</Trans></th>
                                            <th scope="col"><Trans>Priority</Trans></th>
                                            <th scope="col"><Trans>By Person Assigned</Trans></th>
                                            <th scope="col"><Trans>Owner Employee</Trans></th>
                                            <th scope="col"><Trans>Deadline</Trans></th>
                                            <th scope="col"><Trans>Detail</Trans></th>
                                        </tr>
                                    </thead>
                                    <tbody id="task-list" className="table_body">
                                        {
                                            this.props.datas ?
                                                this.props.datas.map((item, index) => <Task key={index} index={index + pageSize + 1} data={item} onClickTask={this.props.onClickTask} />)
                                                : <tr>
                                                    <td colSpan="7" className="text-center"><Trans>No data</Trans></td>
                                                </tr>
                                        }
                                    </tbody>
                                </table>
                                <Pagination total_page={this.props.total_page} total_record={this.props.total_record} page={this.props.page} change={this.props.onChangeTaskPage} />
                                {
                                    this.props.loading && <Spinner />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardTask;
