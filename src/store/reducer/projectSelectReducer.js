import { projectSelectAction } from '../action';

const initialState = {
    projectList: 
    {"success": true, "detail":[
        {id:1, name:'Project 01'},
        {id:2, name:'Project 02'},
        {id:3, name:'Project 03'},
        {id:4, name:'Project 04'},
        {id:5, name:'Project 05'}
    ]
},

};

export default (state = initialState, action) => {
    switch (action.type) {
        case projectSelectAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                projectSelect: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}