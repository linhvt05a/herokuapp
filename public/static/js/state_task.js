$(document).ready(function () {

    /*global varible*/
    comment_title = $('.comment_title').val()
    ///////
    //START FUNCTION
    //////

    //checkIsExistWatcher
    var checkIsExistWatcher = function (ele) {
        watcher = [];
        $.each($('._data_watcher'), function (inx, element) {
            watcher.push($(element).attr('employee_id'))
        });
        empoyee_id = $(ele.currentTarget).select2('val');
        if (watcher.includes(empoyee_id)) {
            return true
        } else {
            return false
        }
    };

    function getPersonAssigned(value) {
        task_url = $('.person_assigned').attr('data-url');
        project_id = $('#project_id').val();
        if (project_id) {
            $.get(
                task_url,
                {
                    project_id: project_id,
                    name: $('.person_assigned').val().trim()
                    // name: $('.person_assigned').val().trim()
                }, function () {
                }
            )
                .done(function (data) {
                    //TODO --> Khi Thay chỗ assign thành input. Khi người dùng focus vào thì nó đổi thành select và search theo tên
                    console.log(data)
                })
        }
    }

    var addComment = function (ele) {
        if (ele && $(ele.currentTarget).find('.fa-pencil').length > 0) {
            changeInputToTextArea($(ele.target).parent().parent().parent().find('input'));
            return
        }

        var content = $('#comment').val();
        var tags = $('._save_assigned').attr('tags');
        //Gọi ajax để lưu lại dòng comment
        var data_url = $('._save_assigned').attr('data_url');
        var task_id = $('._save_assigned').attr('task_id');
        var employee = $('._save_assigned').attr('employee');
        var task_name = $('._save_assigned').attr('task_name');
        $.ajax({
            url: data_url,
            data: {
                'task_id': task_id,
                'content': content,
                'tags': tags,
                'employee': employee,
                'task_name': task_name,
            },
            success: function (data) {
                console.log(data)
            }
        });

        var divComment = $('#add_comment>div');
        var lengthOfDiv = divComment.length;

        //Thêm comment vào thẻ div
        $comment = '<div class="tabs-actions--item">'+
            '    <p class="item-date">' +
            '<span class="date">' +
            $('#today').val()+
            '</span>' +
            '    <span class="text">'+comment_title+'</span>' +
            '</p>'+
            '    <div class="row pt-1 body_comment">' +
            '        <div class="col-10">' +
            '            <div class="row ">' +
            '                <div class="col-2">' +
            '                    <img src="/static/img/default_avatar.svg" alt="Avatar" class="avatar" style="width:30px">' +
            '                </div>' +
            '                <div class="col-10">' +
            '                    <h4 class="uni-darkish-green">' + $("#full_name").val() + '</h4>' +
            '                    <p>Cập nhật ngày ' + $('#today_times').val() + '</p>' +
            '                </div>' +
            '            </div>' +
            '        </div>' +
            '        <div class="col-2">' +
            '            <label class="uni-darkish-green">#' + (lengthOfDiv + 1) + '</label>' +
            '            <i class="fa fa-pencil cursor-pointer  hidden"></i>' +
            '        </div>' +
            '        <div class="col-12 data_content">' +
            content
            + '' +
            '        </div>' +
            '    </div>' +
            '</div>';

        $('#add_comment').append($comment);

        //Khởi động lại summernote
        var markup = $('.summernote1').summernote('code');
        $('.summernote1').summernote('destroy');
        $html = '<input type="text"' +
            ' class="form-control square uni-comment-placehoder"' +
            ' placeholder="Comment and type @ notify other people "' +
            ' id="comment"' +
            ' name="comment" onclick="changeInputToTextArea(this)">';
        $('#comment').replaceWith($html)
        $('._save_assigned').find('.fa-check').removeClass('fa-check').addClass('fa-pencil');
        $('._cancel_assigned').addClass('hidden');
    };

    ///////
    //END FUNCTION
    //////


    //////
    //START DETECT EVENT
    /////
    //Detect person_assigned by class
    $('.person_assigned').on("change paste keyup", function (ele) {
        getPersonAssigned(ele)
    });

    //Detect comment save
    $('._save_assigned').on("click", function (ele) {
        addComment(ele)
    });

    //Cancel comment
    $('._cancel_assigned').on("click", function (ele) {
        //Khởi động lại summernote
        var markup = $('.summernote1').summernote('code');
        $('.summernote1').summernote('destroy');
        $html = '<input type="text"' +
            ' class="form-control square uni-comment-placehoder"' +
            ' placeholder="Comment and type @ notify other people "' +
            ' id="comment"' +
            ' name="comment" onclick="changeInputToTextArea(this)">';
        $('#comment').replaceWith($html)
        $('._save_assigned').find('.fa-check').removeClass('fa-check').addClass('fa-pencil');
        $('._cancel_assigned').addClass('hidden');
    });

    //Detect hover body comment
    /*$('.body_comment').hover(function (ele) {
        $(ele.currentTarget).find('._edit_comment').removeClass('hidden');
    }, function (ele) {
        $(ele.currentTarget).find('._edit_comment').addClass('hidden');
    });*/
    $(document).on({
        mouseenter: function (ele) {
            $(ele.currentTarget).find('._edit_comment').removeClass('hidden');
        },
        mouseleave: function (ele) {
            $(ele.currentTarget).find('._edit_comment').addClass('hidden');
        }
    }, '.body_comment');

    //Edit comment
    $(document).on('click', '._edit_comment', function (ele) {
        $(ele.currentTarget).parent().parent().parent().find('.data_content').summernote({
            toolbar: [
                // [groupName, [list of button]]
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['font', ['strikethrough', 'superscript', 'subscript']],
                ['fontsize', ['fontsize']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']]
            ],
            focus: true,
            height: 100,
            hint: {
                mentions: arr_person,
                match: /\B@(\w*)$/,
                search: function (keyword, callback) {
                    callback($.grep(this.mentions, function (item) {
                        return item.indexOf(keyword) == 0;
                    }));
                },
                content: function (item) {
                    //TODO--> Không cover được trường hợp trong 1 dự án có user bị trùng họ tên
                    //Lặp để lấy ra id nào đang được chọn:
                    $.each(arr_person_save_temp, function (index, value) {
                        if (value.name.toString() === item.toString() && !arr_person_save.includes(value.id)) {
arr_person_save.push(value.id)
                        }
                    });
                    $('._save_edit').attr('tags', arr_person_save);
                    //Vòng lặp kết thúc

                    return '@' + item;
                }
            }
        });
        $(ele.currentTarget).parent().parent().parent().find('.input-group-append').removeClass('hidden');
        $(ele.currentTarget).parent().parent().parent().find('.note-editor').css({'margin': '0px 10px 0px 10px'})

    });

    //Cancel edit comment
    $('._cancel_edit').on('click', function (ele) {
        $ele = $(ele.currentTarget).parent().parent().find('.data_content')
        // var markup = $ele.summernote('code');
        $ele.summernote('reset');
        $ele.summernote('destroy');
        $(ele.currentTarget).parent().parent().find('.input-group-append').addClass('hidden');
    });

    //Save edit comment
    $('._save_edit').on('click', function (ele) {
        //Destroy
        $ele = $(ele.currentTarget).parent().parent().find('.data_content');
        $ele.summernote('destroy');
        $(ele.currentTarget).parent().parent().find('.input-group-append').addClass('hidden');

        $ele = $(ele.currentTarget).parent().find('._save_edit');
        var content = $(ele.currentTarget).parent().parent().find('.data_content')[0].innerHTML.trim();
        var tags = $ele.attr('tags');
        //Gọi ajax để lưu lại dòng comment
        var comment_id = $ele.attr('comment_id');
        var data_url = $ele.attr('data_url');
        var task_id = $ele.attr('task_id');
        var employee = $ele.attr('employee');
        var flag_edit = $ele.attr('flag_edit');

        //Task
        task_name = $ele.attr('task_name');
        $.ajax({
            url: data_url,
            data: {
                'comment_id': comment_id,
                'task_id': task_id,
                'content': content,
                'tags': tags,
                'employee': employee,
                'flag_edit': flag_edit,
                'task_name': task_name,
                'link': location.href,
            },
            success: function (data) {
                console.log(data)
            }
        });
    });


    //Add watcher
    $('#watcher').change(function (ele) {
        var check = checkIsExistWatcher(ele);
        if (check) {
            return
        } else {
            // $html_watcher = '<div class="row pt-1 _data_watcher" employee_id="' + $(ele.currentTarget).val() + '" watcher_id="">' +
            //     '           <div class="col-2">' +
            //     '               <img src="/static/img/default_avatar.svg" alt="Avatar" class="avatar" style="width:30px">' +
            //     '           </div>' +
            //     '           <div class="col-10">' +
            //     '              <h4 class="uni-darkish-green">' + $(ele.currentTarget).select2('data')[0].text +
            //     '               <span class="fa fa-remove float-right cursor-pointer _remove_watcher"></span>' +
            //     '               </h4>' +
            //     '           </div>' +
            //     '       </div>';
            $html_watcher = '<p class="item _data_watcher"' +
                '                           employee_id="' + $(ele.currentTarget).val() + '"' +
                '                           watcher_id="">' +
                '<span class="avatar">DT</span>' +
                '<span class="name">' + $(ele.currentTarget).select2('data')[0].text +'</span>' +
                '<a class="delete " href="#"><i class="lar la-trash-alt _remove_watcher"></i></a>' +
                '                        </p>'

            $('._add_watcher').append($html_watcher);
            //Call Ajax

            data_url = $('._add_watcher').attr('data_url');
            task_id = $('._add_watcher').attr('task_id');
            $.ajax({
                url: data_url,
                data: {
                    'watcher_id': '',
                    'task_id': task_id,
                    'employee': $(ele.currentTarget).val(),
                },
                success: function (data) {
                    if (data.data) {
                        $('._data_watcher').last().attr('watcher_id', data.data)
                    }
                }
            });
        }
    });

    //Remove watcher
    $(document).on('click', '._remove_watcher', function (ele) {
        $(ele.currentTarget).parent().parent().remove();
        //xoá ở database(--> cần id watcher)
        data_url = $('._add_watcher').attr('data_url');
        watcher_id = $(ele.currentTarget).parent().parent().attr('watcher_id');
        $.ajax({
            url: data_url,
            data: {
                'watcher_id': watcher_id,
                'delete': true,
            },
            success: function (data) {
                if (data.data === "removed") {
                    console.log('Da xoa watcher')
                }

            }
        });
    });

    //get all relation and create new relation
    $(document).on('click', '._get_all_task_of_project', function (ele) {

        //Ajax để get toàn bộ task có trong project
        project_id = $('#project_id').val();
        data_url = $('._get_all_task_of_project').attr('data_url');
        create_or_delete_url = $('._get_all_task_of_project').attr('create_or_delete_url');
        if (project_id) {
            task_id = $('#task_id').val();
            $.ajax({
                url: data_url,
                data: {
                    'task_id': parseInt(task_id),
                    'project_id': project_id,
                },
                success: function (data) {
                    data_task = data.data;
                    $data_option = '<option value="" selected>Chọn task</option>';

                    //Tạo option
                    $.each(data_task, function (index, value) {
                        $data_option += '<option value="' + value.id + '">#' + value.id + " - " + value.name + '</option>';
                    });
                    $html_relation =
                        '<select class="form-control square text-left text-bold-600 select2 pt-2 _create_new_relation"' +
                        '            style="width: 100%; "' +
                        '            name="relation"' +
                        '            data-parsley-required-message="" id="relation">' +
                        $data_option;
                    '</select>';
                    //Thay thế thẻ div thành select
                    $('._get_all_task_of_project').replaceWith($html_relation);
                    $('select').select2({width: '100%', paddingTop: '10px'});

                    //Selected relation and append before this div
                    $('._create_new_relation').select2('open').on('select2:select', function (ele) {
                        $html_relation_selected = '';
                        $html_relation_selected += '<div class="relation_selected uni-darkish-green pb-2"><span class="pr-2">' + ($('.relation_selected').length + 1) +
'</span><a target="_blank" href="/backend/project/' + parseInt($('#project_id').val()) + '/task/' + ele.params.data.id + '">' + ele.params.data.text + '</a></div>';


                        task_id = $('#task_id').val();
                        //Create new relation
                        $.ajax({
url: create_or_delete_url,
data: {
    'task_id': parseInt(task_id),
    'relation_id': ele.params.data.id,
},
success: function (data) {
    if (data.data !== "removed") {
        $('._create_new_relation').before($html_relation_selected);
        //Xoá đi option đã chọn
        $('._create_new_relation').find(":selected").remove();
    }
}, error: function (e) {
    console.log(e)
}
                        });
                    })
                }, error: function (e) {
                    console.log(e)
                }
            });
        }
    });

    //remove relation
    $('._remove_relation').on('click', function (ele) {

        create_or_delete_url = $('._get_all_task_of_project').attr('create_or_delete_url');

        relation_id = $(ele.currentTarget).attr('relation_id');
        task_id = $('#task_id').val();

        //Call ajax remove relation from db
        $.ajax({
            url: create_or_delete_url,
            data: {
                'task_id': parseInt(task_id),
                'relation_id': parseInt(relation_id),
                'delete': true,
            },
            success: function (data) {
                if (data.data === "removed") {
                    //Remove relation DOM
                    $(ele.currentTarget).parent().remove();

                    //Loop --> Renew order
                    $.each($('.renew_order'), function (index, value) {
                        value.textContent = index + 1
                    });
                    //
                }
            }, error: function (e) {
                console.log(e)
            }
        });

    });
    //////
    //END DETECT EVENT
    /////

    //Init height của body task và task assign
    height_lock_task = $('.lock_task').height();
    if ($('.tab-assigned') && $('.tab-assigned').length > 0) {
        $('.tab-assigned').css('max-height', height_lock_task + 'px')
    }
    //AUTO CALL


});