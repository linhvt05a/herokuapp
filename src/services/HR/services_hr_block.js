import api from '../api'

export const hrBlockService = {
    block,
    detailBlock,
    updateBlock,
    addBlock
};

function block(token, name, status, page) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };

    const params = {page, name, status};
    const url = api.getUrl( api.HR_OFFICE_GROUP,  params )
    return api.handleRequest(url, requestOptions);
}

function detailBlock(token, office_group_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };

    const params = {'office_group_id':office_group_id};
    const url = api.getUrl( api.HR_OFFICE_GROUP_DETAIL, params )
    return api.handleRequest(url, requestOptions);
}

function updateBlock(token, id, data) {
    const body = {
        'office_group_id': id,
        'office_id': data.office_id,
        'name': data.name,
        'status': data.active_flag,
        'note': data.note
    }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.HR_OFFICE_GROUP_UPDATE)
    return api.handleRequest(url, requestOptions);
}

function addBlock(token, data) {
    const body = {
        'office_id': data.office_id,
        'name': data.name,
        'status': data.active_flag,
        'note': data.note
    }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.HR_OFFICE_GROUP_ADD)
    return api.handleRequest(url, requestOptions);
}

