const { translate } = require("./functions/Utils")

const IMAGE_URL = "../"
const IMAGE_LOGO = "../images/default_image_minerva.png"
const PHONE_NUMBER = "1900 - 123 - 456"
const MOBILE_WIDTH = 767
const MAP_KEYS = "AIzaSyDZt7EWQR3cI-a_0to4VT2JVcF-c7ti6Ro"
const PROJECT_STATUS = [
    { value: 1, label: "home_waiting_sale" },
    { value: 2, label: "home_coming_soon" },
    { value: 3, label: "home_selling" },
    { value: 4, label: "home_sold" },
    { value: 5, label: "home_stop_selling" },
]

const PROJECT_SALE_GROUP = [
    { value: 0, label: "home_all" },
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
    { value: 0, label: "project_all" },
    { value: 1, label: "east" },
    { value: 2, label: "west" },
    { value: 3, label: "south" },
    { value: 4, label: "north" },
    { value: 5, label: "south_east" },
    { value: 6, label: "north_east" },
    { value: 7, label: "south_west" },
    { value: 8, label: "north_west" },
]
const RECRUITMENT_STATUS = [
    { value: 0, label: "New" },
    { value: 1, label: "Hiring" },
    { value: 2, label: "Hired" }
]
const DATA_INTRODUCE = {
    list_images: [
        { image_url: './images/in_overview01.jpg', image_alt: "test" },
        { image_url: './images/in_overview01.jpg', image_alt: "test" },
        { image_url: './images/in_overview01.jpg', image_alt: "test" },
        { image_url: './images/in_overview01.jpg', image_alt: "test" },
        { image_url: './images/in_overview01.jpg', image_alt: "test" },
    ],

    tab_content: [
        {
            tab_label: 'Về chúng tôi',
            tab_content: '<p>Được thành lập Tháng 4/2017. Công ty Minerva hoạt động trong lĩnh vực mua bán, cho thuê căn hộ, Shophouse thương mại, biệt thự tại Hồ Chí Minh với các dự án tại Bình Thạnh, Quận 1, Quận 2.<br>Với đội ngũ nhân sự cao cấp trong nhiều lĩnh vực, chúng tôi phát triển hệ thống phân phối bất động sản trực tuyến, cung cấp dịch vụ môi giới hoàn hảo, tạo ra một quá trình mua, bán, cho thuê</p><p class="mb-0">Bất động sản thông minh và hiệu suất cao, dựa trên sự kết hợp giữa công nghệ hiện đại và các chuyên viên tư vấn hàng đầu..</p>'
        },
        {
            tab_label: 'Tầm nhìn',
            tab_content: '<p>Công ty Minerva hoạt động trong lĩnh vực mua bán, cho thuê căn hộ, Shophouse thương mại, biệt thự tại Hồ Chí Minh với các dự án tại Bình Thạnh, Quận 1, Quận 2.<br>Với đội ngũ nhân sự cao cấp trong nhiều lĩnh vực, chúng tôi phát triển hệ thống phân phối bất động sản trực tuyến, cung cấp dịch vụ môi giới hoàn hảo, tạo ra một quá trình mua, bán, cho thuê</p><p class="mb-0">Bất động sản thông minh và hiệu suất cao, dựa trên sự kết hợp giữa công nghệ hiện đại và các chuyên viên tư vấn hàng đầu..</p>'
        },
        {
            tab_label: 'Sứ mệnh',
            tab_content: '<p>Bất động sản thông minh và hiệu suất cao, dựa trên sự kết hợp giữa công nghệ hiện đại và các chuyên viên tư vấn hàng đầu..</p>'
        },
    ]
}
const NAME_GENDER = [
    { value: 0, label: "cart_mr" }, { value: 1, label: "cart_mrs" }
]
const RULES = {
    phone: {
        form: [
            {
                required: true,
                message: translate("input_null"),
            },
            {
                min: 9, max: 10,
                message: translate("phone_length")
            }
        ],
        type: 'number'
    },
    identity: {
        form: [
            {
                required: true,
                message: translate("input_null"),
            },
            {
                min: 9,
                message: translate("identity_length")
            }
        ],
        type: 'number'
    },
    number: {
        form: [
            {
                required: true,
                message: translate("input_null"),
            }
        ],
        type: 'number'
    },
    email: {
        form: [
            {
                type: 'email',
                message: translate("invalid_email"),
            },
            {
                required: true,
                message: translate("input_null"),
            },
        ],
        type: 'email'
    },
    text: {
        form: [
            {
                required: true,
                message: translate("input_null")
            }
        ],
        type: 'text'
    },
}

const PAYMENT_METHOD = [
    { id: 1, type: "PAYMENT_METHOD_MASTER_CARD" },
    { id: 2, type: "PAYMENT_METHOD_ATM" },
    { id: 3, type: "PAYMENT_METHOD_INTERNET_BANKING" }
]
const CREDIT_CARD_TYPE = [
    { id: 1, type: "CREDIT_CARD_TYPE_VISA" },
    { id: 2, type: "CREDIT_CARD_TYPE_MASTERCARD" },
    { id: 3, type: "CREDIT_CARD_TYPE_AMEX" },
    { id: 4, type: "CREDIT_CARD_TYPE_JCB" }
]
const LOAN_TYPE = [
    { id: 1, type: "LOAN_TYPE_AMORTIZED_LOAN", label: "Amortized Loan" },
    { id: 2, type: "LOAN_TYPE_FIXED_ANNUITY_LOAN", label: "Fixed Annuity Loan" }
]


module.exports = {
    IMAGE_URL,
    IMAGE_LOGO,
    PHONE_NUMBER,
    MOBILE_WIDTH,
    MAP_KEYS,

    PROJECT_STATUS,
    PROJECT_SALE_GROUP,
    DIRECTION_TYPE,
    DATA_INTRODUCE,
    NAME_GENDER,
    RULES,
    PAYMENT_METHOD,
    CREDIT_CARD_TYPE,
    RECRUITMENT_STATUS,
    LOAN_TYPE,
}