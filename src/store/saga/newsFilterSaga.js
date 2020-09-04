import { put, takeLatest, all, fork } from "redux-saga/effects";
import { newsService } from "../../services";
import { newsFilterAction } from '../action';


export function* filterNews(payload) {
    console.log(payload)
    try {
        const response = yield newsService.filterNews(payload)
        response.success ? yield put({ type: newsFilterAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: newsFilterAction.LOAD_LIST_FAILURE, response });

        console.log(response);
    } catch (err) {
        yield put({ type: newsFilterAction.LOAD_LIST_FAILURE, err });
    }
}


export function* filterNewsWatcher() {
    yield takeLatest(newsFilterAction.LOAD_LIST, filterNews);
}

export default function* rootSaga() {
    yield all([
        fork(filterNewsWatcher),
    ]);
}