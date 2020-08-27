import { put, takeLatest, all, fork } from "redux-saga/effects";
import { contactService } from "../../services";
import { contactAddAction } from '../action';


export function* contactAdd(payload) {
    console.log(payload)
    try {
        const response = yield contactService.contactAdd(payload);
        response.success ? yield put({ type: contactAddAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: contactAddAction.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: contactAddAction.LOAD_LIST_FAILURE, err });
    }
}

export function* contactAddWatcher() {
    yield takeLatest(contactAddAction.LOAD_LIST, contactAdd);
}

export default function* rootSaga() {
    yield all([
        fork(contactAddWatcher),
    ]);
}