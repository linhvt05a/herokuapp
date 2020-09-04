import { newsCategoriesAction } from '../action';

const initialState = {
    newsCate: [],
   
}

export default (state = initialState, action) => {
    switch (action.type) {
        case newsCategoriesAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                newsCate: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}