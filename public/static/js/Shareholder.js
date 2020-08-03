$(document).ready(function () {
    // TODO: Fix after
    // if ($('#form_add_investor').length){
    //     $('#form_add_investor').parsley();
    // }

    $('.nav li a').click(function () {
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');
    });
    show_detail_info()
    registerEvent()

    $('body').on('click', 'a[ref=change-avatar]', function () {
        $('input[ref=preview-image]').trigger('click')

    })

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
    });

    $('a[ref=shareholder-add-member]').click(function () {
        parse_row_data('shareholder-add-member', '#shareholderTabs_ContactTab_contact-list', '/backend/shareholder/contact/add/')
        show_detail_info()
    })

    $('#shareholder_add_setting-type').change(function () {
        show_detail_info()
    });

    $('#btn_view_block').on('click', function (ele) {
        $('#view_data').val('block');
        $('#frm_paginate').submit()
    });
    $('#btn_view_table').on('click', function (ele) {
        $('#view_data').val('table');
        $('#frm_paginate').submit()
    });


});

function parse_row_data(ref_id, data_id, url_parse_path, reverse = false) {
    row = $(data_id).find('tr').length;
    if (validate_limit_input(row, 4)) {
        $.get(url_parse_path, {
            'row': row
        }, function (resp) {
            if (reverse) {
                $(data_id).prepend(resp)
            } else {
                $(data_id).append(resp)
            }
            show_detail_info()
        })
    }
}

function validate_limit_input(variable, limit) {
    if (variable > limit) {
        toastr.error("Đã quá số lượng thêm trong một lượt ")
        return false
    }
    return true
}

function show_detail_info() {
    shareholderType = $('#shareholder_add_setting-type').val();

    if (shareholderType == '') {

        document.querySelectorAll('[id=shareholder_add_groupInfo]').forEach(element => {
            $(element).hide()
        })

        document.querySelectorAll('[id=shareholder_add_groupBusiness]').forEach(element => {
            $(element).hide()
        })
    } else if (shareholderType == 1) {

        document.querySelectorAll('[id=shareholder_add_groupInfo]').forEach(element => {
            $(element).show()
        })

        document.querySelectorAll('[id=shareholder_add_groupBusiness]').forEach(element => {
            $(element).hide()
        })
        $("#shareholder_add_owner").prop('required', false);
        $("#shareholder_add_businesslicense_text").text("CMND/CCCD")
        $("#shareholder_add_groupPersional").show()
        $("#shareholder_add_Document_businesslicense_text").text("CHỨNG MINH NHÂN DÂN / CĂN CƯỚC CÔNG DÂN")
        document.getElementById("shareholder_add_BusinessLicense").placeholder = "CMND/CCCD"
        $("#shareholder_add_Document_businesslicense_textDetail").text("Cập nhật chứng minh nhân dân hoặc căn cước công dân")

    } else if (shareholderType == 2) {

        document.querySelectorAll('[id=shareholder_add_groupInfo]').forEach(element => {
            $(element).show()
        })

        document.querySelectorAll('[id=shareholder_add_groupBusiness]').forEach(element => {
            $(element).show()
        })

        $("#shareholder_add_owner").prop('required', true);
        $("#shareholder_add_businesslicense_text").text("GCNĐKKD")
        $("#shareholder_add_groupPersional").hide()
        $("#shareholder_add_Document_businesslicense_text").text("GIẤY CHỨNG NHẬN ĐĂNG KÝ KINH DOANH")
        document.getElementById("shareholder_add_BusinessLicense").placeholder = "Giấy Phép Kinh Doanh"

        $("#shareholder_add_Document_businesslicense_textDetail").text("Cập nhật giấy tờ đăng ký kinh doanh")

    }
}

function search_shareholder_setting_type(id) {

    $('#customer_setting_type').val(id);
    $('#frm_paginate').submit()
}

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

function deleteContact(contactID) {
    url = '/backend/shareholder/contact/delete/' + contactID
    deleted(url)
}

function deleteDocument(docID) {
    url = '/backend/shareholder/document/delete/' + docID
    deleted(url)
}