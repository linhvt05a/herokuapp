import {
    getHeader, getUrl, authHeader, handleRequest, handleRequestBinary,
    CONTENT_TYPE
} from './lib.js';

import { MODE_ENV } from '../../env/env'
let DOMAIN = '';
if (process.env.NODE_ENV === 'production') {
    DOMAIN = MODE_ENV.production;
} else if (process.env.NODE_ENV === 'development') {
    DOMAIN = MODE_ENV.development;
} else {
    DOMAIN = MODE_ENV.local;
    DOMAIN.api = ''
}

console.log('********************');
console.log('---ENV:', process.env.NODE_ENV, '\n---DOMAIN:', DOMAIN.api === '' ? 'local' : DOMAIN.api);
console.log('********************');


export default {
    CLOUD_SERVER_PATH: DOMAIN + '/cdn/sunnyworld-workflow-clone/',
    CLOUD_SERVER_ACCESS_KEY: DOMAIN.api + 'sunnyworld-workflow-clone',
    LIMIT: 10,

    //EXAMPLE
    EXAMPLE_LIST: DOMAIN.api + "/api/be/v1/project/",
    PRODUCT_DETAIL_LIST: `/api/main_web/v1/infrastructure/product/detail/`,
    PRODUCT_MARKER: "/api/main_web/v1/infrastructure/product/favorite/mark_or_remark/",

    PRODUCT_DETAIL_LIST: DOMAIN.api + `/api/main_web/v1/infrastructure/product/detail/`,
    PRODUCT_FAVORITE_LIST: DOMAIN.api + "/api/main_web/v1/infrastructure/product/favorite/list/",

    TRANSACTION_LIST: DOMAIN.api + `/api/main_web/v1/infrastructure/product/trading_market/`,
    AREA_LIST_SHORT: `/api/main_web/v1/infrastructure/area/list_short/`,
    BLOCK_LIST_SHORT: `/api/main_web/v1/infrastructure/block/list_short/`,
    PROJECT_LIST_SHORT: DOMAIN.api + `/api/main_web/v1/infrastructure/product/selling/list/`,
    PROJECT_LIST: DOMAIN.api + "/api/main_web/v1/project/",


    PRODUCT_SIGNUP: DOMAIN.api + "",
    PRODUCT_INCENTIVE: "/api/main_web/v1/infrastructure/product/trading_market/",
    HOT_PRODUCT_LIST: "/api/main_web/v1/infrastructure/product/highlight/list/",

    SELLING_PRODUCT_LIST: "/api/main_web/v1/infrastructure/product/selling/list/",
    COMING_SOON_PRODUCT_LIST: "/api/main_web/v1/infrastructure/product/preparing_sell/list/",
    PRODUCT_TYPE: "/api/main_web/v1/infrastructure/product/architecture/list/",

    // COMMON 
    PROVINCE_LIST: "/api/fe/v1/province",
    DISTRICT_LIST: "/api/fe/v1/district",
    WARD_LIST: "/api/fe/v1/ward",
    STATUS_LIST: "/api/be/v1/common/project/status",
    MINMAX_LIST: "/api/main_web/v1/project/min_max",
    PROVINCE_LIST: "/api/fe/v1/province",
    DISTRICT_LIST: "/api/fe/v1/district",
    WARD_LIST: "/api/fe/v1/ward",
    STATUS_LIST: "/api/be/v1/common/project/status",
    MINMAX_LIST: "/api/main_web/v1/project/min_max/",

    // ACCOUNT
    LOGIN: DOMAIN.api + "/api/main_web/v1/login/",
    // REGISTRY:"",
    FORGOT_PASSWORD: "/api/main_web/v1/user/forgot_password/",
    CHANGE_PASSWORD: "/api/main_web/v1/user/password/change/",
    PROFILE: "/api/main_web/v1/user/profile/",
    UPDATE_PROFILE: "/api/main_web/v1/user/profile/update/",
    UPDATE_CUSTOMER: "/api/main_web/v1/customer/edit/",
    CHECK_EMAIL: "/api/main_web/v1/customer/check_email/",


    LEGAL_CATEGORIES: DOMAIN.api + "",
    LEGAL_LIST: DOMAIN.api + "",
    LEGAL_FILTER: DOMAIN.api + "",

    VISIT_REGISTER: DOMAIN.api + "/api/main_web/v1/register_visit/",

    NEWS_LIST: DOMAIN.api + "/api/main_web/v1/news/",
    NEWS_DETAIL: DOMAIN.api + "/api/main_web/v1/news/detail/",
    HOT_NEWS: DOMAIN.api + "",
    NEWS_CATEGORIES: DOMAIN.api + "/api/main_web/v1/news/category/",
    NEWS_ADD_COMMENT: DOMAIN.api + "/api/main_web/v1/news/comment/create/",
    NEWS_COMMENT_LIST: DOMAIN.api + "api/main_web/v1/news/comment/",

    RECRUITMENT_LIST: "",

    LEGAL_FORM: DOMAIN.api + "",

    CONTACT_ADD: "/api/main_web/v1/counseling/add/",
    ADVISORY_ADD: "/api/main_web/v1/advisory/create_advisory/",

    FILTER_NEWS: DOMAIN.api + "",

    PROMOTION_LIST: DOMAIN.api + "",

    LIVE_STREAM_LIST :DOMAIN.api + "",
    //Loan
    GET_LOAN_POLICY: "/api/main_web/v1/loan_policy/",
    GET_POLICY: "/api/main_web/v1/loan_policy/policy/",

    //footer email
    NEWSLETTER_REGISTRATION: "/api/main_web/v1/news/register_receive_information/",

    //filter
    FILTER_PROJECT: "/api/main_web/v1/project/list_short/",
    FILTER_PROJECT_TYPE: "/api/main_web/v1/common/project_sale/group/",

    getHeader,
    getUrl,
    authHeader,
    handleRequest,
    handleRequestBinary,

    CONTENT_TYPE
};
