$(function(){
//---------------------------------------------------

$('.main_slider').slick({
    arrows:false,
});

$('.pr_slider').slick({
    arrows:false,
    slidesToShow:5,
    dots:true,

    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,         
          }
        },

        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,         
            }
          },
       
      ]
    

});

$('.xi-angle-left').on('click',function(){
    $('.pr_slider').slick('slickPrev');
});
$('.xi-angle-right').on('click',function(){
    $('.pr_slider').slick('slickNext');
});

$('.xi-bars').on('click',function(){
    $('.gnb').slideToggle(200);
});
$(window).on('resize',function(){
    if($(widow).width()>768) $('nav').removeAttr('style')
});

//---------------------------------------------------
});