$(function(){
// ----------------------------------------------

$('#ytp').YTPlayer({
    videoURL:'https://www.youtube.com/watch?v=g7KwQ-ogSEs',
    containment:'.visual',
    autoPlay:true,
    mute:true,
    startAt:0, 
    opacity:1,
    showControls:false,
    quality: 'highres',
});

$('.ticket02>a').on('click',function(){
    $('.visual .schedule').toggleClass('on');
});
$('.visual .schedule i').on('click',function(){
    $('.visual .schedule').removeClass('on');
});



$('.con01_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    draggable:false,

    responsive: [
        {
        breakpoint:768,
            settings: {
                draggable:true,
            }
        },
    ]

    
});

$('.xi-angle-left').on('click',function(){
    $('.con01_slider').slick('slickPrev');
});
$('.xi-angle-right').on('click',function(){
    $('.con01_slider').slick('slickNext');
});



$(window).on('scroll',function(){
    var sct=$(window).scrollTop();
    sct>100 ? $('.header').addClass('on') : $('.header').removeClass('on');
});


$('.totop').on('click',function(){
    $('html,body').animate({scrollTop:0});
});


$('.mopen').on('click',function(){
    $(this).toggleClass('on');
    $('.header .gnb').toggleClass('on');
    $('.header .top_gnb').toggleClass('on');
});




$('.header .gnb>ul>li>a').on('click',function(){
    $(this).next().stop().slideToggle(); 
    $(this).parent().siblings().find('.submenu').slideUp();
}); 

$(window).on('resize',function(){
    $('.submenu').removeAttr('style');
    $('.slogan').removeAttr('style');
});

// ----------------------------------------------

});



