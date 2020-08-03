import api from '../api';

export const selectService = {
    getSelectBlock,
    getSelectOffice,
    getSelectDeparment,
    getSelectEmployee,
    getSelectPosition,
    getSelectInvestorPosition
}

function getSelectBlock(token, office_id, position_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { office_id, position_id }
    const url = api.getUrl(api.SELECT_BLOCK, params)
    return api.handleRequest(url, requestOptions);
}

function getSelectOffice(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const url = api.getUrl(api.SELECT_OFFICE)
    return api.handleRequest(url, requestOptions);

}
function getSelectDeparment(token, office_id, block_id, position_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { office_id, block_id, position_id }
    const url = api.getUrl(api.SELECT_DEPARTMENT, params)
    return api.handleRequest(url, requestOptions);

}
function getSelectEmployee(token, block_id, department_id, position_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { department_id, block_id, position_id }
    const url = api.getUrl(api.SELECT_EMPLOYEE, params)
    return api.handleRequest(url, requestOptions);

}
function getSelectPosition(token, office_id, block_id, department_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const params = { office_id, block_id, department_id }
    const url = api.getUrl(api.SELECT_POSITION, params)
    return api.handleRequest(url, requestOptions);

}

function getSelectInvestorPosition(token) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };
    const url = api.getUrl(api.SELECT_INVESTOR_POSITION)
    return api.handleRequest(url, requestOptions);

}