import React, { useState } from 'react'

function Display(value) {
    return (
        <div>
            msg : {value}
        </div>
    )
}

function InputText({value, onSend}) {
    return (
        <div>
            <input type="text" value={value} 
            onChange={(event) => onSend(event.target.value)}/>
        </div>
    )
}

const StateUp4 = () => {

    // 1. 상태변수
    const [text, setText] = useState('부모가 관리하는 텍스트');

    // 2. 메서드 - 상태변수 변경

    // 3. 화면에 보여줄 내용 작성
    return (
        <div>
            <h2>형제간 데이터 공유</h2>

            <Display value={text} />
            <InputText value={text} onSend={setText} />

        </div>
    )
}

export default StateUp4