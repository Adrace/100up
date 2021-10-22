$(function(){
    $('#tapcontent li').on('click',function(){
        //$(this) 이벤트가 적용되는 대상
        //$(this).index 번호 적용
        //consol.log() ()의 값을  개발자도구에 나타나게 함
        //변수 값을 넣는 저장소, 메모리  var 이름=값; let const
        //함수 어떤 일을 저장해놓는 저장소;
        var idx=$(this).index();
        //console.log(idx)
        $('#tapcontent .tab>div').eq(idx).addClass('oo').siblings().removeClass('oo');
        $(this).addClass('oo').siblings().removeClass('oo');

    });
    



});






