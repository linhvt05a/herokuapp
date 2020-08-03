import api from '../api'

export const hrDepartmentService = {
    department,
    detailDepartment,
    addDepartment,
    updateDepartment
};


function department(token, name, status, page) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };

    const params = {page, name, status};
    const url = api.getUrl(api.HR_DEPARTMENNT, params)
    return api.handleRequest(url, requestOptions);
}

function detailDepartment(token, department_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };

    const params = {'department_id':department_id};
    const url = api.getUrl(api.HR_DEPARTMENNT_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}

function addDepartment(token, data) {
    const body = {
        'office_id': data.office_id,
        'office_group_id': data.office_group_id,
        'name': data.name,
        'status': data.active_flag ,
        'note': data.note,
    }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.HR_DEPARTMENNT_ADD)
    return api.handleRequest(url, requestOptions);
}

function updateDepartment(token, department_id, data) {
    const body = {
        'department_id': department_id,
        'office_group_id': data.office_group_id,
        'name': data.name,
        'status': data.active_flag ,
        'note': data.note,
    }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.HR_DEPARTMENNT_UPDATE)
    return api.handleRequest(url, requestOptions);
}
