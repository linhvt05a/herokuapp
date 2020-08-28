import { productDetailAction } from "../action";

const initialState = {
    List: {},

};

export default (state = initialState, action) => {
    switch (action.type) {
        case productDetailAction.PRODUCT_LIST_SUCCESS:
            console.log(action.response);
            
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