$(function(){

    $('.footer i').on('click',function(){
        $('html,body').animate({scrollTop:0}, 800);
    });

    $('nav a').on('click',function(e){ 
       let top=$('.sticky').height();
       let i=$(this).parent().index();
        console.log(top);
        $('html,body').animate({scrollTop:top*i}, 800);
        return false;
    });


    $('.header i').on('click',function(){
        $('nav').slideToggle();
    });
});