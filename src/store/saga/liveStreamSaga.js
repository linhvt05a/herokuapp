import { put, takeLatest, all, fork } from "redux-saga/effects";
import { streamingService } from "../../services";
import { liveStreamAction } from '../action';

export function* streamingList(payload) {
    try {
        const response = yield streamingService.streamList(payload)
        response.success ? yield put({ type: liveStreamAction.LIVE_STREAM_LIST_SUCCESS, response }) : yield put({ type: liveStreamAction.LIVE_STREAM_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: liveStreamAction.LIVE_STREAM_LIST_FAILURE, err });
    }
}

export function*streamingListWatcher() {
    yield takeLatest(liveStreamAction.LIVE_STREAM_LIST_REQUEST, streamingList);
}

export default function* rootSaga() {
    yield all([
        fork(streamingListWatcher),
    ]);
}