import { legalCategoriesAction } from '../action';

const initialState = {
    legalCates: {"success":true, "detail": [
       {id: 1, title:'Trading rules'},
       {id: 2, title:'Sale contract'},
       {id: 3, title:'Others'},
      
    ]},

};

export default (state = initialState, action) => {
    switch (action.type) {
        case legalCategoriesAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                legalCates: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}