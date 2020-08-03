function connectCells(table, element1, element2, cls) {

	var td1 = table.find('td:eq(' + element1 + ')');
    var td2 = table.find('td:eq(' + element2 + ')');

    var pos1 = element1.position();
    var pos2 = element1.position();

    drawLine({
        x : pos1.left + $(td1).outerWidth()/2,
        y : pos1.top + $(td1).outerHeight() - 5
    }, {
        x : pos2.left + $(td2).outerWidth()/2,
        y : pos2.top + $(td2).outerHeight() - 5
    }, cls);
}

function drawLine(tp1, tp2, cls) {

   if(!cls) { cls = "" };

   if(tp2.x < tp1.x && tp2.y < tp1.y) {
      p1 = tp2;
      p2 = tp1;
   } else {
      p1 = tp1;
      p2 = tp2;
   }

   var ang = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI - 90;
   var lin = $('<span></span>').addClass("line " + cls).appendTo('body');

   $(lin).css({
      'top' : p1.y,
      'left' : p1.x,
      'height' : Math.sqrt((p1.x - p2.x)* (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y)),
      'transform' : 'rotate(' + ang + 'deg)'
   });
}

function add_state(){
	var group_num = Number($("#group_num").val());
	console.log(group_num);

	if($(".group-state[group-num="+(group_num+1)+"]").length == 0){
		insert_state_group(group_num+1);
	}

	var from_state_postition = $('#state_' + group_num).position();

	console.log(group_num);
	console.log(from_state_postition);

	var insert_group = $(".group-state[group-num="+(group_num+1)+"]").find(".state-field");

	$.each($(".form-state"), function(){
		var str = $(this).find(".state-content").val().trim();

		if(!str) return false;

		var state_clone = $(".wf-template").clone();

		$(state_clone).removeClass("wf-template");

		var btn_state = $(state_clone).find(".btn-state");

		btn_state.html(str);

		var to_state_postition = btn_state.position();
		

		$(state_clone).appendTo(insert_group);
	});

	calc_state_width(insert_group);

	$("#add_state").modal("hide");
}

function calc_state_width(group_ele){
	var group_len = $(group_ele).find(".wf-state").length;
	var col = "col-" + Math.round(12/group_len);
	$.each($(group_ele).find(".wf-state"), function(){
		$(this).removeClass().addClass("wf-state").addClass(col);
	});

}

function changeType(ele){
	$(".btn-type").removeClass("type-active");
	$(ele).addClass("type-active");
	$("[name=state_type]").val($(ele).val());
}

function remove_state(ele){

}

function move_state(ele){

}

function add_state_modal(ele){
	var num = $(ele).parents(".group-state").attr("group-num");
	$("#group_num").val(num);
	$(".form-state").remove();
	new_task();
	$("#add_state").modal("show");
}

function insert_state_group(num){
	var str = '<tr class="group-state" group-num="'+num+'"><td class="text-center">'+num+'</td>';

	str += '<td class="dep-field"><select multiple="multiple" name="dep_list" class="select2 dep-list"></select></td>';
	str += '<td class="state-field center-div"></td></tr>';
	$(str).appendTo($(".tbl_workflow tbody"));

	$(".group-state[group-num=" + num + "]").find(".dep-list").select2({
		data: departments
	});

}

function insert_state(num){
	
}

function new_task(){
	var input = $(".form-state-template").clone();
	$(input).removeClass("form-state-template").addClass("form-state");
	$(input).find(".state-content").val("");
	$(input).appendTo($(".modal-state .modal-body"));
}
