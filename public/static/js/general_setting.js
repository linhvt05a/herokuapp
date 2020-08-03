$(document).ready(function () {

    //////
    //START DETECT EVENT
    /////

    /*Detect when click on _save*/
    $("._save").on("click", function (ele) {
        collectDataState(ele)
    });


    //////
    //END DETECT EVENT
    /////

    ///////
    //START FUNCTION
    //////

    /*Function Collect Data States*/
    function collectDataState(ele) {
        ele.stopPropagation();
        var url;
        var set_password_downloaded_document;
        var lang;
        var allow_state_bypass;
        var gmt_timezone;
        if (ele) {
            url = ele.currentTarget.getAttribute('data-url');
            var set_pass = $('input[name="set_pass_download_document"]:checked');
            if (set_pass) {
                set_password_downloaded_document = true
            }
            lang = $('select[name=lang]').val();
            var allow_state = $('input[name="allow_state"]:checked');
            if (allow_state) {
                allow_state_bypass = true
            }
            gmt_timezone = $('select[name=timezone_offset]').val();
            if (!url) {
                return;
            }
        } else {
            return
        }
        $.ajax({
            type: 'get',
            url: url,
            data: {
                'set_password_downloaded_document': set_password_downloaded_document,
                'lang': lang,
                'allow_state_bypass': allow_state_bypass,
                'gmt_timezone': gmt_timezone,
            },
            success: function (data) {
                if(data.data == 'ok'){
                  alert('Đã cập nhật thành công')
                }else {
                    alert('Cập nhật không thành công')
                }
            },
            error: function () {
                alert('Có lỗi trong quá trình cập nhật!')
            }
        });
    }
    ///////
    //END FUNCTION
    //////

    //AUTO CALL
    //This is all function auto call
});