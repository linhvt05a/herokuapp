import { put, takeLatest, all, fork } from "redux-saga/effects";
import { contactService } from "../../services";
import { contactAddAction } from '../action';


export function* contactAdd(payload) {
    let { token, full_name, email, phone_number, content } = payload.params
    try {
        const response = yield contactService.contactAdd(token, full_name, email, phone_number, content);
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