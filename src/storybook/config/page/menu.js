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

let menu_data = [
    {
        label: "Input",
        icon: "las "
    },
    {
        label: "menu_sales_manager",
        icon: "las la-user-lock",
        children: menu_perm_tasks
    },
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
