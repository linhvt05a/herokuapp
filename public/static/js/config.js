$(document).ready(function () {

    //////
    //START DETECT EVENT
    /////


    /*Detect when click on tab human source*/
    $(document).on("click", ".human_resource_tab", function (ele) {
        callAjaxCollectHumanResource(ele);
    });

    /*Detect when click on tab*/
    $(document).on("click", ".config_tab", function (ele) {
        activeDiv(ele)
        callAjaxCollectCollection(ele);
    });


    //////
    //END DETECT EVENT
    /////

    //Function active div
    function activeDiv(ele) {
        $(ele.currentTarget).find('.active').removeClass('active');
        $(ele.target).addClass('active')
    }

    ///////
    //START FUNCTION
    //////
    /*Ajax call function get data config*/
    function callAjaxCollectHumanResource(ele) {
        ele.stopPropagation();
        var url;
        var name;
        if (ele) {
            url = ele.target.parentNode.getAttribute('data-url');
            name = ele.target.parentNode.getAttribute('value');
            if (!url) {
                return;
            }
            if (!name) {
                name = 1;
                // return;
            }
        } else {
            // url = {% url 'human_resource_view' %};
            url = $("input[name=url-default]").attr('data-url');
            name = 1;
        }
        $.ajax({
            type: 'get',
            url: url,
            data: {
                'name': name,
            },
            success: function (data) {
                $('.config-data').fadeOut(1);
                $('.config-data').html(data).fadeIn('slow')
            },
        });
    }

    /*Ajax call function get data config*/
    function callAjaxCollectCollection(ele) {
        var url;
        var name;
        if (ele) {
            url = ele.target.getAttribute('data-url');
            name = ele.target.getAttribute('value');
            if (!url) {
                return;
            }
            if (!name) {
                name = 1;
                // return;
            }
        } else {
            // url = {% url 'human_resource_view' %};
            url = $("input[name=url-default]").attr('data-url');
            name = 1;
        }
        $.ajax({
            type: 'get',
            url: url,
            data: {
                'name': name,
            },
            success: function (data) {
                $('.config-data').fadeOut(1);
                $('.config-data').html(data).fadeIn('slow')
            },
        });
    }

    ///////
    //END FUNCTION
    //////

    //AUTO CALL
    callAjaxCollectCollection();
});