import React, { useState } from 'react'

const Event7ChangeSelect = () => {

    // 1. 상태 변수 - 선택한 값 저장
    const [fruit, setFruit] = useState('사과');


    //2. 메서드 - 선택한 상태변수 값 변경
    const handleChange=(event)=>{
        console.log(event.target.value); // 선택한 옵션의 value 값 콘솔 출력
        setFruit(event.target.value); // 상태 변수 fruit 값 변경
    };



    // 3. 화면에 보여줄 내용 작성
    return (
        <div>
            <h2>ChangeEvent - select 셀렉트</h2>
            <select  onChange={handleChange}>
                <option value="사과">사과</option>
                <option value="바나나">바나나</option>
                <option value="오렌지">오렌지</option>
                <option value="배">배</option>
                <option value="감">감</option>
            </select>
        </div>
    )
}

export default Event7ChangeSelect
