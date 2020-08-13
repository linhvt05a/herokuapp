import { put, takeLatest, all, fork } from "redux-saga/effects";
import { customerService } from '../../services/NewContract/services_customer';
import actions from "../action/customer"

export function* customerList(payload) {
    let { token, name } = payload.params;
    try {
        const response = yield customerService.customer(token, name);
        response.success ? yield put({ type: actions.CUSTOMER_LIST_SUCCESS, response }) : yield put({ type: actions.CUSTOMER_LIST_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.CUSTOMER_LIST_FAILURE, err });
    }
}
function* customerListWatcher() {
    yield takeLatest(actions.CUSTOMER_LIST_REQUEST, customerList);
}

export function* customerCreateContract(payload) {
    let { token } = payload.params;
    try {
        const response = yield customerService.createContract(token);
        response.success ? yield put({ type: actions.CUSTOMER_CREATE_CONTRACT_SUCCESS, response }) : yield put({ type: actions.CUSTOMER_CREATE_CONTRACT_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.CUSTOMER_CREATE_CONTRACT_FAILURE, err });
    }
}
function* customerCreateContractWatcher() {
    yield takeLatest(actions.CUSTOMER_CREATE_CONTRACT_REQUEST, customerCreateContract);
}


// export function* customerAccountingContract(payload) {
//     let { token } = payload.params;
//     try {
//         const response = yield customerService.accountingContract(token);
//         response.success ? yield put({ type: actions.CUSTOMER_ACCOUNTING_CONTRACT_SUCCESS, response }) : yield put({ type: actions.CUSTOMER_ACCOUNTING_CONTRACT_FAILURE, response });
//     } catch (err) {
//         yield put({ type: actions.CUSTOMER_ACCOUNTING_CONTRACT_SUCCESS, err });
//     }
// }
// function* customerAccountingContractWatcher() {
//     yield takeLatest(actions.CUSTOMER_ACCOUNTING_CONTRACT_REQUEST, customerAccountingContract);
// }

export function* customerPromotionContract(payload) {
    let { token } = payload.params;
    try {
        const response = yield customerService.promotionContract(token);
        response.success ? yield put({ type: actions.CUSTOMER_PROMOTION_CONTRACT_SUCCESS, response }) : yield put({ type: actions.CUSTOMER_PROMOTION_CONTRACT_FAILURE, response });
    } catch (err) {
        yield put({ type: actions.CUSTOMER_PROMOTION_CONTRACT_FAILURE, err });
    }
}
function* customerPromotionPromotionWatcher() {
    yield takeLatest(actions.CUSTOMER_PROMOTION_CONTRACT_REQUEST, customerPromotionContract);
}

export default function* rootSaga() {
    yield all([
        fork(customerListWatcher),
        fork(customerCreateContractWatcher),
        // fork(customerAccountingContractWatcher)
        fork(customerPromotionPromotionWatcher)
    ]);
}