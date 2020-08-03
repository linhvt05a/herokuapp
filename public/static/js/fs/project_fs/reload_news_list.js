function reload_news_list(idx){
    if(idx==0)          p_num = '1';
    else if(idx == 1)   p_num = (parseInt($("#mp-pos-current").text()) - 1).toString();
    else if(idx == 2)   p_num = $("#mp-pos-l2").text();
    else if(idx == 3)   p_num = $("#mp-pos-l1").text();
    else if(idx == 4)   p_num = $("#mp-pos-current").text();
    else if(idx == 5)   p_num = $("#mp-pos-r1").text();
    else if(idx == 6)   p_num = $("#mp-pos-r2").text();
    else if(idx == 7)   p_num = (parseInt($("#mp-pos-current").text()) + 1).toString();
    else if(idx == 8)   p_num = 'Last';

    reload_news_pagination(p_num);
}

function reload_news_pagination(p_num){
    
    $.get('api/get_news_list/?page='+p_num, function(data) {
        // Load news_list
        news_list = data['news_list'];

        output='';
        for(i=0;i<news_list.length;i++)
        {
            /*output+= '<div class="row pl-1"><p><i class="fa fa-circle-o pr-1"></i><span class="cl-color">';

            //output+= '<td class="cl-title"><a href="#' + news_list[i]['id'] + '/" >' + news_list[i]['name'] + '</a> </td>';
            output += news_list[i]['title'];
            output += '</span></p><p class="font-italic" style="margin-left: 17px;">Thêm bởi <span class="cl-color">';
            output += news_list[i]['author'];
            output += '</span> cách đây ';
            output += news_list[i]['posted_date'];
            output+= ' ngày</p></div>';*/

            output+= '<div class="m_news--heading"> <div class="title"> <span class="text">';

            //output+= '<td class="cl-title"><a href="#' + news_list[i]['id'] + '/" >' + news_list[i]['name'] + '</a> </td>';
            output += news_list[i]['title'];
            output += '</span></div><p class="created_by">Thêm bởi <span class="hightlight">';
            output += news_list[i]['author'];
            output += '</span> cách đây <span class="hightlight">';
            output += news_list[i]['posted_date'];
            output+= ' ngày</span></p></div>';
        }

        $('#news-list').html(output);
        

        // Pagination
        pos_current = parseInt(data['mp-pos-current']);


        if(pos_current>=2)
            if($("#mp-pos-l1").css('display') == 'none')
                $("#mp-pos-l1").show();

        if(pos_current>=3)
            if($("#mp-pos-l2").css('display') == 'none')
                $("#mp-pos-l2").show();

        if(pos_current>=4)
        {
            if($("#mp-pos-3d-1").css('display') == 'none')
                $("#mp-pos-3d-1").show();
        }
        else
            $("#mp-pos-3d-1").hide();

        if(pos_current>=2)
        {
            if($("#mp-pos-first").css('display') == 'none')
                $("#mp-pos-first").show();

            if($("#mp-pos-prev").css('display') == 'none')
                $("#mp-pos-prev").show();
        }
        else
        {
            if(pos_current==1)
            {
                $("#mp-pos-first").hide();
                $("#mp-pos-prev").hide();
            }
        }

        if(pos_current<parseInt(data['mp-pos-last'])-2)
            $("#mp-pos-3d-2").show();
        else
            $("#mp-pos-3d-2").hide();

        $("#mp-pos-current").html(data['mp-pos-current']);
        $("#mp-pos-l2").html(data['mp-pos-l2']);
        $("#mp-pos-l1").html(data['mp-pos-l1']);
        $("#mp-pos-r2").html(data['mp-pos-r2']);
        $("#mp-pos-r1").html(data['mp-pos-r1']);
    });
}