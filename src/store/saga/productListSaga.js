import { put, takeLatest, all, fork } from "redux-saga/effects";
import { productService } from "../../services";
import { productListAction } from '../action';


export function* productList(payload) {
    try {
        const response = yield productService.productList(payload);
        response.success ? yield put({ type: productListAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: productListAction.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: productListAction.LOAD_LIST_FAILURE, err });
    }
}


export function* productListWatcher() {
    yield takeLatest(productListAction.LOAD_LIST, productList);
}

export default function* rootSaga() {
    yield all([
        fork(productListWatcher),
    ]);
}