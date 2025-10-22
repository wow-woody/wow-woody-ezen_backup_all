import React, { useState } from 'react'

const ComCondition2Funct = () => {
    // 1. 상태 변수 저장 선언
    // 이전에는 함수형 컴포넌트에서 상태 변수를 사용할 수 없었음.
    // 사용하기 위해서는 useState() 라는 Hook(훅) 이라는 기능을 불러와서 사용해야 함.
    //  상태 변수 선언식(하단)
    // let[상태변서, 상태변수값변경함수(매서드)] -useState(초기값);
    let [isToggle, setIsToggle] = useState(true);

    //카운터 선언문
    let [count, setCount] = useState(1);
    let count1=1;



    // 2. 매서드 -조건문 작성(동작)
    let toggle = () => {
        console.log("함수 변수")
        //변수를 변경할 메서드(이전데이트를 받을 변수 => 처리할 명령어)
        setIsToggle(prev => !prev);  // 이전 상태 값을 받아와서 반대로 변경(강사님 방법) - 권장 사항 - prev 는 previous 의 약자로 이전 상태 값을 의미함

        // setIsToggle(!isToggle); // 현재 상태 값을 반대로 변경 - 비권장 사항

        // --> 카운터 명령어
        setCount(c => c +1); // count 라는 상태 변수를 1씩 증가시키는 예시
        count1 = count1 + 1; // 일반 변수는 값이 유지되지 않음
    };

    // 3. 화면에 츨력할 내용 - DOM 구조 jsx 문법
  return (
    <div>
       <p>버튼을 클릭하세요</p>
       <p>{count}</p>
       <button onClick={toggle}>{isToggle ? "ON" : "OFF"}</button>
    </div>
  );
};

export default ComCondition2Funct
