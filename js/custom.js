$(function () {

    "use strict"


    //preloader js

    $(window).on('load', function () {
        $(".preloader").delay(2500).fadeOut(1500);
    });



    // video background


// video background
jQuery(function(){
  jQuery(".player").YTPlayer();
});


    //type js  




    $(".typer").typed({
        strings: ["Frontend Devloper", "Freelancer"],
        typeSpeed: 60,
        contentType: 'html',
        loop: true,
    });


    // nav

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();
        if (scrolling > 300) {
            $(".navbar").addClass("another-bg");
        } else {

            $(".navbar").removeClass("another-bg");
        }
    });


    //back to top

    var back2top = $(".back-to-top");
    var html_body = $('html, body');
    back2top.click(function () {
        html_body.animate({
            scrollTop: 0
        }, 2500);
    });




    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            back2top.fadeIn(500);
        } else {
            back2top.fadeOut(500);
        }
    });

    // animation smooth scroll

    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });



    //banner-slider

    $('.banner-slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        button: false,
        arrows: false,
        dots: true,
        speed: 2000,
        fade: true,

    });


    //comment-slider

    $('.comment-slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        button: false,
        fade: true,
        arrows: false,
        speed: 1000,

    });




    //Counter

    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({
            countNum: $this.text()
        }).animate({
                countNum: countTo
            },

            {

                duration: 10000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    // alert('finished');
                }

            });



    });

    // external js: isotope.pkgd.js

    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };
    // bind filter button click
    $('.filters-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    //venobox

    $('.venobox').venobox();

    //story-slider

    $('.story-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        button: false,
        arrows: false,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
    }

  ]
    });

    //brand-slider

    $('.brand-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        button: false,
        autoplay: true,
        speed: 2500,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                }
    }
  ]

    });




    //wow js

    new WOW().init();


    /* ---- particles.js config ---- */

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": ["#fff", "#fff", "#fff", "#fff"]
            },

            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#0cb4ce"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.6,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 2,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#0cb4ce",
                "opacity": 0.4,
                "width": 1
            },
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

});
