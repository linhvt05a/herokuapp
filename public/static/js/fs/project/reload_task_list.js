function reload_task_list(idx){
    if(idx==0)          p_num = '1';
    else if(idx == 1)   p_num = (parseInt($("#tp-pos-current").text()) - 1).toString();
    else if(idx == 2)   p_num = $("#tp-pos-l2").text();
    else if(idx == 3)   p_num = $("#tp-pos-l1").text();
    else if(idx == 4)   p_num = $("#tp-pos-current").text();
    else if(idx == 5)   p_num = $("#tp-pos-r1").text();
    else if(idx == 6)   p_num = $("#tp-pos-r2").text();
    else if(idx == 7)   p_num = (parseInt($("#tp-pos-current").text()) + 1).toString();
    else if(idx == 8)   p_num = 'Last';

    reload_task_pagination(p_num);
}

function reload_task_pagination(p_num){
    $.get('api/get_task_list/?page='+p_num, function(data) {
        // Load project_list
        task_list = data['task_list'];

        output='';
        for(i=0;i<task_list.length;i++)
        {
            output+= '<tr>';
            output+= '<td>' + task_list[i]['id'] + '</td>';
            output+= '<td class="cl-title"> <a class="uni_text_black font-weight-bold" href="/backend/legal/project/' + task_list[i]['project_id'] + '/task/' + task_list[i]['id'] + '/' + '">' + task_list[i]['name'] + '</a></td>';
            output+= '<td>' + task_list[i]['project_name'] + '</td>';

            if(task_list[i]['priority_type']=="Immediately")
                output+= '<td class="cl-hight">';
            else if(task_list[i]['priority_type']=="High")
                output+= '<td class="cl-hight">';
            else if(task_list[i]['priority_type']=="Normal")
                output+= '<td class="cl-avg">';
            else if(task_list[i]['priority_type']=="Low")
                output+= '<td class="cl-low">';      
            else 
                output+= '<td>';     
            
            output+= task_list[i]['priority_type'] + '</td>';

            output+= '<td>' + task_list[i]['owner'] + '</td>';
            output+= '<td>' + task_list[i]['assigner'] + '</td>';
            output+= '<td>' + task_list[i]['estimated_date_to'] + '</td>';
            output+= '<td class="text-center"> <a class="uni_text_6d30ab" href="/backend/legal/project/' + task_list[i]['project_id'] + '/task/' + task_list[i]['id'] + '/' + '" style="text-decoration: underline;"> View </a> </td>';
            output+= '</tr>';
            
        }
        $('#task-list').html(output);
        

        // Pagination
        pos_current = parseInt(data['tp-pos-current']);


        if(pos_current>=2)
            if($("#tp-pos-l1").css('display') == 'none')
                $("#tp-pos-l1").show();

        if(pos_current>=3)
            if($("#tp-pos-l2").css('display') == 'none')
                $("#tp-pos-l2").show();

        if(pos_current>=4)
        {
            if($("#tp-pos-3d-1").css('display') == 'none')
                $("#tp-pos-3d-1").show();
        }
        else
            $("#tp-pos-3d-1").hide();

        if(pos_current>=2)
        {
            if($("#tp-pos-first").css('display') == 'none')
                $("#tp-pos-first").show();

            if($("#tp-pos-prev").css('display') == 'none')
                $("#tp-pos-prev").show();
        }
        else
        {
            if(pos_current==1)
            {
                $("#tp-pos-first").hide();
                $("#tp-pos-prev").hide();
            }
        }

        if(pos_current<parseInt(data['tp-pos-last'])-2)
            $("#tp-pos-3d-2").show();
        else
            $("#tp-pos-3d-2").hide();

        $("#tp-pos-current").html(data['tp-pos-current']);
        $("#tp-pos-l2").html(data['tp-pos-l2']);
        $("#tp-pos-l1").html(data['tp-pos-l1']);
        $("#tp-pos-r2").html(data['tp-pos-r2']);
        $("#tp-pos-r1").html(data['tp-pos-r1']);
    });
}