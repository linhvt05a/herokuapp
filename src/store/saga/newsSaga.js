import { put, takeLatest, all, fork } from "redux-saga/effects";
import { newsService } from "../../services";
import { newsAction } from '../action';


export function* newsList(payload) {
    try {
        const response = yield newsService.newsList(payload);
        response.success ? yield put({ type: newsAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: newsAction.LOAD_LIST_FAILURE, response });
        console.log(response)
    } catch (err) {
        yield put({ type: newsAction.LOAD_LIST_FAILURE, err });
    }
}


export function* newsListWatcher() {
    yield takeLatest(newsAction.LOAD_LIST, newsList);
}

export default function* rootSaga() {
    yield all([
        fork(newsListWatcher),
    ]);
}