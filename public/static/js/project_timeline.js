$(document).ready(function () {
    // collectDataFromDB();

    //Detect event
    $('#project_gantt').on('click', function (callback) {
        setTimeout(function () {
            backgroundAfterToday(callback)
        },);
    });

    //Gantt start
    var zoomConfig = {
        levels: [
            {
                name: "month",
                scale_height: 50,
                min_column_width: 120,
                scales: [
                    {unit: "year", format: "Năm %Y"},
                    {unit: "week", format: "Tuần %W"}
                ]
            },
        ]
    };

    var toggleCritical = function () {
        if (gantt.config.highlight_critical_path)
            gantt.config.highlight_critical_path = !true;
        else
            gantt.config.highlight_critical_path = true;
        gantt.render();
    }

    gantt.config.scale_height = 36 * 3;

    var dayScaleTemplate = function (date) {
        var dateToStr = gantt.date.date_to_str("%d/%m");
        return dateToStr(date)
    };

    gantt.config.columns = [
        // {name: "wbs", label: "STT", width: 40, template: gantt.getWBSCode, "resize": true},
        {name: "text", label: "Tên Phòng Ban", tree: true, width: 170, "resize": true, min_width: 10},
        // {name: "start_date", align: "center", width: 90, "resize": true},
        // {name: "duration", align: "center", width: 80, "resize": true},
        // {name: "add", width: 40}
    ];

    gantt.templates.rightside_text = function (start, end, task) {
        if (task.type == gantt.config.types.milestone)
            return task.text + " / ID: #" + task.id;
        return "";
    };

    // gantt.config.date_scale = "%D";
    gantt.config.start_on_monday = false;
    gantt.config.open_split_tasks = true;

    gantt.config.scales = [
        {unit: "year", format: "Năm %Y"},
        {unit: "month", format: "%F"},
        {unit: "day", step: 1, template: dayScaleTemplate},
    ];
    // gantt.config.subscales = [
    //     {unit: "year", format: "Năm %Y"},
    //     {unit: "month", format: "%F"},
    //     {unit: "week", step: 1, template: weekScaleTemplate}
    // ];

    // gantt.ext.zoom.init(zoomConfig);
    // gantt.ext.zoom.setLevel("month");

    //
    gantt.config.details_on_create = false;
    gantt.config.details_on_dblclick = false;
    gantt.config.drag_move = false;
    gantt.config.drag_progress = false;
    gantt.config.drag_resize = false;
    gantt.config.drag_links = false;
    gantt.config.show_progress = true;


    var markerId = gantt.addMarker({
        start_date: new Date(),
        css: "today",
        text: '&nbsp;'
    });

    /*gantt.templates.tooltip_text = function (start, end, task) {
        return "<b>Task:</b> " + task.text + "<br/><b>Start Date:</b> " + formatDate(task.start_date) + "<br/><b>End date:</b> "
            + formatDate(task.end_date) + "<br/><b>Progress:</b> " + task.progress * 100 + '%';
    };*/

    gantt.util_dateToIsoString = gantt.date.date_to_str("%Y-%m-%d");

    gantt.templates.tooltip_text = function (start, end, task) {
        return "<b>Task:</b> " + task.text + "<br/>" +
            "<b>Start date:</b> " + gantt.templates.tooltip_date_format(start) + "<br/>" +
            "<b>End date:</b> " + gantt.templates.tooltip_date_format(end);
    };

    gantt.templates.progress_text = function (start, end, task) {
        return Math.round(task.progress * 100) + '%';
    };

    gantt.templates.task_class = function (start, end, task) {
        switch (task.priority) {
            case "1":
                return "high";
                break;
            case "2":
                return "medium";
                break;
            case "3":
                return "low";
                break;
        }
    };

    gantt.templates.task_text = function (start, end, task) {
        return task.text;
    };

    gantt.init("project_gantt");
    gantt.parse(data_tasks);
    //Gantt end
    backgroundAfterToday()
});

function backgroundAfterToday(callback) {
    _height = $('.gantt_task_bg')[0].clientHeight;
    _width = $('.gantt_task_bg')[0].clientWidth;
    $('.gantt_marker_content').css('padding-top', _height - 18).css('padding-right', _width);
}

//Format date
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

function configScale() {
    //Config scale_line:
    $scale_line = $($('.gantt_scale_line')[0]);
    $scale_line.empty();
    $scale_line.append('<p style="text-align: center; color: white; background-color: #71002d">Thời gian</p>')
}

// var data_tasks = {};
//
// function collectDataFromDB() {
//     data_tasks = {
//         "data": [
//             {
//                 "id": 10,
//                 "text": "Phòng Kinh Doanh"
//             },
//             {
//                 "id": 11,
//                 "text": "Project #1",
//                 "type": "project",
//                 "progress": 0.5,
//                 "open": true,
//                 "start_date": "02-10-2019 00:00",
//                 "duration": 13,
//                 "parent": 0,
//                 "color": "#1e9ff2",
//             },
//             {
//                 "id": 13,
//                 "text": "Task #2",
//                 "start_date": "03-10-2019 00:00",
//                 "type": "project",
//                 "render": "split",
//                 "parent": "11",
//                 "progress": 0.5,
//                 "open": false,
//                 "duration": 11,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 17,
//                 "text": "Stage #1",
//                 "start_date": "03-10-2019 00:00",
//                 "duration": 2,
//                 "parent": "13",
//                 "progress": 0,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 18,
//                 "text": "Stage #2",
//                 "start_date": "05-10-2019 00:00",
//                 "duration": 4,
//                 "parent": "13",
//                 "progress": 0,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 19,
//                 "text": "Stage #3",
//                 "start_date": "08-10-2019 00:00",
//                 "duration": 7,
//                 "parent": "13",
//                 "progress": 0.5,
//                 "open": true,
//                 "color": "#fe7448"
//             },
//             {
//                 "id": 23,
//                 "text": "Project #2",
//                 "type": "project",
//                 "progress": 0.7,
//                 "open": true,
//                 "start_date": "20-09-2019 00:00",
//                 "duration": 23,
//                 "parent": 0,
//                 "color": "#1e9ff2",
//             },
//             {
//                 "id": 24,
//                 "text": "Task #2",
//                 "start_date": "20-09-2019 00:00",
//                 "type": "project",
//                 "render": "split",
//                 "parent": "23",
//                 "progress": 0.5,
//                 "open": false,
//                 "duration": 22,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 25,
//                 "text": "Stage #1",
//                 "start_date": "20-09-2019 00:00",
//                 "duration": 4,
//                 "parent": "24",
//                 "progress": 0.3,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 26,
//                 "text": "Stage #2",
//                 "start_date": "24-09-2019 00:00",
//                 "duration": 2,
//                 "parent": "24",
//                 "progress": 0.9,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 27,
//                 "text": "Stage #3",
//                 "start_date": "26-09-2019 00:00",
//                 "duration": 8,
//                 "parent": "24",
//                 "progress": 0.4,
//                 "open": true,
//                 "color": "#ae2800"
//             },
//             {
//                 "id": 28,
//                 "text": "Project #2",
//                 "type": "project",
//                 "progress": 0.7,
//                 "open": true,
//                 "start_date": "09-10-2019 00:00",
//                 "duration": 30,
//                 "parent": 0,
//                 "color": "#1e9ff2",
//             },
//             {
//                 "id": 29,
//                 "text": "Task #2",
//                 "start_date": "09-10-2019 00:00",
//                 "type": "project",
//                 "render": "split",
//                 "parent": "28",
//                 "progress": 0.5,
//                 "open": false,
//                 "duration": 22,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 30,
//                 "text": "Stage #1",
//                 "start_date": "09-10-2019 00:00",
//                 "duration": 3,
//                 "parent": "29",
//                 "progress": 0.3,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 31,
//                 "text": "Stage #2",
//                 "start_date": "12-10-2019 00:00",
//                 "duration": 7,
//                 "parent": "29",
//                 "progress": 0.9,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 32,
//                 "text": "Stage #3",
//                 "start_date": "19-10-2019 00:00",
//                 "duration": 20,
//                 "parent": "29",
//                 "progress": 0,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 28,
//                 "text": "Project #2",
//                 "type": "project",
//                 "progress": 0.7,
//                 "open": true,
//                 "start_date": "09-10-2019 00:00",
//                 "duration": 30,
//                 "parent": 0,
//                 "color": "#1e9ff2",
//             },
//             {
//                 "id": 29,
//                 "text": "Task #2",
//                 "start_date": "09-10-2019 00:00",
//                 "type": "project",
//                 "render": "split",
//                 "parent": "28",
//                 "progress": 0.5,
//                 "open": false,
//                 "duration": 22,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 30,
//                 "text": "Stage #1",
//                 "start_date": "09-10-2019 00:00",
//                 "duration": 3,
//                 "parent": "29",
//                 "progress": 0.3,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 31,
//                 "text": "Stage #2",
//                 "start_date": "12-10-2019 00:00",
//                 "duration": 7,
//                 "parent": "29",
//                 "progress": 0.9,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 32,
//                 "text": "Stage #3",
//                 "start_date": "19-10-2019 00:00",
//                 "duration": 20,
//                 "parent": "29",
//                 "progress": 0,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 33,
//                 "text": "Project #3",
//                 "type": "project",
//                 "progress": 0.7,
//                 "open": true,
//                 "start_date": "09-11-2019 00:00",
//                 "duration": 30,
//                 "parent": 0,
//                 "color": "#1e9ff2",
//             },
//             {
//                 "id": 34,
//                 "text": "Task #2",
//                 "start_date": "09-11-2019 00:00",
//                 "type": "project",
//                 "render": "split",
//                 "parent": "33",
//                 "progress": 0.5,
//                 "open": false,
//                 "duration": 22,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 35,
//                 "text": "Stage #1",
//                 "start_date": "09-11-2019 00:00",
//                 "duration": 3,
//                 "parent": "34",
//                 "progress": 0.3,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 36,
//                 "text": "Stage #2",
//                 "start_date": "12-11-2019 00:00",
//                 "duration": 7,
//                 "parent": "34",
//                 "progress": 0.9,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 37,
//                 "text": "Stage #3",
//                 "start_date": "19-11-2019 00:00",
//                 "duration": 20,
//                 "parent": "34",
//                 "progress": 0,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 38,
//                 "text": "Project #4",
//                 "type": "project",
//                 "progress": 0.7,
//                 "open": true,
//                 "start_date": "09-12-2019 00:00",
//                 "duration": 30,
//                 "parent": 0,
//                 "color": "#1e9ff2",
//             },
//             {
//                 "id": 39,
//                 "text": "Task #2",
//                 "start_date": "09-12-2019 00:00",
//                 "type": "project",
//                 "render": "split",
//                 "parent": "38",
//                 "progress": 0.5,
//                 "open": false,
//                 "duration": 22,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 40,
//                 "text": "Stage #1",
//                 "start_date": "09-12-2019 00:00",
//                 "duration": 3,
//                 "parent": "39",
//                 "progress": 0.3,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 41,
//                 "text": "Stage #2",
//                 "start_date": "12-12-2019 00:00",
//                 "duration": 7,
//                 "parent": "39",
//                 "progress": 0.9,
//                 "open": true,
//                 "color": "#09b161"
//             },
//             {
//                 "id": 42,
//                 "text": "Stage #3",
//                 "start_date": "19-12-2019 00:00",
//                 "duration": 20,
//                 "parent": "39",
//                 "progress": 0,
//                 "open": true,
//                 "color": "#09b161"
//             },
//         ],
//     };
// }