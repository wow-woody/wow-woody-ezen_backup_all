import React, { useState } from 'react'

const Event4Change = () => {

    // 1. 체인지 이벤트 함수 생성(상태변수)
    //    input 에 입력한 값을 변경
    const [text, setText] = useState(''); // 상태 변수 생성



    // 2. 이벤트 함수 내용 작성(매서드) 상태 변수의 값을 변경할 매서드
    const handleChange = (event) => {
        console.log(event.target.value);   // input 에 입력한 값 콘솔 출력
        setText(text = event.target.value); // 상태 변수 text 값을 변경
        
    };


    // 3. 화면에 보여줄 내용 작성
    return (
        <div>
            <h2>Change - 체인지 이벤트</h2>
            <p>input 글자 입력, 라디오, 체크박스를 변경,select 옵션 선택해야</p>
            {/* <input 
            type="text" 
            placeholder='이름을 입력하세요'
            onChange={(event) => setText(event.target.value)}  /> */}
            <input
                type="text"
                onChange={handleChange} />
            {/* //setText(이벤트 변수명.타겟.벨류값) 화살표 함수로 간단히 작성 */}
            <p>입력한 값:{text}</p>
        </div>
    )
}

// 4. 컴포넌트 내보내기
export default Event4Change