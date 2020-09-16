import { put, takeLatest, all, fork } from "redux-saga/effects";
import { contactService } from "../../services";
import { contactAddAction } from '../action';


export function* contactAdd(payload) {
    let { token, full_name, email, phone_number, content } = payload.params
    try {
        const response = yield contactService.contactAdd(token, full_name, email, phone_number, content);
        response.success ? yield put({ type: contactAddAction.CONTACT_ADD_SUCCESS, response }) : yield put({ type: contactAddAction.CONTACT_ADD_FAILURE, response });
    } catch (err) {
        yield put({ type: contactAddAction.CONTACT_ADD_FAILURE, err });
    }
}

export function* contactAddWatcher() {
    yield takeLatest(contactAddAction.CONTACT_ADD_REQUEST, contactAdd);
}

export function* advisoryAdd(payload) {
    let { token, name, email, content } = payload.params
    try {
        const response = yield contactService.advisoryAdd(token, name, email, content);
        response.success ? yield put({ type: contactAddAction.ADVISORY_SUCCESS, response }) : yield put({ type: contactAddAction.ADVISORY_FAILURE, response });
    } catch (err) {
        yield put({ type: contactAddAction.ADVISORY_FAILURE, err });
    }
}

export function* advisoryAddWatcher() {
    yield takeLatest(contactAddAction.ADVISORY_REQUEST, advisoryAdd);
}

export function* registrationNewsletter(payload) {
    let { email } = payload.params
    try {
        const response = yield contactService.registrationNewsletter(email);
        response.success ? yield put({ type: contactAddAction.NEWSLETTER_REGISTRATION_SUCCESS, response }) : yield put({ type: contactAddAction.NEWSLETTER_REGISTRATION_FAILURE, response });
    } catch (err) {
        yield put({ type: contactAddAction.NEWSLETTER_REGISTRATION_FAILURE, err });
    }
}

export function* registrationNewsletterWatcher() {
    yield takeLatest(contactAddAction.NEWSLETTER_REGISTRATION_REQUEST, registrationNewsletter);
}

export default function* rootSaga() {
    yield all([
        fork(contactAddWatcher),
        fork(advisoryAddWatcher),
        fork(registrationNewsletterWatcher)
    ]);
}