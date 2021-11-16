$(function(){
//---------------------------------------------------

$('.btn').on('click',function(){
    $('.gnb').toggleClass('on');
    $(this).toggleClass('on');
});

$('.gnb>ul>li>a').on('click',function(){
    if($('.gnb').hasClass('on')) {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.submenu').slideUp();

    }
$(window).on('resize',function(){
    $('.submenu').removeAttr('style');
});

});

//---------------------------------------------------
});