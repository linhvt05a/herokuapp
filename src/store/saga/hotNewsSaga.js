import { put, takeLatest, all, fork } from "redux-saga/effects";
import { newsService } from "../../services";
import { hotNewsAction } from '../action';


export function* hotNewsList(payload) {
    try {
        const response = yield newsService.hotNewsList(payload);
        response.success ? yield put({ type: hotNewsAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: hotNewsAction.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: hotNewsAction.LOAD_LIST_FAILURE, err });
    }
}


export function* hotNewsListWatcher() {
    yield takeLatest(hotNewsAction.LOAD_LIST, hotNewsList);
}

export default function* rootSaga() {
    yield all([
        fork(hotNewsListWatcher),
    ]);
}