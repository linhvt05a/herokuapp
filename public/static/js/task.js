$(document).ready(function () {

    $('._search').on('click', function (ele) {
        $('#frm_paginate').submit();
    });

    function setInputFilter(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
            textbox.addEventListener(event, function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                } else {
                    this.value = "";
                }
            });
        });
    }

    setInputFilter(document.getElementById("progress"), function (value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 100);
    });

});

$('tbody tr').click(function(){
    var dataLevel  = $(this).attr('data-level'), dataParent  = $(this).attr('data-parent');
    console.log("giang dataLevel---",dataLevel)
    console.log("giang dataParent---",dataParent)
    if($(this).hasClass('active')){
        if($(this).hasClass('level-parent')){
            $("" + '.'+ dataLevel +"").removeClass('show');
            $('tbody tr[data-parent="'+ dataParent +'"]').removeClass('active');
        }
        if($(this).hasClass('level-center')){
            $(this).removeClass('active');
            $("" + '.'+ dataLevel +"").removeClass('show');
        }
    }else{
        $('tbody tr[data-parent="'+ dataLevel +'"]').addClass('show');
        $(this).addClass('active');
    }
})