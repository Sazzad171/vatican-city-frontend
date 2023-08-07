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

    // video popup
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 200,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
    
        fixedContentPos: true
    });

    // testimonial slider
    $('.testimonial-single').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        dots:false,
        URLhashListener:true
    })
    $('.testimonial-hash-items').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        items:5,
        dots:false,
        center: true,
        URLhashListener:true,
        responsive: {
            0: {
                items:2
            },
            600: {
                items:3
            },
            1200: {
                items:5
            }
        }
    });

    // counter up initialize
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // featured slider
    $('.featured-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        items:5,
        dots:false,
        center: true,
        responsive: {
            0: {
                items:2,
                margin:20,
                nav: false
            },
            600: {
                items:3
            },
            1200: {
                items:5
            }
        }
    });

    // team slider
    $('.team-members-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        items:4,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        responsive: {
            0: {
                items:1,
                margin:20,
                nav: false
            },
            600: {
                items:2
            },
            1200: {
                items:4
            }
        }
    });

    // gallery slider
    $('.gallery-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        items:3,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        responsive: {
            0: {
                items:1,
                margin:20,
                nav: false
            },
            600: {
                items:2
            },
            1200: {
                items:3
            }
        }
    });
    
})(jQuery);