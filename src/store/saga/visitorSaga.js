import { put, takeLatest, all, fork } from "redux-saga/effects";
import { visitorService } from "../../services";
import { visitorAction } from '../action';


export function* visitorAdd(payload) {
    try {
        const response = yield visitorService.visitorAdd(payload);
        console.log(response)
        response.success ? yield put({ type: visitorAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: visitorAction.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: visitorAction.LOAD_LIST_FAILURE, err });
    }
}


export function * visitorAddWatcher() {
    yield takeLatest(visitorAction.LOAD_LIST, visitorAdd);
}

export default function* rootSaga() {
    yield all([
        fork(visitorAddWatcher),
    ]);
}