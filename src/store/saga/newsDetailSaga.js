import { put, takeLatest, all, fork } from "redux-saga/effects";
import { newsService } from "../../services";
import { newsDetailAction } from '../action';


export function* newsDetail(payload) {
    try {
        const response = yield newsService.newsDetail(payload);
        response.success ? yield put({ type: newsDetailAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: newsDetailAction.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: newsDetailAction.LOAD_LIST_FAILURE, err });
    }
}


export function* newsDetailWatcher() {
    yield takeLatest(newsDetailAction.LOAD_LIST, newsDetail);
}

export default function* rootSaga() {
    yield all([
        fork(newsDetailWatcher),
    ]);
}