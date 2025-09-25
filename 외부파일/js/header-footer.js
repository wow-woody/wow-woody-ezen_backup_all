//header 불러오기
fetch("header.html")
.then(res => res.text())
.then (date => {
    document.querySelector("#header").innerHTML=date;

    //header가 삽입된 후에 실행할 내용들
    let close = document.querySelector(".close-btn");
    let topBanner = document.querySelector(".top");
    close.addEventListener("click",() => {
        topBanner.style.display= "none";
    })
})



//footer 불러오기
fetch("footer.html")
.then(res => res.text())
.then (date => {
    document.querySelector("#footer").innerHTML = date;

    //
    let openPop = document.querySelector(".footer > a");
    let popup = document.querySelector(".popup");
    let closePop = document.querySelector(".popup a");
    openPop.addEventListener("click", () => {
        popup.style.display = "block";
    })

    closePop.addEventListener("click", () => {
        popup.style.display ="none";
    })

})
