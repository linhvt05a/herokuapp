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
    PRODUCT_LIST: `/api/main_web/v1/infrastructure/product/detail`,
    TRANSACTION_LIST: `/api/main_web/v1/infrastructure/product/trading_market/?project_id=13&area_id=1&block_id=2`,

    PROJECT_LIST: "/api/main_web/v1/project/",

    HOT_PRODUCT_LIST: "/api/main_web/v1/infrastructure/product/highlight/list/",
    SELLING_PRODUCT_LIST: "/api/main_web/v1/infrastructure/product/selling/list/",
    COMING_SOON_PRODUCT_LIST: "/api/main_web/v1/infrastructure/product/preparing_sell/list/",

    
    // COMMON 
    PROVINCE_LIST: "api/fe/v1/province",
    DISTRICT_LIST: "api/fe/v1/district",
    STATUS_LIST: "/api/be/v1/common/project/status",

    getHeader,
    getUrl,
    authHeader,
    handleRequest,
    handleRequestBinary,

    CONTENT_TYPE
};
