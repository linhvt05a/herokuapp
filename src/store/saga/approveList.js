import { put, takeLatest } from "redux-saga/effects";
import {approve_system_services} from "../../services/System/services_system_approved"
import {APPROVED_LIST_REQUEST, APPROVED_LIST_FAILURE, APPROVED_LIST_SUCCESS} from '../actionType/approved'

export function* approveList(payload) {
    const token = payload.approveList.token;
    const product_id = payload.approveList.product_id
    try {
        const response = yield approve_system_services.approveList(token, product_id);
        response.success ? yield put({ type: APPROVED_LIST_SUCCESS, response }) : yield put({ type: APPROVED_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: APPROVED_LIST_FAILURE, err });
    }
}
export function* approveListHistory(){
    yield takeLatest(APPROVED_LIST_REQUEST, approveList);
}