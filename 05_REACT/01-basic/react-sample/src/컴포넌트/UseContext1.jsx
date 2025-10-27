import React, { createContext, useContext } from 'react'

// 1. useContext 생성자 생성 불러오기
let NameContext = createContext('');

// 3. 자식 컴포넌트 생성
function Child() {
    // provider에게 제공한 값을 사용하기
    let name = useContext(NameContext);
    return (
        <div>
            <h3>자식 컴포넌트</h3>
            <p>Context로 전달된 이름은: {name} </p>
        </div>
    )
};
const UseContext1 = () => {
    return (
        // 2. Provider 컴포넌트로 감싸기 + value(name) 속성으로 전달할 값 넣기
        <NameContext.Provider value={'홍길동'}>
            <div>
                <h2> 기본 useContext 예제</h2>
            </div>
        </NameContext.Provider>
    )
}

export default UseContext1
