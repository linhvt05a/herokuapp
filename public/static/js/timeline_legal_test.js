$(document).ready(function () {
    var stt = $('#project_gantt').width() * 5 / 100 ;
    var text = $('#project_gantt').width() * 30 / 100 ;
    var status = $('#project_gantt').width() * 15 / 100 ;
    var who_update = $('#project_gantt').width() * 25 / 100 ;
    var document = $('#project_gantt').width() * 20 / 100 ;
    var setting = $('#project_gantt').width() * 5 / 100 ;

    gantt.config.columns = [
        {name: "wbs", label: "STT  ", width: stt, template: gantt.getWBSCode, "resize": true},
        {name: "text", label: "CONTENT", width: text, tree: true, "resize": true, min_width: 10},
        {name: "status", label: "STATUS",width: status, align: "left","resize": true},
        {name: "who_update", label: "WHO UPDATES", align: "center", width: who_update, "resize": true},
        {name: "document", label: "DOCUMENT", align: "left", width: document, "resize": true},
        {name: "setting", label: "<i class='fa fa-cog'></i>", align: "right", width: setting, "resize": true},
    ];

    gantt.config.open_split_tasks = true;

    gantt.init("project_gantt");

    $('.gantt_grid_scale').css('border-bottom', '2px solid #606060')

});


