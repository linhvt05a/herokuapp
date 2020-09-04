import { productDetailAction } from "../action";

const initialState = {
    List: {},

};

export default (state = initialState, action) => {
    switch (action.type) {
        case productDetailAction.PRODUCT_DETAIL_LIST_SUCCESS:            
            return {
                ...state,
                List: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        case productDetailAction.PRODUCT_DETAIL_LIST_FAILURE:            
            return {
                ...state,
                List: action.response,
                isFetching: false,
            };
        default:
            return state;
    }
}