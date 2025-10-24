import React, { useState } from 'react'

const Event8Submit = () => {

    // 1. 상태 변수 - 선택한 값 저장 - summit 이벤트는 주로 form 태그에서 사용
    const [text, setText] = useState('');


    //2 . 메서드 - 선택한 상태변수 값 변경
    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 동작 막기 - 새로고침 방지(웹페이지 기본 동장, 이벤트 등 발생 시 페이지가 새로고침 되는 것을 막아줌 - 리셋???)
        alert( `입력한 내용은: ${text}` );
        setText(''); // 값 입력 후 초기화
    };



    // 3. 화면에 보여줄 내용 작성
    return (
        <div>
            <h2>form summit 폼 서밋</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)} />
                {/*<input type="submit" value="제출" />*/}
                <button type='submit'>확인</button> {/* *위의 방법이랑 둘다 사용 가능 */}

            </form>

        </div>
    )
}

export default Event8Submit