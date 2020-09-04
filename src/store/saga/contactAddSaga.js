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

export function* advisoryAdd(payload) {
    let { token, full_name, email, content } = payload.params
    try {
        const response = yield contactService.advisoryAdd(token, full_name, email, content);
        response.success ? yield put({ type: contactAddAction.ADVISORY_SUCCESS, response }) : yield put({ type: contactAddAction.ADVISORY_FAILURE, response });
    } catch (err) {
        yield put({ type: contactAddAction.ADVISORY_FAILURE, err });
    }
}

export function* advisoryAddWatcher() {
    yield takeLatest(contactAddAction.ADVISORY_REQUEST, advisoryAdd);
}

export default function* rootSaga() {
    yield all([
        fork(contactAddWatcher),
        fork(advisoryAddWatcher)
    ]);
}