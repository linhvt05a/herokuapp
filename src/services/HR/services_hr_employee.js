import api from '../api';

export const hrEmployeeService = {
    employee,
    employeeProcessEdit,
    employeeWorkprocess,
    getEmployeeInfo,
    editEmployee,
    employeeAccountAdd,
    employeeAdd,
    getEmployeeAccountDetail,
    employeeAccountEdit
}

function employee(token, name, status, page) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };

    const params = { name, status, page, limit: api.LIMIT }
    const url = api.getUrl(api.HR_EMPLOYEE, params)
    return api.handleRequest(url, requestOptions);
}

function employeeProcessEdit(token, param) {
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: param
    };
    console.log(param)
    const url = api.getUrl(api.HR_EMPLOYEE_WORKPROCESS_EDIT)
    return api.handleRequest(url, requestOptions);
}

function employeeWorkprocess(token, employee_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };

    const params = { employee_id };
    const url = api.getUrl(api.HR_EMPLOYEE_WORKPROCESS_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}

function getEmployeeInfo(token, employee_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };

    const params = { employee_id };
    const url = api.getUrl(api.HR_EMPLOYEE_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}

function editEmployee(token, data, fileAvatar, fileUrl) {
    const { employee_id, full_name, birthday, address, province_id, district_id, ward_id, email } = data
    var mobile = data.mobile_1
    var phone = data.mobile_2
    var status = data.active_flag

    var avatar = null
    if (fileUrl) {
        avatar = {
            'file_name': fileAvatar.name,
            'file_url': fileUrl,
            'file_size': fileAvatar.size,
            'file_type': fileAvatar.type,
        }
    }
    const body = {
        employee_id, full_name, birthday, mobile, phone, address, email, status, province_id, district_id, ward_id, avatar
    }
    if (phone && phone.trim() === "") {
        delete body['phone']
    }
    if (avatar === null) {
        delete body['avatar']
    }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token, ''),
        body: body
    };
    const url = api.getUrl(api.HR_EMPLOYEE_EDIT)
    return api.handleRequest(url, requestOptions);
}

function employeeAccountAdd(token, employee_id, username, password, repeat_password) {
    const body = { employee_id, username, password, repeat_password }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };
    const url = api.getUrl(api.HR_EMPLOYEE_ACCOUNT_ADD)
    return api.handleRequest(url, requestOptions);
}

function getEmployeeAccountDetail(token, employee_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };

    const params = { employee_id };
    const url = api.getUrl(api.HR_EMPLOYEE_ACCOUNT_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}

function employeeAdd(token, infor, list_work_process, account, fileAvatar, fileUrl) {
    const { username, password, repeat_password } = account
    const { full_name, birthday, address, province_id, district_id, ward_id, email, gender } = infor
    var mobile = infor.mobile_1
    var phone = infor.mobile_2
    var status = infor.active_flag
    var avatar = null
    if (fileUrl) {
        avatar = {
            'file_name': fileAvatar.name,
            'file_url': fileUrl,
            'file_size': fileAvatar.size,
            'file_type': fileAvatar.type,
        }
    }
    const body = {
        username, password, repeat_password, full_name, birthday, address, province_id,
        district_id, ward_id, mobile, phone, status, avatar, list_work_process, email, gender
    }
    if (phone && phone.trim() === "") {
        delete body['phone']
    }
    if (avatar === null) {
        delete body['avatar']
    }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };
    const url = api.getUrl(api.HR_EMPLOYEE_ADD)
    return api.handleRequest(url, requestOptions);
}

function employeeAccountEdit(token, employee_id, data, selectedList) {
    const { username, is_staff, is_superuser, is_active } = data
    var new_employee_id = parseInt(data.new_employee_id)
    var employee_id = parseInt(employee_id)
    var list_selected_permission_group_id = []
    for (var i = 0; i < selectedList.length; i++) {
        list_selected_permission_group_id.push(selectedList[i].value)
    }

    const body = {
        employee_id, new_employee_id, username, is_staff, is_superuser, is_active, list_selected_permission_group_id
    }
    if (new_employee_id === employee_id) {
        delete body['new_employee_id']
    }
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };
    console.log(body)
    const url = api.getUrl(api.HR_EMPLOYEE_ACCOUNT_EDIT)
    return api.handleRequest(url, requestOptions);
}

