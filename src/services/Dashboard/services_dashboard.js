import api from '../api';

export const dashboardService = {
    projectList,
    cashFlow,
    capitalStructure
}

function projectList(token, project_name, region_id, province_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'project_name': project_name, 'region_id': region_id, 'province_id': province_id };
    const url = api.getUrl(api.DASHBOARD_LIST_PROJECT, params)
    return api.handleRequest(url, requestOptions);
}

function cashFlow(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const url = api.getUrl(api.DASHBOARD_CASH_FLOW)
    return api.handleRequest(url, requestOptions);
}


function capitalStructure(token, project_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const body = { project_id }
    const url = api.getUrl(api.DASHBOARD_CAPITAL_STRUCTURE, body)
    return api.handleRequest(url, requestOptions);
}

