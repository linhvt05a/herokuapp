import api from '../api';

export const productServive = {
    productDetail
}
function productDetail(token, product_id, tab_include){
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = {product_id, tab_include};
    const url = api.getUrl(api.PRODUCT_DETAIL, params)
    return api.handleRequest(url, requestOptions);
}