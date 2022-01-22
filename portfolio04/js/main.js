$(function(){
// ----------------------------------------------

$('.mian_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    autoplaySpeed:5000,
});



$(".plyer").YTPlayer({
    videoURL:'https://www.youtube.com/watch?v=AoRNOzQYPh4',
    containment:'.mian_slider',
    autoPlay:true,
    mute:true,
    startAt:0, 
    opacity:1,
    showControls:false,
});


$('.visual_btn .xi-angle-left').on('click',function(){
    $('.mian_slider').slick('slickPrev');
});

$('.visual_btn .xi-angle-right').on('click',function(){
    $('.mian_slider').slick('slickNext');
});



$('.tab_slider').slick({
    arrows:false,
    vertical: true,
    draggable:false,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows:true,
            prevArrow:'<div class="prev"><i class="xi-angle-up"></i></div>',
            nextArrow:'<div class="next"><i class="xi-angle-down"></i></div>',
            fade:true,
            vertical: false,
          }
        },
    ]
});

$('.sub_item').slick({
    arrows:false,
    vertical: true,
    draggable:false,
    slidesToShow:2,
});


$('.con01 .slider_btn').on('click',function(){
    $('.tab_slider').slick('slickNext')
    $('.sub_item').slick('slickNext')
});


$(window).on('scroll',function(){
    var sct=$(window).scrollTop();
   
    if ($(window).width()>768) {
        sct > 200 ? $('header').addClass('on') : $('header').removeClass('on')
    };
    
});


$(window).on('resize',function(){
    $('.item_slder').removeAttr('style');
});

$('.main_item>div').eq(0).addClass('on');

$('.leftmenu figure').on('click',function(){
    var $this=$(this);
    var idx=$(this).index();
    $('.main_item>div').eq(idx).addClass('on').siblings().removeClass('on');
});
$('.main_item>div').eq(0).addClass('on');

$('.leftmenu .icon_menu div').on('click',function(){
    var $this=$(this);
    var idx=$(this).index();
    $('.main_item>div').eq(idx).addClass('on').siblings().removeClass('on');
});







$('.con03_slider').slick({
    arrows:false,
    slidesToShow:3,
    
});




$('.con03_btn .xi-angle-left').on('click',function(){
    $('.con03_slider').slick('slickPrev')
});
$('.con03_btn .xi-angle-right').on('click',function(){
    $('.con03_slider').slick('slickNext')
});


$('.slogan_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:7000,
});

$('.slogan_slider .slogan').eq(1).addClass('on');
$('.slogan_slider').on('afterChange',function(e,s,c){
    $('.slogan_slider .slogan').eq(c+1).addClass('on').siblings().removeClass('on');
});


$('.toTop').on('click',function(){
    $('html,body').animate({scrollTop:0});
});

$('.mopen').on('click',function(){
    $('.header nav').toggleClass('on');
    $('.header .right_menu').toggleClass('on');
});



// ----------------------------------------------

});



