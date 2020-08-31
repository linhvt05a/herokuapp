import { put, takeLatest, all, fork } from "redux-saga/effects";
import { projectService } from "../../services";
import { projectSelectAction } from '../action';


export function* projectSelect(payload) {
    try {
        const response = yield projectService.projectSelect(payload);
        response.success ? yield put({ type: projectSelectAction.LOAD_LIST_SUCCESS, response }) : yield put({ type: projectSelectAction.LOAD_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: projectSelectAction.LOAD_LIST_FAILURE, err });
    }
}


export function* projectSelectWatcher() {
    yield takeLatest(projectSelectAction.LOAD_LIST, projectSelect);
}

export default function* rootSaga() {
    yield all([
        fork(projectSelectWatcher),
    ]);
}