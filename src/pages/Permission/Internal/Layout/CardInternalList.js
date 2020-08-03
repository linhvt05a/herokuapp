import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { Pagination, Spinner } from '../../../../components/common'
import * as Utils from '../../../../utils/Utils'
import { DialogPermision } from '../../../../components/dialogs'

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            permissionList: null,
            show_ListRole: false,
        }
    }
    handle_showRole = (e) => {
        this.setState({
            show_ListRole: true
        })
    }
    handle_closemodal = (e) => {
        this.setState({
            show_ListRole: false,
        })
    }
    //======================
    render() {
        const { data } = this.props
        const link = "/perm/internal/detail/" + this.props.data.perm_department_task_id;

        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{Utils.getTextDefault(data.perm_office_group_name)}</td>
                <td>{Utils.getTextDefault(data.perm_department_name)}</td>
                <td>{Utils.getTextDefault(data.perm_employee_name)}</td>
                <td> {Utils.getTextDefault(data.perm_employee_position_name)}</td>
                <td>
                    <a className="uni_text_black font-weight-bold " style={{ cursor: 'pointer' }} onClick={this.handle_showRole}>
                        Danh Sách Quyền [{this.props.data.list_permission.length}]
                 </a>
                </td>
                <td>
                    <a href={link}><Trans>Detail</Trans></a>
                </td>
                <td style={{ color: "#000" }}>
                    <a style={{ cursor: 'pointer' }} onClick={(e) => this.props.clickedRemove(e, data.perm_department_task_id)} title="Xóa">
                        <i className="fa fa-trash" />
                    </a>
                </td>
                {
                    this.state.show_ListRole && <DialogPermision visible={this.state.show_ListRole} close={this.handle_closemodal} listRole={this.props.data.list_permission} />
                }
            </tr>

        )
    }
}

class CardInternalList extends Component {
    render() {
        return (
            <div className="card square">
                <div className="card-body">
                    <div className="m_table m_table--list_project mt-3">
                        <div className="table-responsive table-hover">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th width="10%"><Trans>Order Number</Trans></th>
                                        <th><Trans>Block Name</Trans></th>
                                        <th><Trans>Department Name</Trans></th>
                                        <th><Trans>Employee Name</Trans></th>
                                        <th><Trans>Position</Trans></th>
                                        <th><Trans>TOTAL PERMISSION</Trans></th>
                                        <th><Trans>Detail</Trans></th>
                                        <th width="5%"><i className="fa fa-cog" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.datas && this.props.datas.map((item, index) => <Row key={index} index={index} data={item} user={this.props.user} clickedRemove={this.props.clickedRemove} />)
                                    }

                                </tbody>
                            </table>
                            {
                                this.props.datas
                                    ? <Pagination total_page={this.props.total_page} total_record={this.props.total_record} page={this.props.page} change={this.props.changePage} />
                                    : <Spinner />
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardInternalList