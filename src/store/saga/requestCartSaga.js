import { put, takeLatest } from "redux-saga/effects";
import { requestCartService } from "../../services/RequestCart/services_request_cart";
import {
    REQUEST_DATA_REQUEST,
    REQUEST_DATA_SUCCESS,
    REQUEST_DATA_FAILURE,

    PROMOTION_LIST_REQUEST,
    PROMOTION_LIST_SUCCESS,
    PROMOTION_LIST_FAILURE,

    PROMOTION_PRODUCT_REQUEST,
    PROMOTION_PRODUCT_SUCCESS,
    PROMOTION_PRODUCT_FAILURE,
} from '../actionType/requestCart';

// request data
export function* requestData(payload) {
    const token = payload.payload.token;
    const request_type = payload.payload.request_type;
    const product_id = payload.payload.product_id;
    const value_change = payload.payload.value_change;
    const priority = payload.payload.priority; 
    const reason = payload.payload.reason;
    const list_promotion_detail = payload.payload.list_promotion_detail;
    try {
        const response = yield requestCartService.getRequestData(token, request_type, product_id, value_change, priority, reason, list_promotion_detail);
        response.success ? yield put({ type: REQUEST_DATA_SUCCESS, response }) : yield put({ type: REQUEST_DATA_FAILURE, response });
    } catch (err) {
        yield put({ type: REQUEST_DATA_FAILURE, err });
    }
}
export function* requestDataWatcher() {
    yield takeLatest(REQUEST_DATA_REQUEST, requestData);
}

// promotion list
export function* promotionList(payload) {
    const token = payload.payload.token;
    const product_id = payload.payload.product_id;
    try {
        const response = yield requestCartService.getPromotionList(token, product_id);
        response.success ? yield put({ type: PROMOTION_LIST_SUCCESS, response }) : yield put({ type: PROMOTION_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: PROMOTION_LIST_FAILURE, err });
    }
}
export function* promotionListWatcher() {
    yield takeLatest(PROMOTION_LIST_REQUEST, promotionList);
}

// promotion product
export function* promotionProduct(payload) {
    const token = payload.payload.token;
    const product_id = payload.payload.product_id;
    const promotion_id = payload.payload.promotion_id;
    try {
        const response = yield requestCartService.getPromotionProduct(token, product_id, promotion_id);
        response.success ? yield put({ type: PROMOTION_PRODUCT_SUCCESS, response }) : yield put({ type: PROMOTION_PRODUCT_FAILURE, response });
    } catch (err) {
        yield put({ type: PROMOTION_PRODUCT_FAILURE, err });
    }
}
export function* promotionProductWatcher() {
    yield takeLatest(PROMOTION_PRODUCT_REQUEST, promotionProduct);
}