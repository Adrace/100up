$(function(){
    const mainSlider=$('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        //vertical:true, 위,아래로 슬라이드//
        //fade:true, 사라지는 효과//


    });

    let idx=1;
    mainSlider.on('afterChange',function(e,s,c){
        console.log(c);
        $('.num').css({backgroundPositionY:-500*idx});
        idx++;
    });

});