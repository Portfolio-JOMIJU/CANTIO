$(function(){
    $('.nav> li').mouseenter(function(){
        $(this).children('.sub').stop().slideDown();
    });
    $('.nav> li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp();
    });

    $('.logo_design_inner a').mouseenter(function(){
        $(this).siblings('a').css({'filter':'grayscale(100%)'});
    });
    $('.logo_design_inner a').mouseleave(function(){
        $(this).siblings('a').css({'filter':'grayscale(0%)'});
    });
});

