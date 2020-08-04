import * as Login from './pages/Login';

import * as Dashboard from './pages/Dashboard';

const LOGINS = [
    { "path": "/login", "value": Login.PageLogin, "main_title": "login_main_title", "sub_title": "login_sub_title" },
    { "path": "/forgot", "value": Login.PageForgot, "main_title": "forgot_main_title", "sub_title": "forgot_sub_title" }
];

const MAINS = [
    { "path": "/", "value": Dashboard.Dashboard, "menu": "menu_home", "title": "home_dashboard" },
]

var PATHS = {};
for (var i = 0; i < MAINS.length; i++) {
    var data = MAINS[i];
    var path = data.path.replace("/:id", "");
    PATHS[path] = data.title;
}

export { LOGINS, MAINS, PATHS }
