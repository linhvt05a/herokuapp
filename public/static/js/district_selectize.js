$(document).ready(function () {
    $('#id_district').change(function()
    {
        var $district_id = parseInt($(this).val());

        // if ($district_id > 0) {
            $.get(
                '/backend/location/getward',
                {
                    district_id: $district_id,
                },
                function () {
                }
            )
                .done(function (data) {
                    var $ward = $('#id_ward')[0].selectize;

                    $ward.clearOptions();

                    $ward.addOption({value: 0, text: '-- Lựa Chọn --'});
                    $.each(data, function (i, item) {
                        $ward.addOption({value: item.id, text: item.name});
                    });
                    $ward.addItem(0);
                });
        // }

    });
});