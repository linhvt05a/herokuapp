import { productListAction } from '../action';

const initialState = {
    productList: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case productListAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                productList: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}