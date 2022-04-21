$(document).ready(function(){
    var yourNavigation = $("header");
    stickyDiv = "scrolled";
    yourHeader = $('header').height();

    $(window).scroll(function() {
        if( $(this).scrollTop() > yourHeader ) {
            yourNavigation.addClass(stickyDiv);
        } else {
            yourNavigation.removeClass(stickyDiv);
        }
    });

    $(".src-bt").click(function(s){
        s.preventDefault();
        s.stopPropagation();
        $(".src-popup").addClass("show");
    });

    var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    $('.src-popup form, .src-popup form input, .src-popup form .btn').on(supportsTouch ? 'touchend' : 'click', function (event) {
        event.stopPropagation();
        $(".src-popup").addClass("show");
    });

    $(document).on(supportsTouch ? 'touchend' : 'click', function (event) {
        $(".src-popup").removeClass("show");
    });
});