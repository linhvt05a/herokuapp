// let menu_distribution_channel = [
//     {
//         label: "menu_system_currency",
//         icon: "las la-dollar-sign",
//         href: "/system/currency"
//     },
//     {
//         label: "menu_system_document_type",
//         icon: "las la-donate",
//         href: "/system/document-type"
//     },
//     {
//         label: "menu_system_metadata",
//         icon: "las la-cubes",
//         href: "/system/metadata"
//     },
//     {
//         label: "menu_system_working_process",
//         icon: "las la-cog",
//         href: "/system/workflow"
//     }
// ];

// let menu_hr_manager = [
//     {
//         label: "menu_hr_office",
//         icon: "las la-building",
//         href: "/hr/office"
//     },
//     {
//         label: "menu_hr_block",
//         icon: "las la-box-open",
//         href: "/hr/block"
//     },
//     {
//         label: "menu_hr_department",
//         icon: "las la-chalkboard-teacher",
//         href: "/hr/department"
//     },
//     {
//         label: "menu_hr_employee",
//         icon: "las la-user-tie",
//         href: "/hr/employee"
//     },
// ];

let menu_infor_manager = [
    {
        label: "menu_shipping_cart_list_title",
        icon: "las la-user-tie",
        href: "/cart/cart_list"
    },
    {
        label: "menu_shipping_cart_registration",
        icon: "las la-user-cog",
        href: "#"
    },
    {
        label: "menu_approved",
        icon: "las la-user-alt",
        href: "#"
    },
    {
        label: "menu_exchange",
        icon: "las la-address-book",
        href: "#"
    },
    // {
    //     label: "menu_infor_contact_group",
    //     icon: "las la-address-book",
    //     href: "/info/contactgroup"
    // },
    // {
    //     label: "menu_infor_contact",
    //     icon: "las la-address-book",
    //     href: "/info/contact"
    // },

];

let menu_perm_tasks = [
    {
        label: "menu_synthetic",
        icon: "las la-copy",
        href: "#"
    },
    {
        label: "menu_approved",
        icon: "las la-pencil-ruler",
        href: "#"
    }
];

// let menu_project_manager = [
//     {
//         label: "menu_project_info",
//         icon: "las la-copy",
//         href: "/project/info"
//     },
//     {
//         label: "menu_project_document_reposity",
//         icon: "las la-pencil-ruler",
//         href: "/project/repository"
//     },
//     {
//         label: "menu_project_timeline",
//         icon: "las la-pencil-ruler",
//         href: "/project/timeline"
//     },
//     {
//         label: "menu_project_competitive",
//         icon: "las la-pencil-ruler",
//         href: "/project/competitive"
//     },
//     {
//         label: "menu_branding_sale",
//         icon: "las la-pencil-ruler",
//         href: "/project/branding-sale"
//     }
// ];

// let menu_project_workflow = [
//     {
//         label: "menu_project_workflow_internal_task",
//         icon: "las la-business-time",
//         href: "/pw/internal-project"
//     },
//     {
//         label: "menu_project_workflow_legal",
//         icon: "las la-balance-scale",
//         href: "/pw/legal"
//     },
//     {
//         label: "menu_project_workflow_design",
//         icon: "las la-pencil-ruler",
//         href: "/pw/design/project"
//     },
//     {
//         label: "menu_project_workflow_finance",
//         icon: "las la-gavel",
//         href: "/pw/finance/project/"
//     },
// ]
// let menu_internal_management = [
//     {
//         label: "menu_internal_management_project_legal",
//         icon: "las la-balance-scale",
//         href: "/task-internal/legal"
//     },
// ]
let menu_data = [
    {
        label: "menu_home",
        icon: "las la-home",
        href: '/',
    },
    {
        label: "menu_project",
        icon: "las la-cog",
        // children: menu_system_manager
        href: "/info/project"
    },
    {
        label: "menu_distribution_channel",
        icon: "las la-users-cog",
        // children: menu_hr_manager
        href: "/distribution"
    },
    {
        label: "menu_cart",
        icon: "las la-building",
        children: menu_infor_manager
    },
    {
        label: "menu_sales_manager",
        icon: "las la-user-lock",
        children: menu_perm_tasks
    },
    {
        label: "Uniprime",
        icon: "las la-users-cog",
        // children: menu_hr_manager
        href: "/uniprime/step2"
    },
    // {
    //     label: "menu_project_manager",
    //     icon: "las la-copy",
    //     children: menu_project_manager
    // },
    // {
    //     label: "menu_project_workflow",
    //     icon: "las la-briefcase",
    //     children: menu_project_workflow
    // },
    // {
    //     label: "menu_internal_management",
    //     icon: "la la-pencil-ruler",
    //     children: menu_internal_management
    // },
]

function contain(datas, label) {
    for (var i = 0;i < datas.length;i++) {
        var o = datas[i];
        if (o['label'] === label) {
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
