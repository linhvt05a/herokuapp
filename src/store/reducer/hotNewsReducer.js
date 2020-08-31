import { hotNewsAction } from '../action';

const initialState = {
    hotNewsList: {"success": true, "detail":[
        {
            id: 1, 
            title:'Năm 2020 - Năm của thị trường bất động sản các tỉnh',
            postTime:'02/03/2020',
            hotImage:'../../../../images/hotnews_1.jpg'
        },
        {
            id: 2, 
            title:'Năm 2020 - Năm của thị trường bất động sản các tỉnh',
            postTime:'02/03/2020',
            hotImage:'../../../../images/hotnews_2.jpg'
        },
        {
            id: 3, 
            title:'Năm 2020 - Năm của thị trường bất động sản các tỉnh',
            postTime:'02/03/2020',
            hotImage:'../../../../images/hotnews_3.jpg'
        },
        {
            id: 4, 
            title:'Năm 2020 - Năm của thị trường bất động sản các tỉnh',
            postTime:'02/03/2020',
            hotImage:'../../../../images/hotnews_4.jpg'
        },
        {
            id: 5, 
            title:'Năm 2020 - Năm của thị trường bất động sản các tỉnh',
            postTime:'02/03/2020',
            hotImage:'../../../../images/hotnews_1.jpg'
        }
    ]
},

};

export default (state = initialState, action) => {
    switch (action.type) {
        case hotNewsAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                hotNewsList: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}