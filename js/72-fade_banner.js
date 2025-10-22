// 버튼
let pagerBtns = document.querySelectorAll(".pager>li");
console.log(pagerBtns);

// 배너
let banners = document.querySelectorAll (".main-slider-list > li");


//보여지는 배너가 몇번째인지를 체크할 변수
let curennt = 0;


// 버튼 클릭 이벤트
pagerBtns.forEach((btn,id) => {
    console.log("전체 대상", pagerBtns);
    btn.addEventListener("click", (e)=>{
        // 클릭한 이벹트 대상이 누구인지 찾을 때 currentTarget
        console.log("현재 클릭한 버튼:", e.currentTarget);
        console.log("클릭한 버튼의 순서:", id);
        showBanner(id);
        curennt =id;
    })
    
});

// 클릭한 버튼에 active 클래스 적용, 나머지 버튼에 active 클래스 해제
// 모든 버튼에 active 클래스를 해제하고, 클릭한 버튼만  active 클래스 적용

function showBanner(id){
    pagerBtns.forEach((b,i)=>{
        b.classList.remove("active");
        banners[i].classList.remove("active");
    })
    pagerBtns[id].classList.add("active");
    banners[id].classList.add("active");
}


// 3초마다 배너가 그 다음배너로 자동으로 변경되도록
// setInterval("실행할 명령어", 시간)
// setInterval("실행항 함수명", 시간)
// setInterval(function()=>{}, 시간)
setInterval(()=>{
    curennt++;
    if(curennt>banners.length) curennt=0;
    showBanner(curennt);
}, 3000)