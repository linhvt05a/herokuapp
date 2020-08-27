import { productIncentivesAction } from '../action';

const initialState = {
    productIncentive: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case productIncentivesAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                productIncentive: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}