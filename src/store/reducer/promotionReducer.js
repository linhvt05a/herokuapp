import { promotionAction } from '../action';

const initialState = {
    promotionList: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case promotionAction.PROMOTION_LIST_SUCCESS:
            return {
                ...state,
                promotionList: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}