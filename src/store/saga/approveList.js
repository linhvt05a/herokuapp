import { put, takeLatest } from "redux-saga/effects";
import {sysCurrencyService} from "../../services";

import {APPROVED_LIST_REQUEST, APPROVED_LIST_FAILURE, APPROVED_LIST_SUCCESS} from '../actionType/approved'

export function* approveList(payload) {
    const token = payload.currency.token;
    try {
        const response = yield sysCurrencyService.currency(token,product_id );
        response.success ? yield put({ type: CURRENTCY_LIST_SUCCESS, response }) : yield put({ type: CURRENTCY_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: CURRENTCY_LIST_FAILURE, err });
    }
}