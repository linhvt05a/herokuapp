var data_tasks = {
    "data": [
        {
            "id": 11,
            "text": "Royal Garden",
            "start_date": "28-03-2018",
            "duration": "11",
            "color": "#0068b9",
            "progress": 0.6,
            "status": "Đang triển khai",
            // "open": true
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
            // "open": true
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
            // "open": true
        },
        {
            "id": 13,
            "text": "Adora Garden",
            "start_date": "01-04-2018",
            "duration": "18",
            "color": "#2b8a3e",
            "progress": 0.4,
            "status": "Đang triển khai",
            // "open": true
        },
        {
            "id": 14,
            "text": "Royal City",
            "start_date": "01-04-2018",
            "duration": "18",
            "color": "#2b8a3e",
            "progress": 0.4,
            "status": "Đang triển khai",
            // "open": true
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
            // "open": true
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
            // "open": true
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
            // "open": true
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
            // "open": true
        },
        {
            "id": 55,
            "text": "a",
            "class": "uni_task_top",
            "start_date": "14-04-2018",
            "duration": "3",
            "parent": "5",
            "progress": 0.5,
            "status": "Đang triển khai",
            // "open": true
        },
        {
            "id": 56,
            "text": "a",
            "class": "uni_task_top",
            "start_date": "14-04-2018",
            "duration": "3",
            "parent": "55",
            "progress": 0.5,
            "status": "Đang triển khai",
            // "open": true
        },
        {
            "id": 57,
            "text": "a",
            "class": "uni_task_top",
            "start_date": "14-04-2018",
            "duration": "3",
            "parent": "56",
            "progress": 0.5,
            "status": "Đang triển khai",
            // "open": true
        },
        {
            "id": 58,
            "text": "a",
            "class": "uni_task_top",
            "start_date": "14-04-2018",
            "duration": "3",
            "parent": "57",
            "progress": 0.5,
            "status": "Đang triển khai",
            // "open": true
        },
        {
            "id": 59,
            "text": "a",
            "class": "uni_task_top",
            "start_date": "14-04-2018",
            "duration": "3",
            "parent": "58",
            "progress": 0.5,
            "status": "Đang triển khai",
            // "open": true
        },
        {
            "id": 60,
            "text": "a",
            "class": "uni_task_top",
            "start_date": "14-04-2018",
            "duration": "3",
            "parent": "59",
            "progress": 0.5,
            "status": "Đang triển khai",
            // "open": true
        }
        ,
        {
            "id": 61,
            "text": "a",
            "class": "uni_task_top",
            "start_date": "14-04-2018",
            "duration": "3",
            "parent": "60",
            "progress": 0.5,
            "status": "Đang triển khai",
            // "open": true
        },
        {
            "id": 61,
            "text": "a",
            "class": "uni_task_top",
            "start_date": "14-04-2018",
            "duration": "3",
            "parent": "60",
            "progress": 0.5,
            "status": "Đang triển khai",
            // "open": true
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
            "id": 1,
            "text": "Royal Garden",
            "start_date": "28-03-2018",
            "duration": "11",
            "color": "#0068b9",
            "progress": 0.6,
            "status": "<select class=''><option >Đang triển khai</option><option>New</option><option selected>Finish</option><option>Delay</option><option>Stop</option></select>",
            "open": true,
        },
        {
            "id": '2',
            'class': 'uni_title_user',
            "text": '',
            "parent": '1',
            "status": "15/12/1996",
            "users": "<img width='20'  src='../../../../static/img/default_avatar.svg'/><span class='pl-1'>Đinh Hồng Huỳnh</span>",
            "open": false
        },
        {
            "id": 3,
            "text": "Sunside City",
            "start_date": "01-04-2018",
            "duration": "18",
            "color": "#db3f3f",
            "progress": 0.4,
            "status": "<select class=''><option>Đang triển khai</option><option>New</option><option>Finish</option><option selected>Delay</option><option>Stop</option></select>",
            "open": true
        },
        {
            "id": '4',
            'class': 'uni_title_user',
            "text": '',
            "parent": '3',
            "status": "15/12/1996",
            "users": "<img width='20'  src='../../../../static/img/default_avatar.svg'/><span class='pl-1'>Đinh Hồng Huỳnh</span>",
            "open": false
        },
        {
            "id": 5,
            "text": "Sunrise City",
            "start_date": "01-04-2018",
            "duration": "18",
            "color": "#f29f05",
            "progress": 0.4,
            "status": "<select class=''><option>Đang triển khai</option><option>New</option><option>Finish</option><option>Delay</option><option selected>Stop</option></select>",
            "users": "ga",
            "open": true
        },
        {
            "id": '6',
            'class': 'uni_title_user',
            "text": '',
            "parent": '5',
            "status": "15/12/1996",
            "users": "<img width='20' src='../../../../static/img/default_avatar.svg'/><span class='pl-1'>Đinh Hồng Huỳnh</span>",
            "open": false
        },
        {
            "id": 7,
            "text": "<div style='height:20px;'>Adora Garden</div><div style='height:20px;'>Adora Garden</div>",
            "start_date": "01-04-2018",
            "duration": "18",
            "color": "#2b8a3e",
            "progress": 0.4,
            "status": "<select class=''><option>Đang triển khai</option><option>New</option><option selected>Finish</option><option>Delay</option><option>Stop</option></select>",
            "open": true
        },
        {
            "id": '8',
            'class': 'uni_title_user',
            "text": '',
            "parent": '7',
            "status": "15/12/1996",
            "users": "<img width='20'  src='../../../../static/img/default_avatar.svg'/><span class='pl-1'>Đinh Hồng Huỳnh</span>",
            "open": false
        },
        {
            "id": 9,
            "text": "Bản đồ trích lục giải thửa",
            "start_date": "01-04-2018",
            "duration": "18",
            "color": "#2b8a3e",
            "progress": 0.4,
            "status": "<select class=''><option>Đang triển khai</option><option selected>New</option><option>Finish</option><option>Delay</option><option>Stop</option></select>",
            "open": true
        },
        {
            "id": '10',
            'class': 'uni_title_user',
            "text": '',
            "parent": '9',
            "status": "dd/mm/yyyy",
            "users": "<a><i class='fa fa-plus blue'></i><span class='blue'>Giao task</span></a>",
            "open": false
        },

    ],
    "links": [
        // {"id": "1", "source": "1", "target": "2", "type": "0"},
        // {"id": "2", "source": "2", "target": "3", "type": "0"},

    ]

};