if (IsJsonString(unit_type_list)) {
    unit_type_list = JSON.parse(unit_type_list)
} else unit_type_list = undefined;
var number_of_year = 20;



function collapseElement(ele, is_table = false, group_id, tab_index) {
    let step = parseInt($('#frm_fs input[name=step]').val());
    let i = $(ele).find('i')[0];
    let aria_expanded = $(ele).attr('aria-expanded');
    let table_id;
    //tr attribute
    let data_row_index = parseInt($(ele).parent().parent().attr('data-row-index'));
    let data_loaded = $(ele).parent().parent().attr('data-loaded');
    let row_detail_parent = (index, order, name, value, unit, row_index, class_total, metadata_id) =>
        `<tr class="cost-child-${row_index}-${order}" data-row-parent="${row_index}">` +
            `<td class="text-center">${order}</td>`+
            `<td ><nobr>${name}<nobr/></td>`+
            `<td class="text-uppercase text-center">${unit}</td>` +
            `<td class="text-right ${class_total} -total-cost-${row_index}-${index}">  </td>`+
        `</tr>`;

    let row_detail_child = (metadata_id, value ) => `<input  class="p-1" size="12" id="${metadata_id}"  data-metadata-id="${metadata_id}" value="${value}" >`;
    //let first_td = (value, metadata_id) => `<td class="text-right" metadata_id="${metadata_id}">M(${metadata_id}) - ${value}</td>`;
    let first_td = (value, metadata_id) => `<td class="text-right" metadata_id="${metadata_id}">${value}</td>`;
    let first_td_ref = (value, metadata_id, s_value ) => `<td class="text-right" metadata_id="${metadata_id}">${value}&nbsp;<span metadata_id="${metadata_id}" class="text-danger">/</span>&nbsp;${s_value}</td>`;

    let total_per_value = (total, value, metadata_id) => `${total}&nbsp;<span metadata_id="${metadata_id}" class="text-danger">/</span>&nbsp;${value}`;

    if (typeof (map_table[group_id]) === 'object') {
        if ((map_table[group_id][tab_index].value).indexOf(data_row_index) >= 0) {
            table_id = map_table[group_id][tab_index].id_name;
        }
    } else {
        table_id = map_table[group_id]
    }

    $(i).attr('class', '');
    // If table =>
    if (aria_expanded === "true") {
        $(i).addClass('ft ft-plus-circle ml-auto font-medium-5') // => +
    } else {
        $(i).addClass('ft ft-minus-circle ml-auto font-medium-5') // => -
    }

    if (is_table !== false) {
        if (data_loaded === "false") {

            // Get data
            let data_row_child = getData(step, fs_id, group_id, url_get, data_row_index);
            let class_total = group_id < 4 ? "uni-bg-reddish " : "";

            if (Object.keys(data_row_child).length > 0) {
                reload($('#' + table_id));

                $.each(data_row_child.data, function (index, item) {
                    let value = ""
                    if(item.value!="nan"){
                        value = item.value
                    }

                    let s_value = ""
                    if(item.source_value !=""){
                        s_value = item.source_value
                    }

                    let front_index = index + 1;
                    let start_metadata_id = item.start_metadata_id;

                    let total_first_td = item.input_flag === true ? first_td(
                        row_detail_child(start_metadata_id, roundNFormat(item.value), item.fs_data_id), start_metadata_id) :
                        roundNFormat(first_td(item.value));

                    let total = 0;

                    if (index === 0) {
                        // Generate first child row
                        $('#' + table_id + ' .cost-index-' + data_row_index).after(
                            row_detail_parent(
                                front_index,
                                front_index,
                                item.name,
                                total_first_td,
                                item.unit.toUpperCase(),
                                data_row_index,
                                class_total,
                                item.start_metadata_id)
                        );
                    } else {
                        let find_tr = $('#' + table_id).find('tr[data-row-parent=' + data_row_index + ']');
                        let last_tr_child = $(find_tr)[find_tr.length - 1];

                        $(last_tr_child).after(row_detail_parent(
                            front_index,
                            front_index,
                            item.name,
                            roundNFormat(convertNullToBlank(value),
                            ""
                            ),
                        item.unit.toUpperCase(), data_row_index, class_total))
                    }
                    // Generate year cell
                    let cell_count = 0

                    for (let idx in item.data) {
                        let cell_metadata_id = start_metadata_id + cell_count + 1
                        if(cell_count >= number_of_year){
                            continue
                        }

                        let value = "";
                        if(item.data[idx]!="nan"){
                            value = item.data[idx]
                        }


                        let value_cell = parseInt(parseFloat(item.data[idx]));
                        var metadata_id = start_metadata_id + parseInt(idx)+1;
                        if (!isNaN(value_cell)) {
                            total += value_cell;
                        }

                        let year_td = item.data_input_flag === true ? first_td(
                                row_detail_child(
                                    metadata_id,
                                    roundNFormat(value))
                                ) :
                                first_td(roundNFormat(value), cell_metadata_id);

                        $('#' + table_id + ' .cost-child-' + data_row_index + '-' + front_index).append(year_td);
                        cell_count = cell_count + 1
                    }


                    if(group_id==3){
                        let total_cell = item.input_flag === true ? row_detail_child(item.start_metadata_id, roundNFormat(item.value)) : roundNFormat(item.value);
                        $('#' + table_id + ' .-total-cost-' + data_row_index + '-' + front_index).append(total_cell);
                    }else{
                        // Generate first cell
                        if (data_row_index === 1) {
                            if (group_id < 4) {
                                $('#' + table_id + ' .-total-cost-' + data_row_index + '-' + front_index).append(total_per_value(roundNFormat(total), roundNFormat(item.value), item.start_metadata_id ));
                            } else {
                                $('#' + table_id + ' .-total-cost-' + data_row_index + '-' + front_index).append(roundNFormat(item.value));
                            }
                        } else if (data_row_index >= 2) {
                            console.log(item.source_value)
                            let total_cell = item.input_flag === true ? row_detail_child(item.start_metadata_id, roundNFormat(item.value)) :
                            (item.source_value == "" ? roundNFormat(item.value) : total_per_value(roundNFormat(item.source_value), roundNFormat(item.value), item.start_metadata_id ))

                            $('#' + table_id + ' .-total-cost-' + data_row_index + '-' + front_index).append(total_cell);
                        }
                    }


                    if (Object.keys(data_row_child.data).length - 1 === index) {
                        $.each($('#' + table_id + ' .cost-child-' + data_row_index + '-' + front_index).find('td'), function () {
                            $(this).addClass('border-last-child')
                        })
                    }
                });
                $(ele).parent().parent().attr('data-loaded', 'true');
                $(ele).parent().parent().attr('aria-expanded', 'true');
                $(ele).attr('aria-expanded', 'true')
            }

            var element = $('a[data-action=edit]');
            $.each($('a[data-action=edit]'), function (){
            	var element = $(this);
            	var dataAction = element.attr('data-action');
            	if(dataAction == EDIT_TEXT)
            	{
            		setAbleInputByAction(element, false);
            	}
            	else
            	{
            		setAbleInputByAction(element, true);
            	}
            })

            if(element.length > 0)
        	{

        	}

        }else {
            $.each($('#' + table_id + ' tr[data-row-parent=' + data_row_index + ']'), function () {
                if (aria_expanded === "true") {
                    $(this).addClass('hidden');
                    $(ele).parent().parent().attr('aria-expanded', 'false');
                    $(ele).attr('aria-expanded', 'false')
                } else {
                    $(this).removeClass('hidden');
                    $(ele).parent().parent().attr('aria-expanded', 'true');
                    $(ele).attr('aria-expanded', 'true')
                }
            })
        }
    }
}


function generateStep(data, step_clicked) {
    step_clicked = parseInt(step_clicked);
    //class = [first, done, last, current]
    let title_step = (step_name, step_index, class_name) => `<li role="tab" aria-disabled="false" class="${class_name}" aria-selected="false">` +
        `<a id="step-${step_index}" data-step="${step_index}" onclick="actionStep(this)" href="#" aria-controls="frm_fs-p-0">` +
        `<span class="step">${step_index}</span> ${step_name}</a></li>`;

    if (data.hasOwnProperty('settings')){
        if (data.settings.hasOwnProperty('step_name') &&  Object.keys(data.settings.step_name).length > 0) {
            $('.steps').removeClass('m-0 border-0');
            $.each(data.settings.step_name, function (index, step_name) {
                let class_name = "";
                switch (index) {
                    case 0:
                        class_name = 'first';
                        break;
                    case data.length - 1:
                        class_name = 'last';
                        break;
                }
                if (index === step_clicked - 1) class_name += ' current';

                $('#frm_fs ul[role=tablist]').append(title_step(step_name, index + 1, class_name));
            });
            actionStep($('#step-' + step_clicked), 'load', data)
        }else {
            actionStep($('#step-' + step_clicked), 'load', data)
        }
    }else {
        actionStep($('#step-' + step_clicked), 'load', data)
    }
}

function clearTable(table_id) {

    $($('#' + table_id).parent()).addClass('hidden');
    $('#' + table_id).find('th:not([origin])').remove();
    $('#' + table_id + ' tbody').html('');

}

function redirect_url_by_step(group_id, step)
{
	url = $("#url_view_finacialstatement").val();
    var params = "?layout_fs_group_id={0}&step={1}".format(group_id, step)
    url = url.concat(params);
    window.location.href = url;
}

function actionStep(ele, action = 'click', data)
{
    let data_action = $(ele).attr('data-action');
    let data_step = $(ele).attr('data-step');
    let step_ele = $('.content input[name=step]');
    let step = $(step_ele).val();

    for (let index in map_table) {
        let item = map_table[index];
        if (typeof (item) !== "object") {
            clearTable(item)
        } else {
            for (let i in item) {
                clearTable(item[i].id_name)
            }
        }
    }

    reload($('#step_'));
    if (action !== 'click') {
        if (ele === null) { // Group_id > 2
            data = getData(step, fs_id, group_id, url_get, 1);
        } else {
            if(isNaN(data_step)){
                data_step = 1
            }
            step = parseInt(data_step)
        }
    }
    else
    {
        if (data_step != null)
        {
            $(step_ele).val(data_step);
            step = $(step_ele).val();
            $(ele).parent().addClass('done current');
            //data = getData(step, fs_id, group_id, url_get, null);
            redirect_url_by_step(group_id, step);
            return;
        }
        else
        {
            step = parseInt($(step_ele).val());
            switch (data_action) {
                case "next":
                    $(step_ele).val(step + 1);
                    step = step + 1;
                    //data = getData(step, fs_id, group_id, url_get, null);
                    redirect_url_by_step(group_id, step);
                    return;
                    break;
                case "previous":
                    if (step > 1) {
                        $(step_ele).val(step - 1);
                        step = step - 1;
                        //data = getData(step, fs_id, group_id, url_get, null);
                        redirect_url_by_step(group_id, step);
                        return;
                    } else {
                        $(step_ele).val(1);
                        step = 1;
                        //data = getData(null, fs_id, group_id, url_get, null);
                        redirect_url_by_step(group_id, step);
                        return;
                    }
                    break;
                case "finish":
                    $(step_ele).val(1);
                    step = 1;
                    data = getData(null, fs_id, group_id, url_get, null);
                    break;
            }
        }
    }
    addClassStep(step);

    switch (group_id) {
        case 1:
            appendStepContext(data, false)
            break;
        case 2:
            if (step > 0 && step <= 4) {
                appendStepContext(data, false)
            } else {
                appendStepContext(data, true)
            }
            break;
        default:
            appendStepContext(data, true)
            break;
    }
    scrollStep()

    var _step = $(step_ele).val();

    if(group_id == 4)
    {
    	renderToHtml.addStep(data, group_id, _step);
	}

    if(group_id == 3)
    {
    	renderToHtml.addStep(data, group_id, _step);
	}

    if(_step == 5 && group_id == 2)
    {
    	renderToHtml.addStep(data, group_id, _step);
	}

    if(_step==4 && group_id==2)
	{
    	renderToHtml.addStep(data, group_id, _step);
    }

    if(_step==3 && group_id==2)
	{
    	renderToHtml.addStep(data, group_id, _step);
    }

    if(_step==2 && group_id==2)
	{
    	renderToHtml.addStep(data, group_id, _step);
    }

    if(_step==1 && group_id==2)
	{
    	renderToHtml.addStep(data, group_id, _step);
    }

    if(_step==5 && group_id==1)
	{
    	renderToHtml.addStep(data, group_id, _step);
    }

    if(_step==4 && group_id==1)
	{
    	renderToHtml.addStep(data, group_id, _step);
    }

    if(_step==3 && group_id==1)
	{
    	renderToHtml.addStep(data, group_id, _step);
    }

    if(_step==2 && group_id==1)
	{
    	renderToHtml.addStep(data, group_id, _step);
    }

    if(_step==1 && group_id==1)
	{
    	renderToHtml.addStep(data, group_id, _step);
    }

    if(_step==2 && group_id==2)
	{
    	renderToHtml.addStep(data, group_id, _step)
    }

    if(step == 2&& group_id==2)
    {
    	$('.btn-delete-component-fs').remove();
    }
}

/*HTML RENDER BEGIN---------------------------------------------------------------------------------------*/
renderToHtml = {}
renderToHtml.use = true;
renderToHtml.isTemplate = function(group_id, _step)
{
	if(renderToHtml.use == null| renderToHtml.use == false){
		return false;
    }

	if(group_id == 4){
		return true;
	}

	if(group_id == 3){
		return true;
	}

	if(_step == 5 && group_id == 2){
		return true;
	}

	if(_step == 4 && group_id == 2){
		return true;
	}

	if(_step == 3 && group_id == 2){
		return true;
	}

	if(_step == 2 && group_id == 2){
		return true;
	}

	if(_step == 1 && group_id == 2){
		return true;
	}

	if(_step == 5 && group_id == 1){
		return true;
	}

	if(_step == 4 && group_id == 1){
		return true;
	}

	if(_step == 3 && group_id == 1){
		return true;
	}

	if(_step == 2 && group_id == 1){
		return true;
	}

	if(_step == 1 && group_id == 1){
		return true;
	}
    return false;
}

renderToHtml.addStep= function(data, group_id, _step)
{
	if(renderToHtml.isTemplate(group_id, _step) == false)
	{
		return;
	}

	$('#step_').html(data);
	$('#step_ [value]').each(function()
	{
		var value = $(this).attr('value');
		value = roundNFormat(value)
		$(this).attr('value', value);
	});

	var values = $('#value-of-group').text();
	if(values)
	{
		var spArr = values.split(':');
		var value = roundNFormat(spArr[0])
		var unit = spArr[1]
		$('#value-of-group').text(value + " "+unit);
	}

	$('#tab-list').empty().append($('#tab-list-2 li'));
	$('#modal-dialog-controller').empty().append($('#add_component_container'));


}
/*HTML RENDER END---------------------------------------------------------------------------------------*/

function appendStepContext(data, is_table = false) {
    if (!jQuery.isEmptyObject(data)) {
        if (is_table) {
            if (group_id == 5) {
                appendDataId(data.data)
            } else {
                appendTable(data.data);
            }
        } else {
            appendDataId(data.data_id);
            appendAddComponent(data.data_add);
            appendDataGroup(data.data_group);
        }
    } else {
        toastr.error("Đã có lỗi xảy ra, vui lòng liên hệ Admin");
        return false
    }
    scrollStep()
}

function appendDataId(data) {
    $('#data_step_id').html('');
    $('.-step-total-cost').html('');
    if (!jQuery.isEmptyObject(data)) {
        $('#data_step_id').removeClass('hidden');
        $('.-step-total-cost').removeClass('hidden');
        let step = parseInt($('#step').val());
        let data_id = "";

        let data_group_total_html = (name, value, unit_name) => `<h4 class="col-12 text-center font-weight-bold">${name}</h4>` +
            `<div class="col-12 text-center"><div class="uni-bg-reddish  square font-medium-3 box-shadow-1 uni-badge-total text-uppercase">${value} ${unit_name}</div></div>`;

        let data_id_unit = (unit) => `<div class="input-group-append">` + `<span class="input-group-text square uni-input-append" id="basic-addon2">${unit}</span></div>`;

        let data_equal = `<div class="col-4 text-center"><i class="font-medium-5 fa fa-arrow-circle-o-right"></i></div>`;

        data_id = (name, metadata_id, value, input_flag, unit_name, data_equal, fs_data_id, valid, unit_type ) => `<div class="col-2"><label>${name}</label></div>` +
            `<div class="col-2"><div class="input-group square mb-1">` +
            `<input type="text"
            ref="input-data_step_id"
            class="form-control square uni-input" data-fs-data="${fs_data_id}" id="${metadata_id}" orgv="${value}" ` +
            ` data-unit="${unit_type}" ` +
            ` aria-describedby="basic-addon2" value="${value}" ${input_flag} onchange="edit_fs_data(this, ${metadata_id}, this.value, ${fs_data_id} )" ` +
            ` onfocus="getExactlyFormat(this, this.value)" onblur="onBlur(this, this.value)" ${valid}>` +
            data_id_unit(unit_name) +
            `</div></div>`;

        if (!isNaN(group_id) && group_id === 2) {
            if (!isNaN(step) && step > 2) {
                data_id = (name, metadata_id, value, input_flag, unit_name, data_equal, fs_data_id, valid, unit_type) => `<div class="col-2"><label>${name}</label></div>` +
                    `<div class="col-2"><div class="input-group square mb-1">` +
                    `<input type="text" ref="input-data_step_id" class="form-control square uni-input" data-fs-data="${fs_data_id}" id="${metadata_id}" orgv="${value}" ` +
                    ` data-unit="${unit_type}" ` +
                    ` aria-describedby="basic-addon2" value="${value}" ${input_flag} onchange="edit_fs_data(this, ${metadata_id} ,this.value, ${fs_data_id})" ` +
                    `onfocus="getExactlyFormat(this, this.value)" onblur="onBlur(this, this.value)" ${valid}>` +
                    data_id_unit(unit_name) + `</div></div>` + `${data_equal}`;
            }
            let total_component = data[data.length - 1];
            $('.-step-total-cost').append(data_group_total_html(total_component.name, roundNFormat(total_component.value), total_component.unit));
        }

        $.each(data, function (index, step_data) {
            let equal = index % 2 === 0 ? data_equal : "";
            if (index === Object.keys(data).length - 1) {
                equal = ""
            }
            $('#data_step_id').append(data_id(step_data.name, step_data.metadata_id, roundNFormat(step_data.value),
                step_data.input_flag, step_data.unit, equal, step_data.fs_data_id, map_valid[step_data.unit]))
        });
    } else {
        // toastr.error("Đã có lỗi xảy ra, vui lòng liên hệ Admin");
        return false
    }
}

function appendAddComponent(data) {
    if (!jQuery.isEmptyObject(data)) {
    	$('#-data-group-add').children().not(':first').not(':nth-child(2)').remove();
        $('#frm_add_component select[name=metadata_group]').val('');
        $('#frm_add_component select[name=metadata_group]').find('option').remove();
        $('.-add-component').removeClass('hidden');

        let data_id_unit = (unit, metadata_id) => `<div class="input-group-append -unit-add-div-${metadata_id}">` +
            `<span class="input-group-text square uni-input-append">${unit}</span></div>`;

        let block_data = (component_type_id) => `<div class="-component-add-${component_type_id} row m-0 p-0 col-12 hidden" data-parent="" data-type="${component_type_id}"></div>`;

        let data_id = (name, fs_id, metadata_id, value, input_flag, unit_name, component_type_id, required, valid, input_type) => `<div class="col-3"><label class="${required}">${name}</label></div>` +
            `<div class="col-3" data-type="${component_type_id}"><div class="input-group square mb-1">` +
            `<input type="text" class="form-control square uni-input" ` +
            ` id="${metadata_id}" data-metadata-id="${metadata_id}" data-type="${input_type}" ` +
            ` data-unit="${unit_name}" data-fs-id="${fs_id}" ${required} onchange="addComponentCalculation(this)"` +
            ` value="${value}" ${input_flag} ${valid}>` +
            data_id_unit(unit_name, metadata_id) +
            `</div></div>`;

        for (let i in data) {

            $('#frm_add_component select[name=metadata_group]').append('<option value="' + data[i].id + '">' + data[i].name + '</option>');
            //$('#frm_add_component select[name=metadata_group]').select2({'width': '100%'});
            let data_add = data[i].data;
            $('#-data-group-add').append(block_data(data[i].id));
            for (let idx in data_add) {
                let item = data_add[idx];
                let required = item.input_flag === "enabled" ? "required" : "";

                $('.-component-add-' + data[i].id).append(
                    data_id(
                        item.name,
                        fs_id,
                        item.metadata_id,
                        convertNullToBlank(item.value),
                        item.input_flag,
                        item.unit,
                        data[i].id,
                        required,
                        map_valid[item.unit_type],
                        item.unit_type)
                    );
                if (loadUnit(item.unit) === '') {
                    $('.-unit-add-div-' + item.metadata_id).addClass('hidden')
                }

            }
        }
        static_data.handleComponentAdd();
    }
    else
    {
        $('.-add-component').addClass('hidden')
    }
}

function appendDataGroup(data) {
    $('#data_step_group_id').html('');
    $('#cost_timeline_table table tbody').html('');
    let step = parseInt($('#step').val());

    let width = $('#fs-main').width()

    if (!jQuery.isEmptyObject(data)) {
        $('#data_step_group_id').removeClass('hidden');
        let data_groups = data;
        let length_data = Object.keys(data_groups).length;
        let group_div = (index) => `<div class="-group-${index} -group-div"></div>`;
        let data_group_header_html = (header_name, group_index, group_name, index) => `<div class="row -component-name">` +
            `<h4><i class="fa fa-home font-medium-5">&ensp;</i><span class="-group-name">${group_name}</span></h4>` +
            `<a class="ml-auto" aria-controls="-group-${group_index}-data-${index}" data-toggle="collapse"` +
            ` data-target="#-group-${group_index}-data-${index}" aria-expanded="false" data-parrent="#data_step_group_id" onclick="collapseElement(this, false)">` +
            `<i class="ft ft-plus-circle ml-auto font-medium-5"></i></a>` +
            `</div><div class="row w-100 -group-${group_index}-data-${index} pt-3 collapse" data-group="${index}" id="-group-${group_index}-data-${index}"></div>`;

        let data_group_name_html = (fs_data_id, metadata_name, metadata_id) => `<div class="col-4 row -metadata-row"><div class="col-6">` +
            `<label data-fs-data-id="${fs_data_id}" data-metadata-id="${metadata_id}">${metadata_name}</label></div>`;

        let data_group_html = (data_group_name, metadata_id, metadata_value, unit_name, input_flag, valid, fs_data_id) => `${data_group_name}` + `<div class="col-6">` +
            `<div class="input-group square mb-1">` +
            `<input type="text" class="form-control square uni-input" id="${metadata_id}" orgv="${metadata_value}" fs_data_id="${fs_data_id}"` +
            ` data-input-flag="${input_flag}" ` +

            ` data-input-flag="${input_flag}" data-unit="${unit_name}" onblur="onBlur(this, this.value)" ` +
            ` onfocus="getExactlyFormat(this, this.value)" ${valid} value="${metadata_value}" disabled="">` +
            `<div class="input-group-append -unit-div-${metadata_id} ">` +
            `<span class="input-group-text square uni-input-append">${unit_name}</span></div></div></div>`;
        // -group-1-data-0
        let action_html = (group_index, component_group_index) => `<div class="col-12 row -metadata-row text-right">` +
            `<div class="col-6 ml-auto"><a class="btn btn-outline-info square btn-edit-fs  px-2 box-shadow-1 mr-2" onclick="actionEdit(this,${group_index}, ${component_group_index})" data-action="edit" >Edit</a> ` +
            `<a class="btn btn-danger square  px-2 box-shadow-1 btn-delete-component-fs" onclick="deleteComponent(this,${group_index}, ${component_group_index})">Delete</a> </div></div>`;

        for (const [i, group] of data_groups.entries()) {
            let group_index = i + 1;
            $('#data_step_group_id').append(group_div(group_index));

            for (const [idx, data] of group["data"].entries()) {
                let item = data.data;

                $('.-group-' + group_index).append(data_group_header_html(data["title"], group_index, group["group_name"], idx));
                for (let j in item) {

                    let item_data = item[j];
                    $('.-group-' + group_index + '-data-' + idx).append(
                        data_group_html(
                            data_group_name_html(item_data.fs_data_id, item_data.name, item_data.metadata_id),
                            item_data.metadata_id,
                            roundNFormat(item_data.value),
                            item_data.unit,
                            item_data.input_flag,
                            map_valid[item_data.unit],
                            item_data.fs_data_id));
                    if (loadUnit(item_data.unit) === '') {
                        $('.-unit-div-' + item_data.metadata_id).addClass('hidden')
                    }
                }
                $('.-group-' + group_index + '-data-' + idx).append(action_html(group_index, idx))
            }
        }

        let find_ele = $('#data_step_group_id').find('div.row.-component-name').first().find('a')[0];
        if (find_ele !== undefined) {
            $(find_ele).trigger('click')
        }
    }
}

function editDataFsHandle(url, params, callback)
{
	var step = $('input[name=step]').val();
    var layout_fs_group_id = $('input[name=layout_group_id]').val();
    var obj = {}

	obj['data'] = params
	obj['layout_fs_group_id'] = layout_fs_group_id
    obj['step'] = step

	$.ajax({
	    type: 'POST',
        url: url,
	    data: {
            'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val(),
            'action': 'edit',
            'fs_id': $('#fs_id').val(),
            'layout_fs_group_id': $('#layout_group_id').val(),
            'step': $('#step').val(),
            'params': JSON.stringify(obj)
        },
        beforeSend: function(){
        	openNotifyRequest();
        },

	    success: function(response){
            if(response.status != 0){
                location.reload()
                return false
            }

            data = response.result;
            $.each($('#frm_fs').find('input:not(:hidden)'), function () {
                $(this).parent().removeClass('-value-changed')
            });

            if(Array.isArray(data) && data.length){
                $.each(data, function (index, item) {
                    $('input[fs_data_id=' + item.fs_data_id +']').attr('style','background-color:rgb(255, 255, 0) !important');
                    $('input[fs_data_id=' + item.fs_data_id +']').val(roundNFormat(item.value))
                    $('input[fs_data_id=' + item.fs_data_id +']').attr('orgv', roundNFormat(item.value))
                })
            }
            var tr = toastr.info(response.message);
            closeNotifyRequest();
	    },

	});
}

function editDataFs(params)
{
	var url = $('#url_edit_unique_metadata').val();
	if(!params || params.length==0){
		return;
    }

	editDataFsHandle(url, params, function(){
		static_data.loadStepManual();
	})
}

function editDataGroupFs(params)
{
	var url = $('#url_edit_data_group').val();
	editDataFsHandle(url, params, function()
	{
	})
}

function actionEdit(ele, group_index, data_index) {
    let action = $(ele).attr('data-action');
    if (action === 'edit') {
        $(ele).attr('data-action', 'save');
        $(ele).text("Save");
        $(ele).removeClass('btn-outline-info').addClass('btn-outline-success');

        $.each($('.-group-' + group_index + '-data-' + data_index).find('input'), function () {
            let attr = $(this).attr('data-input-flag');
            if (attr === 'enabled') $(this).prop('disabled', false);
        })
    } else {
        $(ele).attr('data-action', 'edit');
        $(ele).text("Edit");
        $(ele).removeClass('btn-outline-success').addClass('btn-outline-info');

        var params = []
        $.each($('.-group-' + group_index + '-data-' + data_index).find('input:enabled'), function () {
            $(this).prop('disabled', true);
            var param = {}
            param['fs_id']= fs_id,
            param['metadata_id'] = $(this).attr('id')
            param['value'] = $(this).val()
            param['fs_data_id'] = $(this).attr('fs_data_id')
            //param['token']= user_token
            params.push(param);
        })
        editDataGroupFs(params);
    }
}

function deleteComponent(ele, component_group_id, component_group_index) {
    let step = parseInt($('#step').val());
    let data = {
        'data': [],
        'fs_id': fs_id,
        'token': user_token,
    };

    $.each($('#-group-' + component_group_id + '-data-' + component_group_index).find('input'), function () {
        data['data'].push({
            "fs_data_id": $(this).attr('fs_data_id'),
            "financial_statement_id": fs_id,
            "metadata_id": $(this).attr('id'),
            "value": $(this).val(),
            "layout_fs_group_id": group_id,
            "step": step,
            "unit": $(this).attr('data-unit'),
        },);
    });


    if(confirm("Are you sure you want to delete this component?")){
        $.post(url_get_route, {
            "fs_id": fs_id,
            "csrfmiddlewaretoken": $('input[name=csrfmiddlewaretoken]').val(),
            "action": "delete_component",
            "data": JSON.stringify(data)
        },
        function(resp){
            window.location.reload(true)
        },
        "json");
    }
}

function appendTable(data_group) {
    $('.-add-component').addClass('hidden');
    let table_id = map_table[group_id];

    let project_created_date = $('#project_created_date').val();
    let this_year;

    if (project_created_date !== "") {
        this_year = moment(project_created_date, "YYYY-MM-DD").year()
    }


    let width = $('#fs-main').width()
    let action_html_global = (id, selectName) => `<div class="row ">` +
        `<div class="col-md-12 ">
            <a class="btn btn-outline-info square btn-edit-fs  px-2 box-shadow-1 float-right mt-1" id="${id}" selector-control="${selectName}" onclick="actionEditBy(this)" data-action="edit" >Edit</a> ` +
        `</div></div>`;

    const timeline = function (data) {
        $('#-cost-timeline-div').removeClass('hidden');

        let th_year = (year) => `<th class="text-center">${year}</th>`;

        let collapse_icon = (selector, group_id, tab_index) => `<td class="text-center">` +
            `<a class="ml-auto pl-3 text-black" aria-controls="${selector}" data-toggle="collapse"` +
            ` data-target="#${selector}" aria-expanded="false" onclick="collapseElement(this, true, ${group_id}, ${tab_index})">` +
            `<i class="ft ft-plus-circle ml-auto font-medium-4"></i></a></td>`;

        let row_header = (index, order, name, value, unit, icon, group_id) => `<tr class="cost-index-${index}" data-row-index="${index}" data-loaded="false" aria-expanded="false">` +
            `<td class="text-center fs-header">${order}</td>` +
            `<td class="border-right-0 font-weight-bold" colspan="2">` +
            ` ${name} (${value} ${unit}) ---- </td>` + collapse_icon(icon, group_id, 0) + `</tr>`;

        //let row_header_year = (value, start_metadata_id) => `<th class="text-bold-600 text-green text-right" data-metadata-id="${start_metadata_id}" >M(${start_metadata_id}) <br/>${value}</th>`;
        let row_header_year = (value, start_metadata_id) => `<th class="text-bold-600 text-green text-right" data-metadata-id="${start_metadata_id}" ><br/>${value}</th>`;
        for (let i = 0; i <= 19; i++) {
            year = this_year + i;
            $('.table-fs thead tr').append(th_year("Year " + year))
        }

        $.each(data, function (index, item) {
            let front_index = index + 1;
            let class_name = 'cost-index-' + front_index;

            $('#' + table_id + ' tbody').append(
                row_header(
                    front_index,
                    convertToRoman(front_index),
                    item.name,
                    roundNFormat(convertNullToBlank(item.value)),
                    item.unit.toUpperCase(),
                    icon = class_name, group_id
                )
            );

            let column = 1
            for (let idx in item.data) {
                let start_metadata_id = item.start_metadata_id + column
                if (item.data[idx] == 'nan'){
                    item.data[idx] = ""
                }
                $('.cost-index-' + front_index).append(row_header_year(roundNFormat(convertNullToBlank(item.data[idx])), start_metadata_id))
                column = column + 1

            }
        });

        $($('#' + "cost_timeline_table" + ' tbody').find('tr[data-row-index]').first()).find('a').first().click()

        $('#-cost-timeline-div').css("width", width)
        $('#-cost-timeline-div').css("overflow-x","scroll")

        $('#step_').append(action_html_global('timeline-table-btn', '#cost_timeline_table .text-right input'));
        var element = $('#timeline-table-btn');

        setAbleInputByAction(element, false);
        scrollStep();
    };

    const income = function (data) {
        $('#tab_ul').removeClass('hidden');
        $('#-sale-income-div').removeClass('hidden');
        $('#-operation-income-div').removeClass('hidden');
        $('#-other-income-div').removeClass('hidden');
        $('#income_table tbody').html('');

        let width = $('#fs-main').width();


        let th_year = (year) => `<th >${year}</th>`;
        // If input_flag -> value_input else
        let value_input = (metadata_id, value, fs_data_id, valid) => `<input ref="income" class="p-1" size="12" id="${metadata_id}" value="${value}" data-fs-data="${fs_data_id}" orgv="${value}" onchange="edit_fs_data(this, ${metadata_id} , this.value)" ${valid}>`;
        let header_total = (total, value, start_metadata_id) => `<span fs-data-id="${start_metadata_id}"> ${total}<br/>/${value}</span>`;

        let collapse_icon = (selector, group_id, tab_index) => `<td class="text-center">` +
            `<a class="ml-auto pl-3 text-black" aria-controls="${selector}" data-toggle="collapse"` +
            ` data-target="#${selector}" aria-expanded="false" onclick="collapseElement(this, true, ${group_id}, ${tab_index})">` +
            `<i class="ft ft-plus-circle ml-auto font-medium-4"></i></a></td><td class="text-bold-600" colspan="20"></td>`;

        let row_header = (index, order, name, icon, group_id, data_row_index, tab_index) => `<tr class="cost-index-${index}" data-row-index="${data_row_index}" data-loaded="false" aria-expanded="false">` +
            `<td class="text-center  text-bold-600">${order}</td>` +
            `<td class="fs-header" colspan="2">` +
            ` ${name}</td>` + collapse_icon(icon, group_id, tab_index) + `</tr>`;

        let row_header_year = (value) => `<td class="text-right">${value}</td>`;


        let year;

        for (let i = 0; i < number_of_year; i++) {
            year = this_year + i;
            $('#' + table_id[1].id_name + ' thead tr').append(th_year("Year " + year))
        }

        let map_name_income_operations = {
            1: "Apartment",
            2: "Villa",
            3: "CASHFLOW "
        };

        $.each(map_name_income_operations, function(index, item){
            let front_index = parseInt(index) + 1;
            let class_name = 'cost-index-' + index;

            $('#' + table_id[1].id_name + ' tbody').append(
                row_header(front_index, convertToRoman(index), roundNFormat(map_name_income_operations[index]), class_name, group_id, front_index, 1)
            );

        })


        $.each(data, function (index, item) {
            let front_index = index + 1;
            let class_name = 'cost-index-' + front_index;
            let background_class = item.input_flag === true ? "text-right" : "uni-bg-reddish income ";
            let total = 0;
            let data = item.data;
            let input_header = item.input_flag === true ?
                value_input(
                    item.start_metadata_id,
                    roundNFormatInput(convertNullToBlank(item.value)),
                    item.fs_data_id,
                    map_valid[item.unit_type]
                ) :
                header_total(
                    roundNFormat(total),
                    roundNFormat(convertNullToBlank(item.value)),
                    item.start_metadata_id
                );

            // Generate first td
            $('#' + table_id[1].id_name + ' tbody').append(row_header(front_index, front_index, item.name, input_header, item.unit, class_name, background_class));

            for (let idx in data) {
                if (data.value !== null) {
                    total += parseFloat(data);
                }
                let metadata_id_item = parseInt(idx) + parseInt(item.start_metadata_id);

                let input_child = item.data_input_flag === true ? row_header_year(value = value_input(metadata_id_item, roundNFormatInput(convertNullToBlank(data[idx])))) : row_header_year(value = roundNFormat(convertNullToBlank(data[idx])));
                $('#' + table_id[1].id_name + ' tr[data-row-index=' + front_index + ']').append(input_child)
            }

            //$($('#tab_ul').find('a[tabindex=1]')).attr('data-loaded', 'true');
        });


        $('#-sale-income-div').css("width", (width))
        $('#-sale-income-div').css("overflow-x","scroll")
        $('#-operation-income-div').css("width", (width))
        $('#-operation-income-div').css("overflow-x","scroll")
        $('#-other-income-div').css("width", (width))
        $('#--other-income-div').css("overflow-x","scroll")

        //
        $('#tab_ul .tab-content .tab-pane').children().each(function()
        {
        	var id = $(this).attr('id');
        	var tabId = $(this).parent().attr('id');

        	var selector = '#{0} .text-right input'.format(id)
        	var selectBtn = '{0}-btn'.format(id)
        	$(this).parent().append(action_html_global(selectBtn, selector));
        	var element = $('#'+selectBtn);
        	element.attr('selector-control-tab', tabId)
        	setAbleInputByAction(element, false);
        });

        //cap nhật màu cho giá trị input <0
        $.each($('.p-1'), function (i, item) {
        	var value = $(item).attr('value');
        	if(parseFloat(value)<0)
        	{
        		///$(item).addClass('text-danger');
        	}
        })
    };

    const cash_flow = function (data) {
        const map_name_cash_flow = {
            1: "Project Cashflow",
            2: "Financial Cashflow",
            3: "Debt Schedule",
        };
        $('#tab_ul').addClass('hidden');
        $('#cash_flow_table').parent().removeClass('hidden');
        $('#cash_flow_table').removeClass('hidden');
        $('#cash_flow_table tbody').html('');
        let width = $('#fs-main').width()

        let th_year = (year) => `<th>${year}</th>`;
        let collapse_icon = (selector, group_id, tab_index) => `<td class="text-center">` +
            `<a class="ml-auto pl-3 text-black" aria-controls="${selector}" data-toggle="collapse"` +
            ` data-target="#${selector}" aria-expanded="false" onclick="collapseElement(this, true, ${group_id}, ${tab_index})">` +
            `<i class="ft ft-plus-circle ml-auto font-medium-4"></i></a>`;

        let row_header = (index, order, name, icon, group_id) => `<tr class="cost-index-${index}" data-row-index="${index}" data-loaded="false" aria-expanded="false">` +
            `<td class="text-center row-border-green text-bold-600">${order}</td>` +
            `<td class="fs-header" colspan="2">` +
            ` ${name}</td>` + collapse_icon(icon, group_id, 0) + `</td><td class="row-border-green" colspan="20"></td></tr>`;

        let year;
        for (let i = 0; i <= 19; i++) {
            year = this_year + i;
            $('.table-fs thead tr').append(th_year("Year " + year))
        }

        $.each(map_name_cash_flow, function (index, item) {
            let front_index = parseInt(index);
            let class_name = 'cost-index-' + front_index;

            $('#' + table_id + ' tbody').append(row_header(front_index, convertToRoman(front_index), item, icon = class_name, group_id));
        });
        $($('#' + table_id + ' tbody').find('tr[data-row-index]').first()).find('a').first().click()

        $('#-cash-flow-div').css("width", (width))
        $('#-cash-flow-div').css("overflow-x","scroll")

        $('#step_').append(action_html_global('cash_flow-table-btn', '#cash_flow_table .text-right input'));
        var element = $('#cash_flow-table-btn');
        setAbleInputByAction(element, false);

        $('a[aria-controls*=cost-index-').off('click');
        $('a[aria-controls*=cost-index-').click(function (evt){
        	var element = $('#cash_flow-table-btn');
        	var dataAction = element.attr('data-action');
        	if(dataAction == EDIT_TEXT)
        	{
        		setAbleInputByAction(element, false);
        	}
        	else
        	{
        		setAbleInputByAction(element, true);
        	}
        })
        scrollStep()
    };

    const map_table_by_group_id = {2: timeline, 3: income, 4: cash_flow,};

    $('.-step-total-cost').html('').addClass('hidden');
    $('#data_step_group_id').html('');
    $('#data_step_id').html('');

    let action = (data_group) => map_table_by_group_id[group_id](data_group);
    return action(data_group)
    /*
    if (!jQuery.isEmptyObject(data_group)) {
        // Create header in to row
        // Add data in to group

    }
    else
    {
    	var step = parseInt($('#frm_fs input[name=step]').val());
    	if (renderToHtml.isTemplate(group_id, step) == false)
    		toastr.error("Đã có lỗi xảy ra, vui lòng liên hệ Admin"); //fix 1221
        return false
    }*/
}

static_data = {};
static_data.setData = function(result)
{
	static_data.json = result;

}

static_data.loadStepManual = function()
{
	let step = parseInt($('#frm_fs input[name=step]').val());
	var length = $('#step-{0}'.format(step)).length;
	if(length>0){
		$('#step-{0}'.format(step)).click();
	}else{
		window.location.reload(true)
	}
}

static_data.handleComponentAdd = function()
{
	var group_id = parseInt($('#frm_fs input[name=layout_group_id]').val());
	var step = parseInt($('#frm_fs input[name=step]').val());
	var data_group = static_data.json.data_group;
	if(data_group == null || data_group.length == 0)
	{
		return;
	}
	if(group_id!=1 || step!=5)
	{
		return;
	}
	var sc = 1;
	for(var i = 0; i<data_group.length; i++)
	{
		var group_id = data_group[i].group_id;
		$('select[name=metadata_group]').find('option').each(function() {
			var value = this.value;
		    if(parseInt(this.value) == parseInt(group_id))
		    {
		    	$(this).remove();
		    }
		});
	}

	if($('select[name=metadata_group]').find('option').length==0)
	{
		$('.-add-component').addClass('hidden')
	}
}

static_data.fixFsDataId =function()
{
	var selector = 'fs_data_id';
	if($('input[data-fs-data]').length>0)
	{
		selector = 'data-fs-data';
	}
	return selector;
}


function getData(step, fs_id, group_id, url_get, row_index = null) {
	var project_id = $('#project_id').val();
	var is_render_html = renderToHtml.isTemplate(group_id, step)
    let result;
    if (row_index !== null) {
        $.ajax({
            type: "GET",
            url: url_get_route,
            data: {
                params: JSON.stringify({
                	project_id: project_id,
                    fs_id: fs_id,
                    layout_fs_group_id: group_id,
                    step: step,
                    row_index: row_index,
                    token: user_token
                })
            },
            async: false,
            success: function (data) {
                result = data;
            },
        });
    } else {

        $.ajax({
            type: "GET",
            url: url_get_route,
            data: {
                params: JSON.stringify({
                	project_id: project_id,
                    fs_id: fs_id,
                    layout_fs_group_id: group_id,
                    step: step,
                    token: user_token,
                    is_render_html
                })
            },
            contentType: 'application/json',
            async: false,
            success: function (data) {
                if (data.hasOwnProperty('project_created_date')) {
                    $('#project_created_date').val(data.settings.project_created_date);
                }
                result = data;
            },
        });
    }

    static_data.setData(result);
    return result;
}

String.prototype.format = function () {
  var args = arguments;
  return this.replace(/\{(\d+)\}/g, function (m, n) { return args[n]; });
};

function changeMetadata(value) {
	$.each($('#-data-group-add').find('div[data-parent]'), function (i, item) {
		var data_type = $(item).attr('data-type');
		if(data_type!= value)
		{
			$(item).addClass('hidden')
		}
		else
		{
			$(item).removeClass('hidden')
		}
    })
}

function addComponentCalculation(ele) {
	return
    let data_type = $(ele).parent().parent().attr('data-type');
    let component_div = $('div[data-parent][data-type=' + data_type + ']');
    let data = [];
    $.each($(component_div).find('input:not(:button)'), function () {
        data.push({
            metadata_id: parseInt($(this).attr('data-metadata-id')),
            value: getExactlyFormat(null, $(this).val())
        })
    });
    if ($(ele).attr('data-type') !== 'char') {
        $.get(
            url_get_route, {
                action: "add_component/calculate",
                params: JSON.stringify({
                    data: JSON.stringify(data),
                    token: user_token,
                    fs_id: fs_id,
                    step: parseInt($('#step').val()),
                    layout_fs_group_id: group_id,
                })
            }, 'json'
        ).done(function (data) {
            $.each(data, function (index, item) {
                $($(component_div).find('input[id=' + item.metadata_id + ']').first()).val(roundNFormat(item.value));
                $($(component_div).find('input[id=' + item.metadata_id + ']').first()).attr('orgv', roundNFormat(item.value))
            })
        });
    } else {
        return false
    }
}

changeTabContent = {}
changeTabContent.dict = {}
changeTabContent.dict.exist = function(tabName)
{
	var table = '#{0} .table tbody'.format(tabName);
	var length = $(table).children().length;
	return length >0 ? true: false;
}

function changeTab(ele) {
    var tabName = $(ele).attr('aria-controls');

	if(changeTabContent.dict.exist(tabName))
	{
		return;
	}
    let data_loaded = $(ele).attr('data-loaded');
    let tabindex = parseInt($(ele).attr('tabindex'));
    let project_created_date = $('#project_created_date').val();
    let this_year;
    if (project_created_date !== "") {
        this_year = moment(project_created_date, "YYYY-MM-DD").year()
    }

    let year = 0;
    if (!isNaN(tabindex)) {
        // Load data by click
        if (data_loaded === "false")
        {

            if (tabindex === 2) {
                const map_name_income_operation = {
                    5: "Office",
                    6: "Retail",
                    7: "Hotel",
                    8: "Parking",
                    9: "Depreciation",
                    10: "Interest Expense",
                    11: "Summary",
                    12: "Terminal Value",
                    13: "CASHFLOW FROM OPERATION",
                };

                let table_id = map_table[group_id][2].id_name;
                let list_index = map_table[group_id][2].value;
                let th_year = (year) => `<th class="w-2rem">${year}</th>`;
                let collapse_icon = (selector, group_id, tab_index) => `<td class="text-center">` +
                    `<a class="ml-auto pl-3 text-black" aria-controls="${selector}" data-toggle="collapse"` +
                    ` data-target="#${selector}" aria-expanded="false" onclick="collapseElement(this, true, ${group_id}, ${tab_index})">` +
                    `<i class="ft ft-plus-circle ml-auto font-medium-4"></i></a></td><td class="text-bold-600" colspan="20"></td>`;

                let row_header = (index, order, name, icon, group_id, data_row_index, tab_index) => `<tr class="cost-index-${index}" data-row-index="${data_row_index}" data-loaded="false" aria-expanded="false">` +
                    `<td class="text-center  text-bold-600">${order}</td>` +
                    `<td class="fs-header" colspan="2">` +
                    ` ${name}</td>` + collapse_icon(icon, group_id, tab_index) + `</tr>`;

                let row_header_year = (value) => `<td class="text-bold-600">${value}</td>`;
                for (let i = 0; i <= 19; i++) {
                    year = this_year + i;
                    //fix loi duplicate table thead sale_income_table
                    //$('.table-fs').not('#sale_income_table').find('thead tr').append(th_year("Year " + year));
                }

                for (let index in map_name_income_operation) {
                    // row_index = [2..9]
                    let front_index = parseInt(index) + 1;
                    let class_name = 'cost-index-' + index;
                    $('#' + table_id + ' tbody').append(
                        row_header(front_index, convertToRoman(index), roundNFormat(map_name_income_operation[index]), class_name, group_id, front_index, 2)
                    );
                }
                //call collapseElement
                $($('#' + table_id + ' tbody').find('tr[data-row-index]').first()).find('a').first().click();

            } else {
                // let length_index = map_table[group_id][2].value
                // let data_row_child = getData(1, fs_id, group_id, url_get, data_row_index = length_index);
            }
            $(ele).parent().parent().attr('data-loaded', 'true');
        }

    }
    else
    {
        toastr.error("Đã xảy ra lỗi, vui lòng liên hệ Admin");
        return false
    }

    var aria_controls = $(ele).attr('aria-controls');
	var btn = $('[selector-control-tab={0}]'.format(aria_controls))
	setAbleInputByAction(btn, false);

}

function actionFormAdd(ele) {
    let form = $(ele).parents('form')[0];
    let data_act = $(ele).attr('data-action');
    let group = $(form).find('div[data-parent]:not(.hidden)')[0];
    let step = parseInt($('#frm_fs input[name=step]').val());

    const action = {
        "1": addComponent,
        "0": closeAddComponent
    };

    function addComponent() {
        if ($(group).parsley().isValid()) {
            submitForm()
        } else {
            toastr.error('Bạn nhập thiếu thông tin, hoặc thông tin không hợp lệ. Vui lòng kiểm tra lại !');
            return false
        }
    }

    function formValidate(group) {
        $.each($(group).find('input:not(:button)'), function () {
        	var disabled = $(this).attr('disabled')
            if ($(this).val() === '' && disabled == null) {
                flag = undefined;
                return false
            }
            if ($(this).parsley().isValid() === false) {
                flag = undefined;
                return false
            } else {
                flag = ''
            }
        });
        return flag
    }

    function submitForm() {

        if (formValidate(group) !== undefined) {
            let data_send = {"data": []};
            $.each($(group).find('input'), function () {
                let input_data_type = $(this).attr('data-type');
                let value = $(this).val() ? input_data_type === "char" : parseFloat(getExactlyFormat(null, $(this).val()));

                data_send["data"].push({
                    "metadata_id": parseInt($(this).attr('data-metadata-id')),
                    "value": $(this).val()
                })
            });
            var url = $('#url_add_data_group').val();
        	$.ajax({
        	    type: 'POST',
        	    url: url,
        	    data: {
                    'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val(),
                    'action': 'add_component',
                    'fs_id': $('#fs_id').val(),
                    'params': JSON.stringify(data_send)
                },
                beforeSend: function()
        	    {
                    openNotifyRequest();
                    $("#info_div").modal("hide");
                },
        	    success: function(response)
        	    {

                    $("#info_div").modal("hide");
                    toastr.success('Thông tin đã được ghi trong hệ thống, FS sẽ được tính lại trong vài phút. Vui lòng đợi... ');
                    location.reload();
        	    },
        		error: function (response){
        			toastr.error('Bạn nhập thiếu thông tin, hoặc thông tin không hợp lệ. Vui lòng kiểm tra lại !');
                    return false
        		},
        		complete: function (response){
                    closeNotifyRequest();
        		}
        	})
        }
        else
        {
        	toastr.error('Bạn nhập thiếu thông tin, hoặc thông tin không hợp lệ. Vui lòng kiểm tra lại !');
        	return false
        }
    }

    function closeAddComponent() {
        $.each($(group).find('input'), function () {
            $(this).val(null)
        });
    }

    let act = action[data_act];
    act()
}

function edit_fs_data(ele, metadata_id, value, fs_data_id = 0) {
	var step = $('input[name=step]').val();
    var layout_fs_group_id = $('input[name=layout_group_id]').val();
    var url_edit_fs_data = $('#url_edit_fs_data').val();

    if ($(ele).parsley().isValid())
    {
    	if ($(ele).attr('data-is') !== "char"){
    		value = parseFloat(getExactlyFormat(null, value))
        }

        $.post(url_edit_fs_data,{
            'action': 'edit',
            'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val(),
            'fs_id': fs_id,
            'fs_data_id': fs_data_id,
            'metadata_id': metadata_id,
            'step': step,
            'layout_fs_group_id': layout_fs_group_id,
            'value': value
        }, "json").done(function (data) {
            if(Array.isArray(data) && data.length){
                $.each(data, function (index, item) {
                    $('input[fs_data_id=' + item.fs_data_id +']').attr('style','background-color:rgb(255, 255, 0) !important');
                    $('input[fs_data_id=' + item.fs_data_id +']').val(roundNFormat(item.value))
                    $('input[fs_data_id=' + item.fs_data_id +']').attr('orgv', roundNFormat(item.value))
                })
            }
        });
    }
}

function openNotifyRequest()
{
	$('#notify_message_request').removeClass('hidden');
	$('#fs-content-block').addClass('avoid-clicks');
}

function closeNotifyRequest()
{
	$('#notify_message_request').addClass('hidden');
	$('#fs-content-block').removeClass('avoid-clicks');
}

setAbleInputByAction = function(element, setable)
{
	var params = [];
	var id = $(element).attr('selector-control');
	$(id).each(function()
    {
		if(setable == true)
		{
			$(this).removeAttr('disabled');
		}
		else
		{
			$(this).attr('disabled', 'disabled');
			var param = {}

        	param['metadata_id'] = $(this).attr('id')
        	param['value'] = $(this).val()
            param['fs_data_id'] = $(this).attr('fs_data_id')

        	params.push(param);
		}
	});
	return params;
}
EDIT_TEXT = "edit"
actionEditBy = function(ele, selectName)
{
    let action = $(ele).attr('data-action');
    if (action === 'edit')
    {
        $(ele).attr('data-action', 'save');
        $(ele).text("Save");
        $(ele).removeClass('btn-outline-info').addClass('btn-outline-success');
        setAbleInputByAction(ele, true);
    }
    else
    {
        $(ele).attr('data-action', EDIT_TEXT);
        $(ele).text("Edit");
        $(ele).removeClass('btn-outline-success').addClass('btn-outline-info');
        var params = setAbleInputByAction(ele, false)
        editDataFs(params);
    }
}
