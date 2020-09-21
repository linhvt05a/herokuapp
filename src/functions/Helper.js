
// # Trang thai của du an ben Sale
// PROJECT_STATUS_WAITING_SALE = 1     # Chờ bán
// PROJECT_STATUS_COMING_SOON = 2      # Sắp bán
// PROJECT_STATUS_ON_SALE = 3          # Đang bán
// PROJECT_STATUS_SOLD = 4             # Đã bán
// PROJECT_STATUS_STOP_SELLING = 5     # Ngưng bán

export const PROJECT_STATUS = [
    { id: 1, label: "home_waiting_sale", value: 'waiting_sale' },
    { id: 2, label: "home_coming_soon", value: 'coming_soon' },
    { id: 3, label: "home_selling", value: 'on_sale' },
    { id: 4, label: "home_sold", value: 'sold' },
    { id: 5, label: "home_stop_selling", value: 'stop_selling' },
]

export const PROJECT_STATUS_VALUE = (value) => {
    let x = PROJECT_STATUS.find(e => e.value == value)
    if (x) { return x }
}

export const PROJECT_STATUS_ID = (id) => {
    let x = PROJECT_STATUS.find(e => e.id == id)
    if (x) { return x }
}

// --------------------------------------------------------------

export const PROJECT_SALE_GROUP = [
    { id: 0, label: "home_all", value:'all' },
    { id: 1, label: "home_apartment", value:'apartment' },
    { id: 2, label: "home_duplex", value:'duplex' },
    { id: 3, label: "home_officetel", value:'officetel' },
    { id: 4, label: "home_studio" , value:'studio'},
    { id: 5, label: "home_penthouse", value:'penthouse' },
    { id: 6, label: "home_shophouse", value:'shophouse' },
    { id: 7, label: "home_villa", value:'villa' },
    { id: 8, label: "home_single_villa", value:'single_villa' },
    { id: 9, label: "home_duplex_villa", value:'duplex_villa' },
]

export const PROJECT_SALE_GROUP_VALUE = (value) => {
    let x = PROJECT_SALE_GROUP.find(e => e.value == value)
    if (x) { return x }
}

export const PROJECT_SALE_GROUP_ID = (id) => {
    let x = PROJECT_SALE_GROUP.find(e => e.id == id)
    if (x) { return x }
}

// --------------------------------------------------------------
