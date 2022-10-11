$(function(){
    $('.tarot_top .tarot1').click(function(){
        $('.popup1').fadeIn();//show()
    });
    $('.popup a').click(function(){
        $('.popup').fadeOut();//hide()
    });
});

$(function(){
    $('.tarot_top .tarot2').click(function(){
        $('.popup2').fadeIn();//show()
    });
    $('.popup a').click(function(){
        $('.popup').fadeOut();//hide()
    });
});

$(function(){
    $('.tarot_top .tarot3').click(function(){
        $('.popup3').fadeIn();//show()
    });
    $('.popup a').click(function(){
        $('.popup').fadeOut();//hide()
    });
});

$(function(){
    $('.tarot_top .tarot4').click(function(){
        $('.popup4').fadeIn();//show()
    });
    $('.popup a').click(function(){
        $('.popup').fadeOut();//hide()
    });
});

$(function(){
    $('.tarot_bottom .tarot5').click(function(){
        $('.popup5').fadeIn();//show()
    });
    $('.popup a').click(function(){
        $('.popup').fadeOut();//hide()
    });
});

$(function(){
    $('.tarot_bottom .tarot6').click(function(){
        $('.popup6').fadeIn();//show()
    });
    $('.popup a').click(function(){
        $('.popup').fadeOut();//hide()
    });
});

$(function(){
    $('.tarot_bottom .tarot7').click(function(){
        $('.popup7').fadeIn();//show()
    });
    $('.popup a').click(function(){
        $('.popup').fadeOut();//hide()
    });
});

$(function(){
    $('.tarot_top a, .tarot_bottom a').click(function(){
        $('body').addClass('popup_height');
    });
    $('.popup a').click(function(){
        $('body').removeClass('popup_height');
    });
});