import React, { createContext, useContext, useState } from 'react'

// 1. useContext 생성자 생성 불러오기
const TextContext = createContext('');

function Display() {
    const { text } = useContext(TextContext);
    return (
        <div>msg:{text}</div>
    )
}

function InputText() {
    const {text, setText} = useContext(TextContext);
    return (
        <div>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
        </div>
    )
}

const UseContext5 = () => {
    const [text, setText] = useState('부모영역 변수');
    return (
        <TextContext.Provider value={{ text, setText }}>
            <div>
                <h2>형제간 데이터 공유</h2>
                <InputText />
                <Display />
            </div>
        </TextContext.Provider>
    )
}

export default UseContext5
