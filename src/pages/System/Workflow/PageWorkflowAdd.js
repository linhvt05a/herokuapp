import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import {
    Pagination, CardHeader, Spinner
} from '../../../components/common';
import CardInfo from './Layout/CardInfo';
import CardTemplate from './Layout/CardTemplate';
import { sysWorkingProcessService } from "../../../services/index";
import { mappingListToSelectList } from '../../../components/input';

class Card_content extends Component {
    render() {
        return (
            <div className="card square">
                <div className="card-body">
                    <form method="post" autocomplete="off" id="formTemplate">
                        <CardInfo submitted={this.props.submitted} data={this.props.data} handleChange={this.props.handleChange} list={this.props.list} />
                        <div className="row mt-2">
                            <div className="col-12">
                                <button type="button" className="btn-uni-purple " id="btn-submit-template" style={{ float: "right" }} onClick={this.props.handleAdd}><Trans>{this.props.label}</Trans></button>
                                <button type="button" className="btn-uni-cancel mr-3" style={{ float: "right" }} onClick={this.props.handleBack}>Quay Lại</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
class PageWorkflowAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            data: {},
            submitted: false,
            loading: false
        };
    }

    componentDidMount() {
        this.getListProjectPeriod()
    }

    handleBack = (e) => {
        window.location = '/system/workflow'
    }

    handleChange = (name, value) => {
        let data = this.state.data;
        data[name] = name === "project_period_id" ? value.value : value
        this.setState({
            data: data
        })
    }

    getListProjectPeriod = () => {
        sysWorkingProcessService.getListProjectPeriod(this.props.user.token).then(
            res => {
                var list = mappingListToSelectList(res['detail'], 'project_period_id', 'project_period_name')
                list.unshift({ label: "Select", value: "" })
                this.setState({
                    list: list
                })
            },
            err => {
                this.props.showToast('error', err);
            }
        )
    }


    handleAdd = (e) => {
        this.setState({ submitted: true });
        let data = this.state.data;
        // stop here if form is invalid
        if (!(data.name_en && data.name_vi && data.project_period_id && data.number_no && data.date_issued && data.approval_user && data.version)) {
            return;
        }
        this.setState(
            {
                loading: true,
            },
            () => {
                sysWorkingProcessService.workingProcessAdd(this.props.user.token, this.state.data).then(
                    res => {
                        this.setState({ loading: false });
                        this.props.showToast('success', res['detail']['message']);
                    },
                    err => {
                        this.setState({ loading: false })
                        this.props.showToast('error', err);
                    }
                )
            }
        );
    }

    render() {
        return (
            <div>
                <CardHeader label="system_template" />
                <Card_content
                    data={this.state.data}
                    list={this.state.list}
                    handleBack={this.handleBack}
                    submitted={this.state.submitted}
                    handleChange={this.handleChange} handleAdd={this.handleAdd}
                    label="Add"
                />
                {this.state.loading && <Spinner />}
            </div>
        )
    }
}

export default PageWorkflowAdd;
