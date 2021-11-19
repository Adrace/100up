$(function(){

    var mS=$('.main_slider').slick({
        fade:true,
        autoplay:true,
        arrows:false,
        pauseOnHover:false,
    });

    $('.main_slider').on('init result afterChange',function(e,s,c){
        var i= (c?c:0)
        $('.snum').text(c+1 + "/" + s.slideCount);
    });

    $('.sdb2 span').css({height:100});
    $('.main_slider figure').eq(0).addClass('animation_active');
    $('.sdb span').addClass('animation_active');
    mS.on('beforeChange',function(e,s,c,n){
        $('.sdb span').removeClass('animation_active');
       
    });
    mS.on('afterChange',function(e,s,c){
        $('.main_slider figure').eq(c).addClass('animation_active').siblings()
        .removeClass('animation_active');
        $('.btn li').eq(c).addClass('animation_active').siblings()
        .removeClass('animation_active');
        $('.sdb span').addClass('animation_active');
        $('.sdb2 span').css({height:100*(c+1)});
        // $('.snum').text(c+1 + "/" + s.slideCount);

    });


    $('.btn li').on('click',function(){
        var idx=$(this).index();
        mS.slick('slickGoTo' ,idx) ;
    });
});