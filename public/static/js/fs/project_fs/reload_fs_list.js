function reload_fs_list(idx){
    if(idx==0)          p_num = '1';
    else if(idx == 1)   p_num = (parseInt($("#fp-pos-current").text()) - 1).toString();
    else if(idx == 2)   p_num = $("#fp-pos-l2").text();
    else if(idx == 3)   p_num = $("#fp-pos-l1").text();
    else if(idx == 4)   p_num = $("#fp-pos-current").text();
    else if(idx == 5)   p_num = $("#fp-pos-r1").text();
    else if(idx == 6)   p_num = $("#fp-pos-r2").text();
    else if(idx == 7)   p_num = (parseInt($("#fp-pos-current").text()) + 1).toString();
    else if(idx == 8)   p_num = 'Last';

    reload_fs_pagination(p_num);
}

function reload_fs_pagination(p_num){

    $.get('api/get_fs_list/?page='+p_num, function(data) {
        // Load fs_list
        fs_list = data['fs_list'];
        
        output='';
        for(i=0;i<fs_list.length;i++)
        {
            output+= '<tr>';
            output+= '<td>' + (i+1).toString() + '</td>';
            output+= '<td> <a class="uni_text_black font-weight-bold" href="#' + fs_list[i]['id'] + '" data-toggle="modal" data-target="#detail_fs_project" onclick="reload_fs_versions('+fs_list[i]['id']+')">' + fs_list[i]['name'] + ' </a> </td>';

            output+= '<td>' + fs_list[i]['updated_at'] + '</td>';
            output+= '<td>' + fs_list[i]['updated_by'] + '</td>';

            if(fs_list[i]['current_flag'])
                output+= '<td>' + '<i class="m_text_399b54 las la-check"></i>' + '</td>';
            else
                output+= '<td>' + '' + '</td>';

                output+= '<td class="text-left"> <a class="uni_text_6d30ab" href="#' + fs_list[i]['id'] + '" data-toggle="modal" data-target="#detail_fs_project" style="text-decoration:underline;" onclick="reload_fs_versions('+fs_list[i]['id']+')">' + fs_list[i]['version_number'] + ' </a> </td>';

            output+= '<td><img fs-id="'+fs_list[i]['id']+'" class="excel" src="/static/img/excel.svg"></td>';

            output+= '</tr>';
        }

        $('#fs-list').html(output);


        // Pagination
        pos_current = parseInt(data['fp-pos-current']);


        if(pos_current>=2)
            if($("#fp-pos-l1").css('display') == 'none')
                $("#fp-pos-l1").show();

        if(pos_current>=3)
            if($("#fp-pos-l2").css('display') == 'none')
                $("#fp-pos-l2").show();

        if(pos_current>=4)
        {
            if($("#fp-pos-3d-1").css('display') == 'none')
                $("#fp-pos-3d-1").show();
        }
        else
            $("#fp-pos-3d-1").hide();

        if(pos_current>=2)
        {
            if($("#fp-pos-first").css('display') == 'none')
                $("#fp-pos-first").show();

            if($("#fp-pos-prev").css('display') == 'none')
                $("#fp-pos-prev").show();
        }
        else
        {
            if(pos_current==1)
            {
                $("#fp-pos-first").hide();
                $("#fp-pos-prev").hide();
            }
        }

        if(pos_current<parseInt(data['fp-pos-last'])-2)
            $("#fp-pos-3d-2").show();
        else
            $("#fp-pos-3d-2").hide();

        $("#fp-pos-current").html(data['fp-pos-current']);
        $("#fp-pos-l2").html(data['fp-pos-l2']);
        $("#fp-pos-l1").html(data['fp-pos-l1']);
        $("#fp-pos-r2").html(data['fp-pos-r2']);
        $("#fp-pos-r1").html(data['fp-pos-r1']);
    });
}


$("body").on("click",".excel", function(){
    fs_id = $(this).attr('fs-id');
    
    $.get('api/download/?fs_id='+fs_id, function(data){
        window.open(data, '_self');
    });
})