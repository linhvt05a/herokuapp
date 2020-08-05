import api from '../api';

export const dashboardService = {
    getRegionList,
    getProvinceList,
    getTypeList,
    getStatusList
}

function getRegionList(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const url = api.getUrl(api.DASHBOARD_REGION_LIST);
    return api.handleRequest(url, requestOptions);
}

function getProvinceList(token, region_id, search_name, has_project, limit, lang) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = {'region_id': region_id, 'search_name': search_name, 'has_project': has_project, 'limit': limit, 'lang': lang};
    const url = api.getUrl(api.DASHBOARD_PROVINCE_LIST, params);
    return api.handleRequest(url, requestOptions);
}

function getTypeList(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const url = api.getUrl(api.DASHBOARD_TYPE_LIST);
    return api.handleRequest(url, requestOptions);
}

function getStatusList(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const url = api.getUrl(api.DASHBOARD_STATUS_LIST);
    return api.handleRequest(url, requestOptions);
}


