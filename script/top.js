$(function(){
    start();
    var imgs = 2;
    var now = 0;
    function start(){
        $('.banner img').eq(0).siblings().css({'top':'0'});
        setInterval(function(){slide();},2000);
    };
    function slide(){
        now=now==imgs?0:now+=1;
        $('.banner img').eq(now-1).css({'top':'-600px'});
        $('.banner img').eq(now).css({'top':'0px'});
    };
});