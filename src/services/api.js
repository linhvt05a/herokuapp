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

    DASHBOARD_PROJECT_TIME_LINE: '/api/v1/project/timeline/',
    DASHBOARD_LIST_PROJECT: '/api/v1/dashboard/project_list/',
    DASHBOARD_CASH_FLOW: '/api/v1/dashboard/cash_flow/',
    DASHBOARD_CAPITAL_STRUCTURE: '/api/v1/dashboard/capital_structure/',

    PROJECT_LIST: '/api/v1/project/list/',
    PROJECT_INVESTOR:'/api/v1/information/investor/list_shorten/',
    PROJECT_MODEL:'/api/v1/project/model/list/',
    PROJECT_LIST_WORK_FLOW:'/api/v1/system/workflow/list_shorten/',
    PROJECT_DETAIL:'/api/v1/project/detail/',
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
    PROJECT_NEWS_LIST:'/api/v1/project/news/list/',
    PROJECT_NEWS_ADD:'/api/v1/project/news/add/',
    PROJECT_NEWS_DETAIL:'/api/v1/project/news/detail/',
    PROJECT_NEWS_EDIT:'/api/v1/project/news/edit/',
    PROJECT_NEWS_DELETE:'/api/v1/project/news/delete/',
    PROJECT_CURRENCY_LIST: '/api/v1/project/currency/list/',

    HR_OFFICE: '/api/v1/human_resource/office/list/',
    HR_OFFICE_DETAIL: '/api/v1/human_resource/office/detail/',
    HR_OFFICE_EDIT: '/api/v1/human_resource/office/edit/',
    HR_OFFICE_GROUP: '/api/v1/human_resource/office_group/list/',
    HR_OFFICE_GROUP_DETAIL: '/api/v1/human_resource/office_group/detail/',
    HR_OFFICE_GROUP_ADD: '/api/v1/human_resource/office_group/add/',
    HR_OFFICE_GROUP_UPDATE: '/api/v1/human_resource/office_group/edit/',

    HR_DEPARTMENNT: '/api/v1/human_resource/department/list/',
    HR_DEPARTMENNT_DETAIL: '/api/v1/human_resource/department/detail/',
    HR_DEPARTMENNT_ADD: '/api/v1/human_resource/department/add/',
    HR_DEPARTMENNT_UPDATE: '/api/v1/human_resource/department/edit/',

    HR_EMPLOYEE: '/api/v1/human_resource/employee/list/',
    HR_EMPLOYEE_DETAIL: '/api/v1/human_resource/employee/detail/info/',
    HR_EMPLOYEE_ADD: '/api/v1/human_resource/employee/add/',
    HR_EMPLOYEE_EDIT: '/api/v1/human_resource/employee/edit/info/',
    HR_EMPLOYEE_ACCOUNT_ADD: '/api/v1/human_resource/employee/detail/account/add/',
    HR_EMPLOYEE_ACCOUNT_DETAIL: '/api/v1/human_resource/employee/detail/account/',
    HR_EMPLOYEE_ACCOUNT_EDIT: '/api/v1/human_resource/employee/edit/account/',

    HR_EMPLOYEE_WORKPROCESS_DETAIL: '/api/v1/human_resource/employee/detail/work_process/',
    HR_EMPLOYEE_WORKPROCESS_EDIT: '/api/v1/human_resource/employee/edit/work_process/',

    INFO_CONTACT_LIST: '/api/v1/information/contact/list/',
    INFO_CONTACT_GROUP_SHORTEN: '/api/v1/information/contact_group/list_shorten/',
    INFO_CONTACT_DETAIL: '/api/v1/information/contact/detail/',
    INFO_CONTACT_ADD: '/api/v1/information/contact/add/',
    INFO_CONTACT_EDIT: '/api/v1/information/contact/edit/',
    INFO_CONTACT_DELETE: '/api/v1/information/contact/delete/',

    INFO_CONTACT_GROUP_LIST: '/api/v1/information/contact_group/list/',
    INFO_CONTACT_GROUP_DELETE: '/api/v1/information/contact_group/delete/',
    INFO_CONTACT_GROUP_DETAIL: '/api/v1/information/contact_group/detail/',
    INFO_CONTACT_GROUP_ADD: '/api/v1/information/contact_group/add/',
    INFO_CONTACT_GROUP_EDIT: '/api/v1/information/contact_group/edit/',
    INFO_CONTACT_GROUP_LIST_SHORTEN: '/api/v1/information/contact/list_shorten/',
    INFO_CONTACT_GROUP_ADD_TAB: '/api/v1/information/contact_group/edit/contact/add/',
    INFO_CONTACT_GROUP_PERMISSION_ADD_TAB: '/api/v1/information/contact_group/edit/permission/add/',
    INFO_CONTACT_GROUP_PERMISSION_DELETE_TAB: '/api/v1/information/contact_group/edit/permission/delete/',
    INFO_CONTACT_GROUP_DELETE_TAB: '/api/v1/information/contact_group/edit/contact/delete/',

    INFO_SHAREHOLDER_LIST: '/api/v1/information/shareholder/',
    INFO_SHAREHOLDER_TYPES: '/api/v1/information/shareholder/shareholder_setting_type/',
    INFO_SHAREHOLDER_DELETE_DOCUMENT: '/api/v1/information/shareholder/delete_document/',
    INFO_SHAREHOLDER_DELETE_CONTACT: '/api/v1/information/shareholder/delete_contact/',
    INFO_SHAREHOLDER_DETAIL: '/api/v1/information/shareholder/detail',
    INFO_SHAREHOLDER_ADD_EDIT: '/api/v1/information/shareholder/create_and_update',
    INFO_SHARE_HOLDER_TYPE: '/api/v1/information/shareholder/shareholder_setting_type/',

    INFO_SUPPLIER_LIST: '/api/v1/information/supplier/list/',
    INFO_SUPPLIER_TYPE_LIST: '/api/v1/information/supplier/type/list/',
    INFO_SUPPLIER_DETAIL: '/api/v1/information/supplier/detail/',
    INFO_SUPPLIER_ADD: 'api/v1/information/supplier/add/',

    INFO_INVESTOR_LIST: '/api/v1/information/investor/',
    INFO_INVESTOR_DETAIL: '/api/v1/information/investor/detail/',
    INFO_INVESTOR_ADD: '/api/v1/investor/create_and_update/',
    INFO_INVESTOR_SETTING_TYPE_LIST: '/api/v1/information/investor/setting_type/list/',
    INFO_INVESTOR_CONTACT_DELETE: '/api/v1/information/investor/delete_contact/',
    INFO_INVESTOR_EDIT: '/api/v1/information/investor/update/',

    INFO_DOCUMENT_TYPE_LIST: '/api/v1/information/investor/document_type/list/',

    SYS_CURRENCY_LIST: '/api/v1/system/currency/list/',
    SYS_CURRENCY_ADD: '/api/v1/system/currency/add/',
    SYS_CURRENCY_DETAIL: '/api/v1/system/currency/detail/',
    SYS_CURRENCY_EDIT: '/api/v1/system/currency/edit/',

    SYS_DOCUMENT_TYPE_LIST: '/api/v1/system/document_type/list/',
    SYS_DOCUMENT_TYPE_DETAIL: '/api/v1/system/document_type/detail/',
    SYS_DOCUMENT_TYPE_ADD: '/api/v1/system/document_type/add/',
    SYS_DOCUMENT_TYPE_EDIT: '/api/v1/system/document_type/edit/',

    SYS_LIST_PROJECT_PERIOD: '/api/v1/system/workflow/template/project_period/list/',

    SYS_WORKING_PROCESS_LIST: '/api/v1/system/workflow/template/list/',
    SYS_WORKING_PROCESS_DETAIL: '/api/v1/system/workflow/template/detail/',
    SYS_WORKING_PROCESS_ADD: '/api/v1/system/workflow/template/add/',
    SYS_WORKING_PROCESS_EDIT: '/api/v1/system/workflow/template/edit/',

    SYS_STATE_LIST: '/api/v1/system/workflow/template/state/',
    SYS_STATE_ADD: '/api/v1/system/workflow/template/state/add/',
    SYS_STATE_DETAIL: '/api/v1/system/workflow/template/state/detail/',
    SYS_STATE_EDIT: '/api/v1/system/workflow/template/state/edit/',
    SYS_STATE_PARENT_LIST: '/api/v1/system/workflow/template/state/parent/list/',

    LOCATION_REGION: '/api/v1/location/regions/',
    LOCATION_PROVINCE: '/api/v1/location/provinces/',
    LOCATION_DISTRICT: '/api/v1/location/districts/',
    LOCATION_WARD: '/api/v1/location/wards/',

    LANGUAGE_LIST: '/api/v1/user/language/list/',
    LANGUAGE_CHANGE: '/api/v1/user/language/change/',

    DEPARTMENT_TASK_LIST: '/api/v1/permission_task/department_task/list/',
    DEPARTMENT_TASK_DETAIL: '/api/v1/permission_task/department_task/detail/',
    DEPARTMENT_TASK_ADD: '/api/v1/permission_task/department_task/add/',
    DEPARTMENT_TASK_EDIT: '/api/v1/permission_task/department_task/edit/',
    DEPARTMENT_TASK_DELETE: '/api/v1/permission_task/department_task/delete/',
    DEPARTMENT_TASK_LAYOUT:'/api/v1/permission_task/department_task/layout/',

    PROJECT_TASK_LIST: '/api/v1/permission_task/project_task/list/',

    INTERNAL_PROJECT_TASK: '/api/v1/project/member/list_shorten/',
    INTERNAL_PROJECT_TASK_LIST:'/api/v1/project/project_internal/task/',

    PERMISSION_PROJECT_LIST: '/api/v1/permission_task/project_task/list/',
    PERMISSION_PROJECT_DETAIL: '/api/v1/permission_task/project_task/detail/',
    PERMISSION_PROJECT_ADD: '/api/v1/permission_task/project_task/add/',
    PERMISSION_PROJECT_EDIT: '/api/v1/permission_task/project_task/edit/',
    PERMISSION_PROJECT_LAYOUT: '/api/v1/permission_task/project_task/layout/',

    SELECT_OFFICE: '/api/v1/select/office/',
    SELECT_DEPARTMENT: '/api/v1/select/department/',
    SELECT_POSITION: '/api/v1/select/position/',
    SELECT_EMPLOYEE: '/api/v1/select/employee/',
    SELECT_BLOCK: '/api/v1/select/block/',
    SELECT_INVESTOR_POSITION: '/api/v1/information/investor/contact/position/list/',

    FINANCE_LIST: '/api/v1/project/finance/list/',
    FINANCE_PROJECT_MEMBER: '/api/v1/project/member/list/',
    FINANCE_PROJECT: '/api/v1/project_workflow/finance/project/',
    FINANCE_PROJECT_NEWS : '/api/v1/project/news/list/',
    FINANCE_INFO: '/api/v1/project/detail/',

    getHeader,
    getUrl,
    authHeader,
    handleRequest,
    handleRequestBinary,

    CONTENT_TYPE
};

