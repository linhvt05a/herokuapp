$(window).load(function () {
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
    });
});

function horzScrollbarDetect() {

    var $scrollable = $('.scrollable')
    var $innerDiv = $('.scrollable > div');

    if ($innerDiv.outerWidth() < $innerDiv.get(0).scrollWidth) {

        $scrollable.addClass('is-scrollable');
        console.log('Scrollbar, WOOT!')

    } else {

        $scrollable.removeClass('is-scrollable');
        console.log('There is no scrollbar, only Zuul');

    }

}

$(document).ready(function () {

    horzScrollbarDetect();
    console.log('document. boom. ready.')

});

$(window).resize(function () {

    horzScrollbarDetect();
    console.log('window resized');

});

