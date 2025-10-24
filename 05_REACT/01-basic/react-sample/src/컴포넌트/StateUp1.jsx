import React from 'react'

function Child({ onAlert }) {
    return (
        <div>
            <button onClick={onAlert}>경고버튼(자식 버튼)</button>
        </div>
    )
}

const StateUp1 = () => {

    // 1. 상태변수?

    // 2. 상태변수를 변경하는 매서드
    const handleAlert = () => {
        alert('자식을 클릭하면 부모 컴포넌트의 메서드 실행')
    }


    // 3. 화면에 보여줄 내용 작성
    return (
        <div>
            <h2>state 끌어올리기</h2>
            <p>자식 요소에서 이벤트가 발생할 때 부모가 가지고 있는 변수 도는 메서드를 실행</p>
            <Child onAlert={handleAlert} />  {/* 맨 위에 function child 에서 onAlert 받아옴 - {handleAlert}메서드를 가져옴 */}
        </div>
    )
}

export default StateUp1
