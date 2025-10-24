import React, { useState } from 'react'


function Child() {
    return (
        <div>
            <p>{msg}</p> {/* 아래에 const StateUp0 = () => {}; msg라는 이름으로 상태변수 msg 값을 전달 */}
        </div>
    )
};

const StateUp0 = () => {

    // 1. 상태 변수
    const [msg, setMes] = useState('안녕 나 부모임');

    // 2. 메서드 - 상태변수 변경

    // 3. 화면에 보여줄 내용 작성
    return (
        <div>
            <h2>부모가 가진 값을 자식에게 전달</h2>
            <Child msg={msg} />  {/* 맨 위에 function child (){}; msg라는 이름으로 상태변수 msg 값을 전달 */}
        </div>
    )
}

export default StateUp0
