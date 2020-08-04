let menu_system_manager = [
    {
        label: "menu_system_currency",
        icon: "las la-dollar-sign",
        href: "/system/currency"
    },
    {
        label: "menu_system_document_type",
        icon: "las la-donate",
        href: "/system/document-type"
    },
    {
        label: "menu_system_metadata",
        icon: "las la-cubes",
        href: "/system/metadata"
    },
    {
        label: "menu_system_working_process",
        icon: "las la-cog",
        href: "/system/workflow"
    }
];

let menu_hr_manager = [
    {
        label: "menu_hr_office",
        icon: "las la-building",
        href: "/hr/office"
    },
    {
        label: "menu_hr_block",
        icon: "las la-box-open",
        href: "/hr/block"
    },
    {
        label: "menu_hr_department",
        icon: "las la-chalkboard-teacher",
        href: "/hr/department"
    },
    {
        label: "menu_hr_employee",
        icon: "las la-user-tie",
        href: "/hr/employee"
    },
];

let menu_infor_manager = [

    {
        label: "menu_infor_supplier",
        icon: "las la-user-cog",
        href: "/info/supplier"
    },
    {
        label: "menu_infor_investor",
        icon: "las la-user-alt",
        href: "/info/investor"
    },
    {
        label: "menu_infor_shareholder",
        icon: "las la-address-book",
        href: "/info/shareholder"
    },
    {
        label: "menu_infor_contact_group",
        icon: "las la-address-book",
        href: "/info/contactgroup"
    },
    {
        label: "menu_infor_contact",
        icon: "las la-address-book",
        href: "/info/contact"
    },
    {
        label: "menu_shipping_cart_list_title",
        icon: "las la-address-book",
        href: "/info/shipping"
    },
];

let menu_perm_tasks = [
    {
        label: "menu_perm_task_by_projects",
        icon: "las la-copy",
        href: "/perm/project"
    },
    {
        label: "menu_perm_task_by_departments",
        icon: "las la-pencil-ruler",
        href: "/perm/internal"
    }
];

let menu_project_manager = [
    {
        label: "menu_project_info",
        icon: "las la-copy",
        href: "/project/info"
    },
    {
        label: "menu_project_document_reposity",
        icon: "las la-pencil-ruler",
        href: "/project/repository"
    },
    {
        label: "menu_project_timeline",
        icon: "las la-pencil-ruler",
        href: "/project/timeline"
    },
    {
        label: "menu_project_competitive",
        icon: "las la-pencil-ruler",
        href: "/project/competitive"
    },
    {
        label: "menu_branding_sale",
        icon: "las la-pencil-ruler",
        href: "/project/branding-sale"
    }
];

//let menu_project_legal = [
//    {
//        label: "menu_project_legal_project",
//        icon: "las la-folder",
//        href: "/legal/project"
//    },
//    {
//        label: "menu_project_legal_task",
//        icon: "las la-business-time",
//        href: "/legal/task"
//    }
//]
//
//let menu_project_design = [
//    {
//        label: "menu_project_design_project",
//        icon: "las la-folder",
//        href: "/design/project"
//    },
//    {
//        label: "menu_project_design_task",
//        icon: "las la-business-time",
//        href: "/design/task"
//    }
//]
//
//let menu_project_finance = [
//    {
//        label: "menu_project_finance_project",
//        icon: "las la-folder",
//        href: "/finance/project"
//    },
//    {
//        label: "menu_project_finance_task",
//        icon: "las la-business-time",
//        href: "/finance/task"
//    }
//];
//
//let menu_project_sale = [
//    {
//        label: "menu_project_sale_project",
//        icon: "las la-folder",
//        href: "/sale/project"
//    },
//    {
//        label: "menu_project_sale_task",
//        icon: "las la-business-time",
//        href: "/sale/task"
//    }
//]

let menu_project_workflow = [
    {
        label: "menu_project_workflow_internal_task",
        icon: "las la-business-time",
        href: "/pw/internal-project"
    },
    {
        label: "menu_project_workflow_legal",
        icon: "las la-balance-scale",
        href: "/pw/legal"
    },
    {
        label: "menu_project_workflow_design",
        icon: "las la-pencil-ruler",
        href: "/pw/design/project"
    },
    {
        label: "menu_project_workflow_finance",
        icon: "las la-gavel",
        href: "/pw/finance/project/"
    },
]
let menu_internal_management = [
    {
        label: "menu_internal_management_project_legal",
        icon: "las la-balance-scale",
        href: "/task-internal/legal"
    },
]
let menu_data = [
    {
        label: "menu_home",
        icon: "las la-home",
        href: '/',
    },
    {
        label: "menu_system_manager",
        icon: "las la-cog",
        children: menu_system_manager
    },
    {
        label: "menu_hr_manager",
        icon: "las la-users-cog",
        children: menu_hr_manager
    },
    {
        label: "menu_infor_manager",
        icon: "las la-building",
        children: menu_infor_manager
    },
    {
        label: "menu_perm_tasks",
        icon: "las la-user-lock",
        children: menu_perm_tasks
    },
    {
        label: "menu_project_manager",
        icon: "las la-copy",
        children: menu_project_manager
    },
    //    {
    //        label: "menu_project_legal",
    //        icon: "las la-balance-scale",
    //        children: menu_project_legal
    //    },
    //    {
    //        label: "menu_project_design",
    //        icon: "las la-pencil-ruler",
    //        children: menu_project_design
    //    },
    //    {
    //        label: "menu_project_finance",
    //        icon: "las la-gavel",
    //        children: menu_project_finance
    //    },
    //    {
    //        label: "menu_project_sale",
    //        icon: "las la-percentage",
    //        children: menu_project_sale
    //    },
    {
        label: "menu_project_workflow",
        icon: "las la-briefcase",
        children: menu_project_workflow
    },
    {
        label: "menu_internal_management",
        icon: "la la-pencil-ruler",
        children: menu_internal_management
    },
]

function contain(datas, label) {
    for (var i = 0;i < datas.length;i++) {
        var o = datas[i];
        if (o['label'] == label) {
            return true;
        }
        else if (contain(o['children'], label)) {
            return true;
        }
    }
    return false;
}

module.exports = {
    datas: menu_data,
    contain: contain
}
