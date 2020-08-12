import { put, takeLatest } from "redux-saga/effects";
import {approve_system_services} from "../../services/System/services_system_approved"
import {
    APPROVAL_LIST_REQUEST, 
    APPROVAL_LIST_FAILURE, 
    APPROVAL_LIST_SUCCESS, 
    
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_FAILURE,
    COMMENT_LIST_SUCCESS,

    ADD_COMMENT_REQUEST,
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_SUCCESS,
    


} from '../actionType/approval'

export function* approveList(payload) {
    console.log('payload------', payload)
    const token = payload.payload.token
    const product_id = payload.payload.product_id
    const request_type = payload.payload.request_type
    const request_status = payload.payload.request_status
    const priority = payload.payload.priority
    const order_by_oldest = payload.payload.order_by_oldest
    try {
        const response = yield approve_system_services.approveList(token, product_id, request_type, request_status, priority, order_by_oldest);
        console.log(response)
        response.success ? yield put({ type: APPROVAL_LIST_SUCCESS, response }) : yield put({ type: APPROVAL_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: APPROVAL_LIST_FAILURE, err });
    }
}
export function* approveListWatcher(){
    yield takeLatest(APPROVAL_LIST_REQUEST, approveList);
}


export function* commentList(payload) {
    console.log('payload------', payload)
    const token = payload.payload.token;
    const request_id = payload.payload.request_id
    try {
        const response = yield approve_system_services.commentList(token, request_id);
        console.log(response)
        response.success ? yield put({ type: COMMENT_LIST_SUCCESS, response }) : yield put({ type: COMMENT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: COMMENT_LIST_FAILURE, err });
    }
}
export function* commentListWatcher(){
    yield takeLatest(COMMENT_LIST_REQUEST, commentList);
}

export function* addComment(payload) {
    try {
        const response = yield approve_system_services.addComment(payload);
        response.success ? yield put({ type: ADD_COMMENT_SUCCESS, response }) : yield put({ type: ADD_COMMENT_FAILURE, response });
    } catch (err) {
        yield put({ type: ADD_COMMENT_FAILURE, err });
    }
}
export function* addCommentWatcher(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}