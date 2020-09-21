// eslint-disable-next-line
import { put, takeLatest, all, fork } from "redux-saga/effects";
import { accountService } from "../../services/index";
import { accountAction } from '../action/index';

// login
export function* login(payload) {
    let { username, password, onNext } = payload.params
    try {
        const response = yield accountService.login(username, password, onNext);
        if (response.success) {

            yield put({ type: accountAction.LOGIN_SUCCESS, response })
        }
        else {
            yield put({ type: accountAction.LOGIN_FAILURE, response });
        }

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
    let { email } = payload.params
    try {
        const response = yield accountService.forgotPassword(email);
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
    let { new_password, new_password_repeat, current_password } = payload.params
    try {
        const response = yield accountService.changePassword(new_password, new_password_repeat, current_password);
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

// update profile
export function* updateCustomer(payload) {
    let { token, avatar, email, name, birthday, address, province, district, ward, phone, gender, workplace } = payload.params
    try {
        const response = yield accountService.updateCustomer(token, avatar, email, name, birthday, address, province, district, ward, phone, gender, workplace);
        response.success ? yield put({ type: accountAction.UPDATE_CUSTOMER_SUCCESS, response }) : yield put({ type: accountAction.UPDATE_CUSTOMER_FAILURE, response });
    } catch (err) {
        yield put({ type: accountAction.UPDATE_CUSTOMER_FAILURE, err });
    }
}
export function* updateCustomerWatcher() {
    yield takeLatest(accountAction.UPDATE_CUSTOMER_REQUEST, updateCustomer);
}

// upload image
export function* uploadImage(payload) {
    let { token, image } = payload.params
    try {
        const response = yield accountService.uploadFile(image);
        response.success ? yield put({ type: accountAction.IMAGE_SUCCESS, response }) : yield put({ type: accountAction.IMAGE_FAILURE, response });
    } catch (err) {
        yield put({ type: accountAction.IMAGE_FAILURE, err });
    }
}
export function* uploadImageWatcher() {
    yield takeLatest(accountAction.IMAGE_REQUEST, uploadImage);
}

// check email
export function* emailCheck(payload) {
    let { email } = payload.params
    try {
        const response = yield accountService.emailCheck(email);
        response.success ? yield put({ type: accountAction.EMAIL_CHECK_SUCCESS, response }) : yield put({ type: accountAction.EMAIL_CHECK_FAILURE, response });
    } catch (err) {
        yield put({ type: accountAction.EMAIL_CHECK_FAILURE, err });
    }
}
export function* emailCheckWatcher() {
    yield takeLatest(accountAction.EMAIL_CHECK_REQUEST, emailCheck);
}

// root Saga
export default function* rootSaga() {
    yield all([
        fork(loginWatcher),
        fork(registryWatcher),
        fork(forgotPasswordWatcher),
        fork(changePasswordWatcher),
        fork(profileWatcher),
        fork(updateProfileWatcher),
        fork(updateCustomerWatcher),
        fork(uploadImageWatcher),
        fork(emailCheckWatcher),
    ]);
}