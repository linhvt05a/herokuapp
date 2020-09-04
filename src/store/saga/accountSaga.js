// eslint-disable-next-line
import { put, takeLatest, all, fork } from "redux-saga/effects";
import { accountService } from "../../services/index";
import { accountAction } from '../action/index';

// login
export function* login(payload) {
    let { username, password } = payload.params
    try {
        const response = yield accountService.login( username, password );
        response.success ? yield put({ type: accountAction.LOGIN_SUCCESS, response }) : yield put({ type: accountAction.LOGIN_FAILURE, response });
    } catch (err) {
        yield put({ type: accountAction.LOGIN_FAILURE, err });
    }
}
export function* loginWatcher() {
    yield takeLatest(accountAction.LOGIN_REQUEST, login);
}

// registry
export function* registry(payload) {
    let { token } = payload.params
    try {
        const response = yield accountService.registry(token);
        response.success ? yield put({ type: accountAction.REGISTRY_SUCCESS, response }) : yield put({ type: accountAction.REGISTRY_FAILURE, response });
    } catch (err) {
        yield put({ type: accountAction.REGISTRY_FAILURE, err });
    }
}
export function* registryWatcher() {
    yield takeLatest(accountAction.REGISTRY_REQUEST, registry);
}

// forgot Password
export function* forgotPassword(payload) {
    let { token } = payload.params
    try {
        const response = yield accountService.forgotPassword(token);
        response.success ? yield put({ type: accountAction.FORGOT_PASSWORD_SUCCESS, response }) : yield put({ type: accountAction.FORGOT_PASSWORD_FAILURE, response });
    } catch (err) {
        yield put({ type: accountAction.FORGOT_PASSWORD_FAILURE, err });
    }
}
export function* forgotPasswordWatcher() {
    yield takeLatest(accountAction.FORGOT_PASSWORD_REQUEST, forgotPassword);
}

// change Password
export function* changePassword(payload) {
    let { token } = payload.params
    try {
        const response = yield accountService.changePassword(token);
        response.success ? yield put({ type: accountAction.CHANGE_PASSWORD_SUCCESS, response }) : yield put({ type: accountAction.CHANGE_PASSWORD_FAILURE, response });
    } catch (err) {
        yield put({ type: accountAction.CHANGE_PASSWORD_FAILURE, err });
    }
}
export function* changePasswordWatcher() {
    yield takeLatest(accountAction.CHANGE_PASSWORD_REQUEST, changePassword);
}

// Get profile
export function* profile(payload) {
    let { token } = payload.params
    try {
        const response = yield accountService.profile(token);
        response.success ? yield put({ type: accountAction.PROFILE_SUCCESS, response }) : yield put({ type: accountAction.PROFILE_FAILURE, response });
    } catch (err) {
        yield put({ type: accountAction.PROFILE_FAILURE, err });
    }
}
export function* profileWatcher() {
    yield takeLatest(accountAction.PROFILE_REQUEST, profile);
}

// update profile
export function* updateProfile(payload) {
    let { token } = payload.params
    try {
        const response = yield accountService.updateProfile(token);
        response.success ? yield put({ type: accountAction.UPDATE_PROFILE_SUCCESS, response }) : yield put({ type: accountAction.UPDATE_PROFILE_FAILURE, response });
    } catch (err) {
        yield put({ type: accountAction.UPDATE_PROFILE_FAILURE, err });
    }
}
export function* updateProfileWatcher() {
    yield takeLatest(accountAction.UPDATE_PROFILE_REQUEST, updateProfile);
}

// root Saga
export default function* rootSaga() {
    yield all([
        fork(loginWatcher),
        fork(registryWatcher),
        fork(forgotPasswordWatcher),
        fork(changePasswordWatcher),
        fork(profileWatcher),
        fork(updateProfileWatcher)
    ]);
}