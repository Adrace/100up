$(function(){
    //--------------------------------------------------------------- 

    
    $('header .gnb>li>a').on('click',function(e){
        if ($('header nav').hasClass('on')) {
        e.preventDefault();
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.smenu').slideUp();      
        }
    });

    $(window).on('resize',function(){
        $('.smenu').removeAttr('style')
    });


    $('.Slider').slick({
        arrows:false,
        fade:true,
        // autoplay:true,
        // autoplaySpeed:5000,
        pauseOnHover:false,
    });


    $('.slbt01').on('click',function(){
        $('.Slider').slick('slickNext');
    });


       


    $('.con_slider .case').on('click',function(){
        $('.con_slider .case .info').toggleClass('on');     
    });



    $('.con_slider').slick({
        arrows:false,
        slidesToShow:3,
        slidesToScroll:3,
    });
    
    
    $('.btn .xi-angle-left').on('click',function(){
        $('.con_slider').slick('slickPrev');
    });
    
    $('.btn .xi-angle-right').on('click',function(){
        $('.con_slider').slick('slickNext');
    });

    
    
    
    $('.con02_slider').slick({
        arrows:false,
        
    });



    $('.btn01 .xi-angle-left').on('click',function(){
        $('.con02_slider').slick('slickPrev');
    });
    
    $('.btn01 .xi-angle-right').on('click',function(){
        $('.con02_slider').slick('slickNext');
    });



    $('.con03_slider').slick({
        arrows:false,
        dots:true,
        
    });

    
    
    $('.con04_slider').slick({
        arrows:false,
        dots:true,
        autoplay:true
        
    });


    $(window).on('scroll',function(){
        var idx=$(window).scrollTop();
        // console.log(idx);

        idx>400 ? $('.toTop').fadeIn() : $('.toTop').fadeOut();
        

    });

    $('.mopenBar').on('click',function(){
        $('header nav').toggleClass('on');
        $('header .subgnb').toggleClass('on');
    });



    $(".toTop").on('click',function(){
        $('html,body').animate({scrollTop:0})
    });

    //--------------------------------------------------------------- 
    });