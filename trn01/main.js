$(function(){
// -------------------------------------------------------
    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
        sct > 0 ? $('header').addClass('on') : $('header').removeClass('on')

        // if ($(window).scrollTop() > 0) {
        //     $('header').addClass('on')
        // } else {
        //     $('header').removeClass('on')
        // }
    });




    $('.visual .main_slider').slick({
        arrows:false,
        fade:true,
        autoplay:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:true,
    });
// -------------------------------------------------------
});