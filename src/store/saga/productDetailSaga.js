// eslint-disable-next-line
import { put, takeLatest, all, fork } from "redux-saga/effects";
import { productDetailService } from "../../services/index";
import { productDetailAction } from "../action/index";

export function* productList(payload) {

    console.log(payload);

    // product_id, tab_include
    let tab_include = payload.params.tab_include;
    let {product_id } = payload.params;
    let { token } = payload.params
    try {
        const response = yield productDetailService.list(token, product_id, tab_include);
        response.success ? yield put({ type: productDetailAction.PRODUCT_LIST_SUCCESS, response }) : yield put({ type: productDetailAction.PRODUCT_LIST_FAILURE, response });

        console.log(response);
    } catch (err) {
        yield put({ type: productDetailAction.PRODUCT_LIST_FAILURE, err });
    }
}

export function* productListlWatcher() {
    yield takeLatest(productDetailAction.PRODUCT_LOAD_LIST, productList);
}

export default function* rootSaga() {
    yield all([
        fork(productListlWatcher),
    ]);
}