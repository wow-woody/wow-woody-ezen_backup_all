let myVideo = document.querySelector(".video video");
let playPause = document.querySelector(".playPause");
let stopBtn = document.querySelector(".stop-btn");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector (".next-btn")

// video method(방식)
// 재생-play(), 일시정지-pause(), 정지는 없음

// video 속성
// currentTime : 비디오의 재생 시간을 받아오거나 변경할 때
// paused : 비디오의 상태가 재생중인지 멈충상태인지를 체크
//          true || false 


// video 이벤트
// video 재생이 끝나면 ended
// video 로드되면 loadeddata


// playPause를 클릭하면 비디로가 재생되도록
playPause.addEventListener("click", function () {
    if (myVideo.paused){
        myVideo.play();
        playPause.classList.add("active");
    }
    else {
        myVideo.pause();
        playPause.classList.remove("active")
    }
})

// stopBtn을 클릭하면 비디오 재생이 완전히 멈추도록
stopBtn.addEventListener("click", function () {
    myVideo.pause();
    myVideo.currentTime = 0;
    playPause.classList.remove("active")
})

// .nextBtn을 클릭하면 빨리감기
nextBtn.addEventListener("click", function () {
    myVideo.currentTime += 2;
})


//비디오 재생이 끝나면
myVideo.addEventListener("ended", function () {
    console.log("비디오 재생이 끝났습니다.")
})
//비디오가 다 로드되면
myVideo.addEventListener("loadeddata", function () {
    console.log("비디오가 로드되었습니다.")
})