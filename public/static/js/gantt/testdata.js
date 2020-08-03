var data_tasks = {
    "data": [
        {
            "id": 11,
            "text": "Royal Garden",
            "start_date": "28-03-2018",
            "start_date": "28-05-2018",
            "duration": "11",
            "color": "#0068b9",
            "progress": 0.6,
            "status": "<div class='content-status'><span>AAA</span></div><div class='content-status font-weight-bold font-italic'>9/1/2020</div>",
            "open": true
        },
        {
            "id": 1,
            "text": "Sunside City",
            "start_date": "01-04-2018",
            "duration": "18",
            "color": "#db3f3f",
            "progress": 0.4,
            "status": "Đang triển khai",
            "users": "ga",
            "open": true
        },
        {
            "id": 12,
            "text": "Sunrise City",
            "start_date": "01-04-2018",
            "duration": "18",
            "color": "#f29f05",
            "progress": 0.4,
            "status": "Đang triển khai",
            "users": "ga",
            "open": true
        },
        {
            "id": 13,
            "text": "Adora Garden",
            "start_date": "01-04-2018",
            "duration": "18",
            "color": "#2b8a3e",
            "progress": 0.4,
            "status": "Đang triển khai",
            "open": true
        },
        {
            "id": 14,
            "text": "Royal City",
            "start_date": "01-04-2018",
            "duration": "18",
            "color": "#2b8a3e",
            "progress": 0.4,
            "status": "Đang triển khai",
            "open": true
        },

        {
            "id": 2,
            "text": "Pháp lý đất ",
            "start_date": "02-04-2018",
            "duration": "8",
            "parent": "1",
            "progress": 0.5,
            "color": "#2b8a3e",
            "status": "Đang triển khai",
            "open": true
        },
        {
            "id": 3,
            "text": "Pháp lý quy hoạch",
            "start_date": "11-04-2018",
            "duration": "8",
            "parent": "1",
            "progress": 0.6,
            "color": "#0068b9",
            "status": "Đang triển khai",
            "open": true
        },
        {
            "id": 4,
            "text": "Pháp lý đầu tư",
            "start_date": "13-04-2018",
            "duration": "6",
            "parent": "1",
            "progress": 0.5,
            "color": "#0068b9",
            "status": "Đang triển khai",
            "open": true
        },
        {
            "id": 5,
            "text": "Pháp lý xây dựng",
            "class": "uni_task_top",
            "start_date": "14-04-2018",
            "duration": "3",
            "parent": "11",
            "progress": 0.5,
            "status": "Đang triển khai",
            "open": true
        },

    ],
    "links": [
        // {"id": "1", "source": "1", "target": "2", "type": "0"},
        // {"id": "2", "source": "2", "target": "3", "type": "0"},

    ]
};

var data_tasks_ab = {
    "data": [
        {
            "wbs": "<span style='padding-left: 15px'>1</span>",
            "id": 'state_1',
            "text": "<span class='content-name'>Royal Garden 1</span>",
            "start_date": "11-01-2020",
            "end_date": null,
            "duration": "11",
            "color": "#0068b9",
            // "progress": 0.6,
            "status":"<div class='content-status'><span>AAA</span></div>",
            "unscheduled":true,
            // "open": true,
        },
        {
            "wbs": "<span style='padding-left: 15px'>2</span>",
            "id": 'state_2',
            "text": "<span class='content-name '>Royal Garden 2</span>",
            "start_date": "01-01-2020",
            "end_date": "08-01-2020",
            "duration": "11",
            "color": "#5bb91e",
            // "progress": 0.6,
            "status": "Tre",
            "open": true,
        },
        {
            "id": 'state_4',
            "text": "<span class='content-name'>Royal Garden 3</span>",
             "start_date": "01-02-2020",
            "end_date": "08-02-2020",
            "duration": "11",
            "color": "#b94242",
            // "progress": 0.6,
            "status": "Tre",
            "parent":'state_1',
            "open": true,
        },
        {

            "id": 'state_5',
            "wbs": "<span style='padding-left: 15px'>3</span>",
            "text": "Sunside City 123",
            "start_date": "01-01-2020",
            "end_date": "08-01-2020",
            "duration": "18",
            "color": "#db3f3f",
            // "progress": 0.4,
            "status": "Đang triển khai",
            "open": true
        },
        {
            "id": 'state_8',
            "text": "<span class='content-name'>Royal Garden 33</span>",
             "start_date": "01-02-2020",
            "end_date": "08-02-2020",
            "duration": "11",
            "color": "#b94242",
            // "progress": 0.6,
            "status": "Tre",
            "parent":'state_1',
            "open": true,
        },
        // {
        //     "wbs": 3,
        //     "id": 5,
        //     "text": "Sunrise City",
        //     "start_date": "01-04-2018",
        //     "duration": "18",
        //     "color": "#f29f05",
        //     "progress": 0.4,
        //     "status": "Tre",
        //     "users": "ga",
        //     "open": true
        // },
        // {
        //     "id": '6',
        //     "text": 'Sunrise',
        //     "parent": '5',
        //     "start_date": "01-04-2018",
        //     "end_date": "08-04-2018",
        //     "status": "Tre",
        //     "users": "<img width='20' src='../../../../static/img/default_avatar.svg'/><span class='pl-1'>Đinh Hồng Huỳnh</span>",
        //     "open": false
        // },
        // {
        //     "wbs": 4,
        //     "id": 7,
        //     "text": "Adora Garden",
        //     "start_date": "01-04-2018",
        //     "duration": "18",
        //     "color": "#2b8a3e",
        //     "progress": 0.4,
        //     "status": "Tre",
        //     "open": true
        // },
        // {
        //     "id": '8',
        //     "text": 'Bản đồ v2',
        //     "parent": '7',
        //     "status": "Tre",
        //     "users": "<img width='20'  src='../../../../static/img/default_avatar.svg'/><span class='pl-1'>Đinh Hồng Huỳnh</span>",
        //     "open": true
        // },
        // {
        //     "id": 9,
        //     "text": "Bản đồ trích lục giải thửa",
        //     "start_date": "01-04-2018",
        //     "end_date": "08-04-2018",
        //     "duration": "18",
        //     "color": "#2b8a3e",
        //     "progress": 0.4,
        //     "status": "Đang triển khai",
        //     "open": true
        // },
        // {
        //     "id": '10',
        //     "text": 'Bản đồ',
        //     "start_date": "01-04-2018",
        //     "end_date": "08-04-2018",
        //     "parent": '9',
        //     "status": "Đang triển khai",
        //     "users": "<a><i class='fa fa-plus blue'></i><span class='blue'>Giao task</span></a>",
        //     "open": false
        // },
        // {
        //     "id": '111',
        //     "text": 'Bản đồ',
        //     "status": "Đang triển khai",
        //     "start_date": "01-04-2018",
        //     "end_date": "08-04-2018",
        //     "users": "<a><i class='fa fa-plus blue'></i><span class='blue'>Giao task</span></a>",
        //     "open": false
        // },
        // {
        //     "id": '11',
        //     "text": 'Bản đồ',
        //     "start_date": "01-04-2018",
        //     "end_date": "08-04-2018",
        //     "status": "Đang triển khai",
        //     "users": "<a><i class='fa fa-plus blue'></i><span class='blue'>Giao task</span></a>",
        //     "open": false
        // },
        // {
        //     "id": '13',
        //     "text": 'Bản đồ',
        //     "start_date": "01-04-2018",
        //     "end_date": "08-04-2018",
        //     "status": "Đang triển khai",
        //     "users": "<a><i class='fa fa-plus blue'></i><span class='blue'>Giao task</span></a>",
        //     "open": false
        // },
        //  {
        //     "id": '12',
        //     "text": 'Bản đồ',
        //      "start_date": "01-04-2018",
        //     "end_date": "08-04-2018",
        //     "status": "Đang triển khai",
        //     "users": "<a><i class='fa fa-plus blue'></i><span class='blue'>Giao task</span></a>",
        //     "open": false
        // }
        // ,
        //  {
        //     "id": '14',
        //     "text": 'Bản đồ',
        //      "start_date": "01-04-2018",
        //     "end_date": "08-04-2018",
        //     "status": "Đang triển khai",
        //     "users": "<a><i class='fa fa-plus blue'></i><span class='blue'>Giao task</span></a>",
        //     "open": false
        // }
        // ,
        //  {
        //     "id": '15',
        //     "text": 'Bản đồ',
        //      "start_date": "01-04-2018",
        //     "end_date": "08-04-2018",
        //     "status": "Đang triển khai",
        //     "users": "<a><i class='fa fa-plus blue'></i><span class='blue'>Giao task</span></a>",
        //     "open": false
        // }
        // ,
        //  {
        //     "id": '16',
        //     "text": 'Bản đồ',
        //      "start_date": "01-04-2018",
        //     "end_date": "08-04-2018",
        //     "status": "Đang triển khai",
        //     "users": "<a><i class='fa fa-plus blue'></i><span class='blue'>Giao task</span></a>",
        //     "open": false
        // }
        // ,
        //  {
        //     "id": '17',
        //     "text": 'Bản đồ',
        //      "start_date": "01-04-2018",
        //     "end_date": "08-04-2018",
        //     "status": "Đang triển khai",
        //     "users": "<a><i class='fa fa-plus blue'></i><span class='blue'>Giao task</span></a>",
        //     "open": false
        // }
        // ,
        //  {
        //     "id": '18',
        //     "text": 'Bản đồ',
        //      "start_date": "01-04-2018",
        //     "end_date": "08-04-2018",
        //     "status": "Đang triển khai",
        //     "users": "<a><i class='fa fa-plus blue'></i><span class='blue'>Giao task</span></a>",
        //     "open": false
        // }
        // ,
        //  {
        //     "id": '19',
        //     "text": 'Bản đồ',
        //      "start_date": "01-09-2018",
        //     "end_date": "08-10-2018",
        //     "status": "Đang triển khai",
        //     "users": "<a><i class='fa fa-plus blue'></i><span class='blue'>Giao task</span></a>",
        //     "open": false
        // }

    ],
    "links": [
        // {"id": "1", "source": "1", "target": "2", "type": "0"},
        // {"id": "2", "source": "2", "target": "3", "type": "0"},

    ]
};
