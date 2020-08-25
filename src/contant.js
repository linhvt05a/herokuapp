const IMAGE_URL = "./assets"

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

module.exports = {
    IMAGE_URL,
    PROJECT_STATUS,
    PROJECT_SALE_GROUP
}