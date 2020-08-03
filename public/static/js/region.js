$(document).ready(function () {
    $('#id_region').change(function () {
        $.get(
            '/backend/location/getprovince',
            {
                region_id: $(this).val(),
            },
            function () {
            }
        )
            .done(function (data) {
                var label = $('#id_province').attr('aria-label');

                if (label === undefined)
                    label = 'Chọn Tỉnh/TP';

                $('#id_province').html('<option value="" hidden>' + label + '</option>');
                $.each(data, function (i, item) {
                    $('#id_province').append('<option value="' + item.id + '">' + item.name + '</option>');
                })
            })
    });
});