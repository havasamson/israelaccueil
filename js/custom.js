(function($) {

    $('#send-mail').click(function(e){
      e.preventDefault();
      $.ajax({
        'url': 'contact/contact.php?sendmail',
        'method' : 'POST',
        'data' : {
          'name' : $('#name').val(),
          'email' : $('#email').val(),
          'name' : $('#message').val(),
        },
        success : function(resp){
          alert(resp);
        }
      });
    });

    "use strict"

    /********
         Index 1 Portfolio
    **********/
    function galleryMasonry() {
        if ($('#gallery').length) {
            $('#gallery').imagesLoaded(function() {
                // images have loaded
                // Activate isotope in container
                $(".gallery").isotope({
                    itemSelector: ".gallery-item",
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: '.grid-sizer'
                    }
                });

                // Add isotope click function
                $(".gallery-filter li").on('click', function() {
                    $(".gallery-filter li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $("#gallery").isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    })
                    return false;
                })
            })
        }
    }
    galleryMasonry();

    /********
         Index 2 Portfolio
    **********/
    function gallery2Masonry() {
        if ($('#gallery2').length) {
            $('#gallery2').imagesLoaded(function() {
                // images have loaded
                // Activate isotope in container
                $(".gallery2").isotope({
                    itemSelector: ".gallery-item",
                    masonry: {}
                });

                // Add isotope click function
                $(".gallery-filter2 li").on('click', function() {
                    $(".gallery-filter2 li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $("#gallery2").isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    })
                    return false;
                })
            })
        }
    }
    gallery2Masonry();

    /********
         Index 6 Portfolio
    **********/
    function gallery6Masonry() {
        if ($('#gallery6').length) {
            $('#gallery6').imagesLoaded(function() {
                // images have loaded
                // Activate isotope in container
                $(".gallery6").isotope({
                    itemSelector: ".gallery-item",
                    masonry: {}
                });

                // Add isotope click function
                $(".gallery-filter6 li").on('click', function() {
                    $(".gallery-filter6 li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $("#gallery6").isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    })
                    return false;
                })
            })
        }
    }
    gallery6Masonry();

    /********
         Index 5 Portfolio
    **********/
    function gallery5Masonry() {
        if ($('#gallery5').length) {
            $('#gallery5').imagesLoaded(function() {
                // images have loaded
                // Activate isotope in container
                $(".gallery5").isotope({
                    itemSelector: ".gallery-item",
                    layoutMode: 'masonry',
                });

                // Add isotope click function
                $(".gallery-filter5 li").on('click', function() {
                    $(".gallery-filter5 li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $("#gallery5").isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    })
                    return false;
                })
            })
        }
    }
    gallery5Masonry();



    /********
         Index 8 Portfolio
    **********/

    function gallery8Masonry() {
        if ($('#gallery8').length) {
            $('#gallery8').imagesLoaded(function() {
                // images have loaded
                // Activate isotope in container
                $(".gallery8").isotope({
                    itemSelector: ".gallery-item",
                    layoutMode: 'masonry',
                });

                // Add isotope click function
                $(".gallery-filter8 li").on('click', function() {
                    $(".gallery-filter8 li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $("#gallery8").isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    })
                    return false;
                })
            })
        }
    }
    gallery8Masonry();

    /********
         Team slider
    **********/

    function teamSlider() {
        if ($('.team-slider').length) {
            $('.team-slider').owlCarousel({
                loop: true,
                margin: 30,
                items: 3,
                autoplay: true,
                smartSpeed: 500,
                nav: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    490: {
                        items: 2
                    },
                    767: {
                        items: 3,
                    }
                }
            })
        }
    }
    teamSlider();

    /********
         Blog slider
    **********/
    function blog6Slider() {
        if ($('.blog-slider6').length) {
            $('.blog-slider6').owlCarousel({
                loop: true,
                margin: 30,
                items: 1,
                autoplay: false,
                smartSpeed: 500,
                dots: true,
                nav: false,
            })
        }
    }
    blog6Slider();

    /********
         Testimonial slider
    **********/
    function testimonialSlider() {
        if ($('.testimonial-slider').length) {
            $('.testimonial-slider').owlCarousel({
                loop: true,
                margin: 30,
                items: 1,
                autoplay: true,
                smartSpeed: 500,
                nav: true,
                navText: ["<span class='lnr lnr-arrow-left'></span>", "<span class='lnr lnr-arrow-right'></span>"],
                dots: true,
                responsiveClass: true
            })
        }
    }
    testimonialSlider();

    /********
         Height Emulator For Footer
    **********/


    $(".height-emulator").css({
        height: $("footer").outerHeight(true)
    });


    /********
         Install Wow Js
    **********/
    new WOW().init();

    $("#nav").onePageNav();



    /********
         Counter js
    **********/
    function counting_data() {
        var counter = $(".counter");
        if (counter.length) {
            counter.counterUp({
                delay: 10,
                time: 2000
            })
        }
    }
    counting_data();


    /********
         Search functtion
    **********/
    function searchFrom() {
        if ($(".search_dropdown").length) {
            $(".search_dropdown").on("click", function() {
                $(".searchForm").toggleClass('show');
                return false
            });
            $(".form_hide").on("click", function() {
                $(".searchForm").removeClass('show')
            });
        };
    };
    searchFrom();

    /********
         Typing Effect
    **********/

    $(".element").typed({
        strings: ["Designer of digital products.", "Second sentence."],
        typeSpeed: 0,
        loop: true,
        backSpeed: 30,
        typeSpeed: 30,
        backDelay: 3000,
    });

    /********
        Video Popup
    **********/

    if ($(".youtube-popup").length > 0) {
        $(".youtube-popup").magnificPopup({
            type: "iframe"
        });
    }
    /********
        Video play on click
    **********/

    // poster frame click event
    $(".js-videoPoster").on('click', function(ev) {
        ev.preventDefault();
        var $poster = $(this);
        var $wrapper = $poster.closest('.js-videoWrapper');
        videoPlay($wrapper);
    });

    // play the targeted video (and hide the poster frame)
    function videoPlay($wrapper) {
        var $iframe = $wrapper.find('.js-videoIframe');
        var src = $iframe.data('src');
        // hide poster
        $wrapper.addClass('videoWrapperActive');
        // add iframe src in, starting the video
        $iframe.attr('src', src);
    }
    // stop the targeted/all videos (and re-instate the poster frames)
    $(".play-btn").on("click", function(ev) {
        var $wrapper = $('.js-videoWrapper');
        var $iframe = $wrapper.find('.js-videoIframe');
        var src = $iframe.data('src');
        if ($wrapper.hasClass('videoWrapperActive')) {
            $wrapper.removeClass('videoWrapperActive');
            $iframe.attr('src', '');
        } else {
            $wrapper.addClass('videoWrapperActive');
            $iframe.attr('src', src);
        }
        return false;
    });


    /********
         Skill Progress bar
    **********/
    try {
        jQuery('#bt-ourskill').appear(function() {
            jQuery('.bt-skillholder').each(function() {
                jQuery(this).find('.bt-skillbar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2500);
            });
        });
    } catch (err) {}


    /************
     Awesome Screenshot popup
    *************/
    $('.image-link').magnificPopup({
        type: 'image',
        enabled: true,
        mainClass: 'mfp-fade',
        removalDelay: 300, // this class is for CSS animation below



        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        },
        gallery: {
            enabled: true, // set to true to enable gallery

            preload: [0, 2], // read about this option in next Lazy-loading section

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }

    });

    /********
         Page loader
    **********/
    $.scrollIt();


    var random = Math.floor(Math.random() * 1000) + 1000;
    $(document).ready(function() {
        setTimeout(function() {
            $("body").addClass("loaded");
        }, random);
    });
    /*********
     Menu icon toggle
     **********/
    $('.navbar-toggle').on("click", function() {
        $('.navbar-hamburger').toggleClass('hidden');
        $('.navbar-close').toggleClass('hidden');
    });




    /*----------------- Contact Form - submission js ----------------*/
    var contactForm = $(".contact-form");
    contactForm.on("submit", function(e) {
        e.preventDefault();
        var contactFormName = $("input.contact-name").val(),
            contactFormEmail = $("input.contact-mail").val(),
            contactFormMessage = $(".contact-message").val();

        function validateEmail(useremail) {
            filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (filter.test(useremail)) {
                // Yay! valid
                return true;
            }
        }
        if (contactFormName !== "" && contactFormEmail !== "" && contactFormMessage !== "") {

            contactForm.each(function() {
                $(this).find(":input").removeClass("validation-error");
            });
            //ajax
            $.ajax({
                type: "POST",
                url: contactForm.attr("action"),
                data: { "formName": contactFormName, "formMail": contactFormEmail, "formMessage": contactFormMessage },
                dataType: "json",
                success: function(data) {

                    $(".contact-submit-progress")
                        .append("<i class='fa fa-refresh' aria-hidden='true'></i>")
                        .hide()
                        .fadeIn("slow", function() {
                            $(".contact-submit-progress").hide();
                        });

                    function showUp() {
                        if (data.message_status == 'ok') {
                            $(".contact-submit-message").text(data.content).fadeOut(5000);
                        } else {
                            $(".contact-submit-message").text(data.content).fadeOut(5000);
                        }
                    }
                    setTimeout(showUp, 2000);
                    $(".contact-form")[0].reset();
                }
            });
        } else {
            contactForm.find(".form-control").each(function() {
                if ($(this).val() === "") {
                    $(this).addClass("validation-error");
                } else {
                    $(this).removeClass("validation-error");
                    $(this).addClass("validation-valid");
                }
            });
        }
    });

    contactForm.find(".form-control").each(function() {
        $(this).on("keyup", function() {
            if ($(this).val() === "") {
                $(this).removeClass("validation-valid");
                $(this).addClass("validation-error");
            } else {
                $(this).removeClass("validation-error");
                $(this).addClass("validation-valid");
            }
        });
    });


    /*----------------- map ----------------*/
    var map;

    function initialize() {
        var myLatlng = new google.maps.LatLng(-25.363882, 131.044922);
        var mapOptions = {
            zoom: 4,
            center: myLatlng
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Hello World!'
        });

    }

    google.maps.event.addDomListener(window, 'load', initialize);

    /***********rev slider index 4*********/

    var tpj = jQuery;

    var revapi1174;
    tpj(document).ready(function() {
        if (tpj("#rev_slider_1174_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_1174_1");
        } else {
            revapi1174 = tpj("#rev_slider_1174_1").show().revolution({
                sliderType: "hero",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {},
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [868, 768, 960, 720],
                lazyType: "none",
                parallax: {
                    type: "scroll",
                    origo: "slidercenter",
                    speed: 400,
                    levels: [10, 15, 20, 25, 30, 35, 40, -10, -15, -20, -25, -30, -35, -40, -45, 55],
                    type: "scroll",
                },
                shadow: 0,
                spinner: "off",
                autoHeight: "off",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "60px",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    disableFocusListener: false,
                }
            });
        }
    }); /*ready*/

})(jQuery);
