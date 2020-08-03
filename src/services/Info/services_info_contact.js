import api from '../api';

export const infoContactService = {
    contactList,
    contactDetail,
    contactGroupListShorten,
    addContact,
    editContact,
    removeContact
}


function contactList(token, page, search, group, limit) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'page':page, 'name':search, 'contact_group_id': group, 'limit': limit};
    const url = api.getUrl(api.INFO_CONTACT_LIST, params)
    return api.handleRequest(url, requestOptions);
}

function contactGroupListShorten(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const url = api.getUrl(api.INFO_CONTACT_GROUP_SHORTEN)
    return api.handleRequest(url, requestOptions);
}


function contactDetail(token, id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = {'contact_id':id};
    const url = api.getUrl(api.INFO_CONTACT_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}

function addContact(token, data) {
    const body = {
        full_name: data.full_name,
        email_1: data.email_1,
        mobile_1: data.mobile_1,
        birthday: data.date_of_birth,
        department_name: data.department,
        gender: data.gender,
        list_contact_group_id: data.group,
        mobile_2: data.mobile_2,
        note: data.note,
        position_name: data.position,
        company_name: data.company,
        email_2: data.email_2,
    }

    if (data.hasOwnProperty('avatar')) {
        body['avatar'] = data.avatar;
    }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token, ''),
        body: body
    };

    const url = api.getUrl(api.INFO_CONTACT_ADD);
    return api.handleRequest(url, requestOptions);
}

function editContact(token, data) {
    const body = {
        contact_id: data.id,
        full_name: data.full_name,
        email_1: data.email_1,
        mobile_1: data.mobile_1,
        birthday: data.date_of_birth,
        department_name: data.department,
        gender: data.gender,
        list_new_contact_group_id: data.groupsAdd,
        list_delete_contact_group_id: data.groupsDelete,
        mobile_2: data.mobile_2,
        note: data.note,
        position_name: data.position,
        company_name: data.company,
        email_2: data.email_2,
    }

    if (data.hasOwnProperty('avatar')) {
        body['avatar'] = data.avatar;
    }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token, ''),
        body: body
    };

    const url = api.getUrl(api.INFO_CONTACT_EDIT);
    return api.handleRequest(url, requestOptions);
}

function removeContact(token, body) {
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.INFO_CONTACT_DELETE);
    return api.handleRequest(url, requestOptions);
}