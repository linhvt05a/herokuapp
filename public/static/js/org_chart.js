/**Workflow Start---------------------------------------------------------------------------*/

/** Label Null

 label: {
    position: "",
    vn: "",
    en: "",
    link:'#',
    type:'manager' // dù null hay có data cũng phải để type nha
},

 */


function span(items) {
    var type = items.type, position = items.position, vn = items.vn, en = items.en, link = items.link, result, span;
    if (position || vn || en) {
        var positionHtml = "<i class='position'>" + position + "</i>";
        var vnHtml = "<i class='vn'>" + vn + "</i>";
        var enHtml = "<i class='en'>" + en + "</i>";
        var linkHtml = "<a class='link' href=" + link + "></a>";
        result = linkHtml + vnHtml + enHtml + positionHtml;
    }

    if (result) {
        span = "<p class='item'><span class='unit'>" + result + "</span></p>"
    } else {
        span = "<p class='item none'><span class='unit null_" + type + "'></span></p>"
    }

    return span;
}

function itemArray() {
    if (data_org.deputy_general_manager) {
        deputy_general_manager = data_org.deputy_general_manager

        var result = "",
            htmlDgm,
            htmlManager,
            dgm = deputy_general_manager;

        dgm.forEach(v1 => {
            var htmlBlock = [];
            result += "<li>";
            htmlDgm = "<div class='dgm'>" + span(v1.label) + "</div>";
            if (v1.manager) {
                htmlManager = "<div class='manager'>" + span(v1.manager.label) + "</div>";
                if (v1.manager.block) {
                    v1.manager.block.forEach(v2 => {
                        htmlBlock += span(v2.label);
                    });
                }
            }
            block = '';
            if (v1.manager.block.length > 0)
                block = "<ul class='block'><li>" + htmlBlock + "<li></ul>";
            result += "<div class='dgm_manager'>" + htmlDgm + htmlManager + "</div>" + block + "</li>";
        });

        return result;
    } else {
        return ''
    }
}

$(window).ready(function () {

    if (data_json) {
        $(".js-bom").append(itemArray());
        $(".master").html(span(data_org.master.label));
        $(".assistant").html(span(data_org.assistant.label));
        $(".head_bom").html(span(data_org.bom.label));

        $('.null_manager').closest('.manager').addClass('null');
        $('.null_dgm').closest('.dgm').addClass('null');


        $('.wrap_bom .item').each(function () {
            if ($(this)[0].className == "item none") {
                $(this)[0].parentElement.closest('li').className = 'li-none';
                $(this)[0].parentElement.closest('li').className = 'li-none';
            }
        })

        $('.wrap_bom .li-none').each(function () {
            if ($(this)[0].children[0].firstElementChild.className == 'dgm null'
                && $(this)[0].children[0].lastElementChild.className == 'manager null') {
                $(this)[0].children[0].className = 'dgm_manager null';
            }
        })
    }
});

/**Workflow End---------------------------------------------------------------------------*/
