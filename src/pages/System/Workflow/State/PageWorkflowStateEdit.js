import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import {
    CardHeader, Spinner
} from '../../../../components/common';
import { mappingListToSelectList } from '../../../../components/input/index';
import './PageWorkflowState.css'
import CardState from './Layout/CardState';
import CardTask from './Layout/CardTask';
import { DialogTrash } from '../../../../components/dialogs/index'
import * as Utils from '../../../../utils/Utils'
import { sysWorkingProcessService, selectService } from "../../../../services";

class Card_content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskDeleteModel: null
        }
    }
    onShowDelete = (task_id) => {
        let staskLocal = this.props.data.staskLocal;
        var model = staskLocal.find((item) => item.task_id === task_id)
        this.setState({
            taskDeleteModel: model
        })
    }
    onHideDelete = (e) => {
        this.setState({
            taskDeleteModel: null
        })
    }
    onDeleteTask = (e) => {
        this.props.onDeleteTask(this.state.taskDeleteModel.task_id)
        this.onHideDelete()
    }

    render() {
        return (
            <div className="card editEmployee">
                <div className="card-body">
                    <div className="row">
                        <CardState data={this.props.data} submitted={this.props.submitted} departments={this.props.departments} parentStates={this.props.parentStates} onChange={this.props.handleChange} />
                        <CardTask data={this.props.data} submitted={this.props.submitted} departments={this.props.departments} onClick={this.props.onAddTask} onShowDelete={this.onShowDelete} onChange={this.props.handleChangeTask} />
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 text-right">
                            <button type="button" className="btn-uni-cancel mr-3" onClick={this.props.handleBack}><Trans>Cancel</Trans></button>
                            <button type="button" className="btn-uni-purple" id="add_tempate_state" onClick={this.props.handlSave}><Trans>Save</Trans></button>
                        </div>
                    </div>
                </div>
                {this.state.taskDeleteModel && <DialogTrash visible={this.state.taskDeleteModel}
                    label={this.state.taskDeleteModel.name}
                    close={this.onHideDelete} onSave={this.onDeleteTask} />}
            </div>
        )
    }
}

class PageWorkflowStateEdit extends Component {
    constructor() {
        super();
        this.state = {
            parentStates: null,
            departments: [],
            data: {
                departments: [],
                isStart: true,
                stask: [],
                staskLocal: []
            },
            listTaskDefault: [],
            submitted: false,
            loading: false
        };
    }
    componentDidMount() {
        this.getWorkflowStateDetail()
        this.getListTemplateState()
        this.getSelectDepartment()
    }

    getListTemplateState = () => {
        sysWorkingProcessService.getStateParentList(this.props.user.token, this.props.params.id, this.props.search.group_id, this.props.params.state_id, 100).then(
            res => {
                var parentStates = mappingListToSelectList(res['detail'], 'state_id', 'state_name')
                parentStates = Utils.deleteModelInList(parentStates, 'value', this.props.params.state_id)
                parentStates.unshift({ 'value': '', 'label': '-- Select --' })
                if (parentStates.length >= 1) {
                    this.setState({ parentStates });
                    this.forceUpdate();
                }
            },
            err => {
                this.props.showToast('error', err);
            }
        );
    }
    getSelectDepartment = () => {
        selectService.getSelectDeparment(this.props.user.token, this.props.user.office_id).then(
            res => {
                var departments = mappingListToSelectList(res['detail'], 'department_id', 'department_name')
                // departments.unshift({ label: "-- Select Department --", value: "" })
                this.setState({ departments })
                this.forceUpdate();
            },
            err => {
                this.props.showToast('error', err);
            }
        )
    }
    getWorkflowStateDetail = () => {
        sysWorkingProcessService.stateDetail(this.props.user.token, this.props.params.state_id).then(
            res => {
                var data = res['detail']
                for (var i = 0; i < data['name'].length; i++) {
                    if (data['name'][i]['state_name_language_id'] === 1) {
                        data['state_name_vi'] = data['name'][i]['state_name']
                    } else {
                        data['state_name_en'] = data['name'][i]['state_name']
                    }
                }
                data['staskLocal'] = Utils.copyList(data['stask'])
                data['departments'] = mappingListToSelectList(res['detail']['departments'], 'department_id', 'department_name')
                this.setState({ data })
            },
            err => {
                this.props.showToast('error', err);
            }
        )
    }
    handleChange = (name, value) => {
        var data = this.state.data;
        if (name === "parent_id") {
            data['parent_id'] = value.value
        } else if (name === "departments") {
            data['departments'] = value
        } else {
            data[name] = value;
        }
        this.setState({ data: data });
    }


    handleChangeTask = (task_id, name, value) => {
        var data = this.state.data
        var task = data.staskLocal.find((item) => item.task_id === task_id)
        if (task) {
            if (name === "task_estimated_master_timeline_unit") {
                task['task_estimated_master_timeline_unit'] = value.value
            } else {
                task[name] = value
            }
        }
        this.setState({ data: data })
    }

    onAddTask = (e) => {
        let data = this.state.data
        var model = {
            isAdd:true,
            task_id: Date.now(),
            task_name: '',
            task_estimated_duration: 0,
            task_estimated_master_timeline_unit: 1
        }
        data.staskLocal.push(model)
        this.setState({
            data: data,
            submitted: false
        })
    }

    onDeleteTask = (id) => {
        let data = this.state.data
        data['staskLocal'] = Utils.deleteModelInList(this.state.data['staskLocal'], 'task_id', id)
        this.setState({
            data: data
        });
    }

    handleBack = (e) => {
        window.location = "/system/workflow/state/" + this.props.params.id
    }

    handlSave = (e) => {
        this.setState({ submitted: true });
        let data = this.state.data;
        // stop here if form is invalid
        if (!(data.state_name_vi && data.state_name_en)) {
            return;
        }
        if (data['staskLocal'].length > 0) {
            for (var i = 0; i < data['staskLocal'].length; i++) {
                if (!data['staskLocal'][i].task_name && data['staskLocal'][i].task_name.trim() === '') {
                    return;
                }
            }
        }

        sysWorkingProcessService.stateEdit(this.props.user.token, this.props.params.id, this.props.search.group_id, this.state.data).then(
            res => {
                this.setState({ loading: false });
                this.props.showToast('success', "Update successful");
                window.location = "/system/workflow/state/" + this.props.params.id
            },
            err => {
                this.setState({ loading: false })
                this.props.showToast('error', err);
            }
        )
    }
    render() {
        let value = " - ID:" + this.props.params.id;
        return (
            <div>
                <CardHeader label="State Management" labelEnd={value} />
                <Card_content data={this.state.data} submitted={this.state.submitted}
                    parentStates={this.state.parentStates}
                    departments={this.state.departments}
                    handleChange={this.handleChange}
                    onAddTask={this.onAddTask}
                    handleBack={this.handleBack}
                    handlSave={this.handlSave}
                    handleChangeTask={this.handleChangeTask}
                    onDeleteTask={this.onDeleteTask}
                    showToast={this.props.showToast} />
            </div>
        )
    }
}
export default PageWorkflowStateEdit;