import React, { useState } from 'react'

const ComConditionLogin5 = () => {
    // 1. 로그인 상태를 저장하는 변수
    const [login, setLogin]=useState(false); // 초기값 false(로그인 안된 상태 - 로그인으로 보여짐)

    // 2. 변수를 변경할 수 있는 매서드 - 로그인 상태에 따라 다른 내용을 보여주기 
    //    (삼항 조건 연산자를 사용)
    const loginChange=()=>{
        // setLogin(login ? false : true);
        console.log('함수호출')
        setLogin(!login); // 이전 상태를 반대로 변경
    };

    // 3. 화면에 보여줄 내용 작성

  return (
    <div>
      <h2>삼항 조건 연산자</h2>
      <p>{login ? "환영합니다." : "로그인이 필요합니다."}</p>
  <button onClick={loginChange}>{login ? "로그아웃":"로그인"}</button>
    </div>
  )
}

export default ComConditionLogin5
