import React, { useState } from 'react'

const Event2 = () => {

    // 1. 카운터 상태를 저장하는 상태 변수 생성
    let [count, setCount] = useState(0); // 상태 변수 // 상태 변수는 값이 변경되면 화면에 반영 // import React 에 {useState} 추가해야함
    let num = 0; // 일반 변수 // 일반 변수는 값이 변경되어도 화면에 반영되지 않음

    // 2. 클릭 이벤트 함수 생성 - 카운터 증가하는 매서드
    const handleClick = () => {
        setCount(count + 1); // count 값을 1씩 증가
        // num 값을 1씩 증가
        num ++;

    }

    // 3. 화면에 보여줄 내용 작성 - DOM 구조 jsx 문법
    return (
        <div>
            <h2>값 변경 - 이벤트 클릭하면 숫자 카운터</h2>
            <p>일반변수{num}</p> 
            <p>상태변수{count}</p> 
            <button onClick={handleClick}>클릭할 때 숫자 증가</button>
        </div>
    )


}
// 4. 컴포넌트 내보내기
export default Event2

// 영화관 어쭈고 저쩌구 같은 자리 어쩌구 저쩌구 num은 변경안되고 어쩌구 저쩌구