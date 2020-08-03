

const gender = [
    { value: "", label: "-- Select Gender --" },
    { value: 1, label: "male" },
    { value: 2, label: "female" }
]

const activates = [
    { value: 1, label: "Active" },
    { value: 0, label: "Stop" }
]
const statusActive = [
    { value: 1, label: "Active" },
    { value: 0, label: "Inactive" }
]
const filterActions = [
    { value: "All", label: "All" },
    { value: 1, label: "Actions" },
    { value: 0, label: "Stopped" }
]
const status = [
    { value: 1, label: "New" },
    { value: 2, label: "Pending" },
    { value: 3, label: "In Progress" },
    { value: 4, label: "Stop" },
    { value: 5, label: "Finished" }
];

const persons = [
    { value: 1, label: "Phó Tổng giám đốc Khối Tài chính Kế toán" },
    { value: 2, label: "Giám đốc Khối Tài chính Kế toán" },
    { value: 3, label: "Nhân viên Tài chính" },
    { value: 4, label: "Trưởng phòng Tài chính" },
    { value: 5, label: "Trần Văn TC1" },
    { value: 6, label: "Trần Văn TC2" },
    { value: 7, label: "Trần Văn TC3" }
];

const employees = [
    { value: 1, label: "Phó Tổng giám đốc Khối Tài chính Kế toán" },
    { value: 2, label: "Giám đốc Khối Tài chính Kế toán" },
    { value: 3, label: "Nhân viên Tài chính" },
    { value: 4, label: "Trưởng phòng Tài chính" },
    { value: 5, label: "Trần Văn TC1" },
    { value: 6, label: "Trần Văn TC2" },
    { value: 7, label: "Trần Văn TC3" }
];
const projectType = [
    { value: 1, label: "Chung Cư Căn Hộ " },
    { value: 2, label: "Văn Phòng Cho Thuê" },
    { value: 3, label: "Siêu Thị " },
    { value: 4, label: "Trung Tâm Thương Mại " },
    { value: 5, label: "Biệt Thự Cao Cấp" },
]
const selectprovince = [
    { value: 34, label: "Bắc Kạn" },
    { value: 67, label: "Bạc Liêu" },
    { value: 31, label: "Bắc Ninh" },
    { value: 69, label: "Bà Rịa - Vũng Tàu" },
    { value: 47, label: "Bến Tre" },
    { value: 4, label: "Bình Định" },
    { value: 56, label: "Bình Dương" },
    { value: 60, label: "Bình Phước" },
    { value: 58, label: "Bình Thuận" },
    { value: 40, label: "Cà Mau" },
    { value: 45, label: "Cần Thơ" },
    { value: 39, label: "Cao Bằng" },
    { value: 65, label: "Đắk Lắk" },
    { value: 62, label: "Đắk Nông" },
    { value: 7, label: "Đà Nẵng" },
    { value: 13, label: "Điện Biên" },
    { value: 57, label: "Đồng Nai" },
    { value: 53, label: "Đồng Tháp" },
    { value: 1, label: "Gia Lai" },
    { value: 38, label: "Hà Giang" },
    { value: 24, label: "Hải Dương" },
    { value: 23, label: "Hải Phòng" },
    { value: 19, label: "Hà Nam" },
    { value: 20, label: "Hà Nội" },
    { value: 12, label: "Hà Tĩnh" },
    { value: 41, label: "Hậu Giang" },
    { value: 16, label: "Hòa Bình" },
    { value: 55, label: "Hồ Chí Minh" },
    { value: 21, label: "Hưng Yên" },
    { value: 64, label: "Khánh Hòa" },
    { value: 68, label: "Kiên Giang" },
    { value: 3, label: "Kon Tum" },
    { value: 14, label: "Lai Châu" },
    { value: 61, label: "Lâm Đồng" },
    { value: 35, label: "Lạng Sơn" },
    { value: 28, label: "Lào Cai" },
    { value: 54, label: "Long An" },
    { value: 18, label: "Nam Định" },
    { value: 11, label: "Nghệ An" },
    { value: 17, label: "Ninh Bình" },
    { value: 63, label: "Ninh Thuận" },
    { value: 26, label: "Phú Thọ" },
    { value: 2, label: "Phú Yên" },
    { value: 10, label: "Quảng Bình" },
    { value: 6, label: "Quảng Nam" },
    { value: 5, label: "Quảng Ngãi" },
    { value: 37, label: "Quảng Ninh" },
    { value: 8, label: "Quảng Trị" },
    { value: 66, label: "Sóc Trăng" },
    { value: 25, label: "Sơn La" },
    { value: 59, label: "Tây Ninh" },
    { value: 22, label: "Thái Bình" },
    { value: 32, label: "Thái Nguyên" },
    { value: 15, label: "Thanh Hóa" },
    { value: 9, label: "Thừa Thiên - Huế" },
    { value: 52, label: "Tiền Giang" },
    { value: 42, label: "Trà Vinh" },
    { value: 29, label: "Tuyên Quang" },
    { value: 46, label: "Vĩnh Long" },
    { value: 30, label: "Vĩnh Phúc" },
    { value: 27, label: "Yên Bái" }
]
const select_district = [
    { value: 660, label: "Bình Thủy" },
    { value: 660, label: "Cái Răng" },
    { value: 660, label: "Cờ Đỏ" },
    { value: 660, label: "Ninh Kiều" },
    { value: 660, label: "Ô Môn" },
    { value: 660, label: "Phong Điền" },
    { value: 660, label: "Thới Lai" },
    { value: 660, label: "Thốt Nốt" },
    { value: 660, label: "Vĩnh Thạnh" },
]


const regions = [
    { value: 1, label: "Bắc Trung Bộ" },
    { value: 2, label: "Đông Bắc Bộ" },
    { value: 3, label: "Đồng Bằng Sông Cửu Long" },
    { value: 4, label: "Đồng Bằng Sông Hồng" },
    { value: 5, label: "Đông Nam Bộ" },
    { value: 6, label: "Nam Trung Bộ" },
    { value: 7, label: "Tây Bắc Bộ" },
    { value: 8, label: "Tây Nguyên" }
];

const provinces = [
    { value: 1, label: "An Giang" },
    { value: 2, label: "Bắc Giang" },
    { value: 3, label: "Bắc Kạn" },
    { value: 4, label: "Bạc Liêu" },
    { value: 5, label: "Bắc Ninh" },
    { value: 6, label: "Bà Rịa - Vũng Tàu" },
    { value: 7, label: "Bến Tre" },
    { value: 8, label: "Bình Định" }
];

const districts = [
    { value: 1, label: "Quận 1" },
    { value: 2, label: "Quận 2" },
    { value: 3, label: "Quận 3" },
    { value: 4, label: "Quận 4" },
    { value: 5, label: "Quận 5" },
    { value: 6, label: "Quận 6" },
];

const wards = [
    { value: 1, label: "Phường 1" },
    { value: 2, label: "Phường 2" },
    { value: 3, label: "Phường 3" },
    { value: 4, label: "Phường 4" },
    { value: 5, label: "Phường 5" },
    { value: 6, label: "Phường 6" },
];

const type_projects = [
    { value: 1, label: "All", "class": "las la-square m_text" },
    { value: 2, label: "Apartment", "class": "las la-square  m_text_a8c200" },
    { value: 3, label: "Office", "class": "las la-square  m_text_f35e5e" },
    { value: 4, label: "Shopping Mall", "class": "las la-square  m_text_" },
    { value: 5, label: "Villa", "class": "las la-square  m_text_fb9334" },
    { value: 6, label: "Type  Supermarket", "class": "las la-square  m_text_e9c301" }
];

//============================================================
const projects = [
    { "id": "1", "name": "MINERVA BUILDING", "status": "Đang triển khai", "updateat": "19-05-2020", "updateby": "Chủ tịch" },
    { "id": "2", "name": "MINERVA BUILDING", "status": "Đang triển khai", "updateat": "19-05-2020", "updateby": "Chủ tịch" },
    { "id": "3", "name": "MINERVA BUILDING", "status": "Đang triển khai", "updateat": "19-05-2020", "updateby": "Chủ tịch" },
    { "id": "4", "name": "MINERVA BUILDING", "status": "Đang triển khai", "updateat": "19-05-2020", "updateby": "Chủ tịch" },
]

const ancestor = [
    { value: 1, label: "--All--" },
    { value: 2, label: "Low" },
    { value: 3, label: "Normal" },
    { value: 4, label: "High" },
    { value: 5, label: "Immediately" }
]


const projects1 = [
    {
        "img": "https://i1-kinhdoanh.vnecdn.net/2020/05/29/a-tb-city-phia-Dong-TP-HCM-QT-6574-1590768164.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=MhL5VkEaqbjz4P5TMssIjg",
        "title": "Bất động sản mùa Corona",
        "address": "211 Pasteur, Phường 6, Quận 3, Hồ Chí Minh",
        "area": "5.120,0 (m2) ",
        "floor": "10 Floor ",
    },
    {
        "img": "https://i1-kinhdoanh.vnecdn.net/2020/05/29/a-tb-city-phia-Dong-TP-HCM-QT-6574-1590768164.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=MhL5VkEaqbjz4P5TMssIjg",
        "title": "MINERVA BUILDING",
        "address": "119 pasteur, Phường 6, Quận 3, Hồ Chí Minh",
        "area": "5.120,0 (m2) ",
        "floor": "10 Floor "
    },
    {
        "img": "https://i1-kinhdoanh.vnecdn.net/2020/05/29/a-tb-city-phia-Dong-TP-HCM-QT-6574-1590768164.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=MhL5VkEaqbjz4P5TMssIjg",
        "title": "SUNNY WORLD",
        "address": "119 pasteur, Phường 6, Quận 3, Hồ Chí Minh",
        "area": "5.120,0 (m2) ",
        "floor": "10 Floor "
    },
    {
        "img": "https://i1-kinhdoanh.vnecdn.net/2020/05/29/a-tb-city-phia-Dong-TP-HCM-QT-6574-1590768164.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=MhL5VkEaqbjz4P5TMssIjg",
        "title": "SUNNY WORLD",
        "address": "Đường số 15, P. Tân Hưng, Q.7, TPHCM, Tân Hưng, Quận 7, Hồ Chí Minh",
        "area": "5.120,0 (m2) ",
        "floor": "10 Floor "
    },
    {
        "img": "https://i1-kinhdoanh.vnecdn.net/2020/05/29/a-tb-city-phia-Dong-TP-HCM-QT-6574-1590768164.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=MhL5VkEaqbjz4P5TMssIjg",
        "title": "INDOCHINA PLAZA HANOI",
        "address": "241 Xuân Thủy, Dịch Vọng, Cầu Giấy, Hà Nội",
        "area": "5.120,0 (m2) ",
        "floor": "10 Floor "
    },
    {
        "img": "https://i1-kinhdoanh.vnecdn.net/2020/05/29/a-tb-city-phia-Dong-TP-HCM-QT-6574-1590768164.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=MhL5VkEaqbjz4P5TMssIjg",
        "title": "SAIGON PENINSULA",
        "address": "Số 122, 124 Xuân Thủy, Phú Thuận, Quận 7, Hồ Chí Minh",
        "area": "5.120,0 (m2) ",
        "floor": "10 Floor "
    },
]
//============================================================
const positions = [
    { value: 1, label: "--Lựa Chọn--" },
    { value: 2, label: "Thư ký/Trợ lý" },
    { value: 3, label: "Phó Tổng giám đốc" },
    { value: 4, label: "Giám đốc Khối" },
    { value: 5, label: "Trưởng phòng" },
    { value: 6, label: "Chuyên viên" },
    { value: 7, label: "Tổng giám đốc" }
]
const offices = [
    { value: 1, label: 'Công ty Cổ phần Phát triển Và Quản lý Sunny World' },
];


const blocks = [
    { value: 1, label: "Khối Tài Chính/Đầu Tư" },
    { value: 2, label: "Khối Quản Lý Thiết Kế" },
    { value: 3, label: "Khối Quản Lý Dự Án" },
    { value: 4, label: "Khối Đấu Thầu &amp; Dự Toán Khối Lượng" },
    { value: 5, label: "Khối Quản Lý Kỹ Thuật" },
    { value: 6, label: "Khối Hoạt Động" }
]

const departments = [
    { value: 1, label: "Pháp Chế Doanh Nghiệp" },
    { value: 2, label: "Nhân sự &amp; Hành chính" },
    { value: 3, label: "Quy trình &amp; Hệ thống &amp; Tuân thủ" },
    { value: 4, label: "Công nghệ thông tin" },
    { value: 5, label: "Quản lý dự án Xây dựng" },
    { value: 7, label: "Quản lý MEP" },
    { value: 8, label: "Sau hợp đồng" },
    { value: 9, label: "Pháp lý dự án" },
    { value: 10, label: "Quản lý dự án" },
    { value: 11, label: "Quản lý Thiết kế &amp; Quy hoạch" },
    { value: 12, label: "Quản lý Kiến trúc" },
    { value: 13, label: "Đầu tư" },
    { value: 14, label: "Tài chính" },
    { value: 15, label: "Kế toán" },
    { value: 16, label: "Quản Trị" }
]

const permissions = [
    { value: 1, label: "Edit Owner Task" },
    { value: 2, label: "Delete Owner Task" },
    { value: 3, label: "Edit Owner Comment" },
    { value: 4, label: "Add Task" },
    { value: 5, label: "Manage Subtask" },
    { value: 6, label: "Manage Relation" },
    { value: 7, label: "Manage Watcher List" },
    { value: 8, label: "View Task" },
    { value: 9, label: "Add Comment" },
    { value: 10, label: "Delete Comment" }
]
const ward = [
    { value: 10, label: "An Bình" },
    { value: 10, label: "An Cư" },
    { value: 10, label: "An Hòa" },
    { value: 10, label: "An Hội" },
    { value: 10, label: "An Khánh" },
    { value: 10, label: "An Lạc" },
    { value: 10, label: "An Nghiệp" },
    { value: 10, label: "An Phú" },
    { value: 10, label: "Cái Khế" },
    { value: 10, label: "Hưng Lợi" },
    { value: 10, label: "Tân An" },
    { value: 10, label: "Thới Bình" },
    { value: 10, label: "Xuân Khánh" },
]

const periods = [
    { value: 1, label: "Đang thẩm định" },
    { value: 2, label: "Đang đầu tư" },
    { value: 3, label: "Đang xây dựng" },
    { value: 4, label: "Đang bán hàng" },
    { value: 5, label: "Đang hậu mãi" },
];

//============================================================
const status_progress = [
    { value: 1, label: "Chưa triển khai", "class": "las la-square status_type_1" },
    { value: 2, label: "Đang triển khai", "class": "las la-square status_type_2" },
    { value: 3, label: "Dừng", "class": "las la-square status_type_3" },
    { value: 4, label: "Trễ hạn", "class": "las la-square status_type_4" },
    { value: 5, label: "Hoàn thành", "class": "las la-square status_type_5" },
]



const listTask = [
    { value: 1, label: "Pháp Lý Đất", "href": "/pw/legal/project/1/task" },
    { value: 2, label: "Pháp lý Quy Hoạch", "href": "/project/dashboard/detail/4/group2" },
    { value: 3, label: "Pháp Lý Đầu Tư", "href": "/project/dashboard/detail/4/group3" },
    { value: 4, label: "Pháp Lý Xin Phép Xây Dựng", "href": "/project/dashboard/detail/4/group4" },
]
const progress = [
    {
        "id": "1",
        "title": "Pháp Lý Đất: ",
        value: 10,
        "status": "Trễ Hạn",
        "color": "danger"
    },
    {
        "id": "2",
        "title": "Pháp Lý Quy Hoạch: ",
        value: 35,
        "status": "Chưa Triển Khai",
        "color": "success"
    },
    {
        "id": "3",
        "title": "Pháp Lý Đầu Tư: ",
        value: 100,
        "status": "Chưa Triển Khai",
        "color": "warning"
    },
    {
        "id": "4",
        "title": "Pháp Lý Xin Phép Xây Dựng: ",
        value: 80,
        "status": "Chưa Triển Khai",
        "color": "info"
    }
]
const listSuplier = [
    {
        "value": "1",
        "label": "Tất cả các nhóm",

    },
    {
        "value": "2",
        "label": "Thiết kế",

    },
    {
        "value": "3",
        "label": "Xây dựng",

    },
    {
        "value": "4",
        "label": "Giám sát",

    },
    {
        "value": "5",
        "label": "Thẩm định",

    },
    {
        "value": "6",
        "label": "Vật tư",

    },
    {
        "value": "7",
        "label": "Khác",

    }
]

const suplierStatus = [
    {
        "id": "1",
        "title": "Thiết kế",
    },
    {
        "id": "2",
        "title": "Xây dựng",
    },
    {
        "id": "3",
        "title": "Giám sát",
    },
    // {
    //     "id": "4",
    //     "title" :"Vật tư",
    // },
    // {
    //     "id": "5",
    //     "title" :"Khác",
    // },
    // {
    //     "id": "6",
    //     "title" :"Thẩm định",
    // }
]
const supplierTab = [
    {
        "id": "1",
        "title": "Liên Hệ"
    },
    {
        "id": "2",
        "title": "Thư Viện"
    },

]
const currency_unit = [
    { value: 0, label: "USD" },
    { value: 1, label: "VND" },
]
//===========================================================
const projects_model = [
    { value: 1, label: "Bán" },
    { value: 2, label: "Cho Thuê" },
    { value: 3, label: "Bán & Cho THUÊ" },
]

const workflow = [
    { value: 1, label: "QTDT01 - Quy Trình Lập Kế Hoạch và Thẩm Định Đầu Tư" },
    { value: 2, label: "QTDT02" },
    { value: 3, label: "QTDT03" },
]
//============================================================
const projects_investor = [
    { value: 1, label: 'Công ty Cổ phần Phát triển Và Quản lý Sunny World' },
    { value: 2, label: 'Công Ty Cổ Phần Bất Động Sản Hoa Anh Đào' },
    { value: 3, label: 'Công ty Cổ phần Bất động sản nghỉ dưỡng Sài Gòn Garden' },
    { value: 4, label: 'Công ty Cổ phần Châu Á Thái Bình Dương - Apec Group' },
    { value: 5, label: 'Công Ty Cổ Phần Đầu Tư Ceo Group' },
    { value: 6, label: 'Công Ty Cổ Phần Đầu Tư - Kinh Doanh Nhà' },
]
const investorsDiaglog = [
    { value: 88, label: 'Công Ty Cổ Phần Đầu Tư - Kinh Doanh Nhà' },
    { value: 106, label: 'Công Ty Cổ Phần Đầu Tư Xây Dựng Phát Triển Nhà Số 7 Hà Nội' },
    { value: 109, label: 'Công ty TNHH Đầu tư Phát triển Đô thị mới Thủ Thiêm' },
    { value: 102, label: 'Công ty Cổ phần PPC An Thịnh Đà Nẵng' },
    { value: 107, label: 'Tập đoàn Kusto' },
    { value: 86, label: 'Tập đoàn Oxley' },
    { value: 104, label: 'Công Ty Cổ Phần Đầu Tư Sản Xuất Kinh Doanh Sài Gòn Cửu Long' },
    { value: 101, label: 'Công ty Cổ phần Châu Á Thái Bình Dương - Apec Group' },
    { value: 2, label: 'Công Ty TNHH Tân Thuận Nam' },
    { value: 93, label: 'Công ty Cổ phần Địa ốc Sài Gòn Thương Tín (TTC Land)' },
    { value: 85, label: 'Công Ty Cổ Phần Quốc Lộc Phát' },
    { value: 110, label: 'Công ty Cổ phần Dịch vụ Giải trí Hưng Thịnh Quy Nhơn' },
    { value: 84, label: 'Công Ty Cổ Phần Tập Đoàn Phát Triển Empire' },
    { value: 103, label: 'Công Ty Cổ Phần Đầu Tư Ceo Group' },
    { value: 111, label: 'Công ty Cổ phần Khách sạn Bến du thuyền' },
    { value: 99, label: 'Công ty Cổ phần Phát triển Tài trợ Địa ốc R.C' },
    { value: 108, label: 'Tập đoàn BIM' },
    { value: 97, label: 'Công ty Cổ phần Đầu tư Quốc tế C.S.Q' },
    { value: 100, label: 'Công Ty TNHH Xây Dựng Và Thương Mại Sài Gòn 9' },
    { value: 92, label: 'Tập đoàn Keppel' },
    { value: 98, label: 'Công ty Cổ phần Đầu tư Phát triển và Xây dựng Thành Đô - Chi Nhánh Đà Nẵng' },
    { value: 95, label: 'Công Ty Cổ Phần Dịch Vụ Thông Tin Bất Động Sản Netland' },
    { value: 96, label: 'Công ty Cổ phần Bất động sản nghỉ dưỡng Sài Gòn Garden' },
    { value: 90, label: 'Công Ty Cổ Phần Đầu Tư Văn Phú - Invest' },
    { value: 91, label: 'Công Ty Cổ Phần Bất Động Sản Hoa Anh Đào' },
    { value: 87, label: 'Công Ty TNHH Tập Đoàn Bitexc' },
    { value: 116, label: 'Công ty TNHH 1TM MTP-SKY' },
    { value: 89, label: 'Công Ty Cổ Phần Tập Đoàn Sunshine' },
    { value: 94, label: 'Công Ty Cổ Phần NDC An Khang' },
    { value: 1, label: 'CÔNG TY CỔ PHẦN ĐẦU TƯ &amp; PHÁT TRIỂN SUNNY WORLD' },
    { value: 117, label: 'Công ty Sản Xuất TM CP AN AN' },
]
const select_rating = [
    { value: 1, label: 'A+' },
    { value: 1, label: 'A' },
    { value: 1, label: 'B' },
]

const duration_years = [
    { value: 1, label: '50' },
    { value: 2, label: '70' },
    { value: 3, label: '90' },
    { value: 4, label: 'SỬ DỤNG DÀI HẠN' },
]

//============================================================

const tasks = {
    data: [
        { "id": 11, "text": "Project #1", "progress": 0.6, "open": true },

        { "id": 12, "text": "Task #1", "start_date": "03-04-2013", "duration": "5", "parent": "11", "progress": 1, "open": true },
        { "id": 13, "text": "Task #2", "start_date": "03-04-2013", "parent": "11", "progress": 0.5, "open": true },
        { "id": 14, "text": "Task #3", "start_date": "02-04-2013", "duration": "6", "parent": "11", "progress": 0.8, "open": true },
        { "id": 15, "text": "Task #4", "parent": "11", "progress": 0.2, "open": true },
        { "id": 16, "text": "Final milestone", "start_date": "15-04-2013", "parent": "11", "progress": 0, "open": true },

        { "id": 17, "text": "Task #2.1", "start_date": "03-04-2013", "duration": "2", "parent": "13", "progress": 1, "open": true },
        { "id": 18, "text": "Task #2.2", "start_date": "06-04-2013", "duration": "3", "parent": "13", "progress": 0.8, "open": true },
        { "id": 19, "text": "Task #2.3", "start_date": "10-04-2013", "duration": "4", "parent": "13", "progress": 0.2, "open": true },
        { "id": 20, "text": "Task #2.4", "start_date": "10-04-2013", "duration": "4", "parent": "13", "progress": 0, "open": true },
        { "id": 21, "text": "Task #4.1", "start_date": "03-04-2013", "duration": "4", "parent": "15", "progress": 0.5, "open": true },
        { "id": 22, "text": "Task #4.2", "start_date": "03-04-2013", "duration": "4", "parent": "15", "progress": 0.1, "open": true },
        { "id": 23, "text": "Mediate milestone", "start_date": "14-04-2013", "parent": "15", "progress": 0, "open": true }
    ],
    links: [
        { "id": "10", "source": "11", "target": "12", "type": "1" },
        { "id": "11", "source": "11", "target": "13", "type": "1" },
        { "id": "12", "source": "11", "target": "14", "type": "1" },
        { "id": "13", "source": "11", "target": "15", "type": "1" },
        { "id": "14", "source": "23", "target": "16", "type": "0" },
        { "id": "15", "source": "13", "target": "17", "type": "1" },
        { "id": "16", "source": "17", "target": "18", "type": "0" },
        { "id": "17", "source": "18", "target": "19", "type": "0" },
        { "id": "18", "source": "19", "target": "20", "type": "0" },
        { "id": "19", "source": "15", "target": "21", "type": "2" },
        { "id": "20", "source": "15", "target": "22", "type": "2" },
        { "id": "21", "source": "15", "target": "23", "type": "0" }
    ]
};
//============================================================
const rank_type = [
    { "value": "1", "label": "A+" },
    { "value": "2", "label": "A" },
    { "value": "3", "label": "B" }

]

const participants = [
    { "value": "1", "label": "Chung Thanh Phong" },
    { "value": "2", "label": "Giám đốc Khối Tài chính Kế toán - Khối: Khối Tài chính Đầu tư" },
    { "value": "3", "label": "Manager-Phòng ban: Pháp chế Doanh nghiệp - Khối: Khối Tài chính Đầu tư" },
    { "value": "4", "label": "Nguyễn A-Phòng ban: Quản lý Thiết kế & Quy hoạch - Khối: Khối Quản lý Thiết kế" },
]

const role = [
    { "value": "1", "label": "Nhân viên Tài Chính" },
    { "value": "2", "label": "Nhân viên Thiết kế Quy hoạch" },
    { "value": "3", "label": "Trưởng phòng Pháp Lý Dự Án" },
    { "value": "4", "label": "Trưởng phòng Pháp Lý Dự Án" },
    { "value": "5", "label": "Nhân viên Pháp Lý Dự Án (PLDA)" },



]
//============================================================
const project_period = [
    { "value": "1", "label": "Đang thẩm định" },
    { "value": "2", "label": "Đang đầu tư" },
    { "value": "3", "label": "Đang xây dựng" },
    { "value": "4", "label": "Đang bán hàng" },
    { "value": "5", "label": "Đang hậu mãi" }
]
//============================================================

const worktimes = [
    { "value": 1, "label": "Giờ" },
    { "value": 2, "label": "Ngày" },
    { "value": 3, "label": "Phút" }
]
//============================================================
const investorProject = [
    {
        "id": "1",
        "project_name": "SMART CITY",
        "address": "1060, Nguyễn Văn Linh, Phường Tân Phong, Quận 7, HCM, Tân Phong, Quận 7, Hồ Chí Minh",
        "project_investor": "NA",
        "total_area": "15.689,0 (m2)",
        "floor": "45 Floor",
        "count_project": "3",
        "categories": "Chung Cư Căn Hộ"
    }
]
const suppliers = [
    { "value": "1", "label": "Thiết kế" },
    { "value": "2", "label": "Xây dựng" },
    { "value": "3", "label": "Giám sát" },
    { "value": "4", "label": "Thẩm định" },
    { "value": "5", "label": "Vật tư" },
    { "value": "6", "label": "Khác" }

]
const group_investor = [
    { "value": "", "label": "All the groups" },
    { "value": "1", "label": "Internal" },
    { "value": "2", "label": "Outside" },
]
const presenter = [
    { "value": "1", "label": "Nguyễn Văn Linh" },
    { "value": "2", "label": "Nguyễn Tân Phong" },
]
const currency = [
    { "value": "1", "label": "Tỷ đồng" },
    { "value": "2", "label": "USD" },
    { "value": "3", "label": "Vnd" }
]
const document_type = [
    {
        "id": 1,
        "document_setting_type_name": "GIẤY CHỨNG NHẬN ĐĂNG KÝ KINH DOANH",
        "document_setting_type_description": "Cập nhật những chứng từ liên quan tới thông tin doanh nghiệp ví dụ như quy chế quản trị, cấu trúc quản trị, báo cáo quản trị, ….",
    },
    {
        "id": 2,
        "document_setting_type_name": "BÁO CÁO TÀI CHÍNH",
        "document_setting_type_description": "Cập nhật những chứng từ liên quan tới thông tin doanh nghiệp ví dụ như điều lệ, báo cáo thường niên, ….",
    },
    {
        "id": 3,
        "document_setting_type_name": "SƠ ĐỒ TỔ CHỨC",
        "document_setting_type_description": "Cập nhật những chứng từ liên quan tới sơ đồ tổ chức của chủ đầu tư",
    },
    {
        "id":4,
        "document_setting_type_name": "THÔNG TIN DOANH NGHIỆP",
        "document_setting_type_description": "Cập nhật những chứng từ liên quan tới thông tin doanh nghiệp ví dụ như điều lệ, báo cáo thường niên, ….",
    },
    {
        "id": 5,
        "document_setting_type_name": "QUẢN TRỊ CÔNG TY",
        "document_setting_type_description": "Cập nhật những chứng từ liên quan tới thông tin doanh nghiệp ví dụ như quy chế quản trị, cấu trúc quản trị, báo cáo quản trị, ….",
    }
]
module.exports = {
    gender, activates, status, statusActive,
    persons, employees, periods,
    regions, provinces, districts, wards,
    projects, projects1, type_projects,
    ancestor, tasks, filterActions,
    positions, offices, blocks, departments, permissions,
    status_progress, listTask, progress, listSuplier,
    projects_model, workflow, suplierStatus,
    projects_investor, duration_years, currency, supplierTab,
    rank_type, project_period, worktimes,
    participants, role, investorProject, projectType, investorsDiaglog, select_rating, selectprovince, select_district, ward, currency_unit,
    suppliers, group_investor, presenter, document_type
}
