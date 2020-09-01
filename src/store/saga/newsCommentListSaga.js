import { put, takeLatest, all, fork } from "redux-saga/effects";
import { newsService } from "../../services";
import { newsCommentListAction } from '../action';


export function* commentList(payload) {
    try {
        const response = yield newsService.commentList(payload);
        response.success ? yield put({ type: newsCommentListAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: newsCommentListAction.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: newsCommentListAction.LOAD_LIST_FAILURE, err });
    }
}


export function* commentListWatcher() {
    yield takeLatest(newsCommentListAction.LOAD_LIST, commentList);
}

export default function* rootSaga() {
    yield all([
        fork(commentListWatcher),
    ]);
}