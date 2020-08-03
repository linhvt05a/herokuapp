
import { userService } from './user/services_user';

import { dashboardService } from './Dashboard/services_dashboard';

import { locationService } from './location/services_location';

import { imageService } from './user/services_image';

// HR
import { hrBlockService } from './HR/services_hr_block';
import { hrDepartmentService } from './HR/services_hr_department';
import { hrEmployeeService } from './HR/services_hr_employee';
import { hrOfficeService } from './HR/services_hr_office';

// INFO MANAGER
import { infoContactService } from "./Info/services_info_contact";
import { infoContactGroupService } from "./Info/services_info_contact_group";
import { infoShareholderService } from "./Info/services_info_shareholder";
import { infoSupplierServices } from './Info/services_info_supplier'

// SYSTEM
import { sysCurrencyService } from './System/services_system_currency';
import { sysDocumentService } from './System/services_system_document';
import { sysWorkingProcessService } from './System/services_system_workflow';
//SUPPLIER
//INVESTOR
import { infoInvestorService } from './Info/services_info_investor'
//PERMISSION
import { permissionDepartmentService } from './Permission/services_permission_department';
import { permissionProjectService } from './Permission/services_permission_projects';
import { selectService } from './Select/services_select';
import { projectService } from './Project/services_project';
//WORKFLOW
import { workFlowService } from './Workflow/service_workflow';

export {
    userService, dashboardService,
    locationService, imageService, selectService,
    infoContactService, infoContactGroupService, infoShareholderService, infoSupplierServices,
    hrBlockService, hrDepartmentService, hrEmployeeService, hrOfficeService,
    sysCurrencyService, sysDocumentService,
    permissionDepartmentService, permissionProjectService, projectService,
    infoInvestorService, sysWorkingProcessService,
    workFlowService
}
