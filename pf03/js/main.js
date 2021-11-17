$(function(){
    //--------------------------------------------------------------- 

    
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
        
    });

    //--------------------------------------------------------------- 
    });
    