import * as Login from './pages/Login';

import * as Dashboard from './pages/Dashboard';

import * as Account from "./pages/Account";

import * as System from "./pages/System";

import * as ProductCart from "./pages/ProductCart";

import * as Project from "./pages/Project";

import * as Perm from "./pages/Permission"

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

    { "path": "/product_card/new_contract/customer_info", "value": ProductCart.CustomerInfo, "menu": "menu_product_cart_customer_info", "title": "" },
    { "path": "/product_card/new_contract/discount_option", "value": ProductCart.DiscountOption, "menu": "menu_product_cart_customer_info", "title": "" },
    { "path": "/product_card/new_contract/payment", "value": ProductCart.Payment, "menu": "menu_product_cart_customer_info", "title": "" },
    { "path": "/product_card/new_contract/order_info", "value": ProductCart.OrderInfo, "menu": "menu_product_cart_customer_info", "title": "" },
    { "path": "/product_card/new_contract/finish", "value": ProductCart.Finish, "menu": "menu_product_cart_customer_info", "title": "" },
    
    { "path": "/info/project", "value": Project.PageProject, "menu": "menu_list_task_by_projects", "title": "Dự án" },
    { "path": "/info/project/detail/:id", "value": Project.PageProjectDetail, "menu": "menu_project_detail_customer_info", "title": "Thông tin dự án" },

    { "path": "/perm/project", "value": System.PageListCart, "menu": "menu_perm_task_by_projects", "title": "" },
    { "path": "/perm/project/add", "value": Perm.PagePermProjectAdd, "menu": "menu_perm_task_by_projects", "title": "Add" },
    { "path": "/perm/project/detail/:id", "value": Perm.PagePermProjectDetail, "menu": "menu_perm_task_by_projects", "title": "Update" },

    { "path": "/perm/internal", "value": Perm.PagePermInternal, "menu": "menu_perm_task_by_departments", "title": "menu_perm_task_by_departments" },
    { "path": "/perm/internal/add", "value": Perm.PagePermInternalAdd, "menu": "menu_perm_task_by_departments", "title": "Add" },
    { "path": "/perm/internal/detail/:id", "value": Perm.PagePermInternalDetail, "menu": "menu_perm_task_by_departments", "title": "Update" },
    //shipping
    { "path": "/info/shipping", "value": Info.Home, "menu": "menu_shipping_cart_list_title", "title": "menu_shipping_cart_list_title" },
    { "path": "/info/shipping/edit/:id", "value": Info.Edit, "menu": "menu_shipping_cart_list_title", "title": "Detail" },
]

var PATHS = {};
for (var i = 0;i < MAINS.length;i++) {
    var data = MAINS[i];
    var path = data.path.replace("/:id", "");
    PATHS[path] = data.title;
}

export { LOGINS, MAINS, PATHS }
