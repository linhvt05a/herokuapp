import {
    getHeader, getUrl, authHeader, handleRequest, handleRequestBinary,
    CONTENT_TYPE
} from './lib.js';

import { MODE_ENV } from '../../env/env'
let DOMAIN = '';
if (process.env.NODE_ENV === 'production') {
    DOMAIN = MODE_ENV.prod;
} else if (process.env.NODE_ENV === 'development') {
    DOMAIN = MODE_ENV.dev;
} else {
    DOMAIN = MODE_ENV.local;
    DOMAIN.api = ''
}

console.log('********************');
console.log('---ENV:', process.env.NODE_ENV, DOMAIN);
console.log('********************');


export default {
    CLOUD_SERVER_PATH: + '/cdn/sunnyworld-workflow-clone/',
    CLOUD_SERVER_ACCESS_KEY: + 'sunnyworld-workflow-clone',
    LIMIT: 10,

    //EXAMPLE
    EXAMPLE_LIST: DOMAIN.api + "/api/be/v1/project/",
    PRODUCT_DETAIL_LIST: DOMAIN.api + `/api/main_web/v1/infrastructure/product/detail/`,
    PRODUCT_MARKER: DOMAIN.api + "/api/main_web/v1/infrastructure/product/favorite/mark_or_remark/",

    PRODUCT_DETAIL_LIST: DOMAIN.api + `/api/main_web/v1/infrastructure/product/detail/`,
    PRODUCT_FAVORITE_LIST: DOMAIN.api + "/api/main_web/v1/infrastructure/product/favorite/list/",

    TRANSACTION_LIST: DOMAIN.api + `/api/main_web/v1/infrastructure/product/trading_market/`,
    AREA_LIST_SHORT: DOMAIN.api + `/api/main_web/v1/infrastructure/area/list_short/`,
    BLOCK_LIST_SHORT: DOMAIN.api + `/api/main_web/v1/infrastructure/block/list_short/`,
    PROJECT_LIST_SHORT: DOMAIN.api + `/api/main_web/v1/infrastructure/product/selling/list/`,
    PROJECT_LIST: DOMAIN.api + "/api/main_web/v1/project/",


    PRODUCT_SIGNUP: DOMAIN.api + "",
    PRODUCT_INCENTIVE: DOMAIN.api + "/api/main_web/v1/infrastructure/product/trading_market/",
    HOT_PRODUCT_LIST: DOMAIN.api + "/api/main_web/v1/infrastructure/product/highlight/list/",

    SELLING_PRODUCT_LIST: DOMAIN.api + "/api/main_web/v1/infrastructure/product/selling/list/",
    COMING_SOON_PRODUCT_LIST: DOMAIN.api + "/api/main_web/v1/infrastructure/product/preparing_sell/list/",
    PRODUCT_TYPE: DOMAIN.api + "/api/main_web/v1/infrastructure/product/architecture/list/",

    // COMMON 
    PROVINCE_LIST: DOMAIN.api + "/api/fe/v1/province",
    DISTRICT_LIST: DOMAIN.api + "/api/fe/v1/district",
    WARD_LIST: DOMAIN.api + "/api/fe/v1/ward",
    STATUS_LIST: DOMAIN.api + "/api/be/v1/common/project/status",
    MINMAX_LIST: DOMAIN.api + "/api/main_web/v1/project/min_max",
    PROVINCE_LIST: DOMAIN.api + "/api/fe/v1/province",
    DISTRICT_LIST: DOMAIN.api + "/api/fe/v1/district",
    WARD_LIST: DOMAIN.api + "/api/fe/v1/ward",
    STATUS_LIST: DOMAIN.api + "/api/be/v1/common/project/status",
    MINMAX_LIST: DOMAIN.api + "/api/main_web/v1/project/min_max/",

    // ACCOUNT
    LOGIN: DOMAIN.api + "/api/main_web/v1/login/",
    // REGISTRY:"",
    FORGOT_PASSWORD: DOMAIN.api + "/api/main_web/v1/user/forgot_password/",
    CHANGE_PASSWORD: DOMAIN.api + "/api/main_web/v1/user/password/change/",
    PROFILE: DOMAIN.api + "/api/main_web/v1/user/profile/",
    UPDATE_PROFILE: DOMAIN.api + "/api/main_web/v1/user/profile/update/",
    UPDATE_CUSTOMER: DOMAIN.api + "/api/main_web/v1/customer/edit/",
    CHECK_EMAIL: DOMAIN.api + "/api/main_web/v1/customer/check_email/",


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

    RECRUITMENT_LIST: DOMAIN.api + "",

    LEGAL_FORM: DOMAIN.api + "",

    CONTACT_ADD: DOMAIN.api + "/api/main_web/v1/counseling/add/",
    ADVISORY_ADD: DOMAIN.api + "/api/main_web/v1/advisory/create_advisory/",

    FILTER_NEWS: DOMAIN.api + "",

    PROMOTION_LIST: DOMAIN.api + "",

    //Loan
    GET_LOAN_POLICY: DOMAIN.api + "/api/main_web/v1/loan_policy/",
    GET_POLICY: DOMAIN.api + "/api/main_web/v1/loan_policy/policy/",

    //footer email
    NEWSLETTER_REGISTRATION: DOMAIN.api + "/api/main_web/v1/news/register_receive_information/",

    //filter
    FILTER_PROJECT: DOMAIN.api + "/api/main_web/v1/project/list_short/",
    FILTER_PROJECT_TYPE: DOMAIN.api + "/api/main_web/v1/common/project_sale/group/",

    getHeader,
    getUrl,
    authHeader,
    handleRequest,
    handleRequestBinary,

    CONTENT_TYPE
};
