$(function(){
// -------------------------------------

$('#main').fullpage({
    anchors:['con01', 'con02', 'con03', 'con04', 'con05', 'footer'],
    afterLoad: function(origin, destination, direction){
        // console.log(destination.index);
        let txt=$('.navbar>li').eq(destination.index).find('a').text();
        $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
        $('.navbar>li').eq(destination.index).addClass('on').siblings().removeClass('on');
        $('.now').text(txt);
        if (destination.index==0) {
            $('.header').fadeIn();
        }else{
            $('.header').fadeOut();
        }
        if (destination.index==0) {
            $('.wheel').fadeIn();
        }else{
            $('.wheel').fadeOut();
        }

        
    },
    
});

$('.brand_slider').slick({
    arrows:false,
    asNavFor:'.brand_slider',
    autoplay:true,
});

$('.brand_name>li').on('click',function(){
    let idx=$(this).index();
    $('.brand_slider').slick('slickGoTo',idx);
});
$('.brand_slider').on('afterChange',function(e,s,c){
    $('.brand_name>li').eq(c).addClass('on').siblings().removeClass('on');
})

$('.header>a').on('click',function(){
    $(this).toggleClass('on');
    $('.all_menu').slideToggle();
    if ($('.header>a').hasClass('on')) {
        $.fn.fullpage.setAllowScrolling(false);
    }else{
        $.fn.fullpage.setAllowScrolling(true);
    }
});
$('.all_menu a').on('click',function(){
    $('.all_menu').slideUp();
    $.fn.fullpage.setAllowScrolling(true);
    $('.header>a').removeClass('on');
});





// -------------------------------------
});