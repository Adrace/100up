$(function(){
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        //vertical:true, 위,아래로 슬라이드//
        //fade:true, 사라지는 효과//


    });

    $('#main_visual span.left').on('click',function(){
        $('.main_slider').slick('slickPrev');
    });
    $('#main_visual span.right').on('click',function(){
        $('.main_slider').slick('slickNext');
    });


    $('#main_visual .list li').on('click',function(){
        var idx=$(this).index();
        console.log(idx);
        $('.main_slider').slick('slickGoTo',idx)
        $(this).addClass('on').siblings().removeClass('on');
    
    });

    $('.main_slider').on('afterChange',function(e,s,c){
        console.log(c);
        $('#main_visual .list li').eq(c).addClass('on').siblings().removeClass('on');
        $('#main_visual .poto').css({transform:'rotate('+120*c+'deg)'});
    });




    $('.pr_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 3,
        dots:true,

    });

    $('#content01 .btn i.xi-angle-left').on('click',function(){
        $('.pr_slider').slick('slickPrev');
    });

    $('#content01 .btn i.xi-angle-right').on('click',function(){
        $('.pr_slider').slick('slickNext');
    });





});