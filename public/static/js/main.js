

$(document).on('click',function(){
    $('.customize-input').css('width','120px');
    $(".main-wrapper").removeClass("show-sidebar");


})

window.setTimeout(function() {
    $(".alert").fadeTo(1000, 0).slideUp(1000, function(){
        $(this).alert('close');
    });
}, 3000);

// left sidebar
$('.sidebar-item .active').parent().parent().parent('li').find('a:first').addClass('active');
$('.sidebar-item .active').parent().parent().parent('li').addClass('active');

$('.sidebar-link').on('click', function (e) {
    e.stopPropagation();
    $('.sidebar-item').removeClass("active");
    var sidebar_item = $(this).closest('.sidebar-item');

    if (sidebar_item.hasClass("active")) {
        sidebar_item.removeClass("active");
    }
    else {
        sidebar_item.addClass("active");
    }
})

$(".left-sidebar").hover(function() {
    $(".navbar-header").addClass("expand-logo");
}, function() {
    $(".navbar-header").removeClass("expand-logo");
}),


$(".nav-toggler").on("click", function(e) {
    e.stopPropagation();
    $(".main-wrapper").toggleClass("show-sidebar");
}),
$('.nav-more').click(function(){
    $('.navbar-collapse').toggleClass( "show" );
}),
$(".nav-lock").on("click", function() {
    $("body").toggleClass("lock-nav"),
    $(".nav-lock i").toggleClass("mdi-toggle-switch-off"),
    $("body, .page-wrapper").trigger("resize")
}),
$(".search-box a, .search-box .app-search .srh-btn").on("click", function() {
    $(".app-search").toggle(200),
    $(".app-search input").focus()
}),


// toggle 
$(".sidebartoggler").on("click", function() {
    $(".main-wrapper").toggleClass("mini-sidebar");
});


// search-bar 
$('.search-bar input').on('click', function(e){
    e.stopPropagation();
    $(this).closest('.customize-input').css('width','200px');
})

// slide bar hidden when scroll
function hideSidebarWhenScroll(){
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 1400 && windowWidth > 768){
            $(".main-wrapper").addClass('mini-sidebar')
        }else{
            $(".main-wrapper").removeClass('mini-sidebar')
        }
    })
}

hideSidebarWhenScroll();


//slider
$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
    .on('init', function (event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        infinite: false,
    });

$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});


$(document.body).on("change",".m_select_change",function(){
    // Change style for select
    this.dataset.chosen = this.value;

     // Change  style for select 2
    $(this).closest('.form-group').find('.select2-selection__rendered').css({
        'font-style': 'normal',
        'font-weight': '400',
        'color': '#000'
    });
});


 $(document).ready(function () {

    /* add color : black in a table */
    $('table td:nth-child(2) a').css({
        'text-decoration':'underline',
        'color':'#000',
        'font-weight':'500'
    })
});

