$(document).on('click', '.remove_group_clone', function (){
    $(this).parent().parent().remove();
});

function parse_row_data(ref_id, data_id, url_parse_path, is_add_child) {
    $.get(url_parse_path, function (resp) {
        if (is_add_child == true){
            $(data_id).after(resp)
        } else {
            $(data_id).append(resp)
        }
    })
}


