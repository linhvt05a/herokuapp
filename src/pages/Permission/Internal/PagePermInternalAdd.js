import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { CardInternalTask, CardButton } from './Layout'
import { CardHeader, Loading } from '../../../components/common'
import { permissionDepartmentService, selectService } from '../../../services';
import { mappingListToSelectList } from '../../../components/input'

class PagePermInternalAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                perm_employee_id: null,
            },
            loading: false,
            blocks: [{ label: "-- Select Block --", value: "" }],
            employees: [{ label: "-- Select Employee --", value: "" }],
            departments: [{ label: "-- Select Department --", value: "" }],
            positions: [{ label: "-- Select Position --", value: "" }]
        }
    }

    componentDidMount() {
        this.getSelectBlock();
    }

    getSelectBlock = () => {
        selectService.getSelectBlock(this.props.user.token, this.props.user.office_id).then(
            res => {
                var blocks = mappingListToSelectList(res['detail'], 'block_id', 'block_name')
                blocks.unshift({ label: "-- Select Block --", value: "" })
                var data = this.state.data
                delete data['perm_office_group_id']
                this.setState({ blocks: blocks, data: data })
                this.forceUpdate();
            },
            err => {
                this.props.showToast('error', err);
            }
        )
    }

    getSelectDepartment = (block_id) => {
        selectService.getSelectDeparment(this.props.user.token, this.props.user.office_id, block_id).then(
            res => {
                var departments = mappingListToSelectList(res['detail'], 'department_id', 'department_name')
                departments.unshift({ label: "-- Select Department --", value: "" })
                var data = this.state.data
                delete data['perm_department_id']
                this.setState({ departments: departments, data: data })
                this.forceUpdate();
            },
            err => {
                this.props.showToast('error', err);
            }
        )
    }

    getSelectPosition = (block_id, department_id) => {
        selectService.getSelectPosition(this.props.user.token, null, block_id, department_id).then(
            res => {
                var positions = mappingListToSelectList(res['detail'], 'position_id', 'position_name')
                console.log("positions", positions);

                positions.unshift({ label: "-- Select Position --", value: "" })
                var data = this.state.data
                delete data['perm_employee_position_id']
                this.setState({ positions: positions, data: data })
                this.forceUpdate();
            },
            err => {
                this.props.showToast('error', err);
            }
        )
    }
    getSelectEmployee = (block_id, department_id, position_id) => {
        selectService.getSelectEmployee(this.props.user.token, null, block_id, department_id, position_id).then(
            res => {
                var employees = mappingListToSelectList(res['detail'], 'employee_id', 'employee_name')
                employees.unshift({ label: "-- Select Employee --", value: "" })
                var data = this.state.data
                delete data['perm_employee_id']
                this.setState({ employees: employees, data: data })
                this.forceUpdate();
            },
            err => {
                this.props.showToast('error', err);
            }
        )
    }

    hanlderSelectBlock = (id) => {
        this.setState({
            employees: [{ label: "-- Select Employee --", value: "" }],
            departments: [{ label: "-- Select Department --", value: "" }],
            positions: [{ label: "-- Select Position --", value: "" }],
        })
        if (id != "") {
            this.getSelectDepartment(id)
        }
    }
    hanlderSelectDepartment = (id) => {
        const { perm_office_group_id } = this.state.data
        this.setState({
            employees: [{ label: "-- Select Employee --", value: "" }],
            positions: [{ label: "-- Select Position --", value: "" }]
        })
        if (id != "") {
            this.getSelectPosition(perm_office_group_id, id)
            this.getSelectEmployee(id)
        }
    }
    hanlderPosition = (id) => {
        const { perm_office_group_id, perm_department_id } = this.state.data
        this.setState({
            employees: [{ label: "-- Select Employee --", value: "" }]
        })
        if (id != "") {
            this.getSelectEmployee(perm_office_group_id, perm_department_id, id)
        } else {
            this.getSelectEmployee(perm_office_group_id, perm_department_id)
        }
    }
    onChange = (name, value) => {
        let data = this.state.data;

        if (name === 'perm_office_group_id') {
            this.hanlderSelectBlock(value.value)
            if (value.value === '') {
                delete data[name]
            } else {
                data[name] = value.value
            }
        }
        else if (name === 'perm_department_id') {
            this.hanlderSelectDepartment(value.value)
            if (value.value === '') {
                delete data[name]
            } else {
                data[name] = value.value
            }
        }
        else if (name === 'perm_employee_position_id') {
            this.hanlderPosition(value.value)
            if (value.value === '') {
                delete data[name]
            } else {
                data[name] = value.value
            }
        }
        else if (name === 'perm_employee_id') {
            if (value.value === '') {
                delete data[name]
            } else {
                data[name] = value.value
            }
        }
        else {
            data[name] = value
        }
        this.setState({ data: data });
    }

    onSave = () => {
        var data = this.state.data
        this.setState({ submitted: true });
        if (!data['perm_employee_id']) {
            return
        }
        permissionDepartmentService.departmentAdd(this.props.user.token, this.state.data).then(
            res => {
                this.setState({ loading: false });
                this.props.showToast('success', res['detail']['message']);
                window.location = '/perm/internal/'
            },
            err => {
                this.setState({ loading: false })
                this.props.showToast('error', err);
            }
        );
    }
    render() {
        return (
            <div>
                <CardHeader label="Create" />
                <CardInternalTask data={this.state.data} onChange={this.onChange} user={this.props.user}
                    submitted={this.state.submitted}
                    blocks={this.state.blocks} departments={this.state.departments}
                    employees={this.state.employees} positions={this.state.positions}
                />
                <CardButton onUpdate={this.onSave} onBack={this.onBack} />
                <Loading visible={this.state.loading} />
            </div>
        )
    }
}

export default PagePermInternalAdd;
