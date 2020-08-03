function reload_fs_versions(id) {
    //alert(id);
    $('#fs-list-detail').html('');

    $.get('api/get_fs_versions/?id='+id, function(data) {
        $('#detail_fs_project_title').html(data['title']);
        data=data['data'];
        output = '';
        for(i=0;i<data.length;i++)
        {
            output+= '<tr>';
            output+= '<td>' + (i+1).toString() + '</td>';
            output+= '<td>' + data[i]['updated_at'] + '</td>';
            output+= '<td>' + data[i]['updated_by'] + '</td>';
            output+= '<td>' + data[i]['version_number'] + '</td>';
            output+= '<td class="uni_text_black font-weight-bold">' + data[i]['IRR'] + '</td>';
            output+= '<td class="uni_text_black font-weight-bold">' + data[i]['NPV'] + '</td>';
            output+= '<td class="text-left"> <a class="uni_text_6d30ab" href="fs/' + data[i]['id'] + '/" style="text-decoration:underline;">' + 'View' + ' </a> </td>';
            output+= '<td class="text-center"> <input class="cl-cb" id="cb-'+ data[i]['id'] +'" type="checkbox" onclick="update_fs_id('+ data[i]['id']+')"></td>';
            output+- '</tr>';
        }
        $('#fs-list-detail').html(output);
    });
}

function update_fs_id(id) {
    $('.cl-cb').prop('checked', false);
    $('#cb-'+id).prop('checked', true);

    $.get('api/change_current_fs/?fs_id='+id, function(data){
        $('#project-irr').html(data['IRR']);
        $('#project-npv').html(data['NPV']);

        location.reload()
    });
}
