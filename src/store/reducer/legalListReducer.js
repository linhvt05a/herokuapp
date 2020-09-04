import { legalListAction } from '../action';

const initialState = {
    legalList: {"success": true, "detail": [
        {id: 1, title:'Terms of Service and Terms of Service', content:''},
        {id: 2, title:'Indemnity', content:''},
        {id: 3, title:'Terms of Service and Terms of Service', content:''},
        {id: 4, title:'Other rules of the transaction', content:''}
    ],
    "total_page": 10,
    "total_record": 60,
    "page": 1
},

};

export default (state = initialState, action) => {
    switch (action.type) {
        case legalListAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                legalList: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}