import { put, takeLatest, all, fork } from "redux-saga/effects";
import { newsService } from "../../services";
import { commentNewsAction } from '../action';


export function* commentAdd(payload) {
    try {
        const response = yield newsService.commentAdd(payload);
        response.success ? yield put({ type: commentNewsAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: commentNewsAction.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: commentNewsAction.LOAD_LIST_FAILURE, err });
    }
}


export function* commentAddWatcher() {
    yield takeLatest(commentNewsAction.LOAD_LIST, commentAdd);
}

export default function* rootSaga() {
    yield all([
        fork(commentAddWatcher),
    ]);
}