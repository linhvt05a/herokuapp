//Function ghi lại số thứ tự project trong gantt chart
function recallWBS() {
    $.each($('div[data-column-name="wbs"]'), function (index, ele) {
        if ($(ele).attr('aria-label').length > 1) {
            $(ele).find('.gantt_tree_content')[0].textContent = ''
        }

    })
}

//Function chỉnh lại css của 2 dòng gộp lại
function rePrevTop() {
    $.each($('.gantt_dependent_task').prev(), function (inx, ele) {
        $(ele).css('margin-top', '15px');
    })
}

//Function format ngày tháng.
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


//Function xuất gantt chart của dhtmlx
function ganttChart() {
    gantt.config.scale_height = 36 * 3;
    var monthScaleTemplate = function (date) {
        var dateToStr = gantt.date.date_to_str("%M %Y");
        return dateToStr(date)
    };

    gantt.config.columns = [
        {name: "wbs", width: 50, label: "STT", template: gantt.getWBSCode, "resize": false},
        {name: "text", width: 500, label: "NỘI DUNG", "resize": false, min_width: 10, template: myFunc},
        {name: "status", label: "TÌNH TRẠNG", align: "left", width: 200, resize: false,}
    ];

    gantt.templates.grid_row_class = function (start, end, task) {
        if (task.class == 'uni_title_user') {
            return "uni_title_user"
        }
        return "";
    };
    gantt.templates.task_row_class = function (start, end, task) {
        if (task.class == 'uni_title_user') {
            return "uni_title_user"
        }
        return "";
    };

    function myFunc(task) {
        if (task.class == 'uni_title_user') {
            return task.users
        }
        return task.text
    }

    gantt.config.start_on_monday = false;
    gantt.config.open_split_tasks = true;

    gantt.config.scales = [
        {unit: "month", step: 1, template: monthScaleTemplate},
        {unit: "week", format: "%w"},
        {unit: "day", format: "%d"},
        {unit: "day", format: "%D"},
    ];
    gantt.config.details_on_create = false;
    gantt.config.details_on_dblclick = false;
    gantt.config.drag_move = false;
    gantt.config.drag_progress = false;
    gantt.config.drag_resize = false;
    gantt.config.drag_links = false;


    var markerId = gantt.addMarker({
        start_date: new Date(), //a Date object that sets the marker's date
        css: "today", //a CSS class applied to the marker
    });

    gantt.util_dateToIsoString = gantt.date.date_to_str("%Y-%m-%d");

    gantt.templates.progress_text = function (start, end, task) {
        return Math.round(task.progress * 100) + '%';
    };
    // gantt.init("project_gantt");
    // gantt.parse(data_tasks_ab);
    //Gantt end
    $('.gantt_grid_scale').css('border-bottom', '2px solid #606060');
    //Refresh wbs
    recallWBS();
    //Reset top task
    rePrevTop();
    $('.grid_cell').css('width', '50%');
    gantt.attachEvent("onTaskClick", function (id, e) {
        console.log('onTaskClick');
        return false;
    });
    gantt.attachEvent("onGanttScroll", function (left, top) {
        //Refresh wbs
        recallWBS();
        //Reset top task
        rePrevTop();
        //Customize remove border and background
        $('.gantt_dependent_task').css({'border': 'none', 'background': 'none'});
    });
}

//Function render danh sách task --> gọi ajax
function renderTableTask() {
    task_url = $('.add_taskassign').attr('data-url');
    $.get(
        task_url,
        {
            id: 1,
        },
        function () {
        }
    )
        .done(function (data) {
            div_table = $('.add_taskassign');
            $(div_table).fadeOut('show');
            $(div_table).html(data.html);
            $(div_table).fadeIn('show');
        })
}


// function resizeJquerySteps() {
//     $('.wizard .content').animate({height: $('.body.current').outerHeight()}, "slow");
// }


//FUNCTION READY
$(document).ready(function () {





});
//END FUNCTION READY
