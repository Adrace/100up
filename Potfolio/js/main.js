$(function(){
  

$('#aa').fullpage({
    //navigation: true,
    anchors:['sc01', 'sc02', 'sc03', 'sc04', 'sc05'],
    afterLoad: function(origin, destination, direction){
        var idx=destination.index;
        console.log(idx);
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
    },
}); 


});






