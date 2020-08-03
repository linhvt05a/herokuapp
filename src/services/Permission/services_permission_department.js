import api from '../api'

export const permissionDepartmentService = {
    department, detailDepartment,
    departmentUpdate,
    DeleteDepartment,
    departmentAdd,
    departmentLayout
}
function departmentLayout(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };
    const params = {}
    const url = api.getUrl(api.DEPARTMENT_TASK_LAYOUT, params)
    return api.handleRequest(url, requestOptions);
}
function department(token, search, page, filter) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };

    const params = { 'page': page, 'name': search, 'department_id': filter, 'limit': api.LIMIT };
    const url = api.getUrl(api.DEPARTMENT_TASK_LIST, params)
    return api.handleRequest(url, requestOptions);
}
function detailDepartment(token, perm_department_task_id) {
    const requestOptions = {
        method: 'Get',
        headers: api.getHeader(token)
    }
    const params = { 'perm_department_task_id': perm_department_task_id }
    const url = api.getUrl(api.DEPARTMENT_TASK_DETAIL, params)
    return api.handleRequest(url, requestOptions)
}
function departmentUpdate(token, perm_department_task_id, data) {
    const { perm_edit_task_flag, perm_delete_task_flag, perm_edit_assign_task_flag, perm_delete_owner_task_flag,
        perm_edit_owner_comment_flag, perm_add_task_flag, perm_manage_subtask_flag, perm_manage_relation_flag,
        perm_add_watcher_flag, perm_view_task_flag, perm_add_comment_flag, perm_delete_comment_flag } = data

    const body = {
        perm_department_task_id, perm_edit_task_flag, perm_delete_task_flag, perm_edit_assign_task_flag, perm_delete_owner_task_flag,
        perm_edit_owner_comment_flag, perm_add_task_flag, perm_manage_subtask_flag, perm_manage_relation_flag,
        perm_add_watcher_flag, perm_view_task_flag, perm_add_comment_flag, perm_delete_comment_flag
    }
    for (var key in body) {
        if (!body[key]) {
            body[key] = false
        }
    }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };
    console.log(body)
    const url = api.getUrl(api.DEPARTMENT_TASK_EDIT)
    return api.handleRequest(url, requestOptions);
}
function DeleteDepartment(token, perm_department_task_id) {
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: {
            perm_department_task_id
        }
    };

    const url = api.getUrl(api.DEPARTMENT_TASK_DELETE);
    return api.handleRequest(url, requestOptions);
}
function departmentAdd(token, data) {
    const { perm_office_group_id, perm_department_id, perm_employee_id, perm_employee_position_id,
        perm_edit_task_flag, perm_delete_task_flag, perm_edit_assign_task_flag, perm_delete_owner_task_flag,
        perm_edit_owner_comment_flag, perm_add_task_flag, perm_manage_subtask_flag, perm_manage_relation_flag,
        perm_add_watcher_flag, perm_view_task_flag, perm_add_comment_flag, perm_delete_comment_flag } = data
    const body = {
        perm_office_group_id, perm_department_id, perm_employee_id, perm_employee_position_id,
        perm_edit_task_flag, perm_delete_task_flag, perm_edit_assign_task_flag, perm_delete_owner_task_flag,
        perm_edit_owner_comment_flag, perm_add_task_flag, perm_manage_subtask_flag, perm_manage_relation_flag,
        perm_add_watcher_flag, perm_view_task_flag, perm_add_comment_flag, perm_delete_comment_flag
    }
    for (var key in body) {
        if (!body[key]) {
            body[key] = false
        }
    }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };
    console.log(body)
    const url = api.getUrl(api.DEPARTMENT_TASK_ADD)
    return api.handleRequest(url, requestOptions);
}
