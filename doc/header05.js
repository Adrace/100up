$(function(){

    //스크롤 할 때 헤드변경 addClass

    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>480) {
            $('#header').addClass('on');
        } else{
            $('#header').removeClass('on');
        }
    });


    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        //vertical:true, 위,아래로 슬라이드//
        //fade:true, 사라지는 효과//


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