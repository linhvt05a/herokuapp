import * as Login from './pages/Login';

import * as Dashboard from './pages/Dashboard';

import * as Account from "./pages/Account";

import * as System from "./pages/System";

import * as Perm from "./pages/Permission"

const LOGINS = [
    { "path": "/login", "value": Login.PageLogin, "main_title": "login_main_title", "sub_title": "login_sub_title" },
    { "path": "/forgot", "value": Login.PageForgot, "main_title": "forgot_main_title", "sub_title": "forgot_sub_title" }
];

const MAINS = [
    { "path": "/", "value": Dashboard.Dashboard, "menu": "menu_home", "title": "home_dashboard" },

    { "path": "/changepass", "value": Account.PageChangePass, "menu": "menu_home", "title": "changepassword_title" },
    { "path": "/profile", "value": Account.PageProfile, "menu": "menu_home", "title": "Profile" },
    { "path": "/chat", "value": Account.PageChat, "menu": "menu_home", "title": "Message" },
    { "path": "/notification", "value": Account.PageNotify, "menu": "menu_home", "title": "Notifications" },

    { "path": "/system/currency", "value": System.PageCurrency, "menu": "menu_system_currency", "title": "menu_system_currency" },
    { "path": "/system/currency/add", "value": System.PageCurrencyAdd, "menu": "menu_system_currency", "title": "Add" },
    { "path": "/system/currency/edit/:id", "value": System.PageCurrencyEdit, "menu": "menu_system_currency", "title": "Update" },

    { "path": "/system/document-type", "value": System.PageListCart, "menu": "", "title": "Project List" },

    { "path": "/system/document-type/add", "value": System.PageDocumentTypeAdd, "menu": "menu_system_document_type", "title": "Add" },
    { "path": "/system/document-type/edit/:id", "value": System.PageDocumentTypeEdit, "menu": "menu_system_document_type", "title": "Update" },
    { "path": "/system/document-type/detail/:id", "value": System.PageDocumentTypeDetail, "menu": "menu_system_document_type", "title": "Update" },

    { "path": "/system/metadata", "value": System.PageMetadata, "menu": "menu_system_metadata", "title": "menu_system_metadata" },

    { "path": "/system/workflow", "value": System.PageWorkflow, "menu": "menu_system_working_process", "title": "menu_system_working_process" },
    { "path": "/system/workflow/add", "value": System.PageWorkflowAdd, "menu": "menu_system_working_process", "title": "Add" },
    { "path": "/system/workflow/edit/:id", "value": System.PageWorkflowEdit, "menu": "menu_system_working_process", "title": "Update" },
    { "path": "/system/workflow/state/:id", "value": System.PageWorkflowState, "menu": "menu_system_working_process", "title": "State List" },
    { "path": "/system/workflow/state/:id/edit/:state_id/", "value": System.PageWorkflowStateEdit, "menu": "menu_system_working_process", "title": "Update" },
    { "path": "/system/workflow/state/:id/add/", "value": System.PageWorkflowStateAdd, "menu": "menu_system_working_process", "title": "Add" },
    { "path": "/system/workflow/draw/:id", "value": System.PageWorkflowDraw, "menu": "menu_system_working_process", "title": "Template" },

    { "path": "/perm/project", "value": Perm.PagePermProject, "menu": "menu_perm_task_by_projects", "title": "menu_perm_task_by_projects" },
    { "path": "/perm/project/add", "value": Perm.PagePermProjectAdd, "menu": "menu_perm_task_by_projects", "title": "Add" },
    { "path": "/perm/project/detail/:id", "value": Perm.PagePermProjectDetail, "menu": "menu_perm_task_by_projects", "title": "Update" },

    { "path": "/perm/internal", "value": Perm.PagePermInternal, "menu": "menu_perm_task_by_departments", "title": "menu_perm_task_by_departments" },
    { "path": "/perm/internal/add", "value": Perm.PagePermInternalAdd, "menu": "menu_perm_task_by_departments", "title": "Add" },
    { "path": "/perm/internal/detail/:id", "value": Perm.PagePermInternalDetail, "menu": "menu_perm_task_by_departments", "title": "Update" },
]

var PATHS = {};
for (var i = 0; i < MAINS.length; i++) {
    var data = MAINS[i];
    var path = data.path.replace("/:id", "");
    PATHS[path] = data.title;
}

export { LOGINS, MAINS, PATHS }
