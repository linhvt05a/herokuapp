import { productAction } from '../action';

const initialState = {
    List: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case productAction.PRODUCT_LIST_SUCCESS:
            console.log(action);
            return {
                ...state,
                List: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}