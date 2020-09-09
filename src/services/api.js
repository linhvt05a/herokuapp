import {
    getHeader, getUrl, authHeader, handleRequest, handleRequestBinary,
    CONTENT_TYPE
} from './lib.js';

import { MODE_ENV } from '../../env'


let DOMAIN = ''
if (process.env.NODE_ENV === 'production') {
    DOMAIN = MODE_ENV.production
} else if(process.env.NODE_ENV === 'development') {
    DOMAIN = MODE_ENV.development
} else {
    DOMAIN = MODE_ENV.local
}

console.log('---ENV:',process.env.NODE_ENV, '\n---DOMAIN:',DOMAIN.api);

export default {
    CLOUD_SERVER_PATH:'/cdn/sunnyworld-workflow-clone/',
    CLOUD_SERVER_ACCESS_KEY: 'sunnyworld-workflow-clone',
    LIMIT: 10,

    //EXAMPLE
    EXAMPLE_LIST:  "/api/be/v1/project/",

    PRODUCT_DETAIL_LIST:  `/api/main_web/v1/infrastructure/product/detail/`,
    PRODUCT_FAVORITE_LIST:  "/api/main_web/v1/infrastructure/product/favorite/list/",

    TRANSACTION_LIST:  `/api/main_web/v1/infrastructure/product/trading_market/`,
    AREA_LIST_SHORT:  `/api/main_web/v1/infrastructure/area/list_short/`,
    BLOCK_LIST_SHORT:  `/api/main_web/v1/infrastructure/block/list_short/`,
    PROJECT_LIST_SHORT:  `/api/main_web/v1/infrastructure/product/selling/list/`,

    PROJECT_LIST:  "/api/main_web/v1/project/",


    PRODUCT_SIGNUP: "",
    PRODUCT_INCENTIVE:  "/api/main_web/v1/infrastructure/product/trading_market/",
    HOT_PRODUCT_LIST:  "/api/main_web/v1/infrastructure/product/highlight/list/",

    SELLING_PRODUCT_LIST:  "/api/main_web/v1/infrastructure/product/selling/list/",
    COMING_SOON_PRODUCT_LIST:  "/api/main_web/v1/infrastructure/product/preparing_sell/list/",
    PRODUCT_TYPE: DOMAIN + "/api/main_web/v1/infrastructure/product/architecture/list/",

    // COMMON 
    PROVINCE_LIST:  "/api/fe/v1/province",
    DISTRICT_LIST:  "/api/fe/v1/district",
    WARD_LIST:  "/api/fe/v1/ward",
    STATUS_LIST:  "/api/be/v1/common/project/status",
    MINMAX_LIST:  "/api/main_web/v1/project/min_max",

    // ACCOUNT
    LOGIN:  "/api/main_web/v1/login/",
    // REGISTRY:DOMAIN + "",
    FORGOT_PASSWORD:  "/api/main_web/v1/user/forgot_password/",
    CHANGE_PASSWORD:  "/api/main_web/v1/user/password/change/",
    PROFILE:  "/api/main_web/v1/user/profile/",
    UPDATE_PROFILE:  "/api/main_web/v1/user/profile/update/",
    UPDATE_CUSTOMER:  "/api/main_web/v1/customer/edit/",


    LEGAL_CATEGORIES:  "",
    LEGAL_LIST:  "",
    LEGAL_FILTER: "",

    VISIT_REGISTER:  "/api/main_web/v1/register_visit/",

    NEWS_LIST:  "/api/main_web/v1/news/",
    NEWS_DETAIL:  "/api/main_web/v1/news/detail/",
    HOT_NEWS:  "",
    NEWS_CATEGORIES:  "/api/main_web/v1/news/category/",
    NEWS_ADD_COMMENT:  "/api/main_web/v1/news/comment/create/",
    NEWS_COMMENT_LIST:  "api/main_web/v1/news/comment/",

    LEGAL_FORM: "",

    CONTACT_ADD:  "/api/main_web/v1/counseling/add/",
    ADVISORY_ADD:  "/api/main_web/v1/advisory/create_advisory/",

    FILTER_NEWS:  "",

    PROMOTION_LIST:  "",

    getHeader,
    getUrl,
    authHeader,
    handleRequest,
    handleRequestBinary,

    CONTENT_TYPE
};
