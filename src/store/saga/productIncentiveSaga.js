import { put, takeLatest, all, fork } from "redux-saga/effects";
import { productService } from "../../services";
import { productIncentivesAction } from '../action';


export function* productIncentive(payload) {
    try {
        const response = yield productService.productIncentive(payload);
        response.success ? yield put({ type: productIncentivesAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: productIncentivesAction.LOAD_LIST_FAILURE, response });

        console.log(response);
    } catch (err) {
        yield put({ type: productIncentivesAction.LOAD_LIST_FAILURE, err });
    }
}


export function* productIncentiveWatcher() {
    yield takeLatest(productIncentivesAction.LOAD_LIST, productIncentive);
}

export default function* rootSaga() {
    yield all([
        fork(productIncentiveWatcher),
    ]);
}