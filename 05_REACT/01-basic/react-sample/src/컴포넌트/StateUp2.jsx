import React, { useState } from 'react'

function Child({ changeClick }) {
    return (
        <div>
            <button onClick={changeClick}>변경</button>
        </div>
    )
}


const StateUp2 = () => {

    // 1. 상태변수
    const [msg, setMsg] = useState('나는 부모');
    // 2. 메서드 - 상태변수 변경
    const handleMsg = () => {
        console.log('호출');
        setMsg('자식이 보낸 메시지');
    };
    // 3. 화면에 보여줄 내용 작성
    return (
        <div>
            <h2>부모의 상태 함수 전달</h2>
            <p>{msg}</p>
            <Child changeClick={handleMsg} />  {/* 맨 위에 function child (){}; msg라는 이름으로 상태변수 msg 값을 전달 */}
        </div>
    )
}

export default StateUp2
