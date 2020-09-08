import { productAction } from "../action/index";

const initialState = {
  hotProductList: {},
  sellingProductList: {},
  comingSoonProductList: {},
  productTypeList: {},
  productDetailList: {},
  productIncentive: [],
  productSignup: [],
  isFetching: false,
  productFavoriteList: {
    "success": true,
    "detail": {
        "list_product": [
            {
                "product_id": 216,
                "product_name": "Căn hộ A.03-12",
                "product_acreage": 120.0,
                "product_address": null,
                "product_floor_or_lot_id": 30,
                "product_status_id": 2,
                "product_type_id": 1,
                "product_love_flag": true,
                "product_avatar_url": "https://cloudapi.minerva.vn/cdn/sunnyworld-sale-dev/valencia-area.jpg",
                "product_real_price": 0.0,
                "product_real_price_unit_id": null,
                "product_real_price_unit_name": null,
                "product_estimate_price": 100000000.0,
                "product_estimate_price_unit_id": 1,
                "product_estimate_price_unit_name": "VND",
                "product_total_bedroom": 2,
                "product_total_bathroom": 1,
                "product_total_watcher": 1000,
                "product_total_lover": 1,
                "product_architecture_type_id": null,
                "product_architecture_type_name": null,
                "product_acreage_unit_name": "m²",
                "product_status_name": "Chưa bán",
                "list_product_direction": []
            },
            {
                "product_id": 260,
                "product_name": "Căn hộ A.3A-01",
                "product_acreage": 120.0,
                "product_address": null,
                "product_floor_or_lot_id": 31,
                "product_status_id": 3,
                "product_type_id": 1,
                "product_love_flag": true,
                "product_avatar_url": "https://cloudapi.minerva.vn/cdn/sunnyworld-sale-dev/valencia-area.jpg",
                "product_real_price": 0.0,
                "product_real_price_unit_id": null,
                "product_real_price_unit_name": null,
                "product_estimate_price": 757575247.0,
                "product_estimate_price_unit_id": 1,
                "product_estimate_price_unit_name": "VND",
                "product_total_bedroom": 2,
                "product_total_bathroom": 1,
                "product_total_watcher": 1000,
                "product_total_lover": 1,
                "product_architecture_type_id": null,
                "product_architecture_type_name": null,
                "product_acreage_unit_name": "m²",
                "product_status_name": "Đang bán",
                "list_product_direction": []
            },
            {
                "product_id": 215,
                "product_name": "Căn hộ A.03-07",
                "product_acreage": 120.0,
                "product_address": null,
                "product_floor_or_lot_id": 30,
                "product_status_id": 2,
                "product_type_id": 1,
                "product_love_flag": true,
                "product_avatar_url": "https://cloudapi.minerva.vn/cdn/sunnyworld-sale-dev/valencia-area.jpg",
                "product_real_price": 0.0,
                "product_real_price_unit_id": null,
                "product_real_price_unit_name": null,
                "product_estimate_price": 13000000000.0,
                "product_estimate_price_unit_id": 1,
                "product_estimate_price_unit_name": "VND",
                "product_total_bedroom": 2,
                "product_total_bathroom": 1,
                "product_total_watcher": 1000,
                "product_total_lover": 1,
                "product_architecture_type_id": null,
                "product_architecture_type_name": null,
                "product_acreage_unit_name": "m²",
                "product_status_name": "Chưa bán",
                "list_product_direction": []
            }
        ]
    },
    "total_page": 1,
    "total_record": 3,
    "page": 1
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case productAction.HOT_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        hotProductList: action.response,
        isFetching: true,
      };
    case productAction.SELLING_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        sellingProductList: action.response,
        isFetching: true,
      };
    case productAction.COMING_SOON_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        comingSoonProductList: action.response,
        isFetching: true,
      };
    case productAction.PRODUCT_TYPE_LIST_SUCCESS:
      return {
        ...state,
        productTypeList: action.response,
        isFetching: true,
      };
    case productAction.PRODUCT_DETAIL_LIST_SUCCESS:
      return {
        ...state,
        productDetailList: action.response,
        isFetching: true,
      };
    //linh add
    case productAction.PRODUCT_INCENTIVE_LIST_SUCCESS:
      return {
        ...state,
        productIncentive: action.response,
        isFetching: true,
      };

    case productAction.PRODUCT_FAVORITE_LIST_SUCCESS:
      return {
        ...state,
        productFavoriteList: action.response,
        isFetching: true,
      };

    case productAction.PRODUCT_SIGNUP_SUCCESS:
      return {
        ...state,
        productSignup: action.response,
        isFetching: true,
      };
    // end linh add
    default:
      return state;
  }
};
