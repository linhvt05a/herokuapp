import api from '../api';

export const infoContactGroupService = {
    contactGroupList,
    removeContactGroup,
    contactGroupDetail,
    editContactGroup,
    addContactGroup,
    contactGroupListShorten,
    removeContactGroupTab,
    addContactGroupTab,
    addEmployeeContactGroupTab,
    removeEmployeeContactGroupTab,
}


function contactGroupList(token, page, search, limit) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'page':page, 'name':search, 'limit': limit};
    const url = api.getUrl(api.INFO_CONTACT_GROUP_LIST, params)
    return api.handleRequest(url, requestOptions);
}

function removeContactGroup(token, body) {
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.INFO_CONTACT_GROUP_DELETE);
    return api.handleRequest(url, requestOptions);
}


function contactGroupDetail(token, id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = {'contact_group_id':id};
    const url = api.getUrl(api.INFO_CONTACT_GROUP_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}

function addContactGroup(token, data) {
    const body = {
        'name': data.name,
        'description': data.description,
    }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.INFO_CONTACT_GROUP_ADD);
    return api.handleRequest(url, requestOptions);
}

function editContactGroup(token, data) {
    const body = {
        'contact_group_id': data.contact_group_id,
        'name': data.name,
        'description': data.description,
    }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.INFO_CONTACT_GROUP_EDIT)
    return api.handleRequest(url, requestOptions);
}

function addContactGroupTab(token, data) {
    const body = {
        'contact_group_id': data.contact_group_id,
        'added_contact_id': data.added_contact_id,
    }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.INFO_CONTACT_GROUP_ADD_TAB)
    return api.handleRequest(url, requestOptions);
}

function removeContactGroupTab(token, body) {
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.INFO_CONTACT_GROUP_DELETE_TAB)
    return api.handleRequest(url, requestOptions);
}

function contactGroupListShorten(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const url = api.getUrl(api.INFO_CONTACT_GROUP_LIST_SHORTEN)
    return api.handleRequest(url, requestOptions);
}

function addEmployeeContactGroupTab(token, data) {

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: {...data}
    };

    const url = api.getUrl(api.INFO_CONTACT_GROUP_PERMISSION_ADD_TAB)
    return api.handleRequest(url, requestOptions);
}


function removeEmployeeContactGroupTab(token, data) {

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: {...data}
    };

    const url = api.getUrl(api.INFO_CONTACT_GROUP_PERMISSION_DELETE_TAB)
    return api.handleRequest(url, requestOptions);
}