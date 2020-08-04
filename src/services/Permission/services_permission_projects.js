import api from '../api'

export const permissionProjectService = {
    permission_list,
    permission_detail,
    permission_update,
    permission_layout,
    permission_add
}

function permission_layout(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };
    const params = {}
    const url = api.getUrl(api.PERMISSION_PROJECT_LAYOUT, params)
    return api.handleRequest(url, requestOptions);
}

function permission_list(token, search, page) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };
    const params = { 'page': page, 'name': search, 'limit': api.LIMIT };
    const url = api.getUrl(api.PERMISSION_PROJECT_LIST, params)
    return api.handleRequest(url, requestOptions);
}

function permission_detail(token, perm_project_task_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };
    const params = { 'perm_project_task_id': perm_project_task_id };
    const url = api.getUrl(api.PERMISSION_PROJECT_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}

function permission_update(token, data) {
    const body = data
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.PERMISSION_PROJECT_EDIT)
    return api.handleRequest(url, requestOptions);
}

function permission_add(token, data) {
    const body = {
        "perm_project_task_name": data.perm_project_task_name,
        "perm_edit_task_flag": data.perm_edit_task_flag ? data.perm_edit_task_flag : false,
        "perm_delete_task_flag": data.perm_delete_task_flag ? data.perm_delete_task_flag : false,
        "perm_edit_assign_task_flag": data.perm_edit_assign_task_flag ? data.perm_edit_assign_task_flag : false,
        "perm_delete_owner_task_flag": data.perm_delete_owner_task_flag ? data.perm_delete_owner_task_flag : false,
        "perm_edit_owner_comment_flag": data.perm_edit_owner_comment_flag ? data.perm_edit_owner_comment_flag : false,
        "perm_add_task_flag": data.perm_add_task_flag ? data.perm_add_task_flag : false,
        "perm_manage_subtask_flag": data.perm_manage_subtask_flag ? data.perm_manage_subtask_flag : false,
        "perm_manage_relation_flag": data.perm_manage_relation_flag ? data.perm_manage_relation_flag : false,
        "perm_add_watcher_flag": data.perm_add_watcher_flag ? data.perm_add_watcher_flag : false,
        "perm_view_task_flag": data.perm_view_task_flag ? data.perm_view_task_flag : false,
        "perm_add_comment_flag": data.perm_add_comment_flag ? data.perm_add_comment_flag : false,
        "perm_delete_comment_flag": data.perm_delete_comment_flag ? data.perm_delete_comment_flag : false

    }
    console.log(body)
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.PERMISSION_PROJECT_ADD)
    return api.handleRequest(url, requestOptions);
}