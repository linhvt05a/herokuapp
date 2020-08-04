import React, { Component, Fragment } from 'react';
import { Trans } from 'react-i18next';

import {
    DialogPermision, DialogTrash
} from '../../../components/dialogs'

import {
    CardHeader, Pagination
} from '../../../components/common'
import { permissionProjectService } from '../../../services';
import '../Permission.css'


class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            permissionList: null,
            show_ListRole: false
        }
    }

    handle_showRole = (e) => {
        this.setState({
            show_ListRole: true,
        })
    }
    handle_closemodal = (e) => {
        this.setState({
            show_ListRole: false
        })
    }
    render() {
        return (
            <Fragment>
                <tr>
                    <td>{this.props.index + 1}</td>
                    <td> {this.props.data.perm_project_task_name}</td>
                    <td>
                        <a className="uni_text_black font-weight-bold " style={{ cursor: 'pointer' }} onClick={this.handle_showRole}>
                            Danh Sách Quyền [{this.props.data.list_permission.length}]
                    </a>
                    </td>
                    <td>
                        <a href={"/perm/project/detail/" + this.props.data.perm_project_task_id} ><Trans>Detail</Trans></a>
                    </td>
                </tr>
                {this.state.show_ListRole && <DialogPermision visible={this.state.show_ListRole} close={this.handle_closemodal} listRole={this.props.data.list_permission} />}
            </Fragment>
        )
    }
}
class Card_Content extends Component {
    render() {
        return (
            <div className="card square">
                <div className="card-body">
                    <div className="m_table m_table--list_project mt-3">
                        <div className="table-responsive table-hover">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th width="10%"><Trans>stt</Trans></th>
                                        <th><Trans>ROLE</Trans></th>
                                        <th><Trans>Total Permission</Trans></th>
                                        <th width="10%"><Trans>Detail</Trans></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.data && this.props.data
                                            .sort((a, b) => a.perm_project_task_id - b.perm_project_task_id)
                                            .map((item, index) => (
                                                <Row key={index} data={item} index={index} />
                                            ))}

                                </tbody>
                            </table>
                            {
                                this.props.data &&
                                <Pagination total_page={this.props.total_page} total_record={this.props.total_record} page={this.props.page} change={this.props.changePage} />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class PagePermProject extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            total_page: '',
            total_record: '',
            page: '',
        };
    }

    componentDidMount() {
        const page = (this.props.search.page ? this.props.search.page : 1);
        const search = this.props.search.search ? this.props.search.search : "";
        this.setState(
            {
                page: page,
            }
            , () => {
                permissionProjectService.permission_list(this.props.user.token, search, this.state.page).then(
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
    onSearch = (value) => {
        if (value.trim() != "") {
            window.location = "?search=" + value;
        } else {
            window.location = "/perm/project"
        }
    }
    changePage = (page) => {
        let search = this.props.search.search ? "search=" + this.props.search.search + "&" : ""
        window.location = "?" + search + "page=" + page;
    }
    render() {
        const actions = [
            { "href": "/perm/project/add", "value": "Add" },
        ]
        return (
            <div>
                <CardHeader label="Role By Project List"
                    searchLabel="ROLE" actionData={actions}
                    onSearch={this.onSearch}
                />
                <Card_Content
                    data={this.state.data}
                    total_page={this.state.total_page}
                    total_record={this.state.total_record}
                    page={this.state.page}
                    changePage={this.changePage}
                />
            </div>
        )
    }
}


export default PagePermProject;
