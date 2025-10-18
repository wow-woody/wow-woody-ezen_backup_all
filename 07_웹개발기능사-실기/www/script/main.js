$(function () {
    //nav
    //#nav에 mouseover되면 모든 .sub slideDown(300);
    //.subBg slideDown(300);
    //    $("#nav").mouseover(function () {
    //        $(".sub,.subBg").stop().slideDown(300);
    //    })
    //nav에서 mouseout되면 모든 .sub와 .subBg slideUp(300);
    //    $("nav").mouseout(function () {
    //        $(".sub,.subBg").stop().slideUp(300);
    //    })    
    $("#nav").hover(function () {
        $(".sub,.subBg").stop().slideDown(300);
    }, function () {
        $(".sub,.subBg").stop().slideUp(300);
    })

    //slide
    //보여지는 배너를 체크해줄 변수 선언
    var showBanner=0;
    //배너의 li를복사해서
    var obj= $(".banner>li").clone();
    //배너끝에 붙이기
    $(".banner").append(obj);
    
    //3초마다 함수 한번씩호출하기
    setInterval(moveBanner,3000);
    
    //함수
    //다음배너로 왼쪽으로 하나씩 움직이기
    function moveBanner(){
        //0 -->ㅣ.banner margin-left:0
        //1 --> .banner margin-left:-100*1%
        //2--> .banner margin-left:-100*2%
        if(showBanner==3){
            showBanner=0;
            $(".banner").css("margin-left",0)
        }
        showBanner++;
        $(".banner").stop().animate({
            "margin-left": -100*showBanner+"%"
        },1000)
    }
    

    //popWrap .notice li:eq(0)를 클릭하면
    //.popWrap 보이도록
    $(".notice li:eq(0)").click(function () {
        $(".popWrap").css("display", "block");
    })
    //close .close 을 클릭하면
    //.popWrap이 사라지도록
    $(".close").click(function () {
        $(".popWrap").css("display", "none");
    })
})
