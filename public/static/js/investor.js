function deleted(url) {
    swal({
        title: "Are you sure you want to delete?",
        icon: "warning",
        buttons: {
            cancel: {
                text: "No",
                value: null,
                visible: true,
                className: "",
                closeModal: true,
            },
            confirm: {
                text: "Yes",
                value: true,
                visible: true,
                className: "",
                closeModal: false
            }
        }
    })
        .then((isConfirm) => {
            if (isConfirm) {
                window.location.href = url;
            } else {
                return false;
            }
        });
}

function deletecontact(contactID) {
    url = '/backend/investor/contact/delete/' + contactID
    deleted(url)
}

function deleteDocument(docID) {
    url = '/backend/investor/library/delete/' + docID
    deleted(url)
}

function deleteShareholder(shareholderID) {
    url = '/backend/investor/shareholder/delete/' + shareholderID
    deleted(url)
}

function search_investor_setting_type(id) {
    $('#investor_setting_type').val(id);
    $('#frm_paginate').submit()
}

function validate_limit_input(variable, limit) {
    if (variable > limit) {
        toastr.error("Đã quá số lượng thêm trong một lượt ")
        return false
    }
    return true
}

function parse_row_data(ref_id, data_id, url_parse_path, reverse = false) {
    row = $(data_id).find('tr').length
    $.get(url_parse_path, {
        'row': row
    }, function (resp) {
        if (reverse) {
            $(data_id).prepend(resp)
        } else {
            $(data_id).append(resp)
        }
        init_default_value()

    })
}

function init_default_value() {
    load_unit_currency()
    registerEvent()
}

function covert_precent_to_money(old_value, id) {
    total = $('#investor_add_charter-capital').val();
    percent = $('#investor_add_tab_shareholder-percent-' + id).val();
    if (percent != "") {
        if (check_number(percent) == true) {
            load_value()
        } else {
            $('#investor_add_tab_shareholder-percent-' + id).val(old_value);
        }
    } else {
        $('#investor_add_tab_shareholder-percent-' + id).val(old_value);
    }
}

function load_unit_currency() {
    text_unit = $('#investor_add_currency-unit :selected').text();
    setCurrencyUnit('investor_add_tab_shareholder-currency-unit', text_unit)
    load_value();
}

function registerEvent() {
    $('body').on('click', 'a[ref=change-avatar]', function () {
        $('input[ref=preview-image]').trigger('click')
    })

    // $('body').on('click', 'a[ref=delete-document-investor]', function () {
    //     $(this).parent().parent().find("span").html('')
    //     $(this).parent().parent().parent().find("input").val('')
    //     $("#upload_file_document").show()
    // })
    // $('input[id=shareholder_contact_primary]').change(function () {
    //     if ($('input[id=shareholder_contact_primary]').is(':checked')){
    //         if($(this).closest('.js_checkbox').hasClass('active')){
    //             $(this).closest('.js_checkbox').removeClass('active');

    //         } else {
    //             $(this).closest('.js_checkbox').addClass('active')
    //         }
    //     } else {
    //         if($(this).closest('.js_checkbox').hasClass('active')){
    //             $(this).closest('.js_checkbox').removeClass('active')
    //         }else{
    //             $(this).closest('.js_checkbox').addClass('active')
    //         }
    //         // $(this).find('input').prop('checked', false);
    //     }
    // })

    $(document).off('change').on('change', '.js_checkbox', function (e) {

        document.querySelectorAll('.js_checkbox').forEach(element => {
            if ($(element).hasClass('active')) {
                $(element).removeClass('active');
                $(element).children().prop('checked', false);
            }
        })

        if ($(this).find('input').is(':checked')) {
            if ($(this).closest('.js_checkbox').hasClass('active')) {
                $(this).closest('.js_checkbox').removeClass('active');
            } else {
                $(this).closest('.js_checkbox').addClass('active')
            }
            $(this).find('input').prop('checked', true);
        } else {
            if ($(this).closest('.js_checkbox').hasClass('active')) {
                $(this).closest('.js_checkbox').removeClass('active')
            } else {
                $(this).closest('.js_checkbox').addClass('active')
            }
            $(this).find('input').prop('checked', false);
        }
    })

    $('#investor_add_currency-unit').change(function () {
        init_default_value()
    });
    $('#investor_add_charter-capital').change(function () {
        init_default_value()
    });

    load_value();

    $('input[ref=preview-image]').change(function () {
        if (typeof (FileReader) != "undefined") {
            var img = $(this)[0].files[0];
            if (img != undefined) {
                $("#div_image_preview").show();
                $("#div_image_preview").html('');
                $("#div_image_preview").append("<img />");
                var reader = new FileReader();
                reader.onload = function (e) {
                    $("#div_image_preview img").attr("src", e.target.result).attr("class", "w-100");
                    $("#div_image_preview").append('<small class="float-right mt-1 mb-1"><a href="javascript:void(0)" ref="change-avatar"> Thay đổi hình đại diện </a></small>');
                    $("#div_image_preview").show()
                };
                reader.readAsDataURL($(this)[0].files[0]);
            }
            $(".m_drag-images").hide()
        } else {
            alert("This browser does not support FileReader.");
        }
    });

    $('a[ref=confirm-delete]').click(function () {
        if (confirm('Vui lòng xác nhận việc xoá dữ liệu')) {
            return true
        }
        return false
    })

}

function setCurrencyUnit(id, val) {
    document.querySelectorAll('[id=' + id + ']').forEach(element => {
        $(element).text(val)
    })
}

function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}

function total_percent(percent_investor, total_value) {
    let val = percent_investor * total_value / 100;
    return val;
}

function load_value() {
    total_charter_capital = $('#investor_add_charter-capital').val();
    let data = load_data_chart(total_charter_capital);
    var unit = " " + $("#investor_add_currency-unit option:selected").text();
    $('#investor_add_tab_shareholder-total-investor-chart').html('<b>' + total_charter_capital + ' ' + unit + '</b>')
    load_chart(data, '#investor_chart');
    load_data_table(data, unit, '#investor_add_tab_shareholder-table-chart');
}

function check_number(str) {
    var intRegex = /^\d+$/;
    var floatRegex = /^((\d+(\.\d *)?)|((\d*\.)?\d+))$/;

    if (intRegex.test(str) || floatRegex.test(str)) {
        return true;
    } else {
        return false;
    }
}

function load_data_chart(total_charter_capital) {
    var data = [];
    $("input[id^='investor_add_tab_shareholder-percent-']").each(function (index, value) {
        row_id = value.id.split('-').slice(-1)[0]

        name = $('#investor_add_tab_shareholder-name-' + row_id + ' option:selected').text()
        ratio = roundFloat($(value).val(), 2)
        money = roundFloat(total_percent(ratio, roundFloat(total_charter_capital, 2)), 2);
        data.push({
            full_name: name,
            capital: money,
            percent: ratio
        });
        $('#investor_add_tab_shareholder-result-percent-' + row_id).val(total_percent(ratio, total_charter_capital));
    })

    // validate 100%

    calc_total_percent = 0
    old_total_percent = 0
    data.sort((a, b) => (b.percent > a.percent) ? 1 : ((a.percent > b.percent) ? -1 : 0))
    data_result = []
    for (i = 0; (data.length < 5) ? (i < data.length) : (i < 4); i++) {
        calc_total_percent += data[i].percent
        if (calc_total_percent <= 100) {
            data_result.push(data[i])
            old_total_percent = calc_total_percent
        }
    }

    if (old_total_percent < 100) {
        data_result.push({
            full_name: "Chủ đầu tư khác",
            capital: '-',
            percent: 100 - old_total_percent
        });
    }

    return data_result;
}

function roundFloat(num, dec) {
    var d = 1;
    for (var i = 0; i < dec; i++) {
        d += "0";
    }
    return Math.round(num * d) / d;
}

function load_data_table(data, unit, id_table_chart) {
    $(id_table_chart).html("");

    chart_table_result = ''
    for (i = 0; i < data.length; i++) {
        chart_table_result += '<tr>' + '<td class="name"><span class="circle uni_bg_' + (i + 1) + '"></span>' + data[i].full_name + '</td>\n' + '<td class="money">' + data[i].capital + ' ' + unit + '</td>\n' + '<td>' + data[i].percent + '%</td></tr>'
    }
    $(id_table_chart).append(chart_table_result)
}

function load_chart(data, id_chart) {
    $(id_chart).html('')

    chart_result = ''
    for (i = 0; i < data.length; i++) {
        chart_result += '<div class="m_progress-bar uni_bg_' + (i + 1) + '" style="width:' + data[i].percent + '%;"><span class="m_progress-number">' + data[i].percent + '%</span></div>'
    }
    $(id_chart).append(chart_result)
}