import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import Modal from 'react-bootstrap/Modal'
import { CardHeader } from "../common";

import { permissions } from '../../constant';

import "./Dialog.css"

class Permission extends Component {
    render() {
        return (
            <tr>
                <td className="pl-0">{this.props.index + 1}</td>
                <td>{this.props.data}</td>
            </tr>
        )
    }
}

class DialogPermision extends Component {
    render() {
        return (
            <Modal size="500" animation={true} show={this.props.visible}>
                <CardHeader label="Permission List" />
                <div className="modal-content square">
                    <div className="modal-body" id="content-model-permission_list">
                        <div className="row mt-2">
                            <div className="col-12">
                                <div className="m_table m_table--list_project" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                    <div className="table-responsive">
                                        <table className="table" style={{ minWidth: 'inherit' }}>
                                            <thead>
                                                <tr>
                                                    <th width="10%" className="pl-0"><Trans>No.</Trans></th>
                                                    <th><Trans>Permissions</Trans></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.props.listRole && this.props.listRole.map((item, index) => <Permission key={index} data={item} index={index} />)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <button type="button" className="btn-uni-cancel float-right" onClick={this.props.close} ><Trans>Cancel</Trans></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default DialogPermision;
