const { translate } = require("./functions/Utils")

const LOADING_ADS = false;
const IMAGE_URL = "../"
const IMAGE_LOGO = "../images/default_image_minerva.png"
const PHONE_NUMBER = "1900 - 123 - 456"
const EMAIL = "info@minerva.vn"
const TIMEOUT_ADS = 10000;

const MOBILE_WIDTH = 767
const MAP_KEYS = "AIzaSyDZt7EWQR3cI-a_0to4VT2JVcF-c7ti6Ro"



/*Top banner image url */
const BANNER_URL = {
    home_banner_url: '../images/project.jpg',
    introduce_banner_url: '../images/project.jpg',
    contact_banner_url: '../images/project.jpg',
    project_banner_url: '../images/project.jpg',
    projectDetail_banner_url: '../images/project.jpg',
    news_banner_url: '../images/newspaper.jpg',
    newsDetail_banner_url: '../images/newspaper.jpg',
    recruitmentList_banner_url: '../images/recruitment.jpg',
    recruitmentDetail_banner_url: '../images/recruitment.jpg',
    transactionLevel_banner_url: '../images/banner_exchanges.png',
    shoppingGuide_banner_url: '../images/project.jpg',
    juridical_banner_url: '../images/juridical.jpg',
    promotion_banner_url: '../images/project.jpg',
    flashSaleList_banner_url: '../images/flashsale.jpg',
    promotionList_banner_url: '../images/sale_banner.png',
    elements_banner_url: '../images/project.jpg',
    example_banner_url: '../images/project.jpg',
    cart_banner_url: '../images/project.jpg',
    product_banner_url: '../images/project.jpg',
    promotions_attractive_banner_url: '../images/sale_banner.png'
}
//loan Online
const ESTATE_OWNER_TYPE = [
    { value: 1, label: "Nhà sở hữu riêng", text: "OWNERSHIP" },
    { value: 2, label: "Nhà đi thuê", text: "WITH_PARENTS" },
    { value: 3, label: "Ở với bố mẹ", text: "RENT" },
    { value: 4, label: "loan_other", text: "OTHERS" },
]


const EDUCATION_TYPE = [
    { value: 1, label: "Đại học/trên đại học", text: "UNIVERSITY" },
    { value: 2, label: "Cao đẳng", text: "COLLEGE" },
    { value: 3, label: "Trung cấp", text: "INTERMEDIATE" },
    { value: 4, label: "Dưới trung cấp", text: "HIGH_SCHOOL" },
]

const MARITAL_TYPE = [
    { value: 1, label: "Có gia đình", text: "MARRIED" },
    { value: 2, label: "Ly dị/góa", text: "SINGLE" },
    { value: 3, label: "Độc thân", text: "DIVORCE" },
    { value: 4, label: "loan_other", text: "OTHERS" },
]

const BUSINESS_TYPE = [
    { value: 1, label: "Cơ quan nhà nước", text: "STATE_AGENCIES" },
    { value: 2, label: "DN Tư nhân", text: "INDIVIDUAL" },
    { value: 3, label: "CTCP/TNHH", text: "JOINT_STOCK_LIMITED" },
    { value: 4, label: "loan_other", text: "OTHERS" },
]
const POSITION_JOB_TYPE = [
    { value: 1, label: "Cán bộ quản lý/ Chủ doanh nghiệp", text: "MANAGER" },
    { value: 2, label: "Cán bộ CNV", text: "STAFF" },
    { value: 3, label: "Công nhân/Tự kinh doanh", text: "WORKER" },
    { value: 4, label: "Lao động thời vụ/ Thất nghiệp/ Nghỉ hưu", text: "PART_TIME" },
]
const LABOR_CONSTRACT_TYPE = [
    { value: 1, label: "Dưới 6 tháng/ không có hợp đồng lao động", text: "6_MONTH" },
    { value: 2, label: "6 tháng đến 1 năm", text: "6_MONTH_1_YEAR" },
    { value: 3, label: "1 đến 3 năm", text: "1_3_YEAR" },
    { value: 4, label: "Trên 3 năm", text: "3_YEAR" },
    { value: 5, label: "Không xác định thời hạn", text: "NO_LIMIT" },
    { value: 6, label: "Tự làm chủ", text: "OWNERSHIP" },
]
const PAY_TYPE = [
    { value: 1, label: "Qua tài khoản/ thẻ ATM của Vietinbank", text: "ATM" },
    { value: 2, label: "Tài khoản ATM ngân hàng khác", text: "CASH" },
    { value: 3, label: "Tiền mặt", text: "OTHERS" },
]
const DOCUMENT_TYPE = [
    { value: 1, label: "Sao kê bảng lương", text: "PAYROLL_STATEMENT" },
    { value: 2, label: "Hợp đồng lao động", text: "LABOR_CONTRACT" },
]
const FILE_CONTENT_TYPE = {
    DEFAULT: 'application/octet-stream',
    PDF: 'application/pdf',
    PNG: 'image/png',
    JPEG: 'image/jpeg',
    JPG: 'image/jpg',
    DOC: 'application/msword',
    DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    XLS: 'application/vnd.ms-excel',
    XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    DWG: 'image/vnd.dwg',
}
//-------------------------------------------------------------------------------


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
    { value: 0, label: "cart_mr" }, { value: 1, label: "cart_mrs" }, { value: 2, label: "loan_other" }
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
    password: {
        form: [
            {
                required: true,
                message: translate('Please input your Password!')
            }
        ]
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
    BANNER_URL,
    PHONE_NUMBER,
    MOBILE_WIDTH,
    MAP_KEYS,
    EMAIL,

    DIRECTION_TYPE,
    DATA_INTRODUCE,
    NAME_GENDER,
    RULES,
    PAYMENT_METHOD,
    CREDIT_CARD_TYPE,
    RECRUITMENT_STATUS,
    LOAN_TYPE,
    TIMEOUT_ADS,
    LOADING_ADS,
    ESTATE_OWNER_TYPE,
    EDUCATION_TYPE,
    MARITAL_TYPE,
    BUSINESS_TYPE,
    POSITION_JOB_TYPE,
    LABOR_CONSTRACT_TYPE,
    PAY_TYPE,
    DOCUMENT_TYPE,
    FILE_CONTENT_TYPE
}