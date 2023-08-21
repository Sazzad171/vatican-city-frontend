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

    // jquery calender
    $( "#datepicker" ).datepicker();

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
                items:2,
            },
            600: {
                items:3
            },
            1200: {
                items:5
            }
        }
    });
    
})(jQuery);