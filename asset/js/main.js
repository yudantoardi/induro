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
});