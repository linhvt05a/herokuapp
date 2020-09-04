import { put, takeLatest, all, fork } from "redux-saga/effects";
import { visitorService } from "../../services";
import { visitorAction } from '../action';


export function* visitorForm(payload) {
    try {
        const response = yield visitorService.visitorAdd(payload);
        response.success ? yield put({ type: visitorAction.VISITOR_SUCCESS, response }) : yield put({ type: visitorAction.VISITOR_FAILURE, response });
    } catch (err) {
        yield put({ type: visitorAction.VISITOR_FAILURE, err });
    }
}


export function* visitorFormWatcher() {
    yield takeLatest(visitorAction.VISITOR_REQUEST, visitorForm);
}

export default function* rootSaga() {
    yield all([
        fork(visitorFormWatcher),
    ]);
}