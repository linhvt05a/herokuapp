import api from '../api';

export const sysDocumentService = {
    documentTypeList,
    documentTypeDetail,
    documentTypeEdit,
    documentTypeAdd
};

function documentTypeList(token,search,page) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'page':page, 'name':search, 'limit': api.LIMIT};
    const url = api.getUrl(api.SYS_DOCUMENT_TYPE_LIST, params)
    return api.handleRequest(url, requestOptions);
}

function documentTypeDetail(token,id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'document_type_id':id};
    const url = api.getUrl(api.SYS_DOCUMENT_TYPE_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}

function documentTypeEdit(token,document_type_id,name,code) {
    const body = {document_type_id, name, code}
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.SYS_DOCUMENT_TYPE_EDIT)
    return api.handleRequest(url, requestOptions);
}

function documentTypeAdd(token,name, code) {
    const body = {name, code}
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: JSON.stringify(body)
    };

    const url = api.getUrl(api.SYS_DOCUMENT_TYPE_ADD)
    return api.handleRequest(url, requestOptions);
}
