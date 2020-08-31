import {
    getHeader, getUrl, authHeader, handleRequest, handleRequestBinary,
    CONTENT_TYPE
} from './lib.js';


export default {
    CLOUD_SERVER_PATH: '/cdn/sunnyworld-workflow-clone/',
    CLOUD_SERVER_ACCESS_KEY: 'sunnyworld-workflow-clone',
    CLOUD_SERVER_SECRET_KEY: 'xv*9!29{s({Jk&{B',
    LIMIT: 10,

    //EXAMPLE
    EXAMPLE_LIST: "/api/be/v1/project/",
    PRODUCT_DETAIL_LIST: `/api/main_web/v1/infrastructure/product/detail/`,
    TRANSACTION_LIST: `/api/main_web/v1/infrastructure/product/trading_market/`,
    AREA_NAME_LIST_SHORT: `/api/main_web/v1/infrastructure/area/list_short/`,
    BLOCK_NAME_LIST_SHORT: `/api/main_web/v1/infrastructure/block/list_short/`,
    PROJECT_NAME_LIST_SHORT: `/api/main_web/v1/infrastructure/product/selling/list/`,
    
    PROJECT_LIST: "/api/main_web/v1/project/",
    PRODUCT_LIST:"/api/main_web/v1/infrastructure/product/list/",
    PROJECT_SELECT:"",
    
    PRODUCT_SIGNUP:"",
    PRODUCT_INCENTIVE:"",
    HOT_PRODUCT_LIST: "/api/main_web/v1/infrastructure/product/highlight/list/",

    SELLING_PRODUCT_LIST: "/api/main_web/v1/infrastructure/product/selling/list/",
    COMING_SOON_PRODUCT_LIST: "/api/main_web/v1/infrastructure/product/preparing_sell/list/",
    PRODUCT_TYPE: "/api/main_web/v1/infrastructure/product/architecture/list/",

    // COMMON 
    PROVINCE_LIST: "/api/fe/v1/province",
    DISTRICT_LIST: "/api/fe/v1/district",
    STATUS_LIST: "/api/be/v1/common/project/status",
    MINMAX_LIST: "/api/main_web/v1/project/min_max",

    LEGAL_CATEGORIES: "",
    LEGAL_LIST: "",
    

    VISIT_REGISTER :"/api/main_web/v1/register_visit/",

    NEWS_LIST:"/api/main_web/v1/news/",
    NEWS_DETAIL:"",
    HOT_NEWS : "",
    NEWS_CATEGORIES:"",

    JURIDICAL_ADD:"",
    
    CONTACT_ADD : "/api/main_web/v1/counseling/add/",

    FILTER_NEWS: "",
    
    PROMOTION_LIST:"",

    getHeader,
    getUrl,
    authHeader,
    handleRequest,
    handleRequestBinary,

    CONTENT_TYPE
};
