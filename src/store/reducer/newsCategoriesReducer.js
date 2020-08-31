import { newsCategoriesAction } from '../action';

const initialState = {
    newsCate: 
        {
            'success': true, 'detail':[
        {
            id: 1,
            title: 'Market',
        },
        {
            id: 2,
            title: 'Department',
        },
        {
            id: 3,
            title: 'Nice House',
        },
        {
            id: 4,
            title: 'Analytics',
        },
        {
            id: 5,
            title: 'Categories 01',
        },
    ],
   
}

};

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