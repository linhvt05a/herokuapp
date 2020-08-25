import { productAction } from '../action/index';

const initialState = {
    hotProductList: {},
    isFetching: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case productAction.HOT_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                hotProductList: action.response,
                isFetching: true,
            };
        default:
            return state;
    }
}