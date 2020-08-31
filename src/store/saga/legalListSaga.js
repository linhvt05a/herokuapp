import { put, takeLatest, all, fork } from "redux-saga/effects";
import { juridicalService } from "../../services";
import { legalListAction } from '../action';


export function* legalList(payload) {
    try {
        const response = yield juridicalService.legalList(payload);
        response.success ? yield put({ type: legalListAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: legalListAction.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: legalListAction.LOAD_LIST_FAILURE, err });
    }
}


export function*legalListWatcher() {
    yield takeLatest(legalListAction.LOAD_LIST, legalList);
}

export default function* rootSaga() {
    yield all([
        fork(legalListWatcher),
    ]);
}