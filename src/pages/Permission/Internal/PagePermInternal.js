import React, { Component } from 'react';
import { CardInternalList } from './Layout'


import { DialogPermision, DialogTrash } from '../../../components/dialogs'
import { CardHeader, Pagination, Spinner } from '../../../components/common'
import { mapping, mappingListToSelectList } from '../../../components/input'

import { permissionDepartmentService, selectService } from '../../../services';

const departmentDefault = [
    { value: '', label: "ALL DEPARTMENT" },
]

class PagePermInternal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: null,
            total_page: 0,
            total_record: 0,
            page: 1,
            showTrash: false,
            departmentRemove: null,
            departments: departmentDefault
        }
    }
    componentDidMount() {
        this.getSelectDepartment();

        let params = this.props.search;
        const page = (params['page'] ? params['page'] : 1);

        // const group = this.props.search.group ? this.props.search.group : 0;
        // const page = (this.props.search.page ? this.props.search.page : 1);
        // const search = this.props.search.search ? this.props.search.search : "";

        this.setState(
            {
                page: page,
            }
            , () => {
                permissionDepartmentService.department(this.props.user.token, params['name'], page, params['department_id']).then(
                    res => {
                        this.setState(
                            {
                                department_id: params['department_id'],
                                datas: res['detail'],
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
    showHideModal = () => {
        this.setState({
            showTrash: !this.state.showTrash,
            departmentRemove: null
        })
    }

    confirmRemove = (e) => {
        const departmentRemove = this.state.departmentRemove
        console.log('departmentRemove', departmentRemove);

        if (!departmentRemove) { return }
        this.setState(
            {
                loading: true,
            },
            () => {
                permissionDepartmentService.DeleteDepartment(this.props.user.token, departmentRemove).then(
                    res => {
                        this.showHideModal();
                        const datas = this.state.datas;
                        const newdatas = datas.filter(item => parseInt(item.perm_department_task_id) !== departmentRemove)

                        this.setState({
                            loading: false,
                            datas: newdatas
                        })

                        this.props.showToast('success', res['detail']['message']);
                    },
                    err => {
                        this.showHideModal();
                        this.setState({ loading: false })
                        this.props.showToast('error', err)
                    }
                )
            }
        )
    }

    onRemove = (e, id) => {
        e.preventDefault();
        console.log("id", id);

        //showmodal
        this.showHideModal();
        this.setState({
            departmentRemove: id
        })
    }

    onSearch = (value) => {
        var name = value.trim();
        var params = {
            name: (name === '' ? null : name),
            page: 1
        };
        this.props.updateLocation(params);
    }

    changePage = (page) => {
        var params = {
            page: page
        }
        this.props.updateLocation(params);
    }

    getSelectDepartment = (office_id) => {
        selectService.getSelectDeparment(this.props.user.token, office_id).then(
            res => {
                var departments = mappingListToSelectList(res['detail'], 'department_id', 'department_name')
                departments.unshift({ label: "ALL DEPARTMENT", value: "" })
                this.setState({ departments: departments })
                this.forceUpdate();
            },
            err => {
                this.props.showToast('error', err);
            }
        )
    }

    onPurpleFilter = (value) => {
        var params = {
            department_id: (value === "" ? null : value),
            page: 1
        }
        this.props.updateLocation(params);
    }

    render() {
        const actions = [
            { "href": "/perm/internal/add", "value": "Add" },
        ]
        return (
            <div>
                <CardHeader label="Task By Departments"
                    purpleData={this.state.departments} purpleLabel=
                    {mapping(this.state.departments, this.state.department_id).label}
                    onPurpleFilter={this.onPurpleFilter}
                    onSearch={this.onSearch}
                    searchLabel="Employee Name"
                    actionData={actions}
                />
                <CardInternalList
                    datas={this.state.datas}
                    total_page={this.state.total_page}
                    total_record={this.state.total_record}
                    page={this.state.page}
                    user={this.props.user}
                    clickedRemove={this.onRemove}
                    changePage={this.changePage}
                />
                <DialogTrash visible={this.state.showTrash} close={this.showHideModal} onSave={this.confirmRemove} />
            </div>
        )
    }
}

export default PagePermInternal;
