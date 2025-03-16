$(document).ready(function() {
    ////////** fixed header on scroll back**//////////
    // var lastScrollTop = 0;
    // var $header = $('header');
    // var navbarHeight = $header.outerHeight();
    // $("body").css("padding-top", navbarHeight + "px");
    
    // $(window).scroll(function() {
    //     var st = $(this).scrollTop();
    //     var isScrollingDown = st > lastScrollTop && st > navbarHeight;
    //     $header.toggleClass('header-up', isScrollingDown)
    //     lastScrollTop = st;
    // });
    
    ///////// **mobile size** /////////
    $('.menu-bar').click(function () {
        $(this).toggleClass("nav_btn");
        $('.main-nav').toggleClass('open-nav');
        $('body').toggleClass('active-sidenav');
    });

    $('.cats_btn').on('click', function(e) {
        e.preventDefault();
        $('#cats_menu').slideToggle(200);
        $(this).toggleClass("rotate-arrow");
    });

    if ($(window).width() <= 991) {
        $(".dropdown-hover").on("click", ".dropdown-click", function(e) {
            e.preventDefault();
            $(this).next(".dropdown-list").toggleClass("active");
        });

        var acc = document.getElementsByClassName("foot-accordion");
        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                for (let j = 0; j < acc.length; j++) {
                    if (acc[j] !== this) {
                        acc[j].classList.remove("active");
                        acc[j].nextElementSibling.style.maxHeight = null;
                    }
                }
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    };


    ///////// **main Slider** /////////
    var mainSlider = new Swiper('.main-slider .swiper', {
        loop: true,
        autoplay: true,
        speed: 1000,
        slidesPerView: 1,
        preloadImages: false,
        updateOnWindowResize: true,
            
        // If we need pagination
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        // Navigation arrows   
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
    });

    ///////// ** categories Slider** /////////
    var categories = new Swiper('.categories-row .swiper', {
        loop: true,
        autoplay: true,
        speed: 1000,
        updateOnWindowResize: true,
        observer: true,
        observeParents: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });

});
 