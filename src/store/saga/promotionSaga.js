import { put, takeLatest, all, fork } from "redux-saga/effects";
import { promotionService } from "../../services";
import { promotionAction } from '../action';


export function* promotionList(payload) {

    console.log(payload);
    try {
        const response = yield promotionService.listPromotion(payload);
        response.success ? yield put({ type: promotionAction.PROMOTION_LIST_SUCCESS, response }) : yield put({ type: promotionAction.PROMOTION_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: promotionAction.PROMOTION_LIST_FAILURE, err });
    }
}


export function* promotionListlWatcher() {
    yield takeLatest(promotionAction.PROMOTION_LIST_REQUEST, promotionList);
}

export default function* rootSaga() {
    yield all([
        fork(promotionListlWatcher),
    ]);
}