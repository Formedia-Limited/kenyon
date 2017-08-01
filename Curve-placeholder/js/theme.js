;(function($) {
    "use strict";
     
    // stick menu function
    function navbarCurve(){
        if( $('.navbar-curve').length ){
            var nav_offset_top = $('.navbar-curve').offset().top;
            $('.navbar-curve').affix({
                offset: {
                    top: nav_offset_top,
                }
            });
        }
    }
    
    // Camera Js
    function cameraSlider(){
        if( $('#camera_wrap_1').length ){
            var wHight= $(window).height(),
            CameraHight,
            main_slider_1 = $('#camera_wrap_1')

            $(window).load(function(){
                ($('.home-default').length) ? CameraHight = wHight - $('.navbar-curve').height() : CameraHight = wHight;

                if(main_slider_1.length){
                    main_slider_1.camera({
                        height: CameraHight + 'px',
                        loader: 'bar',
                        navigation: false,
                        autoPlay:true,
                        time: 4000,
                        playPause: false,
                        pagination: false,
                        thumbnails: false,
                        loaderColor: '#cfaf6d',
                        loaderBgColor: 'transparent',
                        barPosition: 'top',
                        autoAdvance: true
                    }); 
                };
            });
        }
    }
    
    // CounterUp
    function counterUp(){
        if( $('.counter').length ){
            $('.counter').counterUp({
                delay: 10,
                time: 2500
            });
        };
    };
    
    // clientCarosel
    function clientCarosel(){
        if( $('.clients-carousel').length ){
            $('.clients-carousel').owlCarousel({
                loop:true,
                margin:30,
                nav:false,
                autoplay:true,
                smartSpeed: 2000,
                items:2,
                responsive:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:2
                    },
                    1920:{
                        items:2
                    }
                }
            });
        };  
    };
    
    // Swiper Js 
    function suiparSlider(){
        if( $('.swiper-container').length ){
             var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                direction: 'vertical'
            });
        }
    }  
    
    // portfoliosIsotope
    function portfoliosIsotope(){
        if( $('#portfolios').length ){
            $('#portfolios').imagesLoaded(function(){
                $('#portfolios').isotope({
                    itemSelector: '.portfolio',
                    layoutMode: 'masonry',
                    percentPosition:true,
                    masonry: {
                        columnWidth: 1,
                    }            
                })
            });
            $('#projects_filters li').on( 'click', function() {
                $('#projects_filters').find('.active').removeClass('active');
                $(this).addClass('active');
                var $filterValue = $(this).data('filter');
                $('#portfolios').isotope({ filter: $filterValue })
            })
        }
    } 
    
    //Hide Loading Box (Preloader)
    function preLoader(){
        if( $('.preloader').length ){
            $(window).load(function() {
                $('.preloader').delay(500).fadeOut('slow');
                $('body').delay(500).css({'overflow':'visible'});
            });
        }
    }
    
    // Wow js
    new WOW().init();

    
    /*Function Calls*/ 
    navbarCurve();
    cameraSlider();
    counterUp();
    clientCarosel();
    suiparSlider();
    portfoliosIsotope();
    preLoader();
})(jQuery);