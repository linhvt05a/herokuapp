import { put, takeLatest, all, fork } from "redux-saga/effects";
import { productService } from "../../services";
import { productSignupAction } from '../action';


export function* productSignup(payload) {
    try {
        const response = yield productService.productSignup(payload);
        response.success ? yield put({ type: productSignupAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: productSignupAction.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: productSignupAction.LOAD_LIST_FAILURE, err });
    }
}


export function* productSignupWatcher() {
    yield takeLatest(productSignupAction.LOAD_LIST, productSignup);
}

export default function* rootSaga() {
    yield all([
        fork(productSignupWatcher),
    ]);
}