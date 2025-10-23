import React from 'react'

const Event3 = () => {
    // 1. 마우스 오버 이벤트 함수 생성
    const handleOver = (event) => {
        console.log('마우스 올라감(들어감)');
    };
    const handleOut = (event) => {
        console.log('마우스 나감(벗어남)');
    };

    //화면에 보여줄 내용 작성 - DOM 구조 jsx 문법
    return (
        <div 
            onMouseOver={handleOver}
            onMouseOut={handleOut}>
            <h2>마우스 오버 아웃</h2>
            <p>마우스를 올려 보세요</p>
        </div>
    )
}

export default Event3
