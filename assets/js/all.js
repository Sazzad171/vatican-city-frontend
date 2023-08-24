(function ($) {
    "use strict";

    // navbar before/after scroll
    $(window).scroll(() => {
        if ($(window).scrollTop() > 0) {
            $("header").addClass("scrolled");
        }
        else {
            $("header").removeClass("scrolled");
        }
    });

    // featured slider
    $('.category-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        items:6,
        dots:true,
        center: true,
        responsive: {
            0: {
                items:1.5,
            },
            600: {
                items:3
            },
            1200: {
                items:5
            }
        }
    });

    // featured slider
    $('.blog-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        items:3,
        dots:true,
        center: true,
        responsive: {
            0: {
                items:1,
            },
            600: {
                items:2
            },
            1200: {
                items:3
            }
        }
    });

    // jquery calender
    $( "#datepicker" ).datepicker();
    
})(jQuery);