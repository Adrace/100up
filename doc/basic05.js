$(function(){
//---------------------------------------------------

$('#top_banner i').on('click',function(){
    $('#top_banner').slideUp();
});

$('#main_visual .main__slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:true,
    pauseOnFocus:false,
});
$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,
    // centerMode:true,
    // centerPadding:"100px",
    autoplay:true,
});

$('.pr_slider').on('afterChange',function(e,s,c){
    // console.log(c);
    $('.pr_slider figure').eq(c+7).addClass('on').siblings().removeClass('on');
    $('#product03 .slide_bar>span').css({left:c*100});
});

$('.pr_slider02').slick({
    arrows:false,
    autoplay:true,
    slidesToShow:3,
    slidespeed:2000,
    pauseOnHover:true,
    pauseOnFocus:false,
});

$('#product04 i.xi-angle-left').on('click',function(){
    $('.pr_slider02').slick('slickPrev');
});
$('#product04 i.xi-angle-right').on('click',function(){
    $('.pr_slider02').slick('slickNext');
});


$('#link select').on('change',function(){
    var link=$(this).val();
    if(link) {window.open(link);}

});




//---------------------------------------------------
});