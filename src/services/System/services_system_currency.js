import api from '../api';

export const sysCurrencyService = {
    currency,
    currencyAdd,
    currencyDetail,
    currencyEdit
};

function currency(token,search,page) {

    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'page':page, 'name':search, 'limit': api.LIMIT};
    const url = api.getUrl(api.SYS_CURRENCY_LIST, params)
    return api.handleRequest(url, requestOptions);
}

function currencyAdd(token,name,code) {
    const body = { name, code }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const params = {'name':name, 'code':code};
    const url = api.getUrl(api.SYS_CURRENCY_ADD, params);
    return api.handleRequest(url, requestOptions);
}

function currencyEdit(token,currency_id,name,code) {
    const body = { currency_id, name, code }

    const requestOptions = {
        method: 'POST',
        headers: api.getHeader(token),
        body: body
    };

    const url = api.getUrl(api.SYS_CURRENCY_EDIT)
    return api.handleRequest(url, requestOptions);
}

function currencyDetail(token,currency_id) {

    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {'currency_id':currency_id};
    const url = api.getUrl(api.SYS_CURRENCY_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}
