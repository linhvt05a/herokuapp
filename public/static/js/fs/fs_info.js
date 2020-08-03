if (IsJsonString(unit_type_list)) {
    unit_type_list = JSON.parse(unit_type_list)
} else unit_type_list = undefined;

function collapseElement(ele, is_table = false, group_id, tab_index) {
    let step = parseInt($('#frm_fs input[name=step]').val());
    let i = $(ele).find('i')[0];
    let aria_expanded = $(ele).attr('aria-expanded');
    let table_id;
    //tr attribute
    let data_row_index = parseInt($(ele).parent().parent().attr('data-row-index'));
    let data_loaded = $(ele).parent().parent().attr('data-loaded');
    let row_detail_parent = (index, order, name, value, unit, row_index, class_total) => `<tr class="cost-child-${row_index}-${order}" data-row-parent="${row_index}">` +
        `<td class="text-center">${order}</td><td>${name}</td><td class="text-uppercase text-center">${unit}</td>` +
        `<td class="uni-bg-reddish text-white ${class_total} -total-cost-${row_index}-${index}"></td></tr>`;

    let row_detail_child = (metadata_id, value, fs_data_id) => `<input id="${metadata_id}" data-fs-data="${fs_data_id}" data-metadata-id="${metadata_id}" value="${value}" onchange="edit_fs_data(this,${metadata_id}, )">`;
    let first_td = (value) => `<td>${value}</td>`;
    let total_per_value = (total, value) => `${total}<br/>/${value}`;

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
            let data_row_child = getData(step, fs_id, group_id, url_get, data_row_index);
            let class_total = data_row_index === 1 && group_id < 4 ? "uni-bg-reddish text-white" : "";



            console.log(data_row_child)
            // Load data by click
            if (Object.keys(data_row_child).length > 0) {
                reload($('#' + table_id));
                $.each(data_row_child.data, function (index, item) {
                    let front_index = index + 1;
                    let start_metadata_id = item.start_metadata_id;
                    let total_first_td = item.input_flag === true ? first_td(row_detail_child(start_metadata_id, roundNFormat(item.value), item.fs_data_id)) : roundNFormat(first_td(item.value));
                    let total = 0;
                    if (index === 0) {
                        // Generate first child row
                        $('#' + table_id + ' .cost-index-' + data_row_index).after(row_detail_parent(front_index, front_index, item.name, total_first_td, item.unit.toUpperCase(), data_row_index, class_total));
                    } else {
                        let find_tr = $('#' + table_id).find('tr[data-row-parent=' + data_row_index + ']');
                        let last_tr_child = $(find_tr)[find_tr.length - 1];
                        $(last_tr_child).after(row_detail_parent(front_index, front_index, item.name, roundNFormat(convertNullToBlank(item.value)), item.unit.toUpperCase(), data_row_index, class_total))
                    }
                    // Generate year cell
                    for (let idx in item.data) {
                        let metadata_id = start_metadata_id + idx;
                        if (item.data[idx] !== null) {
                            total += parseFloat(item.data[idx]);
                        }
                        let year_td = item.data_input_flag === true ? first_td(row_detail_child(metadata_id, roundNFormat(item.data[idx]))) : first_td(roundNFormat(item.data[idx]));

                        // $('#' + table_id + ' .cost-child-' + data_row_index + '-' + front_index).append(row_detail_child(metadata_id, roundNFormat(convertNullToBlank(item.data[idx]))))
                        $('#' + table_id + ' .cost-child-' + data_row_index + '-' + front_index).append(year_td);
                    }
                    // Generate first cell
                    if (data_row_index === 1) {
                        if (group_id < 4) {
                            $('#' + table_id + ' .-total-cost-' + data_row_index + '-' + front_index).append(total_per_value(roundNFormat(total), roundNFormat(item.value)));
                        } else {
                            $('#' + table_id + ' .-total-cost-' + data_row_index + '-' + front_index).append(roundNFormat(item.value));
                        }
                    } else if (data_row_index >= 2) {

                        let total_cell = item.input_flag === true ? row_detail_child(item.start_metadata_id, roundNFormat(item.value)) : roundNFormat(item.value);

                        $('#' + table_id + ' .-total-cost-' + data_row_index + '-' + front_index).append(total_cell);
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

        } else {
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

    if (Object.keys(data.settings.step_name).length > 0) {
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
    } else {
        actionStep(null, 'load', data)
    }
}

function clearTable(table_id) {
    $($('#' + table_id).parent()).addClass('hidden');
    $('#' + table_id).find('th:not([origin])').remove();
    $('#' + table_id + ' tbody').html('')
}

function actionStep(ele, action = 'click', data) {
    let data_action = $(ele).attr('data-action');
    let data_step = $(ele).attr('data-step');
    let step_ele = $('.content input[name=step]');
    let step;
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
            step = parseInt(data_step)
        }
    } else {
        if (data_step != null) {
            $(step_ele).val(data_step);
            step = $(step_ele).val();
            $(ele).parent().addClass('done current');
            data = getData(step, fs_id, group_id, url_get, null);
        } else {
            step = parseInt($(step_ele).val());
            switch (data_action) {
                case "next":
                    $(step_ele).val(step + 1);
                    step = step + 1;
                    data = getData(step, fs_id, group_id, url_get, null);
                    break;
                case "previous":
                    if (step > 1) {
                        $(step_ele).val(step - 1);
                        step = step - 1;
                        data = getData(step, fs_id, group_id, url_get, null);
                    } else {
                        $(step_ele).val(1);
                        step = 1;
                        data = getData(null, fs_id, group_id, url_get, null);
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
}

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
            `<div class="col-12 text-center"><div class="uni-bg-reddish text-white square font-medium-3 box-shadow-1 uni-badge-total text-uppercase">${value} ${unit_name}</div></div>`;

        let data_id_unit = (unit) => `<div class="input-group-append">` + `<span class="input-group-text square uni-input-append" id="basic-addon2">${unit}</span></div>`;

        let data_equal = `<div class="col-4 text-center"><i class="font-medium-5 fa fa-arrow-circle-o-right"></i></div>`;

        data_id = (name, metadata_id, value, input_flag, unit_name, data_equal, fs_data_id, valid) => `<div class="col-2"><label>${name}</label></div>` +
            `<div class="col-2"><div class="input-group square mb-1">` +
            `<input type="text" class="form-control square uni-input" data-fs-data="${fs_data_id}" id="${metadata_id}" orgv="${value}" ` +
            ` aria-describedby="basic-addon2" value="${value}" ${input_flag} onchange="edit_fs_data(this, this.id,this.value)" ` +
            ` onfocus="getExactlyFormat(this, this.value)" onblur="onBlur(this, this.value)" ${valid}>` +
            data_id_unit(unit_name) +
            `</div></div>`;

        if (!isNaN(group_id) && group_id === 2) {
            if (!isNaN(step) && step > 2) {
                data_id = (name, metadata_id, value, input_flag, unit_name, data_equal, fs_data_id, valid) => `<div class="col-2"><label>${name}</label></div>` +
                    `<div class="col-2"><div class="input-group square mb-1">` +
                    `<input type="text" class="form-control square uni-input" data-fs-data="${fs_data_id}" id="${metadata_id}" orgv="${value}" ` +
                    ` aria-describedby="basic-addon2" value="${value}" ${input_flag} onchange="edit_fs_data(this, this.id,this.value)" ` +
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
                step_data.input_flag, step_data.unit, equal, step_data.fs_data_id, map_valid[step_data.unit_type]))
        });
    } else {
        // toastr.error("Đã có lỗi xảy ra, vui lòng liên hệ Admin");
        return false
    }
}

function appendAddComponent(data) {
    if (!jQuery.isEmptyObject(data)) {
        $('#frm_add_component select[name=metadata_group]').val('');
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
            $('#frm_add_component select[name=metadata_group]').select2({'width': '100%'});
            let data_add = data[i].data;
            $('#-data-group-add').append(block_data(data[i].id));
            for (let idx in data_add) {
                let item = data_add[idx];
                let required = item.input_flag === "enabled" ? "required" : "";

                $('.-component-add-' + data[i].id).append(data_id(item.name, fs_id, item.metadata_id, convertNullToBlank(item.value), item.input_flag, item.unit, data[i].id, required, map_valid[item.unit_type], item.unit_type));
                if (loadUnit(item.unit) === '') {
                    $('.-unit-add-div-' + item.metadata_id).addClass('hidden')
                }

            }
        }

    } else {
        $('.-add-component').addClass('hidden')
    }
}

function appendDataGroup(data) {
    $('#data_step_group_id').html('');
    $('#cost_timeline_table table tbody').html('');
    let step = parseInt($('#step').val());

    if (!jQuery.isEmptyObject(data)) {
        $('#data_step_group_id').removeClass('hidden');
        let data_groups = data;
        let length_data = Object.keys(data_groups).length;
        let group_div = (index) => `<div class="-group-${index} -group-div"></div>`;
        let data_group_header_html = (header_name, group_index, group_name, index) => `<div class="row -component-name">` +
            `<h4><i class="fa fa-home font-medium-5">&ensp;</i><span class="-group-name">${group_name}</span> - ${header_name}</h4>` +
            `<a class="ml-auto" aria-controls="-group-${group_index}-data-${index}" data-toggle="collapse"` +
            ` data-target="#-group-${group_index}-data-${index}" aria-expanded="false" data-parrent="#data_step_group_id" onclick="collapseElement(this, false)">` +
            `<i class="ft ft-plus-circle ml-auto font-medium-5"></i></a>` +
            `</div><div class="row w-100 -group-${group_index}-data-${index} pt-1 collapse" data-group="${index}" id="-group-${group_index}-data-${index}"></div>`;

        let data_group_name_html = (fs_data_id, metadata_name, metadata_id) => `<div class="col-4 row -metadata-row"><div class="col-6">` +
            `<label data-fs-data-id="${fs_data_id}" data-metadata-id="${metadata_id}">${metadata_name}</label></div>`;

        let data_group_html = (data_group_name, metadata_id, metadata_value, unit_name, input_flag, valid) => `${data_group_name}` + `<div class="col-6">` +
            `<div class="input-group square mb-1">` +
            `<input type="text" class="form-control square uni-input" id="${metadata_id}" orgv="${metadata_value}" ` +
            ` onchange="edit_fs_data(this, this.id,this.value)" data-input-flag="${input_flag}" ` +
            ` data-input-flag="${input_flag}" data-unit="${unit_name}" onblur="onBlur(this, this.value)" ` +
            ` onfocus="getExactlyFormat(this, this.value)" ${valid} value="${metadata_value}" disabled="">` +
            `<div class="input-group-append -unit-div-${metadata_id} ">` +
            `<span class="input-group-text square uni-input-append">${unit_name}</span></div></div></div>`;
        // -group-1-data-0
        let action_html = (group_index, component_group_index) => `<div class="col-12 row -metadata-row text-right">` +
            `<div class="col-6 ml-auto"><a class="btn btn-outline-info square btn-edit-fs  px-2 box-shadow-1 mr-2" onclick="actionEdit(this,${group_index}, ${component_group_index})" data-action="edit" >Edit</a> ` +
            `<a class="btn btn-danger square text-white px-2 box-shadow-1 btn-delete-component-fs" onclick="deleteComponent(this,${group_index}, ${component_group_index})">Delete</a> </div></div>`;

        for (const [i, group] of data_groups.entries()) {
            let group_index = i + 1;
            $('#data_step_group_id').append(group_div(group_index));
            for (const [idx, data] of group["data"].entries()) {
                let item = data.data;
                $('.-group-' + group_index).append(data_group_header_html(data["title"], group_index, group["group_name"], idx));
                for (let j in item) {
                    let item_data = item[j];
                    $('.-group-' + group_index + '-data-' + idx).append(data_group_html(data_group_name_html(item_data.fs_data_id, item_data.name, item_data.metadata_id), item_data.metadata_id, roundNFormat(item_data.value), item_data.unit, item_data.input_flag, map_valid[item_data.unit_type]));
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
        $.each($('.-group-' + group_index + '-data-' + data_index).find('input'), function () {
            $(this).prop('disabled', true);
        })
    }
}

function deleteComponent(ele, component_group_id, component_group_index) {
    let step = parseInt($('#step').val());
    let data = {
        data: [], fs_id: fs_id,
        token: user_token,
    };
    $.each($('#-group-' + component_group_id + '-data-' + component_group_index).find('input'), function () {
        data[data].push({
            "fs_data_id": $(this).attr('data-fs-data'),
            "financial_statement_id": fs_id,
            "metadata_id": $(this).attr('id'),
            "value": $(this).val(),
            "layout_fs_group_id": group_id,
            "step": step,
            "unit": $(this).attr('data-unit'),
        },);
    });

    swal({
        title: "Are you sure you want to delete this component?",
        icon: "warning",
        buttons: {
            cancel: {
                text: "Cancel",
                value: false,
                visible: true,
                className: "",
                closeModal: true,
            },
            confirm: {
                text: "Confirm",
                value: true,
                visible: true,
                className: "btn-danger",
                closeModal: false
            }
        }
    }).then(isConfirm => {
        if (isConfirm) {
            $.post(url_get_route, {
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                action: "delete_component",
                data: JSON.stringify(data)
            }, "json");
        } else {
            return false;
        }
    });
}

function appendTable(data_group) {
    $('.-add-component').addClass('hidden');
    let table_id = map_table[group_id];
    let project_created_date = $('#project_created_date').val();
    let this_year;
    if (project_created_date !== "") {
        this_year = moment(project_created_date, "YYYY-MM-DD").year()
    }

    const timeline = function (data) {
        $('#-cost-timeline-div').removeClass('hidden');
        let th_year = (year) => `<th class="w-2rem">${year}</th>`;
        let collapse_icon = (selector, group_id, tab_index) => `<td class="border-0 bg-white border-bottom-green collapse-td">` +
            `<a class="ml-auto pl-3 text-black" aria-controls="${selector}" data-toggle="collapse"` +
            ` data-target="#${selector}" aria-expanded="false" onclick="collapseElement(this, true, ${group_id}, ${tab_index})">` +
            `<i class="ft ft-plus-circle ml-auto font-medium-4"></i></a></td>`;

        let row_header = (index, order, name, value, unit, icon, group_id) => `<tr class="cost-index-${index}" data-row-index="${index}" data-loaded="false" aria-expanded="false">` +
            `<td class="text-center row-border-green text-bold-600">${order}</td>` +
            `<td class="row-border-green border-right-0 text-bold-600" colspan="2">` +
            ` ${name} (${value} ${unit})</td>` + collapse_icon(icon, group_id, 0) + `</tr>`;

        let row_header_year = (value) => `<td class="row-border-green text-green">${value}</td>`;
        for (let i = 0; i <= 19; i++) {
            year = this_year + i;
            $('.table-fs thead tr').append(th_year("Year " + year))
        }

        $.each(data, function (index, item) {
            let front_index = index + 1;
            let class_name = 'cost-index-' + front_index;

            $('#' + table_id + ' tbody').append(row_header(front_index, convertToRoman(front_index), item.name, roundNFormat(convertNullToBlank(item.value)), item.unit.toUpperCase(), icon = class_name, group_id));
            for (let idx in item.data) {
                $('.cost-index-' + front_index).append(row_header_year(roundNFormat(convertNullToBlank(item.data[idx]))))
            }
        });
        $($('#' + "cost_timeline_table" + ' tbody').find('tr[data-row-index]').first()).find('a').first().click()
        scrollStep()
    };
    const income = function (data) {
        $('#tab_ul').removeClass('hidden');
        $('#-sale-income-div').removeClass('hidden');
        $('#-operation-income-div').removeClass('hidden');
        $('#-other-income-div').removeClass('hidden');

        $('#income_table tbody').html('');
        let th_year = (year) => `<th class="w-2rem">${year}</th>`;
        // If input_flag -> value_input else
        let value_input = (metadata_id, value, fs_data_id, valid) => `<input id="${metadata_id}" value="${value}" data-fs-data="${fs_data_id}" orgv="${value}" onchange="edit_fs_data(this, ${metadata_id} , this.value)" ${valid}>`;
        let header_total = (total, value) => `${total}<br/>/${value}`;
        let row_header = (index, order, name, value, unit, icon, class_name) => `<tr class="cost-index-${index}" data-row-index="${index}">` +
            `<td class="text-center">${order}</td>` +
            `<td class="" colspan="">${name}</td>` +
            `<td class="text-center">${unit}</td>` +
            `<td class="${class_name} text-white">${value} </td></tr>`;
        let row_header_year = (value) => `<td class="">${value}</td>`;

        let year;
        for (let i = 0; i <= 19; i++) {
            year = this_year + i;
            $('#' + table_id[1].id_name + ' thead tr').append(th_year("Year " + year))
        }

        $.each(data, function (index, item) {
            let front_index = index + 1;
            let class_name = 'cost-index-' + front_index;
            let background_class = item.input_flag === true ? "" : "uni-bg-reddish ";
            let total = 0;
            let data = item.data;
            let input_header = item.input_flag === true ? value_input(item.start_metadata_id, roundNFormat(convertNullToBlank(item.value))) : header_total(roundNFormat(total), roundNFormat(convertNullToBlank(item.value)), item.fs_data_id, map_valid[item.unit_type]);
            // Generate first td
            $('#' + table_id[1].id_name + ' tbody').append(row_header(front_index, front_index, item.name, input_header, item.unit, class_name, background_class));

            for (let idx in data) {
                if (data.value !== null) {
                    total += parseFloat(data);
                }
                let metadata_id_item = idx + item.start_metadata_id;
                let input_child = item.data_input_flag === true ? row_header_year(value = value_input(metadata_id_item, roundNFormat(convertNullToBlank(data[idx])))) : row_header_year(value = roundNFormat(convertNullToBlank(data[idx])));
                $('#' + table_id[1].id_name + ' tr[data-row-index=' + front_index + ']').append(input_child)
            }
            $($('#tab_ul').find('a[tabindex=1]')).attr('data-loaded', 'true');
        });
        scrollStep()
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

        let th_year = (year) => `<th class="w-2rem">${year}</th>`;
        let collapse_icon = (selector, group_id, tab_index) => `<td class="border-0 bg-white border-bottom-green collapse-td">` +
            `<a class="ml-auto pl-3 text-black" aria-controls="${selector}" data-toggle="collapse"` +
            ` data-target="#${selector}" aria-expanded="false" onclick="collapseElement(this, true, ${group_id}, ${tab_index})">` +
            `<i class="ft ft-plus-circle ml-auto font-medium-4"></i></a>`;

        let row_header = (index, order, name, icon, group_id) => `<tr class="cost-index-${index}" data-row-index="${index}" data-loaded="false" aria-expanded="false">` +
            `<td class="text-center row-border-green text-bold-600">${order}</td>` +
            `<td class="row-border-green border-right-0 text-bold-600" colspan="2">` +
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
        scrollStep()
    };

    const map_table_by_group_id = {2: timeline, 3: income, 4: cash_flow,};

    $('.-step-total-cost').html('').addClass('hidden');
    $('#data_step_group_id').html('');
    $('#data_step_id').html('');

    if (!jQuery.isEmptyObject(data_group)) {
        let action = (data_group) => map_table_by_group_id[group_id](data_group);
        return action(data_group)
    } else {
        toastr.error("Đã có lỗi xảy ra, vui lòng liên hệ Admin");
        return false
    }
}

function getData(step, fs_id, group_id, url_get, row_index = null) {
    let result;
    if (row_index !== null) {
        $.ajax({
            type: "GET",
            url: url_get_route,
            data: {
                params: JSON.stringify({
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
            }
        });
    } else {
        $.ajax({
            type: "GET",
            url: url_get_route,
            data: {
                params: JSON.stringify({
                    fs_id: fs_id,
                    layout_fs_group_id: group_id,
                    step: step,
                    token: user_token
                })
            },
            contentType: 'application/json',
            async: false,
            success: function (data) {
                $('#project_created_date').val(data.settings.project_created_date)
                result = data;
            }
        });
    }

    return result;
}

function changeMetadata(value) {
    $.each($('#-data-group-add').find('div[data-type]'), function (i, item) {
        let data_type = $(item).attr('data-type');
        if (value == data_type) {
            $(item).removeClass('hidden')
        } else {
            $(item).addClass('hidden')
        }
    })
}

function addComponentCalculation(ele) {
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

function changeTab(ele) {
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
        if (data_loaded === "false") {
            if (tabindex === 2) {
                const map_name_income_operation = {
                    1: "Office",
                    2: "Retail",
                    3: "Hotel",
                    4: "Parking",
                    5: "Depreciation",
                    6: "Interest Expense",
                    7: "Summary",
                    8: "Terminal Value",
                };

                let table_id = map_table[group_id][2].id_name;
                let list_index = map_table[group_id][2].value;
                let th_year = (year) => `<th class="w-2rem">${year}</th>`;
                let collapse_icon = (selector, group_id, tab_index) => `<td class="border-0 bg-white border-bottom-green collapse-td">` +
                    `<a class="ml-auto pl-3 text-black" aria-controls="${selector}" data-toggle="collapse"` +
                    ` data-target="#${selector}" aria-expanded="false" onclick="collapseElement(this, true, ${group_id}, ${tab_index})">` +
                    `<i class="ft ft-plus-circle ml-auto font-medium-4"></i></a></td><td class="row-border-green" colspan="20"></td>`;

                let row_header = (index, order, name, icon, group_id, data_row_index, tab_index) => `<tr class="cost-index-${index}" data-row-index="${data_row_index}" data-loaded="false" aria-expanded="false">` +
                    `<td class="text-center row-border-green text-bold-600">${order}</td>` +
                    `<td class="row-border-green border-right-0 text-bold-600" colspan="2">` +
                    ` ${name}</td>` + collapse_icon(icon, group_id, tab_index) + `</tr>`;

                let row_header_year = (value) => `<td class="row-border-green text-green">${value}</td>`;
                for (let i = 0; i <= 19; i++) {
                    year = this_year + i;
                    $('.table-fs thead tr').append(th_year("Year " + year))
                }
                for (let index in map_name_income_operation) {
                    // row_index = [2..9]
                    let front_index = parseInt(index) + 1;
                    let class_name = 'cost-index-' + index;
                    $('#' + table_id + ' tbody').append(
                        row_header(front_index, convertToRoman(index), roundNFormat(map_name_income_operation[index]), class_name, group_id, front_index, 2)
                    );
                }
                $($('#' + table_id + ' tbody').find('tr[data-row-index]').first()).find('a').first().click()

            } else {
                // let length_index = map_table[group_id][2].value
                // let data_row_child = getData(1, fs_id, group_id, url_get, data_row_index = length_index);
            }
            $(ele).parent().parent().attr('data-loaded', 'true');
        }
    } else {
        toastr.error("Đã xảy ra lỗi, vui lòng liên hệ Admin");
        return false
    }
}

function actionFormAdd(ele) {

    let form = $(ele).parents('form')[0];
    let data_act = $(ele).attr('data-action');
    let group = $(form).find('div[data-type]:not(.hidden)')[0];
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
            if ($(this).val() === '') {
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
            let data_send = {"data": [], "layout_fs_group_id": group_id, "step": step, "fs_id": fs_id};
            $.each($(group).find('input'), function () {
                let input_data_type = $(this).attr('data-type');
                let value = $(this).val() ? input_data_type === "char" : parseFloat(getExactlyFormat(null, $(this).val()));
                data_send["data"].push({
                    "metadata_id": parseInt($(this).attr('data-metadata-id')),
                    "value": value
                })
            });

            $.ajax({
                url: url_get_route,
                type: 'POST',
                data: {
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                    data: JSON.stringify(data_send),
                    token: user_token,
                    token: user_token, fs_id: fs_id,
                    action: "add_component"
                },
                error: function () {
                    toastr.error('Bạn nhập thiếu thông tin, hoặc thông tin không hợp lệ. Vui lòng kiểm tra lại !');
                    return false
                }
            })
        } else {
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

function edit_fs_data(ele, metadata_id, value) {
    if ($(ele).parsley().isValid()) {
        $.get(url_get_route, {
                action: 'edit',
                params: JSON.stringify({
                    fs_id: fs_id,
                    metadata_id: metadata_id,
                    value: value.replace(/,/g, ''),
                    token: user_token
                })
            }, "json"
        ).done(function (data) {
            $.each($('#frm_fs').find('input:not(:hidden)'), function () {
                $(this).parent().removeClass('-value-changed')
            });
            $.each(data, function (index, item) {
                $('#' + item.metadata_id).parent().addClass('-value-changed')
                $('#' + item.metadata_id).val(roundNFormat(item.value))
                $('#' + item.metadata_id).attr('orgv', roundNFormat(item.value))
            });


        });

    } else {
        $(ele).val(roundNFormat(getExactlyFormat($(ele).attr('orgv'))));
        toastr.error("Nhập sai dữ liệu, vui lòng nhập lại.");
        return false
    }
}

$(document).ready(function () {
    let fs_data;
    let step = $('#step').val();
    if (step !== "") {
        fs_data = getData(parseInt(step), fs_id, group_id, url_get, null);
        generateStep(fs_data, parseInt(step));
    } else {
        fs_data = getData(1, fs_id, group_id, url_get, null);
        generateStep(fs_data, 1);
    }
});
