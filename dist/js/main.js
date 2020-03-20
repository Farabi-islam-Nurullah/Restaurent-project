$(document).ready(function() {


    // scrooll side var
    $(function() {
        var menuLink = $('.menu-link');
        var menu = $('.menu');
        var close = $('.close-btn');
        var close = $('.over-lay a');
        var navLink = $(' li a');
        menuLink.click(function() {
            menu.toggleClass('active-menu');
        });
        close.click(function() {
            menu.toggleClass('active-menu');
        });

        navLink.on('click', function(event) {
            event.preventDefault();
            var target = $(this).attr('href');
            var top = $(target).offset().top;
            $('html,body').animate({ scrollTop: top }, 500)
        });


    });



    // navigation color change
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('.header-wrapper').addClass('scroll-nav');
        } else {
            $('.header-wrapper').removeClass('scroll-nav');
        }
    });


    // scrooll btn 
    $(function() {

        var btnscrollvar = $('.btn-scroll')

        btnscrollvar.on('click', function(event) {
            event.preventDefault();
            var target = $(this).attr('href');
            var top = $(target).offset().top;
            $('html,body').animate({ scrollTop: top }, 500)
        });

    });


    //  mixitup js
    var mixer = mixitup(".mixtpag");



    // nurmber count up
    $('.counter').countUp({
        'time': 2000,
        'delay': 10
    });



    // nice scroll bar

    $(function() {
        $("body").niceScroll({
            zindex: "999999",
            cursorcolor: "#353B40",
            cursorborder: "1px solid transparent",
            cursorminheight: 70,
        });
    });

    // about us scroll bar
    $("#story-content-text").niceScroll({
        cursorcolor: "#353B40",
    });




    // box nice scroll bar
    $(function() {
        $("#food-scrol-box").niceScroll({
            cursorcolor: "#353B40",
        });
    });



});