import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import { Pagination, CardHeader, Spinner } from '../common'
import api from '../../services/api';
import * as Utils from '../../utils/Utils';

class Project extends Component {
    index() {
        return this.props.index + 1;
    }
    onClick = (e) => {
        this.props.onClick(this.props.data.id)
    }
    render() {
        const { data } = this.props;
        var href =  this.props.link + data.project_id;
        return (
            <tr className="active" onClick={this.onClick}>
                <td>{this.index()}</td>
                <td className="fw-medium">{data.project_name}</td>
                <td className="m_text_a8c200">
                    <span className={"uni_status_" + this.props.data.status_id}>{data.status_name}</span>
                </td>
                <td>{Utils.convertDateDDMMYYYY(data.updated_at)}</td>
                <td>{data.updated_by}</td>
                <td className="text-detail">
                    <a className="text-detail" href={href}>
                        Chi Tiết
                    </a>
                </td>
            </tr>
        )
    }
}

class CardProject extends Component {
    render() {
        let pageSize = this.props.page * api.LIMIT - api.LIMIT
        const { datas } = this.props;
        return (
            <div>
                <CardHeader label="PROJECT LIST" />
                <div className="row">
                    <div className="col-12">
                        <div className="card square fix-height mb-0">
                            <div className="card-body">
                                <div className="m_table m_table--list_project">
                                    <div className="table-responsive">
                                        <table className="table" id="list_projects">
                                            <thead>
                                                <tr>
                                                    <th scope="col"><Trans>stt</Trans></th>
                                                    <th scope="col"><Trans>PROJECT NAME</Trans></th>
                                                    <th scope="col"><Trans>PROJECT STATUS</Trans></th>
                                                    <th scope="col"><Trans>UPDATED AT</Trans></th>
                                                    <th scope="col"><Trans>UPDATED BY</Trans></th>
                                                    <th scope="col"><Trans>DETAIL</Trans></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    datas && datas.map((item, index) => <Project key={index} index={index + pageSize} data={item} onClick={this.props.onSelectProjects} link={this.props.link} />)
                                                }
                                            </tbody>

                                        </table>
                                        <Pagination total_page={this.props.total_page} total_record={this.props.total_record} page={this.props.page} change={this.props.onChangeProjectPage} /> 
                                        {
                                            this.props.loading && <Spinner />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CardProject;
