$(document).ready(function () {

    /*global varible*/
    concurrently_delete = [];
    flag_duplicate = false;
    invalid_date = false;
    _department_name = '';

    //Function active div
    function activeDiv(ele) {
        $(ele.currentTarget).find('.active').removeClass('active');
        $(ele.target).addClass('active')
    }

    ///////
    //START FUNCTION
    //////
    /*Ajax call function get data config*/
    function callAjaxCollectHumanResource(ele) {
        ele.stopPropagation();
        var url;
        var name;
        if (ele) {
            url = ele.target.parentNode.getAttribute('data-url');
            name = ele.target.parentNode.getAttribute('value');
            if (!url) {
                return;
            }
            if (!name) {
                name = 1;
                // return;
            }
        } else {
            // url = {% url 'human_resource_view' %};
            url = $("input[name=url-default]").attr('data-url');
            name = 1;
        }
        $.ajax({
            type: 'get',
            url: url,
            data: {
                'name': name,
            },
            success: function (data) {
                $('.config-data').fadeOut(1);
                $('.config-data').html(data).fadeIn('slow')
            },
        });
    }

    /*Ajax call function get data config*/
    function callAjaxCollectCollection(ele) {
        var url;
        var name;
        if (ele) {
            url = ele.target.getAttribute('data-url');
            name = ele.target.getAttribute('value');
            if (!url) {
                return;
            }
            if (!name) {
                name = 1;
                // return;
            }
        } else {
            // url = {% url 'human_resource_view' %};
            url = $("input[name=url-default]").attr('data-url');
            name = 1;
        }
        $.ajax({
            type: 'get',
            url: url,
            data: {
                'name': name,
            },
            success: function (data) {
                $('.config-data').fadeOut(1);
                $('.config-data').html(data).fadeIn('slow')
            },
        });
    }

    function addConcurrently(ele) {
        var current_id = $('.concurrently').length;
        var append_id = 'concurrently_' + (current_id + 1);
        var ele_id = '#concurrently_' + current_id;
        // var div_append =
        $('select').select2('destroy');
        test = $(ele_id).after($(ele_id).clone().removeAttr('id').attr('id', append_id).attr('data-id', '-1'));
        if ((current_id + 1) >= 2) {
            $("#concurrently_" + (current_id + 1)).find('.btn-delete').removeClass('hidden')
            // $(ele_id).after($(ele_id).clone().removeAttr('id').attr('id', append_id)).find('.btn-delete').removeClass('hidden');
        } else {
            // $(ele_id).after($(ele_id).clone().removeAttr('id').attr('id', append_id));
        }
        $("#concurrently_" + (current_id + 1)).find('._has_in_db').removeClass('_has_in_db');
        $(".datepicker").daterangepicker({
            singleDatePicker: true,
            autoUpdateInput: false,
            locale: {
                format: 'DD/MM/YYYY'
            }


        }).on('apply.daterangepicker', function (ev, picker) {
            if (picker) {
                picker.element.val(picker.startDate.format('DD/MM/YYYY'));
            }
        });
        // var cloneObj = test.find('.date-picker');
        // cloneObj.removeClass('hasDatepicker').removeAttr('id');
        $('select').select2({width: '100%'});
    }

    var list_tem = []
    var obj1 = {}

    function containsObject(obj, list) {
        counter = {};
        dup = true;
        list_tem = $.extend(true, [], list);
        obj1 = $.extend(true, {}, obj);
        list_tem.forEach(function (obj1) {
            delete obj1['id']
            var key = JSON.stringify(obj1)
            counter[key] = (counter[key] || 0) + 1
            if (counter[key] > 1) {
                dup = false;
                return dup;
            }
        });
        return dup;
    }

    //function collect data concurrently
    function concurrentlyCollectData() {
        var concurrently = [];
        var duplicates;
        var obj;
        $.each($('.concurrently'), function (index, value) {
            var department = $(value).find(':selected')[0].value;
            var position = $(value).find(':selected')[1].value;
            var start_date = $(value).find('[name ="start_date"]').val();
            var end_date = $(value).find('[name ="end_date"]').val();
            var data_id = $(value).attr('data-id') ? $(value).attr('data-id') : -1;
            obj = {
                id: data_id,
                department: department,
                position: position,
                start_date: start_date,
                end_date: end_date
            };

            //Check start day end day
            var from = obj.start_date.split('/');
            var _start_date = new Date(from[2], from[1] - 1, from[0]);
            var to = obj.end_date.split('/');
            var _end_date = new Date(to[2], to[1] - 1, to[0]);
            if (obj.end_date && _start_date > _end_date) {
                _department_name = $(value).find(':selected')[0].text;
                invalid_date = true;
            } else {
                _department_name = '';
                invalid_date = false;
            }

            if (department && position) {
                concurrently.push(obj);
            }
            duplicates = containsObject(obj, concurrently);
            if (!duplicates) {
                flag_duplicate = true;
            }
        });
        console.log(concurrently);
        return JSON.stringify(concurrently);
    }

    //Function submit form employee
    function submitFormEmployee(ele) {

        //Check auto create user account
        if ($('#checkBox').prop('checked')) {
            $('#employee_form').parsley({
                excluded: '.autocreate_account input'
            });
        }
        /*else {
            //Check password
            if ($('input[name="repassword"]').val() !== $('input[name="password"]').val()) {
                toastr.error('Mật khẩu đang không trùng khớp với nhau!');
                return;
            }
        }*/


        //Check if doesn't work
        if ($('._save_employee').hasClass('_add_user')) {

        } else if ($('._save_employee').hasClass('_edit_employee')) {

        } else {
            if ($('._work_process>tr').length <= 0) {
                toastr.info('Bạn chưa chọn chức vụ cho nhân viên này!');
                return;
            }
        }

        //Submit
        $('#employee_form').parsley().validate();
        if ($('#employee_form').parsley().isValid()) {
            $('#employee_form').submit();
        } else {
            console.log('invalid!');
        }
    }

    //Function delete employee
    function deleteEmployee(ele, data_url) {
        swal({
            title: 'Bạn có chắc?',
            text: 'Nhân viên này sẽ bị xóa!',
            icon: 'warning',
            showCancelButton: !0,
            buttons: {
                cancel: {
                    text: 'Thoát!',
                    value: null,
                    visible: !0,
                    className: 'btn-warning',
                    closeModal: 1
                },
                confirm: {
                    text: 'Xóa!',
                    value: !0,
                    visible: !0,
                    className: '',
                    closeModal: !1
                }
            }
        }).then(function (e) {
            if (e) {
                window.location.href = data_url
            }
        });
    }

    //Function delete concurrently
    function deleteConcurrently(ele) {
        //Check exist ele
        id_ele = ele.currentTarget.parentElement.parentElement.id;
        if (ele && $(ele.currentTarget).hasClass('_has_in_db')) {
            swal({
                title: 'Bạn có chắc?',
                text: 'Chức vụ của nhân viên tại phòng ban này sẽ bị xóa!',
                icon: 'warning',
                showCancelButton: !0,
                buttons: {
                    cancel: {
                        text: 'Thoát!',
                        value: null,
                        visible: !0,
                        className: 'btn-warning',
                        closeModal: 1
                    },
                    confirm: {
                        text: 'Xóa!',
                        value: !0,
                        visible: !0,
                        className: '',
                        closeModal: 1
                    }
                }
            }).then(function (e) {
                if (e) {
                    concurrently_delete.push(parseInt($('#' + id_ele).attr('data-id')));
                    $('.concurrently_delete').val(JSON.stringify(concurrently_delete));
                    //remove ele form div
                    $('#' + id_ele).remove();
                }
            });
        } else {
            //remove ele form div
            ele.currentTarget.parentElement.parentElement.remove();
        }
    }

    //Function create user
    function createUserProfile(ele) {
        $('#_user_profile').modal({backdrop: 'static'}, 'show');
    }

    //Function save create user
    function saveUserProfile(ele) {
        $('#_user_profile').parsley();
        data_url = $('._create_user_profile').attr('data-url');
        _username = $("input[name=username]").val();
        password = $("input[name=password]").val();
        _email = $("input[name=_email]").val();
        avatar = $("input[name=file]").val();

        //Check valid
        if (!_username) {
            $("input[name=username]").addClass('border-red').focus();
            $("input[name=password]").removeClass('border-red');
            $("input[name=_email]").removeClass('border-red');
            return
        } else if (!password) {
            $("input[name=password]").addClass('border-red').focus();
            $("input[name=username]").removeClass('border-red');
            $("input[name=_email]").removeClass('border-red');
            return
        } else if (!_email) {
            $("input[name=_email]").addClass('border-red').focus();
            $("input[name=username]").removeClass('border-red');
            $("input[name=password]").removeClass('border-red');
            return;
        } else {
            //submit form
        }
    }


    ///////
    //END FUNCTION
    //////


    //////
    //START DETECT EVENT
    /////


    /*Detect click save create user*/
    // $('._btn_save_user').on('click', function (ele) {
    //     // saveUserProfile(ele)
    //     // $('form').submit(upload);
    //
    // });

    /*Detect click create user*/
    $('._create_user_profile').on('click', function (ele) {
        createUserProfile(ele)
    });

    /*Detect click delete concurrently*/
    $(document).on('click', '.delete_concurrently', function (ele) {
        deleteConcurrently(ele)
    });

    /*Detect click delete employee*/
    $('.delete_employee').on('click', function (ele) {
        data_url = this.getAttribute('url-data');
        deleteEmployee(ele, data_url)
    });

    /*Detect click save employee: _save_employee*/
    $('._save_employee').on('click', function (ele) {
        submitFormEmployee(ele)
    });

    /*Detect click add_concurrently*/
    $('.add_concurrently').on('click', function (ele) {
        if (ele && !ele.currentTarget.hasAttribute('disabled')) {
            addConcurrently(ele)
        }
    });


    /*Detect when click on tab human source*/
    $(document).on("click", ".human_resource_tab", function (ele) {
        callAjaxCollectHumanResource(ele);
    });

    /*Detect when click on tab*/
    $(document).on("click", ".config_tab", function (ele) {
        activeDiv(ele);
        callAjaxCollectCollection(ele);
    });


    //////
    //END DETECT EVENT
    /////

    //AUTO CALL
    callAjaxCollectCollection();
});