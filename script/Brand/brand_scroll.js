$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 2500) {
        $('#b_scroll').addClass('s_scroll');
    } else {
        $('#b_scroll').removeClass('s_scroll');
    }
});