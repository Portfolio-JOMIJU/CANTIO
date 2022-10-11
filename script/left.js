$(function(){
    start();
    var imgs = 2;
    var now = 0;
    function start(){
        $('.banner img').eq(0).siblings().css({'left':'0'});
        setInterval(function(){slide();},2000);
    };
    function slide(){
        now=now==imgs?0:now+=1;
        $('.banner img').eq(now-1).css({'left':'-2400px'});
        $('.banner img').eq(now).css({'left':'0px'});
    };
});