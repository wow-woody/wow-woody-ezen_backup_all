import React, { useState } from 'react'

const Event11ListAdd = () => {
    // 1. 상태 변수
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');


    // 2. 메서드
    const addItem = () => {
        console.log('추가 버튼 클릭됨');
        setItems([...items, input]); // 기존 배열 복사 후 새로운 값 추가
        setInput(''); // 입력 후 인풋창 초기화
    };

    // 2. 메서드 - 엔터키를 누르면 추가 버튼이 활성화 할 수 있는 기능 (input 태그에서)
    //    - input 태그에 onKeyDown 이벤트 추가
    const handleKey = (event) => {
        setInput(event.target.value);  // input 엔터키를 누르면 추가 할 수 있는 기능
        if (event.key === 'Enter') {
            addItem();  // 엔터키가 눌렸을 때 addItem에 추가하는 기능 호출, 작동
        }
    }
    // 3. 화면에 보여줄 내용 작성
    return (
        <div>
            <h2>리스트 추가히기(하단으로 데이터 출력)</h2>
            <p>
                <input type="text" value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={handleKey} />{/*onChange 이벤트 작성 필요, */}
                <button onClick={addItem}>추가</button>
            </p>

            <ul>
                {items.map((item, id) =>
                    <li key={id}>{item}</li> // 반드시 key 값 설정 필요    ;-> 여기에는 절대 입력 금지
                )}
            </ul>
        </div>
    )
}

// 4. 컴포넌트 내보내기
export default Event11ListAdd
