import {newsAction } from '../action';

const initialState = {
    newsList: [{
        id: 1,
        title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
        description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
        time: '27/02/2020',
        image: '../images/news_card_1.jpg'
    },
    {
        id: 2,
        title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
        description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
        time: '27/02/2020',
        image: '../images/news_card_1.jpg'
    },
    {
        id: 3,
        title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
        description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
        time: '27/02/2020',
        image: '../images/news_card_1.jpg'
    },
    {
        id: 4,
        title: 'Mở bán khu biệt thự cao cấp ở Quận 7 , Tp.HCM',
        description: 'Quỹ đất nội thành ngày càng khan hiếm, cộng với quá trình rà soát lại khiến thịtrường bất động sản lớn nhất nước rơi vào tình trạng cung giảm',
        time: '27/02/2020',
        image: '../images/news_card_1.jpg'
    }]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case newsAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                newsList: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}