import { put, takeLatest } from "redux-saga/effects";
import { productServive}  from '../../services/Product/service_product';
import {
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAILURE,
} from '../actionType/product';

// product Detail
export function* productDetail(payload) {
    const token = payload.payload.token
    const product_id = payload.payload.product_id
    const tab_include = []

    try {
        const response = yield productServive.productDetail(token, product_id, tab_include);
        response.success ? yield put({ type: PRODUCT_DETAIL_SUCCESS, response }) : yield put({ type: PRODUCT_DETAIL_FAILURE, response });
    } catch (err) {
        yield put({ type: PRODUCT_DETAIL_FAILURE, err });
    }
}
export function* productDetaillWatcher() {
    yield takeLatest(PRODUCT_DETAIL_REQUEST, productDetail);
}
