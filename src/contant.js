const IMAGE_URL = "../"

const PROJECT_STATUS = [
    { value: 1, label: "home_waiting_sale" },
    { value: 2, label: "home_coming_soon" },
    { value: 3, label: "home_selling" },
    { value: 4, label: "home_sold" },
    { value: 5, label: "home_stop_selling" },
]

const PROJECT_SALE_GROUP = [
    { value: null, label: "home_all" },
    { value: 1, label: "home_aparment" },
    { value: 2, label: "home_duplex" },
    { value: 3, label: "home_officetel" },
    { value: 4, label: "home_studio" },
    { value: 5, label: "home_penthouse" },
    { value: 6, label: "home_shophouse" },
    { value: 7, label: "home_villa" },
    { value: 8, label: "home_single_villa" },
    { value: 9, label: "home_duplex_villa" },
]

const DIRECTION_TYPE = [
    { value: null, label: "project_all" },
    { value: 1, label: "east" },
    { value: 2, label: "west" },
    { value: 3, label: "south" },
    { value: 4, label: "north" },
    { value: 5, label: "south_east" },
    { value: 6, label: "north_east" },
    { value: 7, label: "south_west" },
    { value: 8, label: "north_west" },
]

module.exports = {
    IMAGE_URL,
    PROJECT_STATUS,
    PROJECT_SALE_GROUP,
    DIRECTION_TYPE
}