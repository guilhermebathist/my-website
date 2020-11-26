$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    var nav    = document.querySelector('nav')
    if (scroll >= 50) {
        $("nav").addClass("sticky");
    }
    else {
        $("nav").removeClass("sticky");
        $("nav").addClass("");
    }
});