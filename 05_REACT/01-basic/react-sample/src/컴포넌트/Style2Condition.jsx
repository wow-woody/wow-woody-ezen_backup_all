import React, { useState } from 'react'
import './css/style2cssCintition.css'
const Style2Condition = () => {

    // 1. 상태 변수
    const [active, setActive] = useState(false);

    // 2. 메서드 - 상태 변수 변경

    //3. 화면에 출력해서 보여줄 내용 작성
    return (
        <div>
            <h3>조건에 따른 클래스 적용</h3>
            <div className={'box ${active ? "light" : "dark"}'}>현재 상태 : {active ? 'light' : 'dark'}</div>
            <button onClick = {() => setActive((prev)=>!prev)}></button>
        </div>
    )
}

export default Style2Condition
