// eslint-disable-next-line
import { put, takeLatest, all, fork } from "redux-saga/effects";
import { exampleService } from "../../services";
import { examAction } from '../action';


export function* exampleList(payload) {

    // console.log(payload);

    let { token, search_name, status_id, setting_type } = payload.params
    try {
        const response = yield exampleService.list(token, search_name, status_id, setting_type);
        response.success ? yield put({ type: examAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: examAction.LOAD_LIST_FAILURE, response });

        // console.log(response);
    } catch (err) {
        yield put({ type: examAction.LOAD_LIST_FAILURE, err });
    }
}


export function* exampleListlWatcher() {
    yield takeLatest(examAction.LOAD_LIST, exampleList);
}

export default function* rootSaga() {
    yield all([
        fork(exampleListlWatcher),
    ]);
}