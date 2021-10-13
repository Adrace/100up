$  (function(){
    $('.mopen').on('click',function(){
        $('nav').toggleClass('on')
    });

    $('nav>ul>li>a').on('click',function(){
        if($('nav').hasClass('on')){

        
            $(this).next().slideToggle();
        }
    });


    $(window).on('resize',function(){
        $('nav>ul>li .submenu').removeAttr('style'); 
    });

})