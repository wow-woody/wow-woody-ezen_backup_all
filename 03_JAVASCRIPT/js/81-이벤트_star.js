// .wrap, .icon. #code 저장할 변수
// 위치를 계산해줄 변수

let wrap = document.querySelector(".wrap");
let icon = document.querySelector(".icon");
let code = document.querySelector("#code");
let xPos = 0;
let yPos = 0;


// window의 너비 outerWidth
// 사용 가능 영역 너비 innerWidth
// 선택 요소의 너비 offsetWidth
console.log (window.outerWidth, window.outerHeight);
console.log (window.innerWidth, window.innerHeight);
console.log(wrap.offsetWidth, wrap.offsetHeight);
let leftEnd = wrap.offsetWidth - icon.offsetWidth;

//
document.addEventListener("keydown", (e) => {
    console.log(e.key, e.code);
    switch(e.key) {
        case "ArrowRight":
            if(xPos < wrap.offsetWidth) {
                xPos += 10;
            }
            break;
        case "ArrowLeft":
            xPos -= 10;
            break;
        case "ArrowDown":
            yPos += 10;
            break;
        case "ArrowUp":
            yPos -= 10;
    }
    console.log(xPos);
    // icon.Style.left = `${xPos}px`;
    icon.style.setProperty("left", `${xPos}px`);
    icon.style.transform = `translateX(${xPos}px)`
})