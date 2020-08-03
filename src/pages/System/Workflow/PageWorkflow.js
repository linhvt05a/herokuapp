import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import {
    Pagination, CardHeader, Spinner
} from '../../../components/common';

import { DialogTrash } from '../../../components/dialogs/index';
import { sysWorkingProcessService } from "../../../services/index";
import api from '../../../services/api';

class Action extends Component {
    onShowClone = (e) => {
        this.props.onShowClone(this.props.eId)
    }
    render() {
        const link_edit = "/system/workflow/edit/" + this.props.eId;
        const link_state = "/system/workflow/state/" + this.props.eId;
        const link_draw = "/system/workflow/draw/" + this.props.eId;
        return (
            <td>
                <a title="Cập Nhật" className="uni_text_6d30ab" href={link_edit}>
                    <i style={{ color: "#399b54" }} className="uni_action las la-edit"></i>
                </a>

                <a title="Chi Tiết" className="uni_text_6d30ab" href={link_state}>
                    <i style={{ color: "#426fe9" }} className="uni_action las la-project-diagram"></i>
                </a>
                <a title="Vẽ" className="uni_text_6d30ab" href={link_draw}>
                    <i style={{ color: "#fb9334" }} className="uni_action las la-pen-fancy"></i>
                </a>
                <a title="Copy" className="uni_text_6d30ab" onClick={this.onShowClone}>
                    <i style={{ color: "#6d30ab" }} className="uni_action las la-copy"></i>
                </a>
            </td>
        )
    }
}

class Task extends Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td className="uni_text_black font-weight-bold">{data.workflow_template_name}</td>
                <td>{data.project_setting_period_name}</td>
                <td>{data.start_workflow_template_state_name}</td>
                <td>{data.end_workflow_template_state_name}</td>
                <td>{data.total_state}</td>
                <td>{data.version}</td>
                <Action eId={data.workflow_template_id} onShowClone={this.props.onShowClone} />
            </tr>

        )
    }
};

class Card_content extends Component {
    render() {
        let pageSize = this.props.page * api.LIMIT - api.LIMIT
        return (
            <div className="card square">
                <div className="card-body">
                    <div className="m_table m_table--list_project">
                        {
                            this.props.data ?
                                (
                                    <>
                                        <table className="table ">
                                            <thead>
                                                <tr>
                                                    <th><Trans>step</Trans></th>
                                                    <th><Trans>name</Trans></th>
                                                    <th><Trans>Project Period</Trans></th>
                                                    <th><Trans>step_start</Trans></th>
                                                    <th><Trans>step_end</Trans></th>
                                                    <th><Trans>toto_steps</Trans></th>
                                                    <th><Trans>version</Trans></th>
                                                    <th><Trans>Actions</Trans></th>
                                                </tr>
                                            </thead>
                                            <tbody className="t_body">
                                                {
                                                    this.props.data.map((item, index) => <Task key={index} index={index + pageSize} data={item} onShowClone={this.onShowClone} />)
                                                }
                                            </tbody>
                                        </table>
                                        <Pagination total_page={this.props.total_page} total_record={this.props.total_record} page={this.props.page} change={this.change_page} />
                                    </>
                                ) :
                                (
                                    <Spinner />
                                )
                        }
                    </div>
                </div>
            </div>
        );
    }
}
class PageWorkflow extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            total_page: 0,
            total_record: 0,
            page: 1,
            dataClone: null,
            titleClone: 'Do you sure want to clone ?'
        };
    }

    onSearch = (value) => {
        if (value.trim() != "") {
            window.location = "?search=" + value;
        } else {
            window.location = "/system/workflow"
        }
    }

    changePage = (page) => {
        let search = this.props.search.search ? "search=" + this.props.search.search + "&" : ""
        window.location = "?" + search + "page=" + page;
    }

    componentDidMount() {
        const page = this.props.search.page ? this.props.search.page : 1;
        const search = this.props.search.search ? this.props.search.search : "";
        this.setState(
            {
                page: page,
            }
            , () => {
                sysWorkingProcessService.getWorkingProjectList(this.props.user.token, search, this.state.page).then(
                    res => {
                        this.setState(
                            {
                                data: res['detail'],
                                total_page: res['total_page'],
                                total_record: res['total_record'],
                                page: res['page']
                            }
                        );
                        this.forceUpdate();
                    },
                    err => {
                        this.props.showToast('error', err);
                    }
                );
            }
        );
    }

    onShowClone = (id) => {
        let data = this.state.datas;
        let model = data.find(id === id)
        this.setState({
            dataClone: model
        })
    }
    onHideClone = (e) => {
        this.setState({
            dataClone: null
        })
    }
    onSaveClone = (e) => {
        this.props.showToast('success', "Cập nhật thành công Todo api");
        this.onHideClone()
    }
    render() {
        const actions = [
            { "href": "/system/workflow/add", "value": "Add" },
        ]

        return (
            <div>
                <CardHeader label="Workflow" searchLabel="Search" actionData={actions} onSearch={this.onSearch}/>
                <Card_content
                    data={this.state.data}
                    total_page={this.state.total_page}
                    total_record={this.state.total_record}
                    page={this.state.page}
                    onShowClone={this.onShowClone}
                    changePage={this.changePage} />
                {this.state.dataClone && <DialogTrash title={this.state.titleClone} label={this.state.dataClone.name + "!"} onSave={this.onSaveClone} close={this.onHideClone} />}
            </div>
        )
    }
}



export default PageWorkflow;
