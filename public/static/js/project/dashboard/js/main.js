

$(document).on('click', function () {
    $('.customize-input').css('width', '120px');
    $(".main-wrapper").removeClass("show-sidebar");
})

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

$(".left-sidebar").hover(function () {
    $(".navbar-header").addClass("expand-logo");
}, function () {
    $(".navbar-header").removeClass("expand-logo");
}),


$(".nav-toggler").on("click", function (e) {
    e.stopPropagation();
    $(".main-wrapper").toggleClass("show-sidebar");
}),
$('.nav-more').click(function () {
    $('.navbar-collapse').toggleClass("show");
}),
$(".nav-lock").on("click", function () {
    $("body").toggleClass("lock-nav"),
        $(".nav-lock i").toggleClass("mdi-toggle-switch-off"),
        $("body, .page-wrapper").trigger("resize")
}),
$(".search-box a, .search-box .app-search .srh-btn").on("click", function () {
    $(".app-search").toggle(200),
        $(".app-search input").focus()
}),


// toggle
$(".sidebartoggler").on("click", function () {
    $(".main-wrapper").toggleClass("mini-sidebar");
});


// search-bar
$('.search-bar input').on('click', function (e) {
    e.stopPropagation();
    $(this).closest('.customize-input').css('width', '200px');
})

// slide bar hidden when scroll
function hideSidebarWhenScroll() {
    $(window).resize(function () {
        var windowWidth = $(window).width();
        if (windowWidth < 1400 && windowWidth > 768) {
            $(".main-wrapper").addClass('mini-sidebar')
        } else {
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


function load_investor_detail(project_investor){
    var _data = JSON.parse(project_investor)
    total_charter_capital =  Number((parseInt(_data.investor_charter_capital)).toFixed(1)).toLocaleString()
    var unit = _data.investor_currency_type
    let data = load_data_chart(_data);
    $('#investor_add_tab_shareholder-total-investor-chart').html('<b>' + total_charter_capital + ' ' + unit + '</b>')

    load_chart(data, '#investor_chart');
    load_data_table(data, unit, '#investor_add_tab_shareholder-table-chart');
}


function load_chart(data, id_chart) {
    $(id_chart).html('')

    chart_result = ''
    if (data.length <= 5) {
        for (i = 0; i < data.length; i++) {
            chart_result += '<div class="m_progress-bar uni_bg_' + (i + 1) + '" style="width:' + data[i].percent + '%;"><span class="m_progress-number">' + data[i].percent + '%</span></div>'
        }

    } else {
        for (i = 0; i < 5; i++) {
            chart_result += '<div class="m_progress-bar uni_bg_' + (i + 1) + '" style="width:' + data[i].percent + '%;"><span class="m_progress-number">' + data[i].percent + '%</span></div>'
        }
    }
    $(id_chart).append(chart_result)
}
function load_data_chart(data) {
    var array = [];
        for (i = 0; i < data.shareholder_data.length; i++) {
            name = data.shareholder_data[i].name
            ratio = data.shareholder_data[i].capital_ratio
            money = data.shareholder_data[i].capital

            array.push({
                full_name: name,
                capital: money,
                percent: ratio
            });

        }

    // validate 100%
    calc_total_percent = 0
    old_total_percent = 0
    calc_total_capital = 0
    for (i = 0; i < array.length; i++) {
        calc_total_percent += array[i].percent
        calc_total_capital += parseFloat(array[i].capital)
        if (calc_total_percent > 100) {
            array[i].percent = ((100 - old_total_percent) >= 0) ? (100 - old_total_percent) : 0
        }
        old_total_percent = calc_total_percent

    }
    if (calc_total_percent < 100) {
        array.push({
            full_name: "Chủ đầu tư khác",
            capital: data.investor_charter_capital-calc_total_capital,
            percent: 100 - calc_total_percent
        });
    }

    return array;
}
function load_data_table(data, unit, id_table_chart) {
    $(id_table_chart).html("");

    chart_table_result = ''
    if (data.length <= 5) {
        for (i = 0; i < data.length; i++) {
            chart_table_result += '<tr>' + '<td class="name"><span class="circle uni_bg_' + (i + 1) + '"></span>' + data[i].full_name + '</td>\n' + '<td class="money">' +  Number((parseInt( data[i].capital)).toFixed(1)).toLocaleString() + ' ' + unit + '</td>\n' + '<td>' + data[i].percent + '%</td></tr>'
        }

    } else {
        for (i = 0; i < 5; i++) {
            chart_table_result += '<tr>' + '<td class="name"><span class="circle uni_bg_' + (i + 1) + '"></span>' + data[i].full_name + '</td>\n' + '<td class="money">' + Number((parseInt( data[i].capital)).toFixed(1)).toLocaleString() + ' ' + unit + '</td>\n' + '<td>' + data[i].percent + '%</td></tr>'
        }
    }
    $(id_table_chart).append(chart_table_result)
}