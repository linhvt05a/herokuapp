import { put, takeLatest, all, fork } from "redux-saga/effects";
import { visitSignupAction } from '../action/index';

export function* visitRegister(payload) {
    console.log(payload)
}


export function* visitRegisterWatcher() {
    yield takeLatest(visitSignupAction.MODAL_VISIT_REGISTER_REQUEST, visitRegister);
}

export default function* rootSaga() {
    yield all([
        fork(visitRegisterWatcher),
    ]);
}