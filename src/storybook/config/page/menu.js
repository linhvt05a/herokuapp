let menu_base = [
    {
        label: "Input",
        icon: "las children1",
        href: "/storybook/input"
    },
    {
        label: "DatePicker",
        icon: "las children2",
        href: "/storybook/datePicker"
    },
    {
        label: "Dropdown",
        icon: "las children3",
        href: "/storybook/dropdown"
    },
    {
        label: "Select",
        icon: "las children5",
        href: "/storybook/select"
    },
    {
        label: "Button",
        icon: "las children5",
        href: "/storybook/button"
    },
];

let menu_cards = [
    {
        label: "CardHeader",
        icon: "las children1",
        href: "/storybook/card/cardHeader"

    },
    {
        label: "CardProductDetail",
        icon: "las children1",
        href: "/storybook/card/cardProductDetail"

    },
    {
        label: "CardFilterPosition",
        icon: "las children1",
        href: "/storybook/card/CardFilterPosition"

    },
    {
        label: "CardGrid",
        icon: "las children1",
        href: "/storybook/card/CardGrid"

    },
]

let menu_data = [
    {
        label: "base",
        icon: "las parent",
        children: menu_base
    },
    {
        label: "Cards",
        icon: "las parent",
        children: menu_cards
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
