// eslint-disable-next-line
import { put, takeLatest, all, fork } from "redux-saga/effects";
import { transactionService, productService } from "../../services/index";
import { transactionAction, productAction } from '../action/index';


export function* transactionList(payload) {
    let { token, project_id, area_id, block_id } = payload.params
    try {
        const response = yield transactionService.list(token, project_id, area_id, block_id);
        response.success ? yield put({ type: transactionAction.TRANSACTION_LIST_SUCCESS, response }) : yield put({ type: transactionAction.TRANSACTION_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: transactionAction.TRANSACTION_LIST_FAILURE, err });
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

export function* transListlWatcher() {
    yield takeLatest(transactionAction.TRANSACTION_LIST_REQUEST, transactionList);
}

export function* productTypeListWatcher() {
    yield takeLatest(productAction.PRODUCT_TYPE_LIST_REQUEST, productTypeList);
}

export default function* rootSaga() {
    yield all([
        fork(transListlWatcher),
        fork(productTypeListWatcher),
    ]);
}