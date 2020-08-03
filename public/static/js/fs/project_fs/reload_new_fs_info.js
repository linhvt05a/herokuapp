// function reload_new_fs_info() {

// }




$("#group-number-select").on('change',(event) => {
    value = event.target.value;
    
    $('#version-number-select-body').show();

    $.get('api/get_new_fs_info/?name='+value, function(data) {
        // alert(data);
        $('#version-number').attr('value',data['next_fs_version']);
        $('#version-number').html(data['next_fs_version']);
        
        $('#fs-name').attr('value',data['fs_name']);

        output='';
        for(i=0; i<data['fs_version_list'].length; i++)
        {
            output += '<option>';
            output += data['fs_version_list'][i];
            output += '</option>';
        }
        $('#version-number-select').html(output);
    });
});