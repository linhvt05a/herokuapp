import api from '../api';

export const projectService = {
    projectList,
    projectDetail,
    shortenList,
    projectStatusList,
    projectTypeList,
    projectTimeLineDepartments,
    projectTimeLineGroups,
    projectTimeLineStates,
    projectTimeline,
    projectFinancielIndicator,
    projectShareholderStructure,
    projectCashFlow,
    projectLegal,
    projectDesign,
    projectCurrencyList,
    projectNewList,
    projectNewsDetail,
    projectNewsEdit,
    projectNewsAdd,
    projectDelete,
    projectTaskList,
    projectInternalTask,
    projectWorkFlow,
    projectPeriod,
    projectModel,
    projectInvestor, 

    sellopenList,
    bankingList,
    salepolicyList,

}
function projectInvestor(token){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const url = api.getUrl(api.PROJECT_INVESTOR)
    return api.handleRequest(url, requestOptions);
}

function projectModel(token){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const url = api.getUrl(api.PROJECT_MODEL)
    return api.handleRequest(url, requestOptions);
}
function projectPeriod(token){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const url = api.getUrl(api.SYS_LIST_PROJECT_PERIOD)
    return api.handleRequest(url, requestOptions);
}
function projectWorkFlow(token){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const url = api.getUrl(api.PROJECT_LIST_WORK_FLOW)
    return api.handleRequest(url, requestOptions);
}
function projectDetail(token, project_id, tab_include){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {project_id,tab_include};
    const url = api.getUrl(api.PROJECT_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}
function projectTaskList(token, project_id){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {project_id};
    const url = api.getUrl(api.INTERNAL_PROJECT_TASK_LIST, params)
    return api.handleRequest(url, requestOptions);
}
function projectInternalTask(token, project_id){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {project_id};
    const url = api.getUrl(api.INTERNAL_PROJECT_TASK, params)
    return api.handleRequest(url, requestOptions);
}

function projectDelete (token,project_id,project_news_id){
    project_id=  parseInt(project_id)
    project_news_id = parseInt(project_news_id)
    const body = {project_id, project_news_id}

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };
    const url = api.getUrl(api.PROJECT_NEWS_DELETE)
    return api.handleRequest(url, requestOptions);
}
function projectNewsAdd (token, project_id,data) {
    const {project_news_title,project_news_content,project_news_public_flag} = data
    project_id=  parseInt(project_id)
    const body = {
        project_id, 'title':project_news_title,'content':project_news_content,'public_flag':project_news_public_flag
    }

    console.log(body)
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.PROJECT_NEWS_ADD)
    return api.handleRequest(url, requestOptions);
}
function projectNewsEdit(token, data){
    const {project_news_id,project_news_title,project_news_content,project_news_public_flag} = data
    const body = {
        project_news_id,project_news_title,project_news_content,project_news_public_flag
    }
console.log(body)
    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.PROJECT_NEWS_EDIT)
    return api.handleRequest(url, requestOptions);
}

function projectNewsDetail(token, project_news_id){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {project_news_id};
    const url = api.getUrl(api.PROJECT_NEWS_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}
function projectNewList(token, project_id, name, page){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {project_id, name, page};
    const url = api.getUrl(api.PROJECT_NEWS_LIST, params)
    return api.handleRequest(url, requestOptions);
}
function projectList(token, project_name, status_id, setting_type_id, page, limit, region_id, province_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { project_name, status_id, setting_type_id, page, 'limit': limit ? limit : api.LIMIT, region_id, province_id };
    const url = api.getUrl(api.PROJECT_LIST, params)
    return api.handleRequest(url, requestOptions);
}
function projectStatusList(token, page, limit) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { page, 'limit': limit ? limit : api.LIMIT };
    const url = api.getUrl(api.PROJECT_STATUS_LIST, params)
    return api.handleRequest(url, requestOptions);
}
function projectTypeList(token, page, limit) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { page, 'limit': limit ? limit : api.LIMIT };
    const url = api.getUrl(api.PROJECT_TYPE_LIST, params)
    return api.handleRequest(url, requestOptions);
}
function shortenList(token, name, page, limit) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { 'name': name, 'page': page, 'limit': limit ? limit : api.LIMIT };
    const url = api.getUrl(api.PROJECT_LIST_SHORTEN, params)
    return api.handleRequest(url, requestOptions);
}

function projectTimeLineDepartments(token, name) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { name };
    const url = api.getUrl(api.PROJECT_TIMELINE_DEPARMENTS, params)
    return api.handleRequest(url, requestOptions);
}
function projectTimeLineGroups(token, project_id, department_code) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { project_id, department_code };
    const url = api.getUrl(api.PROJECT_TIMELINE_GROUPS, params)
    return api.handleRequest(url, requestOptions);
}
function projectTimeLineStates(token, project_id, department_code, group_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { project_id, department_code, group_id };
    const url = api.getUrl(api.PROJECT_TIMELINE_STATE, params)
    return api.handleRequest(url, requestOptions);
}

//department_code : legal or design 
function projectTimeline(token, project_id, department_code, group_id, state_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { project_id, department_code, group_id, state_id }
    const url = api.getUrl(api.DASHBOARD_PROJECT_TIME_LINE, params)
    return api.handleRequest(url, requestOptions);
}

function projectFinancielIndicator(token, project_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { project_id }
    const url = api.getUrl(api.PROJECT_FINANCIAL_INDICATOR, params)
    return api.handleRequest(url, requestOptions);
}
function projectShareholderStructure(token, project_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { project_id }
    const url = api.getUrl(api.PROJECT_SHAREHOLDER_STRUCTURE, params)
    return api.handleRequest(url, requestOptions);
}
function projectCashFlow(token, project_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { project_id }
    const url = api.getUrl(api.PROJECT_CASHFLOW, params)
    return api.handleRequest(url, requestOptions);
}
function projectLegal(token, project_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { project_id }
    const url = api.getUrl(api.PROJECT_LEGAL, params)
    return api.handleRequest(url, requestOptions);
}

function projectDesign(token, project_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { project_id }
    const url = api.getUrl(api.PROJECT_DESIGN, params)
    return api.handleRequest(url, requestOptions);
}
function projectCurrencyList(token, page, limit) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { page, 'limit': limit ? limit : api.LIMIT }
    const url = api.getUrl(api.PROJECT_CURRENCY_LIST, params)
    return api.handleRequest(url, requestOptions);
}

// sell open list project
function sellopenList(token, project_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { project_id };
    const url = api.getUrl(api.PROJECT_SELLOPEN_LIST, params)
    return api.handleRequest(url, requestOptions);
}

// sell open list project
function bankingList(token, project_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { project_id };
    const url = api.getUrl(api.PROJECT_BANKING_LIST, params)
    return api.handleRequest(url, requestOptions);
}

// sale policy list project
function salepolicyList(token, project_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { project_id };
    const url = api.getUrl(api.PROJECT_SALE_POLICY_LIST, params)
    return api.handleRequest(url, requestOptions);
}
