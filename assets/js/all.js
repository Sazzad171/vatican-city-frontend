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

    // popup gallery
    $('.popup-gallery').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', 
        gallery:{
                    enabled:true
                },
        
        zoom: {
            enabled: true, 
        
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
        
            opener: function(openerElement) {
        
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    $('#open-gallery').click(function() {
        $('.ad-images a').first().trigger('click');
    });

    // jquery calender
    $( "#datepicker" ).datepicker();

    // ------------ Counter BEGIN ------------ 
    $(".counter__increment, .counter__decrement").click(function(e)
    {   
        e.preventDefault();
        var $this = $(this);
        var $counter__input = $(this).parent().find(".counter__input");
        var $currentVal = parseInt($(this).parent().find(".counter__input").val());

        //Increment
        if ($currentVal != NaN && $this.hasClass('counter__increment'))
        {
            $counter__input.val($currentVal + 1);
        }
        //Decrement
        else if ($currentVal != NaN && $this.hasClass('counter__decrement'))
        {
            if ($currentVal >= 1) {
                $counter__input.val($currentVal - 1);
            }
        }
    });
    // ------------ Counter END ----------
    
})(jQuery);