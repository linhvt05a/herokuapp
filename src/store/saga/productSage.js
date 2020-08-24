// eslint-disable-next-line
import { put, takeLatest, all, fork } from "redux-saga/effects";
import { productService } from "../../services";
import { productAction } from '../action';


export function* productList(payload) {

    console.log(payload);

    let { token, search_name, status_id, setting_type } = payload.params
    try {
        const response = yield productService.list(token, search_name, status_id, setting_type);
        response.success ? yield put({ type: productAction.PRODUCT_LIST_SUCCESS, response }) : yield put({ type: productAction.PRODUCT_LIST_FAILURE, response });

        console.log(response);
    } catch (err) {
        yield put({ type: productAction.PRODUCT_LIST_FAILURE, err });
    }
}

export function* productListlWatcher() {
    yield takeLatest(productAction.PRODUCT_LOAD_LIST, productList);
}

export default function* rootSaga() {
    yield all([
        fork(productListlWatcher),
    ]);
}