$(function(){
    //--------------------------------------------------------------- 
    

    $('.main').fullpage({
        anchors:['main', '01', '02', '03', '04', '05', 'footer'],
        afterLoad: function(origin, destination, direction){
        $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
        $('.navbar>li').eq(destination.index).addClass('on').siblings().removeClass('on');
        if (destination.index==0) {
            $('#header').fadeIn();
        }else{
            $('#header').fadeOut();
        }     
        if (destination.index==0) {
            $('.toTop').fadeOut();
        }else{
            $('.toTop').fadeIn();
        }    
    },

    });


    $('.tab_menu>div').eq(0).addClass('on');
    $('.con01 .itm').eq(0).addClass('on');
    $('.tab_menu>div').on('click',function(){
        let idx=$(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.con01 .itm').eq(idx).addClass('on').siblings().removeClass('on');
    });



    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
    });


    $('.main_visual .xi-angle-left').on('click',function(){
        $('.main_slider').slick('slickPrev');
    });
    $('.main_visual .xi-angle-right').on('click',function(){
        $('.main_slider').slick('slickNext');
    });
    
    
    
    
    $(".bmw").YTPlayer({
        videoURL:'https://www.youtube.com/watch?v=Y1Et2ipxeo0',
        containment:'.con04',
        autoPlay:true,
        mute:true,
        startAt:0, 
        opacity:0.7,
        showControls:false,
    
    });
    

    $('#header .gnb').on('scroll wheel',function(){
        return false;
    });
    $('.butt').on('scroll wheel',function(){
        return false;
    });

    
    $('#header .bars>li>a').on('click',function(){
        if ($('.gnb').hasClass('on')) {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.subMenu').slideUp();
        }
    });


    $('.xi-bars').on('click',function(){
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
        $('#header .right_bars').toggleClass('on');
    });


    $(window).on('resize',function(){
        $('.subMenu').removeAttr('style')
    });
    
    //--------------------------------------------------------------- 
    });

    
    

