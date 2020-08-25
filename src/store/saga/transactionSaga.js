// eslint-disable-next-line
import { put, takeLatest, all, fork } from "redux-saga/effects";
import { transactionService } from "../../services/index";
import { transactionAction } from '../action/index';


export function* transactionList(payload) {
    let { token, project_id, area_id, block_id } = payload.params
    try {
        const response = yield transactionService.list(token, project_id, area_id, block_id);
        response.success ? yield put({ type: transactionAction.TRANSACTION_LIST_SUCCESS, response }) : yield put({ type: transactionAction.TRANSACTION_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: transactionAction.TRANSACTION_LIST_FAILURE, err });
    }
}


export function* transListlWatcher() {
    yield takeLatest(transactionAction.TRANSACTION_LIST_REQUEST, transactionList);
}

export default function* rootSaga() {
    yield all([
        fork(transListlWatcher),
    ]);
}