import api from '../api';

export const contractService = {
    contractPayment,
    policyPaymentForProduct,
    policyPaymentProgressList
};

function contractPayment(token, product_id, payment_policy_id, chosen_discount_id, initial_amount) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { product_id, payment_policy_id, chosen_discount_id, initial_amount };
    const url = api.getUrl(api.CONTRACT_PAYMENT, params)
    return api.handleRequest(url, requestOptions);
}

function policyPaymentForProduct(token, product_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { product_id };
    const url = api.getUrl(api.POLICY_PAYMENT_FOR_PRODUCT, params)
    return api.handleRequest(url, requestOptions);
}

function policyPaymentProgressList(token, product_id, payment_policy_id) {
    const requestOptions = {
        method: 'GET',
        headers: api.getHeader(token)
    };

    const params = { product_id, payment_policy_id };
    const url = api.getUrl(api.POLICY_PAYMENT_PROGRESS_LIST, params)
    return api.handleRequest(url, requestOptions);
}