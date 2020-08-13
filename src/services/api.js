import {
    getHeader, getUrl, authHeader, handleRequest, handleRequestBinary,
    CONTENT_TYPE
} from './lib.js';

export default {
    CLOUD_SERVER_PATH: '/cdn/sunnyworld-workflow-clone/',
    CLOUD_SERVER_ACCESS_KEY: 'sunnyworld-workflow-clone',
    CLOUD_SERVER_SECRET_KEY: 'xv*9!29{s({Jk&{B',
    LIMIT: 10,

    LOGIN: '/api/v1/login',
    USER_INFO: '/api/v1/user/info',
    EDIT_USER_INFO: '/api/v1/user/info/edit',
    PASSWORD_CHANGE: '/api/v1/user/info/password/change',

    HISTORY_APPROVED: '/api/be/v1/approval/',
    LIST_COMMENT: '/api/be/v1/request/comment/',
    ADD_COMMENT: '/api/be/v1/request/add/comment/',

    DASHBOARD_REGION_LIST: '/api/fe/v1/region',
    DASHBOARD_PROVINCE_LIST: '/api/fe/v1/province',
    DASHBOARD_TYPE_LIST: '/api/be/v1/common/project/setting_type',
    DASHBOARD_STATUS_LIST: '/api/be/v1/common/project/status',
    DASHBOARD_PROJECT_LIST: '/api/be/v1/project',

    PROJECT_LIST: '/api/v1/project/list/',
    PROJECT_INVESTOR: '/api/v1/information/investor/list_shorten/',
    PROJECT_MODEL: '/api/v1/project/model/list/',
    PROJECT_LIST_WORK_FLOW: '/api/v1/system/workflow/list_shorten/',
    PROJECT_DETAIL: '/api/be/v1/project/detail/',
    PROJECT_LIST_SHORTEN: '/api/v1/project/list_shorten/',
    PROJECT_TIMELINE_DEPARMENTS: '/api/v1/project/timeline/department/list/',
    PROJECT_TIMELINE_GROUPS: '/api/v1/project/timeline/group/list/',
    PROJECT_TIMELINE_STATE: '/api/v1/project/timeline/state/list/',
    PROJECT_TYPE_LIST: '/api/v1/project/type/list/',
    PROJECT_STATUS_LIST: '/api/v1/project/status/list/',
    PROJECT_FINANCIAL_INDICATOR: '/api/v1/project/financial_indicator/',
    PROJECT_SHAREHOLDER_STRUCTURE: '/api/v1/project/shareholder_structure/',
    PROJECT_CASHFLOW: '/api/v1/project/cash_flow/',
    PROJECT_LEGAL: '/api/v1/project/legal/',
    PROJECT_DESIGN: '/api/v1/project/design/',
    PROJECT_NEWS_LIST: '/api/v1/project/news/list/',
    PROJECT_NEWS_ADD: '/api/v1/project/news/add/',
    PROJECT_NEWS_DETAIL: '/api/v1/project/news/detail/',
    PROJECT_NEWS_EDIT: '/api/v1/project/news/edit/',
    PROJECT_NEWS_DELETE: '/api/v1/project/news/delete/',
    PROJECT_CURRENCY_LIST: '/api/v1/project/currency/list/',

    PROJECT_SELLOPEN_LIST: '/api/be/v1/shopping_cart/sell_open/',
    PROJECT_BANKING_LIST: '/api/be/v1/shopping_cart/banking/',
    PROJECT_SALE_POLICY_LIST: '/api/be/v1/policy_sale/',

    SYS_CURRENCY_LIST: '/api/v1/system/currency/list/',
    SYS_CURRENCY_ADD: '/api/v1/system/currency/add/',
    SYS_CURRENCY_DETAIL: '/api/v1/system/currency/detail/',
    SYS_CURRENCY_EDIT: '/api/v1/system/currency/edit/',

    SYS_LIST_PROJECT_PERIOD: '/api/v1/system/workflow/template/project_period/list/',

    SYS_STATE_LIST: '/api/v1/system/workflow/template/state/',
    SYS_STATE_ADD: '/api/v1/system/workflow/template/state/add/',
    SYS_STATE_DETAIL: '/api/v1/system/workflow/template/state/detail/',
    SYS_STATE_EDIT: '/api/v1/system/workflow/template/state/edit/',
    SYS_STATE_PARENT_LIST: '/api/v1/system/workflow/template/state/parent/list/',

    LOCATION_REGION: '/api/fe/v1/regions/',
    LOCATION_PROVINCE: '/api/fe/v1//provinces/',
    LOCATION_DISTRICT: '/api/fe/v1/districts/',
    LOCATION_WARD: '/api/fe/v1/wards/',

    LANGUAGE_LIST: '/api/v1/user/language/list/',
    LANGUAGE_CHANGE: '/api/v1/user/language/change/',

    PERMISSION_PROJECT_LIST: '/api/v1/permission_task/project_task/list/',
    PERMISSION_PROJECT_DETAIL: '/api/v1/permission_task/project_task/detail/',
    PERMISSION_PROJECT_ADD: '/api/v1/permission_task/project_task/add/',
    PERMISSION_PROJECT_EDIT: '/api/v1/permission_task/project_task/edit/',
    PERMISSION_PROJECT_LAYOUT: '/api/v1/permission_task/project_task/layout/',

    //CART
    CART_LIST: "/api/be/v1/project/",
    CART_DETAIL: "/api/be/v1/project/detail/",
    CART_SELL_OPEN: "/api/be/v1/sell_open/",
    CART_SELL_OPEN_LIST: "/api/be/v1/sell_open/product_list/",
    CART_CART: "/api/be/v1/distribution/add_request/shopping_cart/",

    //filter dropdown
    FILTER_AREA: "/api/be/v1/infrastructure/area/list_short/",
    FILTER_BLOCK: "/api/be/v1/infrastructure/block/list_short/",
    FILTER_FLOOR: "/api/be/v1/infrastructure/floor_or_lot/list_short/",
    FILTER_PROJECT_STATUS: "/api/be/v1/common/project/status",
    FILTER_LIST_OPEN_SALE: "/api/be/v1/project/list_open_sale/",

    //Product
    PRODUCT_DETAIL: "/api/be/v1/infrastructure/product/detail/",

    //Request Cart
    CART_REQUEST_DATA: "/api/be/v1/distribution/add_request/",
    CART_PROMOTION_LIST: "/api/be/v1/policy_promotion/list_promotion_short/",
    CART_PROMOTION_PRODUCT: "/api/be/v1/policy_promotion/detail_add_request/",


    //Customer
    CUSTOMER_LIST: "/api/be/v1/customer/list/",

    //Contract Payment
    CONTRACT_PAYMENT: "/api/be/v1/contract/accounting/",
    POLICY_PAYMENT_FOR_PRODUCT: "/api/be/v1/policy_payment/list_for_product/",
    POLICY_PAYMENT_PROGRESS_LIST: "/api/be/v1/policy_payment/progress/list/",

    getHeader,
    getUrl,
    authHeader,
    handleRequest,
    handleRequestBinary,

    CONTENT_TYPE
};

