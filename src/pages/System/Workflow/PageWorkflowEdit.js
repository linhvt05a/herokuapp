import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import {
    Pagination, CardHeader, Spinner
} from '../../../components/common';
import CardInfo from './Layout/CardInfo';
import CardTemplate from './Layout/CardTemplate';
import { DialogTemplateEdit } from '../../../components/dialogs/index';
import { sysWorkingProcessService } from "../../../services/index";
import { mappingListToSelectList } from '../../../components/input';

class Card_content extends Component {
    render() {
        return (
            <div className="card square">
                <div className="card-body">
                    <form method="post" autocomplete="off" id="formTemplate">
                        <CardInfo disabled={true} submitted={this.props.submitted} data={this.props.data} handleChange={this.props.handleChange} list={this.props.list} />
                        <div className="row mt-2">
                            <div className="col-12">
                                <button type="button" className="btn-uni-purple " id="btn-submit-template" style={{ float: "right" }} onClick={this.props.handleEdit}>{this.props.label}</button>
                                <button type="button" className="btn-uni-cancel mr-3" style={{ float: "right" }} onClick={this.props.handleBack}>Quay Lại</button>
                            </div>
                        </div>
                        <CardTemplate datas={this.props.templates} onClickTemplateEdit={this.props.onClickTemplateEdit} />
                    </form>
                </div>
            </div>
        )
    }
}
class PageWorkflowEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            editTitleTemplate: 'Add Template',
            showEditTemplateData: null,
            templates: [],
            submitted: false,
            loading: false,
            list: null
        };
    }

    handleBack = (e) => {
        window.location = '/system/workflow'
    }


    onClickTemplateShowEdit = (data) => {
        this.setState({ showEditTemplateData: data.list_workflow_template_group_name })
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

    getWorkingProjectDetail = () => {
        this.setState(
            {
                loading: true,
            },
            () => {
                sysWorkingProcessService.getWorkingProjectDetail(this.props.user.token, this.props.params.id).then(
                    res => {
                        var data = res['detail']
                        if (!data.list_workflow_template_name) {
                            for (var i = 0; i < data.list_workflow_template_name.length; i++) {
                                if (data.list_workflow_template_name[i].workflow_template_language_id === 1) {
                                    data.name_vi = data.list_workflow_template_name[i].workflow_template_name
                                } else {
                                    data.name_en = data.list_workflow_template_name[i].workflow_template_name
                                }
                            }
                        }
                        this.setState({
                            loading: false,
                            data: data
                        });
                    },
                    err => {
                        this.setState({ loading: false })
                        this.props.showToast('error', err);
                    }
                );
            }
        );
    }

    handleChange = (name, value) => {
        let data = this.state.data;
        if (name === "project_period_id") {
            data['project_period_id'] = value.value
        } else if (Number(name) || name === 0) {
            data.list_workflow_template_name[name].workflow_template_name = value;
        } else {
            data[name] = value;
        }
        this.setState({ data: data });
    }

    handleEdit = (e) => {
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
                sysWorkingProcessService.workingProcessEdit(this.props.user.token, this.state.data, this.props.params.id).then(
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

    onCloseTemplate = (e) => {
        this.setState({ showEditTemplateData: null })
    }

    onSaveTemplate = () => {
        console.log(this.state.showEditTemplateData)
        this.props.showToast('success', "Cập nhật thành công Todo api");
        this.onCloseTemplate()
    }

    componentDidMount() {
        this.getListProjectPeriod()
        this.getWorkingProjectDetail()
    }
    render() {
        return (
            <div>
                <CardHeader label="system_template" />
                <Card_content
                    list={this.state.list}
                    data={this.state.data}
                    handleBack={this.handleBack}
                    templates={this.state.data.list_workflow_template_group}
                    submitted={this.state.submitted}
                    onClickTemplateEdit={this.onClickTemplateShowEdit}
                    handleChange={this.handleChange} handleEdit={this.handleEdit}
                    label="Update"
                />
                {this.state.loading && <Spinner />}

                {this.state.showEditTemplateData &&
                    <DialogTemplateEdit visible={true} title={this.state.editTitleTemplate}
                        onClose={this.onCloseTemplate} onSave={this.onSaveTemplate} data={this.state.showEditTemplateData}
                    />}
            </div>
        )
    }
}

export default PageWorkflowEdit;
