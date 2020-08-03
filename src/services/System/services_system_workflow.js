import api from '../api';
import * as Utils from '../../utils/Utils'
export const sysWorkingProcessService = {
    workingProcessAdd,
    getListProjectPeriod,
    getWorkingProjectDetail,
    workingProcessEdit,
    getWorkingProjectList,
    getStateList,
    stateAdd,
    stateDetail,
    stateEdit,
    getStateParentList
};

function getWorkingProjectList(token, search, page) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'page': page, 'name': search, 'limit': api.LIMIT };
    const url = api.getUrl(api.SYS_WORKING_PROCESS_LIST, params)
    return api.handleRequest(url, requestOptions);
}

function getWorkingProjectDetail(token, id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'workflow_template_id': id };
    const url = api.getUrl(api.SYS_WORKING_PROCESS_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}

function getListProjectPeriod(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const url = api.getUrl(api.SYS_LIST_PROJECT_PERIOD)
    return api.handleRequest(url, requestOptions);
}

function workingProcessAdd(token, data) {

    const name = {
        "1": data.name_vi,
        "2": data.name_en
    }

    const body = {
        "project_period_id": data.project_period_id,
        "name": name,
        "number_no": parseInt(data.number_no),
        "date_issued": data.date_issued,
        "approval_user": data.approval_user,
        "version": data.version,
        "active_flag": data.active_flag
    }
    console.log(body)
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.SYS_WORKING_PROCESS_ADD)
    return api.handleRequest(url, requestOptions);
}

function workingProcessEdit(token, data, id) {
    const name = {
        "1": data.name_vi,
        "2": data.name_en
    }

    const body = {
        "workflow_template_id": parseInt(id),
        "project_period_id": data.project_period_id,
        "name": name,
        "number_no": parseInt(data.number_no),
        "date_issued": data.date_issued,
        "approval_user": data.approval_user,
        "version": data.version,
        "active_flag": data.active_flag
    }
    console.log(body)
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.SYS_WORKING_PROCESS_EDIT)
    return api.handleRequest(url, requestOptions);
}

function getStateList(token, template_id, group_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'template_id': template_id, 'group_id': group_id };
    const url = api.getUrl(api.SYS_STATE_LIST, params)
    return api.handleRequest(url, requestOptions);
}

function stateAdd(token, template_id, group_id, data) {
    const { departments, state_name_en, state_name_vi, parent_id, state_condition, staskLocal } = data
    var tasks = []
    for (var i = 0; i < staskLocal.length; i++) {
        if (staskLocal[i].isAdd) {
            delete staskLocal[i].isAdd
            delete staskLocal[i].task_id
        }
        staskLocal[i].task_estimated_duration = parseFloat(staskLocal[i].task_estimated_duration)
        tasks.push(staskLocal[i])
    }
    var departmentArray = Utils.convertListToArrayId(departments, 'value')
    const body = {
        'template_id': parseInt(template_id), 'group_id': parseInt(group_id), parent_id,
        state_name_en, state_name_vi, state_condition,
        'departments': departmentArray, tasks
    }
    if (group_id === "") {
        delete body['group_id']
    }
    if (parent_id === undefined || parent_id === "") {
        delete body['parent_id']
    }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };
    console.log(body)
    const url = api.getUrl(api.SYS_STATE_ADD)
    return api.handleRequest(url, requestOptions);
}
function stateEdit(token, template_id, group_id, data) {
    const { departments, state_name_en, state_name_vi, state_id, parent_id, state_condition, staskLocal } = data
    var tasks = []
    for (var i = 0; i < staskLocal.length; i++) {
        if (staskLocal[i].isAdd) {
            delete staskLocal[i].isAdd
            delete staskLocal[i].task_id
        }
        staskLocal[i].task_estimated_duration = parseFloat(staskLocal[i].task_estimated_duration)
        tasks.push(staskLocal[i])
    }
    var departmentArray = Utils.convertListToArrayId(departments, 'value')
    const body = {
        'template_id': parseInt(template_id), 'group_id': parseInt(group_id), parent_id,
        state_name_en, state_name_vi, state_condition,
        'departments': departmentArray, tasks, state_id
    }
    if (group_id === "") {
        delete body['group_id']
    }
    if (parent_id === undefined || parent_id === "") {
        delete body['parent_id']
    }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };
    console.log(body)
    const url = api.getUrl(api.SYS_STATE_EDIT)
    return api.handleRequest(url, requestOptions);
}
function getStateParentList(token, template_id, group_id, state_id, limit, name, page) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { template_id, group_id, state_id, name, page, 'limit': limit ? limit : api.limit };
    const url = api.getUrl(api.SYS_STATE_PARENT_LIST, params)
    return api.handleRequest(url, requestOptions);

}
function stateDetail(token, state_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'state_id': state_id };
    const url = api.getUrl(api.SYS_STATE_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}
