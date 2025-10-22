let hamClose = document.querySelector(".ham-close > a");
let menuWrap = document.querySelector(".mobile-menu-wrap");
let ham = document.querySelector(".ham-close > span img")

// .ham-close > a를 클릭하면 이미지가 x로 변견
hamClose.addEventListener("click",()=>{
    // hamClose.classList.add("active");
    // menuWrap.classList.add("active");
    hamClose.classList.toggle("active");
    menuWrap.classList.toggle("active");
})

// 아래 버튼을 클릭한 횟수를 체크할 변수
let btnCount=0;


// 이미지를 마크업에 넣은 경우
ham.addEventListener("click",()=>{
    // btnCount++;
    // if(btnCount % 2 == 1){
    // ham.setAttribute("src","./img/icon-close.svg");
    // menuWrap.classList.add("active");
    // } else {
    //     ham.setAttribute("src","./img/icon-menu.svg");
    //     menuWrap.classList.remove("active");
    // }

    if(menuWrap.classList.contains("active")){
        console.log("있음");
        ham.setAttribute("src","./img/icon-menu.svg");
        menuWrap.classList.remove("active")
    } else {
        console.log("없음");
        ham.setAttribute("src","./img/icon-close.svg");
        menuWrap.classList.add("active")
    }


})