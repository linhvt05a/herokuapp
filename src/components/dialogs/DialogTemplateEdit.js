import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import ClipLoader from "react-spinners/ClipLoader";
import Modal from 'react-bootstrap/Modal'
import { InputText } from "../input";
import { CardHeader } from "../common";

import "./Dialog.css"

class DialogTemplateEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            submitted: false
        };
    }
    componentDidMount() {
        this.setState({
            data: this.props.data
        })
    }

    handleChange = (name, value) => {
        let data = this.state.data
        data[name].workflow_template_group_name = value
        this.setState({
            data: data
        })
    }

    render() {
        const { loading, error, data, submitted } = this.state;
        return (
            <Modal size="lg" animation={true} show={this.props.visible}  >
                <div className="modal-dialog modal-md">
                    <CardHeader label={this.props.title} />
                    <div className="modal-content square">
                        <div className="modal-body">
                            <form method="post" id="form_add_group" autocomplete="off">
                                <div className="row">
                                    {
                                        this.props.data &&
                                        this.props.data.map((item, index) => (
                                            <InputText
                                                className="col-12 form-group mt-2"
                                                submitted={submitted} required="true"
                                                value={item.workflow_template_group_name} label={"Name (" + item.workflow_template_group_language_name + ")"}
                                                name={index} type="text" onChange={this.handleChange} />
                                        ))
                                    }
                                    {/* <InputText className="col-12 form-group mt-2"
                                        submitted={submitted} required="true"
                                        value={data.name_en} label="Name (English)"
                                        name="name_en" type="text" onChange={this.handleChange}
                                    /> */}
                                    <div className="col-12">
                                        <button type="button" className="btn-uni-purple" id="btn_add_group" style={{ float: "right" }} onClick={this.props.onSave}>Save</button>
                                        <button type="button" className="btn-uni-cancel mr-3" style={{ float: "right" }} onClick={this.props.onClose}>Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default DialogTemplateEdit;
