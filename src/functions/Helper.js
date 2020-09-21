
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
    { value: 0, label: "home_all", name:'all' },
    { value: 1, label: "home_apartment", name:'apartment' },
    { value: 2, label: "home_duplex", name:'duplex' },
    { value: 3, label: "home_officetel", name:'officetel' },
    { value: 4, label: "home_studio" , name:'studio'},
    { value: 5, label: "home_penthouse", name:'penthouse' },
    { value: 6, label: "home_shophouse", name:'shophouse' },
    { value: 7, label: "home_villa", name:'villa' },
    { value: 8, label: "home_single_villa", name:'single_villa' },
    { value: 9, label: "home_duplex_villa", name:'duplex_villa' },
]

// export const PROJECT_SALE_GROUP = (value) => {
//     let x = PROJECT_STATUS.find(e => e.name == value)
//     if (x) { return x }
// }

// export const PROJECT_SALE_GROUP = (id) => {
//     let x = PROJECT_STATUS.find(e => e.value == id)
//     if (x) { return x }
// }