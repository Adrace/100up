$(function(){
//---------------------------------------------------

var left_text=['No.1','No.2','No.3','No.4']

var main=$('.fullpage').fullpage({
    // navigation:true,
    anchors:['f01','f02','f03','f04'],
    css3:false, //background-attachment
    afterLoad: function(origin, destination, direction){
        var idx=destination.index;
        console.log(idx);
        $('.section').eq(idx).addClass('on').siblings().removeClass('on');
        $('header nav li').eq(idx).addClass('on').siblings().removeClass('on')
        $('.footer .left span').text(left_text[idx]);
        $('.footer .left strong').text('0' + (idx+1));
    },
});


$(".palyer").YTPlayer({
    videoURL:'https://www.youtube.com/watch?v=eDEFolvLn0A',
    containment:'.f01',
    autoPlay:true,
    mute:true,
    startAt:0, 
    opacity:1,
    showControls:false,
});



//---------------------------------------------------
});