$(function(){
//---------------------------------------------------


var main=$('.fullpage').fullpage({
    // navigation:true,
    anchors:['f01','f02','f03','f04'],
    afterLoad: function(origin, destination, direction){
        var idx=destination.index;
        console.log(idx);
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');

    },
});




//---------------------------------------------------
});