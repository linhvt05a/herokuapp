import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import Modal from 'react-bootstrap/Modal'

class DialogTrash extends Component {
    render() {
        let title = this.props.title?this.props.title:"Are you sure you want to delete ?"
        return (
            <Modal className="modal_Trash" animation={true} show={this.props.visible}>
                <div className="swal-overlay swal-overlay--show-modal">
                    <div className="swal-modal">
                        <div className="swal-icon swal-icon--warning">
                            <span className="swal-icon--warning__body">
                                <span className="swal-icon--warning__dot" />
                            </span>
                        </div>
                        <div className="swal-title"><Trans>{title}</Trans></div>
                        {
                            this.props.label &&<div className="swal-text">{this.props.label}</div>
                        }
                        <div className="swal-footer">
                            <div className="swal-button-container">
                                <button className="swal-button swal-button--cancel" onClick={this.props.close}><Trans>No</Trans></button>
                            </div>
                            <div className="swal-button-container">
                                <button className="swal-button swal-button--confirm" onClick={this.props.onSave}><Trans>Yes</Trans></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default DialogTrash;
