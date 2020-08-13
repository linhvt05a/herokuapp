import { put, takeLatest } from "redux-saga/effects";
import { customerService } from '../../services/NewContract/services_customer';
import {
    CUSTOMER_LIST_REQUEST,
    CUSTOMER_LIST_SUCCESS,
    CUSTOMER_LIST_FAILURE
} from '../actionType/customer'

export function* customerList(payload) {
    const token = payload.payload.token;
    const search = payload.payload.search;
    try {
        const response = yield customerService.customer(token, search);
        console.log('customerSaga', payload);
        response.success ? yield put({ type: CUSTOMER_LIST_SUCCESS, response }) : yield put({ type: CUSTOMER_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: CUSTOMER_LIST_FAILURE, err });
    }
}
export function* customerListWatcher() {
    yield takeLatest(CUSTOMER_LIST_REQUEST, customerList);
}