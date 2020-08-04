import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import Modal from 'react-bootstrap/Modal'
import { CardHeader } from "../common";



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

class DialogList extends Component{
    render(){
        const { data } = this.props;
        console.log(data)
        return(
            <Modal size="500" animation={true} show={this.props.visible}>
                <CardHeader label={this.props.title} />
                <div className="modal-content square">
                    <div className="modal-body" id="content--permission_list">
                        <div className="row mt-2">
                            <div className="col-12">
                                <div className="m_table m_table--list_project" style={{maxHeight: '500px', overflowY: 'auto'}}>
                                    <div className="table-responsmodelive">
                                        <table className="table" style={{minWidth: 'inherit'}}>
                                            <thead>
                                                <tr>
                                                    <th width="10%" className="pl-0"><Trans>No.</Trans></th>
                                                    <th><Trans>{this.props.label}</Trans></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map( (item, index) =>  <Item key={index} index={index+1} label={item} /> )
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

export default DialogList;
