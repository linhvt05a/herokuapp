import api from '../api';

export const workFlowService = {
    getMember,
    getProjectList,
    getFinanceNews,
    getFinanceList,
    getFinanceInfo

};

function getMember(token, projectId, page) {

    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'page': page, 'project_id': projectId};
    const url = api.getUrl(api.FINANCE_PROJECT_MEMBER, params)
    return api.handleRequest(url, requestOptions);
}

function getProjectList(token, projectName, regionId, provinceId) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'project_name': projectName, 'region_id': regionId, 'province_id': provinceId};
    const url = api.getUrl(api.FINANCE_PROJECT, params)
    return api.handleRequest(url, requestOptions);
}

function getFinanceNews( token, page, projectId, name, is_public){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'page': page, 'project_id': projectId , "name" : name, "is_public": is_public};
    const url = api.getUrl(api.FINANCE_PROJECT_NEWS, params)
    return api.handleRequest(url, requestOptions);
}

function getFinanceList(token, projectId, page) {

    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'page': page, 'project_id': projectId};
    const url = api.getUrl(api.FINANCE_LIST, params)
    return api.handleRequest(url, requestOptions);
}

function getFinanceInfo(token, projectId,tab_include) {

    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'project_id': projectId, 'tab_include': tab_include};
    const url = api.getUrl(api.FINANCE_INFO, params)
    return api.handleRequest(url, requestOptions);
}