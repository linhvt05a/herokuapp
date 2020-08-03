
$(document).ready(function () {
    $('#id_operating_unit_group').change(function () {
        $.get(
            '/backend/manage/operating_unit/get_operating_type',
            {
                operating_unit_group: $(this).val(),
            },
            function () {
            }
        ).done(function (data) {
            var $operating_unit_type = $('#id_operating_unit_type')[0].selectize;
            $operating_unit_type.clearOptions();
            $operating_unit_type.addOption({value: '', text: '---------'});
            $.each(data, function (i, item) {
                $operating_unit_type.addOption({value: item.id, text: item.name});
            });
            $operating_unit_type.addItem(0);

            try {
                var $operating_unit = $('#id_operating_unit')[0].selectize;
                $operating_unit.clearOptions();
                $operating_unit.addOption({value: '', text: '---------'});
                $operating_unit.addItem(0)
            }
            catch (e) {

            }

            try {
                var $department = $('#id_department')[0].selectize;
                $department.clearOptions();
                $department.addOption({value: '', text: '---------'});
                $department.addItem(0);
            }
            catch (e) {

            }

            try {
                var $position = $('#id_position')[0].selectize;
                $position.clearOptions();
                $position.addOption({value: '', text: '---------'});
                $department.addItem(0);
            }
            catch (e) {

            }
        });
    });

    $('#id_operating_unit_type').change(function () {
        var $operating_unit_type = $(this).val();

        if ($operating_unit_type > 0)
            $.get(
                '/backend/manage/operating_unit/get_operating_unit', {
                    operating_unit_group: $('#id_operating_unit_group').val(),
                    operating_unit_type: $operating_unit_type,
                },
                function () {
                }
            )
            .done(function (data) {
                var $operating_unit = $('#id_operating_unit')[0].selectize;
                $operating_unit.clearOptions();
                $operating_unit.addOption({value: '', text: '---------'});
                $.each(data, function (i, item) {
                    $operating_unit.addOption({value: item.id, text: item.name});
                });

                try {
                    var $department = $('#id_department')[0].selectize;
                    $department.clearOptions();
                    $department.addOption({value: '', text: '---------'});
                    $department.addItem(0);
                }
                catch (e) {

                }

                try {
                    var $position = $('#id_position')[0].selectize;
                    $position.clearOptions();
                    $position.addOption({value: '', text: '---------'});
                    $department.addItem(0);
                }
                catch (e) {

                }
            });
    });
});