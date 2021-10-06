$(function(){
    $(".민재").on("click",function(){
        $("h1").hide();
    });
   
    $("#원빈").on("click",function(){
        $("h1").show();
    });

    $(".버튼").on("click",function(){
        $("figure").toggleClass("on")
    });

});