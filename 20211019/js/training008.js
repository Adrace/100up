$(function(){
    //---------------------------------------//
   $('#top_pop i').on('click',function(){
       $('#top_pop').addClass('on');
   });


    $('.main_slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        pauseOnHover:false,
    });

    $('.main_slider').on('afterChange',function(e,s,c){
        
        $('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');
    });
});



