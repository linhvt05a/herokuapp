$(document).ready(function() {
    $('#id_province').change(function()
    {
        $.get(
            '/backend/location/getdistrict',
            {
                province_id: $(this).val(),
            },
            function(){
            }
        )
        .done(function(data) {
            $('#id_district').html('<option value>---------</option>');
            $.each(data, function(i, item) {
                $('#id_district').append('<option value="' + item.id + '">' + item.name + '</option>');
            })
            $('#id_ward').html('<option value>---------</option>');
        })
    });
});