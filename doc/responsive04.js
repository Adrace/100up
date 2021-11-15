$(function(){
//---------------------------------------------------

$('.main_slider').slick({
    arrows:false,
    autoplay:true,
});

$('.gnb>ul>li>a').on('click',function(e){
    if($('.gnb').hasClass('on')) { 
        e.preventDefault();
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.submenu').slideUp();
    }
});

$(window).on('resize',function(){
    $('.submenu').removeAttr('style')
});


$('.mopen').on('click',function(){
    $('.gnb').toggleClass('on');
    $('.sns').fadeToggle(200);

});



//---------------------------------------------------
});