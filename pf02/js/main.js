$(function(){
    //--------------------------------------------------------------- 
    
    $('#header ul>.br').on('click',function(){
        $('#header .tab').slideToggle();
    });
   


    $('.xi-bars').on('click',function(){
        $('#header nav').toggleClass('on');
    });





    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        fade:true,
    });

    $('#main_visual .xi-angle-left').on('click',function(){
        $('.main_slider').slick('slickPrev');
    });
    $('#main_visual .xi-angle-right').on('click',function(){
        $('.main_slider').slick('slickNext');
    });
    
    
    // $('#con01 .slider').slick({
    //     arrows:false,
    
        
    // });
    
    $('#con01 .tab>li').on('click',function(){
        var $this=$(this)
        var idx=$(this).index();
        $('#con01 .container>div').eq(idx).addClass('on').siblings().removeClass('on');
        $this.addClass('on').siblings().removeClass('on');
    });
    
    
    $(".bmw").YTPlayer({
        videoURL:'https://www.youtube.com/watch?v=Y1Et2ipxeo0',
        containment:'#con04',
        autoPlay:true,
        mute:true,
        startAt:0, 
        opacity:0.7,
        showControls:false,
    
    });
    
    
    $('.btn').on('click',function(){
        $('#con04 .case').slideToggle(300);
    });
    
    
    
    
    
    
    
    
    
    
    
    
   
    
    
    




    
    
    
    



    
    
    
    
    
    
    //--------------------------------------------------------------- 
    });
    