
import { userService } from './user/services_user';

import { dashboardService } from './Dashboard/services_dashboard';

import { locationService } from './location/services_location';

import { imageService } from './user/services_image';

import { projectService } from './Project/services_project';

import { sysShippingService } from './System/services_system_shipping';


// SYSTEM
import { sysCurrencyService } from './System/services_system_currency';
import { sysDocumentService } from './System/services_system_document';
import { sysWorkingProcessService } from './System/services_system_workflow';
//SUPPLIER

//PERMISSION
import { permissionDepartmentService } from './Permission/services_permission_department';
import { permissionProjectService } from './Permission/services_permission_projects';


export {
    userService, dashboardService,
    locationService, imageService,
    sysCurrencyService, sysDocumentService,
    permissionDepartmentService, permissionProjectService, sysWorkingProcessService, projectService,
    sysShippingService
}
