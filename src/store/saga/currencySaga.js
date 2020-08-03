import { put, takeLatest } from "redux-saga/effects";
import {sysCurrencyService} from "../../services";
import {
    CURRENTCY_LIST_REQUEST,
    CURRENTCY_LIST_SUCCESS,
    CURRENTCY_LIST_FAILURE,
    CURRENTCY_DETAIL_REQUEST,
    CURRENTCY_DETAIL_SUCCESS,
    CURRENTCY_DETAIL_FAILURE,
    CURRENTCY_EDIT_REQUEST,
    CURRENTCY_EDIT_SUCCESS,
    CURRENTCY_EDIT_FAILURE,
    CURRENTCY_ADD_REQUEST,
    CURRENTCY_ADD_SUCCESS,
    CURRENTCY_ADD_FAILURE,
} from '../actionType/currency';

// currency list
export function* currencyList(payload) {
    const token = payload.currency.token;
    const page = payload.currency.page;
    const search = payload.currency.search;
    try {
        const response = yield sysCurrencyService.currency(token, search, page);
        response.success ? yield put({ type: CURRENTCY_LIST_SUCCESS, response }) : yield put({ type: CURRENTCY_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: CURRENTCY_LIST_FAILURE, err });
    }
}
export function* currencyListWatcher() {
    yield takeLatest(CURRENTCY_LIST_REQUEST, currencyList);
}

// currency detail
export function* currencyDetail(payload) {
    console.log('Detail Load', payload);
    const token = payload.currency.token;
    const id = payload.currency.id;
    try {
        const response = yield sysCurrencyService.currencyDetail(token, id);
        response.success ? yield put({ type: CURRENTCY_DETAIL_SUCCESS, response }) : yield put({ type: CURRENTCY_DETAIL_FAILURE, response });
    } catch (err) {
        yield put({ type: CURRENTCY_DETAIL_FAILURE, err });
    }
}
export function* currencyDetailWatcher() {
    yield takeLatest(CURRENTCY_DETAIL_REQUEST, currencyDetail);
}

// currency edit
export function* currencyEdit(payload) {
    const token = payload.currency.token;
    const id = payload.currency.id;
    const name = payload.currency.name;
    const code = payload.currency.code;
    try {
        const response = yield(sysCurrencyService.currencyEdit(token, id, name, code));
        if(response.success){
            yield put({ type: CURRENTCY_EDIT_SUCCESS, response })
            yield put({ type: CURRENTCY_DETAIL_REQUEST, currency: { token, id } })
        } else {
            yield put({ type: CURRENTCY_EDIT_FAILURE, response });
        };
    } catch (err) {
        yield put({ type: CURRENTCY_EDIT_FAILURE, err });
    }
}
export function* currencyEditWatcher() {
    yield takeLatest(CURRENTCY_EDIT_REQUEST, currencyEdit);
}

// currency add
export function* currencyAdd(payload) {
    const token = payload.currency.token;
    const name = payload.currency.name;
    const code = payload.currency.code;
    try {
        const response = yield sysCurrencyService.currencyAdd(token, name, code);
        if(response.success){
            yield put({ type: CURRENTCY_ADD_SUCCESS, response })
        } else {
            yield put({ type: CURRENTCY_ADD_FAILURE, response });
        };
    } catch (err) {
        yield put({ type: CURRENTCY_ADD_FAILURE, err });
    }
}
export function* currencyAddWatcher() {
    yield takeLatest(CURRENTCY_ADD_REQUEST, currencyAdd);
}