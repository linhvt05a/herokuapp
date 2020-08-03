$(document).ready(function () {
    $('#office').change(function () {
        //If office change --> clear option: department, position
        if ($('#department').val())
            $('#department').empty().append('<option value="" hidden> -- Lựa Chọn Phòng Ban -- </option>');
        if ($('#position').val())
            $('#position').empty().append('<option value="" hidden> -- Lựa Chọn Chức Vụ -- </option>');

        $.get(
            '/backend/employee/get_block',
            {
                office_id: $(this).val(),
            },
            function () {
            }
        )
            .done(function (data) {
                var label = $('#block').attr('aria-label');

                if (label === undefined)
                    label = '-- Lựa Chọn Khối --';
                label_diffrent = 'Diffrent';

                $('#block').html('<option value="" hidden>' + label + '</option>');
                if (data.length > 0) {
                    $('#block').append('<option value="-1" hidden>' + label_diffrent + '</option>');
                }
                $.each(data, function (i, item) {
                    $('#block').append('<option value="' + item.id + '">' + item.name + '</option>');
                })


                //DATA FOR POSITION
                if ($('#office').val()) {
                    $.get(
                        '/backend/employee/get_position',
                        {
                            office_id: $('#office').val(),
                            block_id: $('#block').val(),
                            department_id: $('#department').val(),
                        },
                        function () {
                        }
                    )
                        .done(function (data) {
                            var label = $('#position').attr('aria-label');

                            if (label === undefined)
                                label = '-- Lựa Chọn Chức Vụ --';

                            $('#position').html('<option value="" hidden>' + label + '</option>');
                            $.each(data, function (i, item) {
                                $('#position').append('<option value="' + item.id + '">' + item.name + '</option>');
                            })
                        })
                } else {
                    $('#department').empty().append('<option value="" hidden> -- Lựa Chọn Phòng Ban -- </option>');
                    $('#position').empty().append('<option value="" hidden> -- Lựa Chọn Chức Vụ -- </option>');
                }
            });

    });

    $('#block').change(function () {
        $.get(
            '/backend/employee/get_department',
            {
                office_id: $('#office').val(),
                block_id: $(this).val(),
            },
            function () {
            }
        )
            .done(function (data) {
                var label = $('#department').attr('aria-label');

                if (label === undefined)
                    label = '-- Lựa Chọn Phòng Ban --';

                $('#department').html('<option value="" hidden>' + label + '</option>');
                $.each(data, function (i, item) {
                    $('#department').append('<option value="' + item.id + '">' + item.name + '</option>');
                })

                if (data.length < 0) {
                    $('#department').empty().append('<option value="" hidden> -- Lựa Chọn Phòng Ban -- </option>');
                }
            })

        //DATA FOR POSITION
        $.get(
            '/backend/employee/get_position',
            {
                office_id: $('#office').val(),
                block_id: $('#block').val(),
                department_id: $('#department').val(),
            },
            function () {
            }
        )
            .done(function (data) {
                var label = $('#position').attr('aria-label');

                if (label === undefined)
                    label = '-- Lựa Chọn Chức Vụ --';

                $('#position').html('<option value="" hidden>' + label + '</option>');
                $.each(data, function (i, item) {
                    $('#position').append('<option value="' + item.id + '">' + item.name + '</option>');
                })

                if (!$('#block').val()) {
                    $('#department').empty().append('<option value="" hidden> -- Lựa Chọn Phòng Ban -- </option>');
                }

            })
    });

    $('#department').change(function () {
        $.get(
            '/backend/employee/get_position',
            {
                office_id: $('#office').val(),
                block_id: $('#block').val(),
                department_id: $(this).val(),
            },
            function () {
            }
        )
            .done(function (data) {
                var label = $('#position').attr('aria-label');

                if (label === undefined)
                    label = '-- Lựa Chọn Chức Vụ --';

                $('#position').html('<option value="" hidden>' + label + '</option>');
                $.each(data, function (i, item) {
                    $('#position').append('<option value="' + item.id + '">' + item.name + '</option>');
                })
            })
    });
});