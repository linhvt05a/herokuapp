import api from '../api';

export const infoShareholderService = {
    shareholderList,
    shareholderDetail,
    addUpdateShareholder,
    shareHolderTypeList,
    shareholderTypes,
    deleteDocument,
    deleteShareholderContact,
}
function shareHolderTypeList(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const url = api.getUrl(api.INFO_SHARE_HOLDER_TYPE)
    return api.handleRequest(url, requestOptions);
}


function shareholderTypes(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const url = api.getUrl(api.INFO_SHAREHOLDER_TYPES)
    return api.handleRequest(url, requestOptions);
}

function shareholderList(token, page, search, group, limit) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'page': page, 'share_holder_name': search, 'share_holder_type_id': group, 'limit': limit ? limit : api.LIMIT };
    const url = api.getUrl(api.INFO_SHAREHOLDER_LIST, params)
    return api.handleRequest(url, requestOptions);
}

function shareholderDetail(token, id, tab_include = []) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = tab_include && tab_include.length > 0 ?
        { 'shareholder_id': id, 'tab_include': tab_include }
        : { 'shareholder_id': id };

    const url = api.getUrl(api.INFO_SHAREHOLDER_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}

function addUpdateShareholder(token, data) {

    // console.log("The data post", data);

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: { ...data }
    };

    const url = api.getUrl(api.INFO_SHAREHOLDER_ADD_EDIT)
    return api.handleRequest(url, requestOptions);
}

function deleteDocument(token, data) {

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: { ...data }
    };

    const url = api.getUrl(api.INFO_SHAREHOLDER_DELETE_DOCUMENT)
    return api.handleRequest(url, requestOptions);
}


function deleteShareholderContact(token, data) {

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: { ...data }
    };

    const url = api.getUrl(api.INFO_SHAREHOLDER_DELETE_CONTACT)
    return api.handleRequest(url, requestOptions);

}


