//#uId에 input 이벤트가 발생되면 글자의 개수를 .num에 보여주기
let uId = document.querySelector("#uId");
let uIdCount = document.querySelector(".num");

let checks = document.querySelectorAll(".check input");
let likeColor = document.querySelector("#likeColor")

// uId.addEventListener("input",()=>{
//     console.log(uId.value.length);
//     let count = uId.value.length;
//     // uIdCount.innerHTML = count;
//     uIdCount.textContent = count;
// })

uId.addEventListener("input", function () {
    //자기 자신을 뜻하는 this를 사용하려면 !일반함수!에서만 사용가능
    let count = this.value.length;
    uIdCount.textContent = count;
})

//uId에 입력된 내용물 드래그로 선택 select
uId.addEventListener("select",()=>{
    uId.style.backgroundColor = "pink";
})

//change-checkbox,radio
for(i=0; i<checks.length; i++){
    checks[i].addEventListener("change",function(e){
        console.log(e.currentTarget);
    })
}

//배열명.forEach(배열데이터저장변수, 순서, 배열) =>{})
    checks.forEach((ch) => {
        ch.addEventListener("change", function (e) {
            console.log(e.target);
        }) 
    })



// select - change
likeColor.addEventListener("change", function (e){
    // e.currentTarget : 이벤트를 준 대상
    // e.target : 이벤트를 실제로 들은 대상
    // e.target.value : value 값 출력 => 저장된 내용
    // e.targer.selectedIndex : 몇번째 option을 선택했는지 찾기
    //e.target.options[selectedIndex].text
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.targer.selectedIndex);
    console.log(e.target.options[selectedIndex].text);



})


//form을 다 입력한 후 전송
myForm.addEventListener("submit", (e) => {
    alert("전송 완료")
})

myForm.addEventListener("reset", (e) => {
    alert("자료를 다시 입력해주세요")
})
