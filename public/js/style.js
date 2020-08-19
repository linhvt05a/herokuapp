/*for frontend==============================================================*/

$(window).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $(".js-datepicker").datepicker();

    /*set height for main */
    var headerHeight = $(".header").height();
    $("main").css("padding-top", headerHeight);

    /*select2*/
    changeSelect();
    select2OnModalTab();

    /*general*/
    inputRadio();
    inputCheckbox();
    scrollToTop();

    /*home*/
    accordionCollapse();
    onClickSearchOptionToggle();
    selectMapHome();

    /*Introduce*/
    leaderShip();
    partner();
    introduceOverview();

    /*News*/
    hot_news_slider();
    news_slider();

    /*click to forgot pwd */
    forgotPassword();

    /*menu and sidebar mobile*/
    openRegisterSidebarMb();
    hideMenuMobileOnClickBg();
    hideMenuMobileOnClickIconClose();
    mobileToggle();

    /*direction buy product*/
    direction_slider();
    onClick_show_step();

    onChangeSelectSearchOption();
    chooseStatusProject();
    sliderRange();

    /*chat*/
    chatFunction();

    /*click toggle juridical */
    // juridicalTabs();

    /*user account*/
    onUploadImagesUserAccount();
    changePwdUserAccount();
    uacReplyCmt();
    salesCollapse();
    feedbackTab();

    sliderApartmentDetail();

    loginOnModal();
});

$(window).resize(function () {
    /*select2*/
    changeSelect();

    hot_news_slider();
    var headerHeight = $(".header").height();
    $("main").css("padding-top", headerHeight);

    /*load emoji chat*/
    loadEmoji();
    /*onclick step slider */
    $(".direction_product--slider").slick("setPosition");
});

/*seles collapse*/
var salesCollapse = function () {
    $(".sales_collapse .icon_collapse").click(function () {
        if ($(this).closest(".sales_collapse").hasClass("only")) {
            $(".sales_collapse .card").removeClass("show");
            $(".sales_collapse .icon_collapse").removeClass("show");
        }

        if ($(this).closest(".card").hasClass("show")) {
            $(this).closest(".card").removeClass("show");
        } else {
            $(this).closest(".card").addClass("show");
        }
    });
};

/*select2*/
function changeSelect() {
    $(".js-select2").select2({
        width: "100%",
        placeholder: '"' + $(this).data("placeholder") + '"',
    });

    $(".form-group").each(function () {
        var formGroup = $(this),
            formgroupWidth = formGroup.outerWidth();
        formGroup.find(".select2-container").css("width", formgroupWidth);
    });
}

/*select2 on modal and tabs*/
var select2OnModalTab = function () {
    $(window).on("shown.bs.modal", function () {
        changeSelect();
        // $('.m_slider').resize();
        $(".m_slider").slick("setPosition");
        $(".modal-dialog").addClass("open");
    });
    $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
        changeSelect();
    });
};

var loginOnModal = function () {
    $slideshow = $(".save_product--modal-signin")
        .not(".slick-initialized")
        .slick({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        });

    $(".save_product--modal .forgotPassword").click(function () {
        $slideshow.slick("slickNext");
    });
    $(".save_product--modal .backToSignIn").click(function () {
        $slideshow.slick("slickPrev");
    });
};

/*input radio*/
var inputRadio = function () {
    $('.checkbox-inline[type="radio"]').change(function () {
        var name = $(this).find("input").attr("name");

        $('input[name="' + name + '"]')
            .closest('.checkbox-inline[type="radio"]')
            .removeClass("active");
        $('input[name="' + name + '"]').val(0);

        if ($(this).find("input").is(":checked")) {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this).find("input").val(0);
            } else {
                $(this).addClass("active");
                $(this).find("input").val(1);
            }
        }
    });
};

/*input checkbox*/
var inputCheckbox = function () {
    $('.checkbox-inline[type="checkbox"]').change(function () {
        if ($(this).find("input").is(":checked")) {
            $(this).find("input").val(0);
        } else {
            $(this).find("input").val(1);
        }
    });
};

/*user account reply cmt*/
var uacReplyCmt = function () {
    $(".user-acc__feedback .cmt").click(function () {
        var $this = $(this);
        $this.toggleClass("active");
        $this.closest(".box").find(".reply__input").toggleClass("d-block");
    });
};

/*make question on tab Feedback*/
var feedbackTab = function () {
    var listImagesSelectedHtml = [],
        allDataPull = [],
        fileOrigin = "";
    /*load images list */
    fn_UploadImagesMakeQuestion = function (file, position) {
        var resultImage, html, imageUrl;
        var reader = new FileReader();
        reader.onload = function (e) {
            resultImage = e.target.result;
            var blob = fn_Base64ToBlob(resultImage);
            imageUrl = URL.createObjectURL(blob);

            html =
                '<div class="att att_img">' +
                '<span class="image"><img src="' +
                imageUrl +
                '"></span>' +
                '<span data-position="' +
                position +
                '" class="close fas fa-times-circle"></span>' +
                "</div>";

            listImagesSelectedHtml.push(html);
            $(".make_question--content .files_result").html(
                listImagesSelectedHtml
            );
        };
        reader.readAsDataURL(file);
    };

    // $('.files_result .att').remove();
    $(".make_question--content .file").on("change", function () {
        fileOrigin = $(this);
        // console.log(fileOrigin);

        var html;
        if (this.files) {
            for (let i = 0; i < this.files.length; i++) {
                allDataPull.push(this.files[i]);

                var file = this.files[i];
                var typeArray = file.name.split(".");
                var type = typeArray[typeArray.length - 1].toLowerCase();
                var name = file.name;

                if (
                    file.type == "image/x-png" ||
                    file.type == "image/png" ||
                    file.type == "image/gif" ||
                    file.type == "image/jpeg"
                ) {
                    fn_UploadImagesMakeQuestion(file, i);
                } else if (file.type == "video/mp4") {
                    // data fake
                    name =
                        "https://cloudapi.minerva.vn/cdn/minerva-chat/workflow/workflowqc/0727cbd185a4e587e6d715_video_2020-03-06_10-33-07.mp4";

                    html =
                        '<div class="att">' +
                        '<figure class="img fas fa-file-alt"></figure>' +
                        '<span class="text">' +
                        name +
                        "</span>" +
                        '<span class="close fas fa-times-circle"></span>' +
                        "</div>";
                } else {
                    html =
                        '<div class="att">' +
                        '<figure class="img fas fa-file-alt"></figure>' +
                        '<span class="text">' +
                        name +
                        "</span>" +
                        '<span data-position="' +
                        i +
                        '" class="close fas fa-times-circle"></span>' +
                        "</div>";

                    listImagesSelectedHtml.push(html);
                    $(".make_question--content .files_result").html(
                        listImagesSelectedHtml
                    );
                }
            }

            // console.log(allDataPull)
        }
    });

    // delete
    var formData = new FormData();
    $(".make_question--content").on("click", ".close", function () {
        // alert(1)
        var position = $(this).data("position");
        console.log(position);

        $(this).closest(".att").remove();

        allDataPull.splice(allDataPull.indexOf(allDataPull[position - 1]), 1);
        console.log(allDataPull);

        // for (let index = 0; index < allDataPull.length; index++) {
        // 	const element = allDataPull[index];
        // 	fileOrigin[0].files = createFileList(element)
        // 	createFileList(element)
        // }
    });
};

/*UPLOAD AVATAR USER ACCOUNT*/
var changePwdUserAccount = function () {
    $(".text_changepwd").click(function () {
        $(".pwd_current").addClass("d-none");
        $(".pwd_new").removeClass("d-none");
        $(".pwd_new").addClass("d-flex");
    });

    $(".text_closepwd").click(function () {
        $(".pwd_current").removeClass("d-none");
        $(".pwd_new").addClass("d-none");
        $(".pwd_new").removeClass("d-flex");
    });
};
/*read url images input*/
fn_readURL = function (input, className) {
    console.log(input);
    className = "." + className + "";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(className).attr("src", e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
};
/*toBlob*/
fn_Base64ToBlob = function (dataURL) {
    var array, binary, i;
    binary = atob(dataURL.split(",")[1]);
    array = [];
    i = 0;
    while (i < binary.length) {
        array.push(binary.charCodeAt(i));
        i++;
    }
    return new Blob([new Uint8Array(array)], {
        type: dataURL.split(",")[0].split(":")[1].split(";")[0],
    });
};

/*load images list */
fn_UploadImagesUserInfo = function (file) {
    var resultImage, html, imageUrl;
    var reader = new FileReader();
    reader.onload = function (e) {
        $(".user-acc__info .no-data").addClass("d-none");
        $(".user-acc__info .has-data").removeClass("d-none");
        $(".user-acc__info .upload_again").removeClass("d-none");

        resultImage = e.target.result;
        var blob = fn_Base64ToBlob(resultImage);
        imageUrl = URL.createObjectURL(blob);

        $(".user-acc__info .uploaded_avatar").attr("src", imageUrl);
    };
    reader.readAsDataURL(file);
};
/*load images*/
onUploadImagesUserAccount = function () {
    $(".user-acc__info .upload").change(function () {
        console.log(33);
        if (this.files) {
            for (let i = 0; i < this.files.length; i++) {
                var file = this.files[i];
                fn_UploadImagesUserInfo(file);
            }
        } else {
            alert("No file is choose!");
        }
    });
};

/*END UPLOAD AVATAR USER ACCOUNT*/

$(".toTop").slideUp();
var lastScrollTop = 0;
$(window).scroll(function (event) {
    // header up/dowm
    var windowHeight = $(this).scrollTop();
    if (windowHeight > lastScrollTop) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
    lastScrollTop = windowHeight;

    // totop
    var headerHeight = $(".header").height();
    if (windowHeight > headerHeight) {
        $(".toTop").slideDown(400);
    } else {
        $(".toTop").slideUp(400);
    }
});

$(window).on("hidden.bs.dropdown", function () {
    $(".form_register").removeClass("d-none");
    $(".form_forgot").addClass("d-none");
});

/*totop*/
var scrollToTop = function () {
    $(".toTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
};

/*open register */
var openRegisterSidebarMb = function () {
    $(".header_register-mb .item-link").click(function () {
        $(".header_register-mb  .item-link").removeClass("active");
        $(".header_register-mb  .header_menu--child").removeClass("active");

        /*close all accordion*/
        $(".accordion-inner").removeClass("show");
        $(".accordion").removeClass("show");

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .closest(".header_register-mb")
                .find(".header_menu--child")
                .removeClass("active");
        } else {
            $(this).addClass("active");
            $(this)
                .closest(".header_register-mb")
                .find(".header_menu--child")
                .addClass("active");
        }
    });
};

/*choose signup/signin*/
var accordionCollapse = function () {
    $(".accordion-toggle").click(function () {
        var $this = $(this);
        $(".accordion-toggle").removeClass("active");

        if ($this.next().hasClass("show")) {
            $this.next().removeClass("show");
            $this.next().slideUp(350);
        } else {
            $this
                .parent()
                .parent()
                .find(".accordion-inner")
                .removeClass("show");
            $this.parent().parent().find(".accordion-inner").slideUp(350);
            $this.next().toggleClass("show");
            $this.addClass("active");
        }
    });
};

/*forgotPassword*/
var forgotPassword = function () {
    $(".forgotPassword").click(function (e) {
        e.preventDefault();
        if (
            $(this)
                .closest(".dropdown-menu")
                .find(".form_register")
                .hasClass("d-none")
        ) {
            $(this)
                .closest(".dropdown-menu")
                .find(".form_register")
                .removeClass("d-none");
            $(this)
                .closest(".dropdown-menu")
                .find(".form_forgot")
                .addClass("d-none");
        } else {
            $(this)
                .closest(".dropdown-menu")
                .find(".form_register")
                .addClass("d-none");
            $(this)
                .closest(".dropdown-menu")
                .find(".form_forgot")
                .removeClass("d-none");
        }
    });
};

/*selectMapHome*/
var selectMapHome = function () {
    $(".map_to").click(function (e) {
        e.preventDefault();
        var map = $(this).data("maptab");
        $(".map_origin").hide();
        $(".map_to").removeClass("active");
        $(".map_tab").removeClass("active");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("" + "." + map + "").removeClass("active");
        } else {
            $(this).addClass("active");
            $("" + "." + map + "").addClass("active");
        }
    });
};

var mobileToggle = function () {
    $(".mb_toggle").click(function () {
        // $(this).toggleClass('active');
        $(this).closest(".header").find(".header_menu").toggleClass("active");
        $(".modal-background").toggleClass("active");
    });
};

var hideMenuMobileOnClickIconClose = function () {
    $(".header_menu .icon-close").click(function () {
        // $('.mb_toggle').removeClass('active')
        $(".header_menu").removeClass("active");
        $(".header_menu .item-link").removeClass("active");
        $(".header_menu .header_menu--child").removeClass("active");
        $(".modal-background").removeClass("active");
    });
};

var hideMenuMobileOnClickBg = function () {
    $(".modal-background").click(function () {
        // $('.mb_toggle').removeClass('active')
        $(".header_menu").removeClass("active");
        $(".modal-background").removeClass("active");
    });
};

var onClickSearchOptionToggle = function () {
    $(".search_option-toggle").click(function () {
        var search_option = $(this).closest(".search_option");
        var search_option_header = $(this).closest(".search_option-header");

        if (search_option.hasClass("active")) {
            search_option.removeClass("active");
            search_option_header.removeClass("active");
        } else {
            search_option.addClass("active");
            search_option_header.addClass("active");
        }
    });
};

/*slider news */
var news_slider = function () {
    $(".js_news")
        .not(".slick-initialized")
        .slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                        arrows: true,
                        autoplay: true,
                        cssEase: "linear",
                        swipe: true,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        cssEase: "linear",
                        swipe: true,
                    },
                },
            ],
        });
};

/*slider introduce_slider*/
var introduceOverview = function () {
    $(".js_introduce_overview").not(".slick-initialized").slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    });
};

/*Slick - Introduce*/
var leaderShip = function () {
    $(".leadership")
        .not(".slick-initialized")
        .slick({
            arrows: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
};

/*Slick - Introduce*/
var partner = function () {
    $(".partner__slider")
        .not(".slick-initialized")
        .slick({
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            // autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
};

/*News detail*/
var hot_news_slider = function () {
    if ($(window).width() < 992) {
        var wrapper = $(".js_hot_news");
        if (!wrapper.hasClass("slick-initialized")) {
            wrapper.not(".slick-initialized").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                pauseOnDotsHover: true,
                rows: 2,
                autoplay: true,
            });
        }
    } else {
        if ($(".js_hot_news").hasClass("slick-initialized")) {
            $(".js_hot_news").slick("unslick");
        }
    }
};

/*Recruitment Detail*/
var search_position = function () {
    $(".search_recruitment").select2({
        placeholder: "Nhập vị trí ứng tuyển",
        allowClear: true,
    });
};

/*Direction buy product*/
var direction_slider = function () {
    $(".direction_product--slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        // autoplay:true,
        accessbility: true,
    });
    $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
        $(".direction_product--slider").slick("setPosition");
    });
};

var onClick_show_step = function () {
    $(".direction_product--mobile .step_item").click(function () {
        var parent = $(this).closest(".mobile_group").attr("data-parent");
        $(this).toggleClass("active");
        $(".direction_product--mobile .detail_slider-" + parent).toggleClass(
            "active"
        );
        $(".direction_product--slider").slick("setPosition");
    });
};

/*chat----------------------------*/
/*variable*/
var startChatOnline = $(".startChatOnline");
var startChat = $(".startChat");
var startConversation = $(".startConversation");
var sendInfo = $(".sendInfo");
var chatFiles = $(".chatFiles");
var chatEmoji = $(".chatEmoji");
var listEmoji = $(".listEmoji");
var aEmoji = $(".listEmoji span");
var chatBox = $(".chat--box");
var clickPhone = $(".clickPhone");
var chatOnline = $(".chatOnline");
var chatLabel = $(".chatLabel");
var footerSocial = $(".footer_social");
var closeChat = $(".close_chat");
var endChat = $(".end_chat");
var endChatAll = $(".end_chat_all");
var endChatBack = $(".end_chat_back");
var messageResult = "";

/*load emoji chat*/
function loadEmoji() {
    if ($(window).width() > 1024) {
        chatEmoji.mouseover(function (e) {
            listEmoji.addClass("active");
        });
        listEmoji.mouseleave(function (e) {
            listEmoji.removeClass("active");
        });
    } else {
        chatEmoji.click(function (e) {
            listEmoji.toggleClass("active");
        });
    }
}

var chatFunction = function () {
    /*onClick icon phone*/
    clickPhone.on("click", function (e) {
        e.stopPropagation();
        $(this).toggleClass("active");
    });

    /*Enable Emoji List*/
    loadEmoji();

    /*open chat*/
    var openChatFunc = function () {
        chatOnline.addClass("active");
        sendInfo.addClass("active");
        startChat.removeClass("active");
        footerSocial.addClass("active");
        endChat.removeClass("active");
    };

    /*close chat*/
    var closeChatFunc = function () {
        chatOnline.removeClass("active");
        sendInfo.removeClass("active");
        startChat.removeClass("active");
        startChatOnline.removeClass("active");
        closeChat.removeClass("active");
        footerSocial.removeClass("active");
        endChat.removeClass("active");
    };

    /*start chat*/
    startChatOnline.on("click", function (e) {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            openChatFunc();
        } else {
            closeChatFunc();
        }
    });

    /*click chat label*/
    // chatLabel.on('click',function(e){
    // 	if(startChatOnline.hasClass('active')){
    // 		startChatOnline.removeClass('active')
    // 		closeChat();
    // 	}
    // })

    /*close chat icon*/
    closeChat.on("click", function () {
        startChat.removeClass("active");
        $(this).removeClass("active");
        endChat.addClass("active");
    });

    /*end chat all*/
    endChatAll.on("click", function () {
        closeChatFunc();
    });

    /*end chat back*/
    endChatBack.on("click", function () {
        startChat.addClass("active");
        endChat.removeClass("active");
        closeChat.addClass("active");
    });

    /*start chat conversation */
    startConversation.on("click", function (e) {
        e.preventDefault();
        sendInfo.removeClass("active");
        startChat.addClass("active");
        closeChat.addClass("active");
        chatBox[0].scrollTop = chatBox[0].scrollHeight;
    });

    /*on typing for chat=====================*/
    $(".chat .typing").on("keyup", function (event) {
        event.preventDefault();
        listEmoji.removeClass("active");
        messageResult = $(this).val();
        // console.log('chat-typing:',messageResult)
        if (event.keyCode === 13) {
            if ($(this).val()) {
                actionChat($(this));
                messageResult = "";
            }
        }
    }); //chưa xong

    /*click a emoji*/ aEmoji.on("click", function (e) {
        e.stopPropagation();
        var item = $(this).text();
        messageResult += item;
        $(".typing").val(messageResult);
        // console.log(messageResult)
        $(".chat .typing").trigger("focus");
    });

    /*action chat */
    function actionChat(Input) {
        var chatMessageValue = Input.val();
        if (chatMessageValue === "") {
            return;
        }
        var messageHtml = '<div class="item me">' + chatMessageValue + "</div>";
        $(".startChat .chatBox").append(messageHtml);
        chatBox[0].scrollTop = chatBox[0].scrollHeight;
        Input.val("");
    }

    /*load files */
    $(".chatFiles input").change(function () {
        var html;
        if (this.files) {
            console.log(this.files);
            for (let i = 0; i < this.files.length; i++) {
                var file = this.files[i];
                var typeArray = file.name.split(".");
                var type = typeArray[typeArray.length - 1].toLowerCase();
                var name = file.name;

                if (
                    file.type == "image/x-png" ||
                    file.type == "image/png" ||
                    file.type == "image/gif" ||
                    file.type == "image/jpeg"
                ) {
                    var resultImage, html, imageUrl;
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        resultImage = e.target.result;
                        var blob = fn_Base64ToBlob(resultImage);
                        imageUrl = URL.createObjectURL(blob);

                        html =
                            '<div class="item me image">' +
                            '<a data-fancybox="gallery" rel="gallery" href="' +
                            imageUrl +
                            '">' +
                            '<img class="w-100" src="' +
                            imageUrl +
                            '" alt="Images Upload">' +
                            "</a>" +
                            "</div>";

                        $(".startChat .chatBox").append(html);
                        chatBox[0].scrollTop = chatBox[0].scrollHeight;
                    };
                    reader.readAsDataURL(file);
                } else if (file.type == "video/mp4") {
                    // data fake
                    name =
                        "https://cloudapi.minerva.vn/cdn/minerva-chat/workflow/workflowqc/0727cbd185a4e587e6d715_video_2020-03-06_10-33-07.mp4";

                    html =
                        '<div class="item me video"><video class="w-100" src="' +
                        name +
                        '"><video></div>';
                    $(".startChat .chatBox").append(html);
                    chatBox[0].scrollTop = chatBox[0].scrollHeight;
                } else {
                    html =
                        '<div class="item me file">' +
                        '<i class="icon-file las la-file-alt"></i>' +
                        '<span class="name pl-1">' +
                        name +
                        "</span>" +
                        "</div>";

                    $(".startChat .chatBox").append(html);
                    chatBox[0].scrollTop = chatBox[0].scrollHeight;
                }
            }

            //reset input
            $(this).val("");
        }
    });

    /*toBlob*/
    function fn_Base64ToBlob(dataURL) {
        var array, binary, i;
        binary = atob(dataURL.split(",")[1]);
        array = [];
        i = 0;
        while (i < binary.length) {
            array.push(binary.charCodeAt(i));
            i++;
        }
        return new Blob([new Uint8Array(array)], {
            type: dataURL.split(",")[0].split(":")[1].split(";")[0],
        });
    }
};

/*end chat----------------------------*/

/*select range search*/
var onChangeSelectSearchOption = function () {
    var result = [],
        item;

    $('.checkbox-inline[type="checkbox"]').change(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).find("input").val(0);
        } else {
            $(this).addClass("active");
            $(this).find("input").val(1);
        }

        item = $(this).find("input").attr("name");
        if ($(this).find("input").val() == 1) {
            result.push(item);
        }

        // console.log(result)
    });
};

/*on choose List Project*/
var chooseStatusProject = function () {
    var projectStatusWorking = $(".project_list--status .working");
    var projectStatusDone = $(".project_list--status .done");
    var projectStatusStatus = $(".project_list--status .status");
    var projectContent = $(".project_tab--content");

    projectStatusWorking.on("click", function () {
        if (projectStatusDone.hasClass("active")) {
            projectStatusDone.removeClass("active");
            projectContent.hide();
            $(".project_tab .tab-content .tab_done").removeClass("active");
            $(".project_tab .tab-content .tab_working").addClass("active");
            $(this).addClass("active");
        } else {
            if ($(this).hasClass("active")) {
                $(".project_tab .tab-content .tab_working").removeClass(
                    "active"
                );
                $(this).removeClass("active");
                projectContent.show();
            } else {
                $(".project_tab .tab-content .tab_working").addClass("active");
                $(this).addClass("active");
                projectContent.hide();
            }
        }
    });

    projectStatusDone.on("click", function () {
        if (projectStatusWorking.hasClass("active")) {
            projectStatusWorking.removeClass("active");
            projectContent.hide();

            $(".project_tab .tab-content .tab_working").removeClass("active");
            $(".project_tab .tab-content .tab_done").addClass("active");
            $(this).addClass("active");
        } else {
            if ($(this).hasClass("active")) {
                $(".project_tab .tab-content .tab_done").removeClass("active");
                $(this).removeClass("active");
                projectContent.show();
            } else {
                $(".project_tab .tab-content .tab_done").addClass("active");
                $(this).addClass("active");
                projectContent.hide();
            }
        }
    });
};

/*slider range*/
var sliderRange = function () {
    $(".input-range").each(function () {
        var value = $(this).attr("data-slider-value");
        var separator = value.indexOf(",");
        if (separator !== -1) {
            value = value.split(",");
            value.forEach(function (item, i, arr) {
                arr[i] = parseFloat(item);
            });
        } else {
            value = parseFloat(value);
        }
        $(this).slider({
            formatter: function (value) {
                return value;
            },
            min: parseFloat($(this).attr("data-slider-min")),
            max: parseFloat($(this).attr("data-slider-max")),
            range: $(this).attr("data-slider-range"),
            value: value,
            tooltip_split: $(this).attr("data-slider-tooltip_split"),
            tooltip: $(this).attr("data-slider-tooltip"),
        });
    });
};

/*slider apartment detail*/
var sliderApartmentDetail = function () {
    $(".apartment_slider-for").not(".slick-initialized").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        asNavFor: ".apartment_slider-nav",
    });
    $(".apartment_slider-nav")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: ".apartment_slider-for",
            dots: false,
            autoplay: true,
            arrows: true,
            focusOnSelect: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
};

$(".selectApartmentType li").on("click", function () {
    var type = $(this).data("type");
    $(this).closest(".selectApartment").find("li").removeClass("active");
    $(this).closest(".selectApartment").find(".wrap").removeClass("active");
    $(this)
        .closest(".selectApartment")
        .find(".wrap_" + type)
        .addClass("active");
    $(this)
        .closest(".selectApartment")
        .find(".type_" + type)
        .addClass("active");
});

/* actions on banks*/
function borrowBanksSlick() {
    $(".borrowBanks")
        .not(".slick-initialized")
        .slick({
            dots: false,
            arrows: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });
}

borrowBanksSlick();
$(".borrow__heading .nav-tabs a").on("show.bs.tab", function () {
    if ($(".borrowBanks").hasClass("slick-initialized")) {
        $(".borrowBanks").slick("unslick");
        setTimeout(() => {
            borrowBanksSlick();
        }, 500);
    }
});

// $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
// 	changeSelect()
// })

/*select bank on slider*/
$(".borrowBanks input").on("change", function () {
    if ($(this).is(":checked")) {
        $(".borrowBanks .item").removeClass("active");
        $(this).closest(".item").addClass("active");
        var val = $(this).val();
        console.log(val);
    }
});

/*Chính sách cho vay range slider*/
rangeSlider("01");
rangeSlider("02");
rangeSlider("03");
rangeSlider("04");
function rangeSlider(number) {
    $(".rangeValue" + number).val(
        $(".range" + number).attr("data-slider-value")
    );
    $(".range" + number).slider();
    $(".range" + number).on("slide", function (slideEvt) {
        $(".rangeValue" + number).val(slideEvt.value);
    });

    $(".rangeValue" + number).keyup(function () {
        var minSliderValue = $(this)
            .closest(".pull-range")
            .find(".range")
            .data("slider-min");
        var maxSliderValue = $(this)
            .closest(".pull-range")
            .find(".range")
            .data("slider-max");

        var val = Math.abs(parseInt($(this).val(), 10) || minSliderValue);
        this.value = val > maxSliderValue ? maxSliderValue : val;
        $(this).closest(".pull-range").find(".range").slider("setValue", val);
    });
}

/*checkbox payment befor deadline*/
$(".checkbox-paymentBeforeDeadline .checkbox-inline").change(function () {
    let number = $(this).data("number");

    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).find("input").val(0);
    } else {
        $(this).addClass("active");
        $(this).find("input").val(1);
    }

    if ($(this).find("input").val() == 1) {
        $(".paymentBeforeDeadline_" + number + "").removeClass("d-none");
    } else {
        $(".paymentBeforeDeadline_" + number + "").addClass("d-none");
    }
});

var step = 1;
$(".loan_online .step_next").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);

    step++;

    $(".loan_online--wrap").removeClass("active");
    $('.loan_online--wrap[data-step="' + step + '"]').addClass("active");

    $(".loan_online--step .step").removeClass("active");
    $(".loan_online--step .step_" + step + "").addClass("active");
    $(".loan_online--step .step_" + (step - 1) + "").addClass("done");
});

// $('.exchanges_apartment--heading .filter').click(function(e){
// 	e.preventDefault()
// 	var status = $(this).data('status');
// 	$(this).closest('.exchanges_apartment--item').find('.exchanges_apartment--child').addClass('shaded')
// 	$(this).closest('.exchanges_apartment--item').find('.exchanges_apartment--content .sales_status_' + status).removeClass('shaded');
// 	$(this).closest('.exchanges_apartment--item').find('.exchanges_apartment--content .sales_status_' + status).addClass('unShaded');
// })

$(".exchanges_filter .floor").click(function () {
    if ($(this).closest(".floors").hasClass("active")) {
        $(this).closest(".floors").removeClass("active");
    } else {
        $(this).closest(".floors").addClass("active");
    }
});

$(".exchanges_filter .icon_filter").click(function () {
    $(this).toggleClass("active");
    $(this)
        .closest(".exchanges_filter")
        .find(".searchProject")
        .toggleClass("active");
});
