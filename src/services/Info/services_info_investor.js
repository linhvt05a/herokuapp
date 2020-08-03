import api from '../api'

export const infoInvestorService = {
    getInvestorList,
    getInvestorListDetail,
    getInvestorSettingTypeList,
    delInvestorContact,
    editInvestor,
    getDocumentTypeList
}

function getDocumentTypeList(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };
    const url = api.getUrl(api.INFO_DOCUMENT_TYPE_LIST)
    return api.handleRequest(url, requestOptions);
}

function getInvestorList(token, page, investor_name, investor_setting_type_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };
    const limit = 6
    const params = { page, investor_name, investor_setting_type_id, limit };
    const url = api.getUrl(api.INFO_INVESTOR_LIST, params)
    return api.handleRequest(url, requestOptions);
}
function getInvestorSettingTypeList(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };
    const url = api.getUrl(api.INFO_INVESTOR_SETTING_TYPE_LIST)
    return api.handleRequest(url, requestOptions);
}

function getInvestorListDetail(token, investor_id, tab_include) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token),
    };
    const params = { 'investor_id': investor_id, 'tab_include': tab_include };
    const url = api.getUrl(api.INFO_INVESTOR_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}

function delInvestorContact(token, data) {

    const body = {
        'investor_id': data.investor_id,
        'contact_id': data.contact_id,
    }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };
    const url = api.getUrl(api.INFO_INVESTOR_CONTACT_DELETE)
    return api.handleRequest(url, requestOptions);
}


function editInvestor(token, data) {
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: {...data}
    };
    const url = api.getUrl(api.INFO_INVESTOR_EDIT)
    return api.handleRequest(url, requestOptions);
}
