import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { InputCheckBox, InputText } from '../../../../components/input'
import { permissionProjectService } from '../../../../services';

class Content_CheckBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }
    render() {
        console.log("change",this.props.submitted)
        return (
            <div>
                {this.props.data &&
                    <div className="card square">
                        <div className="card-body">
                            <div className="row mt-4">
                                {
                                    this.props.data_checkbox &&
                                    <InputText className="col-lg-12 col-md-12 col-sm-12 col-12" isEmpty classLabel="fw-medium uni_text_6d30ab text-uppercase" label="ROLE" name="perm_project_task_name" value={this.props.data_checkbox.perm_project_task_name} onChange={this.props.onChange} submitted={this.props.submitted} />
                                }
                                {
                                    this.props.dataAdd &&
                                    <InputText className="col-lg-12 col-md-12 col-sm-12 col-12" isEmpty classLabel="fw-medium uni_text_6d30ab text-uppercase" label="ROLE" name="perm_project_task_name" value={this.props.dataAdd.perm_project_task_name} onChange={this.props.onChange} submitted={this.props.submitted} />
                                }
                            </div>
                            {
                                this.props.data && this.props.data.map((item) => (
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <label className="fw-medium uni_text_6d30ab text-uppercase"><Trans>{item.group_checkbox_name}</Trans></label>
                                            <div className="row">
                                                {
                                                    this.props.data_checkbox &&
                                                    item.list_children_checkbox.map((rows) => (
                                                        <InputCheckBox className="col-lg-4 col-md-6 col-sm-12" label={rows.checkbox_name} name={rows.checkbox_key} value={this.props.data_checkbox[rows.checkbox_key]} onChange={this.props.onChange} />
                                                    ))
                                                }
                                                {
                                                    this.props.dataAdd &&
                                                    item.list_children_checkbox.map((rows) => (
                                                        <InputCheckBox className="col-lg-4 col-md-6 col-sm-12" label={rows.checkbox_name} name={rows.checkbox_key} value={this.props.dataAdd[rows.checkbox_key]} onChange={this.props.onChange} />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }
            </div>
        )
    };
}
class Card_Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: false
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        },
            () => {
                permissionProjectService.permission_layout(this.props.token).then(
                    res => {
                        this.setState(
                            {
                                loading: false,
                                data: res['detail'],
                            }
                        );
                        this.forceUpdate();
                    },
                    err => {
                        this.props.showToast('error', err);
                    }
                )
            }
        )
    }

    render() {
        const { data } = this.props
        return (
            this.props.data &&
                this.props.data ? <Content_CheckBox submitted={this.props.submitted} data_checkbox={this.props.data} data={this.state.data} onChange={this.props.onChange} /> : <Content_CheckBox data={this.state.data} onChange={this.props.onChange} dataAdd={this.props.dataAdd} submitted={this.props.submitted}/>
        )
    }
}

class CardRole extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card_Content data={this.props.data} submitted={this.props.submitted} onChange={this.props.onChange} token={this.props.token} dataAdd={this.props.dataAdd} />
        )
    }
}
export default CardRole