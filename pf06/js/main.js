$(function(){
// --------------------------------------------------------

$('.fullmenu').on('click',function(){
    $('.full_menu').addClass('on');
});   
$('.close').on('click',function(){
    $('.full_menu').removeClass('on');
});


$('.header .rightmenu .lang>li').on('click',function(){
    $(this).toggleClass('on');
});

$('.slide').slick({
    arrows:false,
    autoplay:true,
    pasueOnHover:false,
    dots:true,
});

$(window).on('scroll',function(){
    var sct= $(window).scrollTop();
});

$(".banner01").on('click',function(){
    $('.banner01_sns').toggleClass('on');
});
$(".banner02").on('click',function(){
    $('html,body').animate({scrollTop:0});
});

$('.header .mopen').on('click',function(){
    $('.header .gnb').toggleClass('on');
    $('.header .rightmenu').toggleClass('on');
});



$('.header .gnb>ul>li>a').on('click',function(){
    if($('.header .gnb').hasClass('on')) {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.sub_menu').slideUp();  
    }
});
$('.header .sub_menu>li>a').on('click',function(){
    if($('.header .gnb').hasClass('on')) {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.ssub_menu').slideUp();  
    }
});

$(window).on('resize',function(){
    $('.header .sub_menu').removeAttr('style')
});





// --------------------------------------------------------
});