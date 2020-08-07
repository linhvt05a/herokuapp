import { put, takeLatest } from "redux-saga/effects";
import {approve_system_services} from "../../services/System/services_system_approved"
import {
    APPROVAL_LIST_REQUEST, 
    APPROVAL_LIST_FAILURE, 
    APPROVAL_LIST_SUCCESS, 
    
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_FAILURE,
    COMMENT_LIST_SUCCESS,

} from '../actionType/approval'

export function* approveList(payload) {
    const token = payload.product_request.token;
    const product_id = payload.product_request.product_id
    try {
        const response = yield approve_system_services.approveList(token, product_id);
        response.success ? yield put({ type: APPROVAL_LIST_SUCCESS, response }) : yield put({ type: APPROVAL_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: APPROVAL_LIST_FAILURE, err });
    }
}
export function* approveListHistory(){
    yield takeLatest(APPROVAL_LIST_REQUEST, approveList);
}


export function* commentList(payload) {
    const token = payload.product_request.token;
    const request_id = payload.product_request.request_id
    try {
        const response = yield approve_system_services.commentList(token, request_id);
        response.success ? yield put({ type: COMMENT_LIST_SUCCESS, response }) : yield put({ type: COMMENT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: COMMENT_LIST_FAILURE, err });
    }
}
export function* listComment(){
    yield takeLatest(COMMENT_LIST_REQUEST, commentList);
}