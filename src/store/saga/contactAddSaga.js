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

export function* getLoanPolicy(payload) {
    let { token, product_id } = payload.params
    try {
        const response = yield contactService.getLoanPolicy(token, product_id);
        response.success ? yield put({ type: contactAddAction.LOAN_POLICY_SUCCESS, response }) : yield put({ type: contactAddAction.LOAN_POLICY_FAILURE, response });
    } catch (err) {
        yield put({ type: contactAddAction.LOAN_POLICY_FAILURE, err });
    }
}

export function* getLoanPolicyWatcher() {
    yield takeLatest(contactAddAction.LOAN_POLICY_REQUEST, getLoanPolicy);
}

export function* getPolicy(payload) {
    let { token, bank_id } = payload.params
    try {
        const response = yield contactService.getPolicy(token, bank_id);
        response.success ? yield put({ type: contactAddAction.POLICY_SUCCESS, response }) : yield put({ type: contactAddAction.POLICY_FAILURE, response });
    } catch (err) {
        yield put({ type: contactAddAction.POLICY_FAILURE, err });
    }
}

export function* getPolicyWatcher() {
    yield takeLatest(contactAddAction.POLICY_REQUEST, getPolicy);
}

export default function* rootSaga() {
    yield all([
        fork(contactAddWatcher),
        fork(advisoryAddWatcher),
        fork(registrationNewsletterWatcher),
        fork(getLoanPolicyWatcher),
        fork(getPolicyWatcher)
    ]);
}