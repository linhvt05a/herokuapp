function reload_project_list(idx, province_id, model_type, status){
    if(idx==0)          p_num = '1';
    else if(idx == 1)   p_num = (parseInt($("#pp-pos-current").text()) - 1).toString();
    else if(idx == 2)   p_num = $("#pp-pos-l2").text();
    else if(idx == 3)   p_num = $("#pp-pos-l1").text();
    else if(idx == 4)   p_num = $("#pp-pos-current").text();
    else if(idx == 5)   p_num = $("#pp-pos-r1").text();
    else if(idx == 6)   p_num = $("#pp-pos-r2").text();
    else if(idx == 7)   p_num = (parseInt($("#pp-pos-current").text()) + 1).toString();
    else if(idx == 8)   p_num = 'Last';

    reload_project_pagination(p_num, province_id, model_type, status);
}

function reload_project_pagination(p_num, province_id, model_type, status){
    
    $.get('api/get_project_list/?page='+p_num+'&province_id='+province_id+'&model_type='+model_type+'&status='+ status, function(data) {
        // Load project_list
        project_list = data['project_list'];

        output='';
        for(i=0;i<project_list.length;i++)
        {
            output+=    '<tr  ' +
                        'data-id="' + project_list[i]['id']+ '" ' +
                        'data-lat="' + project_list[i]['lat']+ '" ' +
                        'data-lon="' + project_list[i]['lon']+ '" ' +
                        'data-irr="' + project_list[i]['irr']+ '" ' +
                        'data-npv="' + project_list[i]['npv']+ '" ' +
                        'data-name="' + project_list[i]['name']+ '" ' +
                        'data-address="' + project_list[i]['address']+ '" ' +
                        'data-total-area="' + project_list[i]['total_area']+ '" ' +
                        'data-investor="' + project_list[i]['primary_investor']+ '" ' +
                        '>'
                        




            output+= '<td>' + project_list[i]['id'] + '</td>';
            output+= '<td class="uni_text_black font-weight-bold"><a href="project/' + project_list[i]['id'] + '/" >' + project_list[i]['name'] + '</a> </td>';

            if(project_list[i]['status']==1)
                output+= '<td class="cl-low">New</td>';
            else if(project_list[i]['status']==2)
                output+= '<td class="cl-progress">Ongoing</td>';
            else if(project_list[i]['status']==3)
                output+= '<td class="cl-stop">Finished</td>';

            output+= '<td>' + project_list[i]['updated_at'] + '</td>';
            output+= '<td>' + project_list[i]['updated_by'] + '</td>';
            output+= '<td class="text-center"> <a class="uni_text_6d30ab" href="project/' + project_list[i]['id'] + '/" style="text-decoration: underline;"> View </a> </td>';
            // output+= '<td>' + project_list[i]['fs_id'] + '</td>';
            output+= '</tr>';
        }
        $('#project-list').html(output);
        

        // Pagination
        pos_current = parseInt(data['pp-pos-current']);


        if(pos_current>=2)
            if($("#pp-pos-l1").css('display') == 'none')
                $("#pp-pos-l1").show();

        if(pos_current>=3)
            if($("#pp-pos-l2").css('display') == 'none')
                $("#pp-pos-l2").show();

        if(pos_current>=4)
        {
            if($("#pp-pos-3d-1").css('display') == 'none')
                $("#pp-pos-3d-1").show();
        }
        else
            $("#pp-pos-3d-1").hide();

        if(pos_current>=2)
        {
            if($("#pp-pos-first").css('display') == 'none')
                $("#pp-pos-first").show();

            if($("#pp-pos-prev").css('display') == 'none')
                $("#pp-pos-prev").show();
        }
        else
        {
            if(pos_current==1)
            {
                $("#pp-pos-first").hide();
                $("#pp-pos-prev").hide();
            }
        }

        if(pos_current<parseInt(data['pp-pos-last'])-2)
            $("#pp-pos-3d-2").show();
        else
            $("#pp-pos-3d-2").hide();

        $("#pp-pos-current").html(data['pp-pos-current']);
        $("#pp-pos-l2").html(data['pp-pos-l2']);
        $("#pp-pos-l1").html(data['pp-pos-l1']);
        $("#pp-pos-r2").html(data['pp-pos-r2']);
        $("#pp-pos-r1").html(data['pp-pos-r1']);
    });
}


