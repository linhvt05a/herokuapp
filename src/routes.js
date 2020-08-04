import * as Login from './pages/Login';

import * as Dashboard from './pages/Dashboard';

import * as Account from "./pages/Account";

import * as System from "./pages/System";

import * as Perm from "./pages/Permission";

import * as Info from "./pages/info"

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

    { "path": "/perm/project", "value": Perm.PagePermProject, "menu": "menu_perm_task_by_projects", "title": "menu_perm_task_by_projects" },
    { "path": "/perm/project/add", "value": Perm.PagePermProjectAdd, "menu": "menu_perm_task_by_projects", "title": "Add" },
    { "path": "/perm/project/detail/:id", "value": Perm.PagePermProjectDetail, "menu": "menu_perm_task_by_projects", "title": "Update" },

    { "path": "/perm/internal", "value": Perm.PagePermInternal, "menu": "menu_perm_task_by_departments", "title": "menu_perm_task_by_departments" },
    { "path": "/perm/internal/add", "value": Perm.PagePermInternalAdd, "menu": "menu_perm_task_by_departments", "title": "Add" },
    { "path": "/perm/internal/detail/:id", "value": Perm.PagePermInternalDetail, "menu": "menu_perm_task_by_departments", "title": "Update" },

    { "path": "/info/shipping", "value": Info.Shipping, "menu": "menu_shipping_cart_list_title", "title": "Danh sách dự án" },

]

var PATHS = {};
for (var i = 0;i < MAINS.length;i++) {
    var data = MAINS[i];
    var path = data.path.replace("/:id", "");
    PATHS[path] = data.title;
}

export { LOGINS, MAINS, PATHS }
