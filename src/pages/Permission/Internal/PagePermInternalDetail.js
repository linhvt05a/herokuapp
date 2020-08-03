import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import {
    CardHeader, Loading
} from '../../../components/common'
import { CardInternalTask, CardButton } from './Layout'
import { permissionDepartmentService, selectService } from '../../../services';
import { mappingListToSelectList } from '../../../components/input';
import * as Utils from '../../../utils/Utils'

//=========================================
class PagePermInternalDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            blocks: [{ 'value': '', 'label': '-- Select Block --' }],
            positions: [{ 'value': '', 'label': '-- Select Position --' }],
            employees: [{ 'value': '', 'label': '-- Select Employee --' }],
            departments: [{ 'value': '', 'label': '-- Select Department --' }],
            loading: false,
        };
    }
    onChange = (name, value) => {
        let data = this.state.data;
        data[name] = value;
        this.setState({ data: data });
    }
    onUpdate = () => {
        this.setState(
            {
                loading: true,
            },
            () => {
                permissionDepartmentService.departmentUpdate(this.props.user.token, this.props.params.id, this.state.data).then(
                    res => {
                        this.setState({ loading: false });
                        this.props.showToast('success', res['detail']);
                    },
                    err => {
                        this.setState({ loading: false })
                        this.props.showToast('error', err);
                    }
                );
            }
        );
    }

    componentDidMount() {
        this.setState({
            loading: true
        }, () => {
            permissionDepartmentService.detailDepartment(this.props.user.token, this.props.params.id).then(
                res => {
                    let data = res['detail'];
                    var blocks = [{ 'value': '', 'label': Utils.getTextDefault(data.perm_office_group_name) }]
                    var positions = [{ 'value': '', 'label': Utils.getTextDefault(data.perm_employee_position_name) }]
                    var employees = [{ 'value': '', 'label': Utils.getTextDefault(data.perm_employee_name) }]
                    var departments = [{ 'value': '', 'label': Utils.getTextDefault(data.perm_department_name) }]

                    this.setState(
                        {
                            loading: false, data, blocks, positions, employees, departments
                        }
                    );
                },
                err => {
                    this.props.showToast('error', err);
                }
            )
        })
    }
    onBack = e => {
        window.location = "/perm/internal/"
    }

    render() {
        return (
            <div>
                <CardHeader label="UPDATE" />
                <CardInternalTask data={this.state.data} onChange={this.onChange} user={this.props.user}
                    isDisable={true} blocks={this.state.blocks} departments={this.state.departments}
                    employees={this.state.employees} positions={this.state.positions}
                />
                <CardButton onUpdate={this.onUpdate} onBack={this.onBack} />
                <Loading visible={this.state.loading} />
            </div>
        )
    }
}


export default PagePermInternalDetail;
