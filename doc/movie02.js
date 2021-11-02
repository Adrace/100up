$(function(){
//---------------------------------------------------


$("#bgndVideo").YTPlayer({
    videoURL:'https://www.youtube.com/watch?v=eDEFolvLn0A',
    containment:'#visual',
    autoPlay:true,
    mute:true,
    startAt:0, 
    opacity:1,
    showControls:false,
});

$('#visual i.xi-pause').on('click',function(){
    $('#bgndVideo').YTPPause();
});
$('#visual i.xi-play').on('click',function(){
    $('#bgndVideo').YTPPlay();
});
$('#visual i.xi-tv').on('click',function(){
    $('#bgndVideo').YTPFullscreen();
}); 
$("#izone").YTPlayer({
    videoURL:'https://www.youtube.com/watch?v=eDEFolvLn0A',
    containment:'self',
    autoPlay:true,
    mute:true,
    startAt:0, 
    opacity:1,
    showControls:false,
    playOnlyIfVisible:true,

});

$('#visual i.xi-pause').on('click',function(){
    $('#izone').YTPPause();
});
$('#visual i.xi-play').on('click',function(){
    $('#izone').YTPPlay();
});
$('#visual i.xi-tv').on('click',function(){
    $('#izone').YTPFullscreen();
}); 
$('#movie02 i.xi-pause').on('click',function(){
    $('#izone').YTPPause();
});
$('#movie02 i.xi-play').on('click',function(){
    $('#izone').YTPPlay();
});
$('#movie02 i.xi-tv').on('click',function(){
    $('#izone').YTPFullscreen();
}); 




//---------------------------------------------------
});