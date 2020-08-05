import api from '../api';

export const dashboardService = {
    getRegionList,
    getProvinceList,
    getTypeList,
    getStatusList,
    getProjectList
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

function getProjectList(token, search_name, search_alphabet, setting_type, distribution_type_id, project_id, status_id, province_id, region_id, distribution_name, open_sale_id, is_full_project, has_map_style) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = {'search_name': search_name, 'search_alphabet': search_alphabet, 'setting_type': setting_type, 'distribution_type_id': distribution_type_id,
                    'project_id': project_id, 'status_id': status_id, 'province_id': province_id, 'region_id': region_id,
                    'distribution_name': distribution_name, 'open_sale_id': open_sale_id, 'is_full_project': is_full_project, 'has_map_style': has_map_style};
    const url = api.getUrl(api.DASHBOARD_PROJECT_LIST, params);
    return api.handleRequest(url, requestOptions);
}