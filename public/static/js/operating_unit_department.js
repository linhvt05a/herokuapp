
$(document).ready(function () {
    $('#id_operating_unit').change(function () {
        var $operating_unit = $(this).val();

        $.get(
            '/backend/manage/operating_unit/get_department', {
                operating_unit_group: $('#id_operating_unit_group').val(),
                operating_unit: $operating_unit
            },
            function () {
            }
        ).done(function (data) {
            var $department = $('#id_department')[0].selectize;

            $department.clearOptions();

            $department.addOption({value: '', text: '---------'});

            if (data)
                $.each(data, function (i, item) {
                    $department.addOption({value: item.id, text: item.name});
                });
        });
    });
});