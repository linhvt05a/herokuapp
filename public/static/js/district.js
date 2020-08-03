$(document).ready(function() {
    $('#id_district').change(function()
    {
        $.get(
            '/backend/location/getward',
            {
                district_id: $(this).val(),
            },
            function(){
            }
        )
        .done(function(data) {
            $('#id_ward').html('<option value>---------</option>');
            $.each(data, function(i, item) {
                $('#id_ward').append('<option value="' + item.id + '">' + item.name + '</option>');
            })
        })
    });
});