
import { userService } from './user/services_user';

import { dashboardService } from './Dashboard/services_dashboard';

import { locationService } from './location/services_location';

import { imageService } from './user/services_image';

import { projectService } from './Project/services_project';

import { productService } from './Product/service_product';

import { customerService } from './NewContract/services_customer';

import { requestCartService } from './RequestCart/services_request_cart'


// SYSTEM
import { sysCurrencyService } from './System/services_system_currency';
//SUPPLIER

//PERMISSION
import { permissionDepartmentService } from './Permission/services_permission_department';
import { permissionProjectService } from './Permission/services_permission_projects';

//shipping
import { sysCartService } from "./System/services_system_cart"

export {
    userService, dashboardService,
    locationService, imageService,
    sysCurrencyService,
    permissionDepartmentService,
    permissionProjectService,
    projectService,
    sysCartService,
    productService,
    requestCartService

}
