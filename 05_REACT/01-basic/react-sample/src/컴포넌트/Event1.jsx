import React from 'react'

const Event1 = () => {

    // 1. 클릭 이벤트 변수 함수 생성

    
    //2. 이벤트 함수 내용 작성(매서드)
    // function handleClick(event) {
    //     console.log('버튼이 클릭되었습니다!');
    //     console.log(event); //handleClick(event) 이벤트 객체 콘솔 출력
    // }
    const handleClick = (event) => {
        console.log(event)
    } // 화살표 함수로 작성(function 대신) (es6 문법)


    // 3. 화면에 보여줄 내용 작성 - DOM 구조 jsx 문법
    return (
        <div>
            <h2>Event1</h2>
            <button onClick={handleClick}>클릭</button>
        </div>
    )
}

export default Event1
