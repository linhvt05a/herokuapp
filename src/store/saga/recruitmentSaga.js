import { put, takeLatest, all, fork } from "redux-saga/effects";
import { recruitmentService } from "../../services";
import { recruitmentAction } from '../action';


export function* recruitmentList(payload) {
    try {
        const response = yield recruitmentService.recruitmentList(payload);
        response.success ? yield put({ type: recruitmentAction.RECRUITMENT_LIST_SUCCESS, response }) : yield put({ type: recruitmentAction.RECRUITMENT_LIST_FAILURE, response });

        // console.log(response);
    } catch (err) {
        yield put({ type: recruitmentAction.RECRUITMENT_LIST_FAILURE, err });
    }
}


export function* recruitmentListWatcher() {
    yield takeLatest(recruitmentAction.RECRUITMENT_LIST_REQUEST, recruitmentList);
}

export default function* rootSaga() {
    yield all([
        fork(recruitmentListWatcher),
    ]);
}