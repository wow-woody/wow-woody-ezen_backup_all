import React, { createContext, useContext, useState } from 'react'

//1.
const ToggleContext = createContext();

function ToggleButton() {
    const { onoff, handleToggle } = useContext(ToggleContext);
    return (
        <button onClick={handleToggle}>
            {onoff ? "켜짐(ON)" : "꺼짐(OFF)"}
        </button>
    )
};

function ShowStatus() {
    const { onoff } = useContext(ToggleContext);
    return (
        <p>현재 상태{onoff ? "켜짐(ON)" : "꺼짐(OFF)"}</p>
    )
};


const UseContext2 = () => {

    //1. 상태변수 생성
    const [onoff, setOnOff] = useState(false);

    // 2. 메서드 생성 - 상태변수 변경
    const handleToggle = () => {
        // setOnOff(!onOff); // 현재 상태의 반대값으로 변경
        setOnOff(prev => !prev); // 이전 상태를 반대로 변경
    }

    // 3. 화면에 보여줄 내용 작성
    return (
    <ToggleContext.Provider value={{ onoff, handleToggle }}> {/* 2. Context.Provider 컴포넌트로 감싸기 */}
            <div>
                <h2>토글 버튼 만들기</h2>
                <ShowStatus />
                <ToggleButton />
            </div>
        </ToggleContext.Provider>
    )
};

export default UseContext2
