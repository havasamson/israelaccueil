var Styler = function() {
    "use strict";
    var b = function() {
            $(window).on("scroll", function() {
                $(window).scrollTop() > 1 ? ($(".header.header-sticky").addClass("sticky"), $(".header.navbar-fixed-top").addClass("sticky")) : ($(".header.header-sticky").removeClass("sticky"), $(".header.navbar-fixed-top").removeClass("sticky"));
            });
        },
        c = function() {
            $("#menu-search").on("click", function() {
                $("#search").addClass("active").find(".search").focus();
            }), $("#search").on("click", function() {
                $(this).find(".search").focus();
            }), $("#close").on("click", function() {
                $("#search").removeClass("active");
            });
        },
        d = function() {
            $(window).on("load resize", function() {
                $(window).width() < 1365 && $(".header .navbar-collapse ul.navbar-nav li a").click(function() {
                    $(this).parent().hasClass("open") ? $(this).parent().children(".dropdown-menu").slideUp(200, function() {
                        $(this).parent().removeClass("open");
                    }) : ($(this).parent().parent().children("li.open").children(".dropdown-menu").slideUp(200), $(this).parent().parent().children("li.open").children("a").removeClass("open"), $(this).parent().parent().children("li.open").removeClass("open"), $(this).parent().children(".dropdown-menu").slideDown(200, function() {
                        $(this).parent().addClass("open");
                    }));
                });
            });
        },
	e = function() {
            $(window).on("load resize", function() {
                $(window).width() < 1365 && $(".blue-mobile-menu .navbar-collapse ul.navbar-nav li a").click(function(a) {
                    $(this).parent().hasClass("open") ? $(this).parent().children(".dropdown-menu").slideUp(200, function() {
                        $(this).parent().removeClass("open");
                    }) : ($(this).parent().parent().children("li.open").children(".dropdown-menu").slideUp(200), $(this).parent().parent().children("li.open").children("a").removeClass("open"), $(this).parent().parent().children("li.open").removeClass("open"), $(this).parent().children(".dropdown-menu").slideDown(200, function() {
                        $(this).parent().addClass("open");
                    }));
                });
            });
        },
                
        f = function() {
            $(".side-header .side-header-menu li a").click(function(a) {
                $(this).parent().hasClass("open") ? $(this).parent().children(".dropdown-menu").slideUp(200, function() {
                    $(this).parent().removeClass("open");
                }) : ($(this).parent().parent().children("li.open").children(".dropdown-menu").slideUp(200), $(this).parent().parent().children("li.open").children("a").removeClass("open"), $(this).parent().parent().children("li.open").removeClass("open"), $(this).parent().children(".dropdown-menu").slideDown(200, function() {
                    $(this).parent().addClass("open");
                }));
            }), $(".side-header-toggle").on("click", function(a) {
                a.preventDefault(), $(".side-header-left").toggleClass("active"), $(".sideheader-active-left").toggleClass("active"), $(".side-header-right").toggleClass("active"), $(".sideheader-active-right").toggleClass("active"), $(".side-header-toggle").toggleClass("active");
            }), $(window).on("scroll", function() {
                $(window).scrollTop() > 1 ? $(".side-header-toggle-wrapper").addClass("shadow") : $(".side-header-toggle-wrapper").removeClass("shadow");
            });
        },
        g = function() {
            $(".header .navbar-toggle").on("click", function(a) {
                $(".navbar-toggle").hasClass("active") ? $(".navbar-toggle").removeClass("active") : $(".navbar-toggle").addClass("active");
            });
        };


    return {
        init: function() {
            b(), c(), d(), e(), f(), g();
        }
    };
}();
$(document).ready(function() {
    Styler.init();
});
