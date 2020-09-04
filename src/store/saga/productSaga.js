// eslint-disable-next-line
import { put, takeLatest, all, fork } from "redux-saga/effects";
import { productService } from "../../services/index";
import { productAction } from '../action/index';

export function* hotProductList(payload) {
    let { token, page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
        acreage_from, acreage_to, price_from, price_to, direction_id } = payload.params

    try {
        const response = yield productService.hotProductList(token, page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
            acreage_from, acreage_to, price_from, price_to, direction_id);
        response.success ? yield put({ type: productAction.HOT_PRODUCT_LIST_SUCCESS, response }) : yield put({ type: productAction.HOT_PRODUCT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: productAction.HOT_PRODUCT_LIST_FAILURE, err });
    }
}

export function* sellingProductList(payload) {
    let { token, page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
        acreage_from, acreage_to, price_from, price_to, direction_id } = payload.params

    try {
        const response = yield productService.getSellingProductList(token, page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
            acreage_from, acreage_to, price_from, price_to, direction_id);
        response.success ? yield put({ type: productAction.SELLING_PRODUCT_LIST_SUCCESS, response }) : yield put({ type: productAction.SELLING_PRODUCT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: productAction.SELLING_PRODUCT_LIST_FAILURE, err });
    }
}

export function* comingSoonProductList(payload) {
    let { token, page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
        acreage_from, acreage_to, price_from, price_to, direction_id } = payload.params

    try {
        const response = yield productService.getComingSoonProductList(token, page, limit, project_id, area_id, block_id, project_status_id, province_id, district_id, list_product_type_id, number_of_bedroom,
            acreage_from, acreage_to, price_from, price_to, direction_id);
        response.success ? yield put({ type: productAction.COMING_SOON_PRODUCT_LIST_SUCCESS, response }) : yield put({ type: productAction.COMING_SOON_PRODUCT_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: productAction.COMING_SOON_PRODUCT_LIST_FAILURE, err });
    }
}

export function* productTypeList(payload) {
    let { token } = payload.params

    try {
        const response = yield productService.getProductTypeList(token);
        response.success ? yield put({ type: productAction.PRODUCT_TYPE_LIST_SUCCESS, response }) : yield put({ type: productAction.PRODUCT_TYPE_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: productAction.PRODUCT_TYPE_LIST_FAILURE, err });
    }
}

export function* hotProductListWatcher() {
    yield takeLatest(productAction.HOT_PRODUCT_LIST_REQUEST, hotProductList);
}

export function* sellingProductListWatcher() {
    yield takeLatest(productAction.SELLING_PRODUCT_LIST_REQUEST, sellingProductList);
}

export function* comingSoonProductListWatcher() {
    yield takeLatest(productAction.COMING_SOON_PRODUCT_LIST_REQUEST, comingSoonProductList);
}

export function* productTypeListWatcher() {
    yield takeLatest(productAction.PRODUCT_TYPE_LIST_REQUEST, productTypeList);
}

export default function* rootSaga() {
    yield all([
        fork(hotProductListWatcher),
        fork(sellingProductListWatcher),
        fork(comingSoonProductListWatcher),
        fork(productTypeListWatcher),
    ]);
}