$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 1200) {
        $('body').addClass('s_scroll');
    } else {
        $('body').removeClass('s_scroll');
    }
});