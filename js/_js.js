$(document).ready(function() {

    $("#lightSlider").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,

        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////

        speed: 1000, //ms'
        auto: true,
        loop: true,
        slideEndAnimation: true,
        pause: 7000,

        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',

        rtl:false,
        adaptiveHeight:false,

        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,

        thumbItem:10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',

        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,

        responsive : [],

        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });

    /* Раскрывающиеся блоки на странице prices.html */
    $('.price').hide();
    $('.price-title').click(function() {
        var price = $(this).next('.price');
        if (price.is(':hidden')) {
            price.slideDown(300);
            $(this).addClass('active');
        } else {
            price.slideUp(300);
            $(this).removeClass('active');
        }
    });
    
    /* Раскрывающиеся блоки на странице med-personal.html */
    $('.person').hide();
    $('.person-title').click(function() {
        var price = $(this).next('.person');
        if (price.is(':hidden')) {
            price.slideDown();
            $(this).addClass('active');
        } else {
            price.slideUp();
            $(this).removeClass('active');
        }
    });

    /* Кнопка скроллинга наверх страницы */
    $(window).scroll(function() {  
        if($(this).scrollTop() != 0) { 
            $('#toTop').fadeIn(); 
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').click(function() { 
    $('body,html').animate({scrollTop:0},500); 
    });

    /* Тень кнопок в <nav> */
    var main_class = $('main').attr("class");
    console.log(main_class);
    function shadow_button(btn_number) {
        var btn_selector = 'nav ul li:nth-child('+ btn_number +') .btn';
        console.log(btn_selector);
        $(btn_selector).css( {
            'box-shadow': 'inset 0 0 1px 1px orangered'
        });
    }
    switch(main_class) {
        case 'working_time': shadow_button(1);
            break;
        case 'location': shadow_button(2);
            break;
        case 'prices': shadow_button(3);
            break;
        case 'info': shadow_button(4);
            break;
        case 'comments': shadow_button(5);
            break;
        default: shadow_button(0);
            break;
    }
}); 
