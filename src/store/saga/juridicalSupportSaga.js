import { put, takeLatest, all, fork } from "redux-saga/effects";
import { juridicalService } from "../../services";
import { juridicalSupportAction } from '../action';


export function* juridicalAdd(payload) {
    console.log(payload)
    try {
        const response = yield juridicalService.juridicalAdd(payload)
        response.success ? yield put({ type: juridicalSupportAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: juridicalSupportAction.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: juridicalSupportAction.LOAD_LIST_FAILURE, err });
    }
}


export function* juridicalAddWatcher() {
    yield takeLatest(juridicalSupportAction.LOAD_LIST, juridicalAdd);
}

export default function* rootSaga() {
    yield all([
        fork(juridicalAddWatcher),
    ]);
}