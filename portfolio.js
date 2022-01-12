$(function(){
// --------------------------------------------------

let sc=$('.section');
let slideBar=$('nav li');
$('#main').fullpage({
    anchors:['intro', 'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'profile'],
    afterLoad:function(origin, destination, direction){
        let idx=destination.index;
        sc.eq(idx).addClass('on').siblings().removeClass('on');
        slideBar.eq(idx).addClass('on').siblings().removeClass('on');
        if (idx==0) {
            $('.toTop').fadeOut();
        }else{
            $('.toTop').fadeIn();
        }
    },

});

function watch(){
    let today = new Date();   
    let hours = today.getHours(); 
    let minutes = today.getMinutes();  
    let seconds = today.getSeconds(); 
        $(".clock01").css({
            transform:"rotate(" + hours*30 + "deg)",
        });
        $(".clock02").css({
            transform:"rotate(" + minutes*6 + "deg)",
        });
        $(".clock03").css({
            transform:"rotate(" + seconds*6 + "deg)",
        });                  
        $(".gear").css({
            transform:"rotate(" + seconds*6 + "deg)",
        });                  
    }
    
    setInterval(watch,10);






// --------------------------------------------------
});