import { put, takeLatest } from "redux-saga/effects";
import { productServive}  from '../../services/Product/service_product';
import {
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAILURE,
} from '../actionType/product';

// product detail
export function* productDetail(payload) {
    console.log('payload', payload);
    const token = payload.product.token;
    const id = payload.product.id;
    try {
        const response = yield productServive.productDetail(token, id);
        response.success ? yield put({ type: PRODUCT_DETAIL_SUCCESS, response }) : yield put({ type: PRODUCT_DETAIL_FAILURE, response });
    } catch (err) {
        yield put({ type: PRODUCT_DETAIL_FAILURE, err });
    }
}
export function* productDetaillWatcher() {
    yield takeLatest(PRODUCT_DETAIL_REQUEST, productDetail);
}
