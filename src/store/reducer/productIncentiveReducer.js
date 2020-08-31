import { productIncentivesAction } from '../action';

const initialState = {
    productIncentive: {"success":true, "detail": [
      {
        id:1, 
        title: 'Thanh toán 30% căn hộ A01 - Royal Garden', 
        time:' Từ: 02/03/2020 - Đến: 02/06/2020', 
        pro1:'Giảm 2% giá trị',
        pro2:'Tặng 1 lượng vàng 9999',
        pro3:'Tặng gói bảo trì 1 năm căn hộ'
      },
      {
        id:2, 
        title: 'Thanh toán 30% căn hộ A01 - Royal Garden', 
        time:' Từ: 02/03/2020 - Đến: 02/06/2020', 
        pro1:'Giảm 2% giá trị',
        pro2:'Tặng 1 lượng vàng 9999',
        pro3:'Tặng gói bảo trì 1 năm căn hộ'
      },
      {
        id:3, 
        title: 'Thanh toán 30% căn hộ A01 - Royal Garden', 
        time:' Từ: 02/03/2020 - Đến: 02/06/2020', 
        pro1:'Giảm 2% giá trị',
        pro2:'Tặng 1 lượng vàng 9999',
        pro3:'Tặng gói bảo trì 1 năm căn hộ'
      }
    ]
  }

};

export default (state = initialState, action) => {
    switch (action.type) {
        case productIncentivesAction.LOAD_LIST_SUCCESS:
            return {
                ...state,
                productIncentive: action.response,
                isFetching: true,
                isLoadingList: false,
            };
        default:
            return state;
    }
}