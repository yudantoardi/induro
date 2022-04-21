$(document).ready(function(){
    var yourNavigation = $("header");
    stickyDiv = "scrolled";
    yourHeader = $('header').height();

    $(window).scroll(function() {
        if( $(this).scrollTop() > yourHeader ) {
            yourNavigation.addClass(stickyDiv);
            if(window.innerWidth <= 1024){
                $(".nav").addClass("scrolled");
            }
        } else {
            yourNavigation.removeClass(stickyDiv);
            if(window.innerWidth <= 1024){
                $(".nav").removeClass("scrolled");
            }
        }
    });

    $(".src-bt").click(function(s){
        s.preventDefault();
        s.stopPropagation();
        $(".src-popup").addClass("show");
        $(".src-popup form input").focus();
    });

    var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    $('.src-popup form, .src-popup form input, .src-popup form .btn').on(supportsTouch ? 'touchend' : 'click', function (event) {
        event.stopPropagation();
        $(".src-popup").addClass("show");
    });

    $(document).on(supportsTouch ? 'touchend' : 'click', function (event) {
        $(".src-popup").removeClass("show");
    });

    if(window.innerWidth <= 1025){
        $(".nav .item a i").click(function(){
            $(".nav .sub").removeClass("show");
            $($(this).parent().next()).addClass("show");
        });
    }

    $(".burger").click(function(){
        $(".nav").toggleClass("show");
        $($(this).children("i")).toggleClass("fa-bars fa-times");
    });
});