import { transactionAction } from '../action/index';

const initialState = {
    transactionList: {},
    isFetching: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case transactionAction.TRANSACTION_LIST_SUCCESS:
            return {
                ...state,
                transactionList: action.response,
                isFetching: true,
            };
        default:
            return state;
    }
}