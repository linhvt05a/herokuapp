import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import Modal from 'react-bootstrap/Modal'
import { CardHeader } from "../common";

import "./Dialog.css"

class Item extends Component{
    render(){
        return(
            <tr>
                <td className="pl-0">{this.props.index}</td>
                <td>{this.props.label}</td>
            </tr>
        )
    }
}

class DialogFS extends Component{
    
    render(){
        return(
            <Modal size="xl" animation={true} show={this.props.visible}>
                <CardHeader label={this.props.title} />
                <div className="modal-content square">
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table m_table">
                                        <thead>
                                            <tr>
                                                <th style={{width: "50px"}}>No.</th>
                                                <th>Updated At</th>
                                                <th>Version</th>
                                                <th>Irr</th>
                                                <th>Npv</th>
                                                <th>Detail</th>
                                                <th>Switch</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table_body">
                                        <tr>
                                            <td>1</td>
                                            <td>08/07/2020</td>
                                            <td>FS 2</td>
                                            <td className="uni_text_black font-weight-bold">8.684</td>
                                            <td className="uni_text_black font-weight-bold">-51,691,114.0</td>
                                            <td className="text-left"> <a className="uni_text_6d30ab" style={{textDecoration: "underline"}} href="/pw/finance/project/fs/1">View</a></td>
                                            <td className="text-center"><input className="cl-cb" type="checkbox" /></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <button type="button" className="btn-uni-cancel" style={{float:"right"}} onClick={this.props.onClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default DialogFS;
