$(function(){
// -------------------------------------

$('#main').fullpage({
    anchors:['main', 'info', 'con01', 'con02', 'footer'],
    afterLoad: function(origin, destination, direction){
        $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
        $('.navbar>li').eq(destination.index).addClass('on').siblings().removeClass('on');
        if (destination.index==0) {
            $('.header').fadeIn();
        }else{
            $('.header').fadeOut();
        }    
        if (destination.index==0){
            $('.header').fadeIn();
        }else{
            $('.header').fadeOut();
        }    
        if (destination.index==0) {
            $('.toTop').fadeOut();
        }else{
            $('.toTop').fadeIn();
        }    
    },

});


$("#ytp").YTPlayer({
    videoURL:'https://www.youtube.com/watch?v=b-IFhEFstb0',
    containment:'.main_visual',
    autoPlay:true,
    mute:true,
    startAt:10,    
    opacity:1,
    showControls:false,
    quality: 'highres',
});


$('.itemSlider').slick({
    arrows:false,
    slidesToShow:1,
    pauseOnHover:false,
    fade:true,
})

$('.sitemSlider').slick({
    arrows:false,
    slidesToShow:3,
    pauseOnHover:false,
})


$('.btn .xi-angle-left').on('click',function(){
    $('.Slider').slick('slickPrev');
});
$('.btn .xi-angle-right').on('click',function(){
    $('.Slider').slick('slickNext');
});



$('.con04_slider').slick({
   arrows:false, 
   slidesToShow:3,
   autoplay:true,
   autoplaySpeed:1000,
   pauseOnHover:false,
   responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});

$('.full_menu').on('click',function(){
    $('.all_menu').addClass('on');
})
$('.all_menu .xi-close').on('click',function(){
    $('.all_menu').removeClass('on');
})


$('.mopen').on('click',function(){
    $('.mgnb').toggleClass('on');
    $('.msearch').toggleClass('on');
});


$('.con02 .container>div').on('click',function(){
    if ($(window).width() < 769) {
        $(this).addClass('on').siblings().removeClass('on');
    }
    
});


$('.mgnb>ul>li>a').on('click',function(){
    if ($('.mgnb').hasClass('on')) {
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.subMenu').slideUp();
    }
});


$('.con01 .leftMenu>div').on('click',function(){
    if ($(window).width() < 769) {
        $(this).addClass('on').siblings().removeClass('on');
    }
    
});


// -------------------------------------
});