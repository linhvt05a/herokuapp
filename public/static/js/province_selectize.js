
$(document).ready(function () {
    $('#id_province').change(function () {
        $.get(
            '/backend/location/getdistrict',
            {
                province_id: $(this).val(),
            },
            function () {
            }
        )
        .done(function (data) {
            var $district = $('#id_district')[0].selectize;

            $district.clearOptions();

            $district.addOption({value: 0, text: '-- Lựa Chọn --'});

            $.each(data, function (i, item) {
                $district.addOption({value: item.id, text: item.name});
            });
            $district.addItem(0);

            var $ward = $('#id_ward')[0].selectize;

            $ward.clearOptions();
            $ward.addOption({value: 0, text: '-- Lựa Chọn --'});
            $ward.addItem(0);
        });

    });
});