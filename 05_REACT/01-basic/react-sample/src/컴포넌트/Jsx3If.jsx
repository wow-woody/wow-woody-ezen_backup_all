import React from 'react'

const Jsx3If = () => {
    const isLogin = false;
  return (
    <div>
      <h2>jsx 문법 - 조건문</h2>
      <p>삼항조건 연산자</p>
      <p>조건 ? 조건 참 : 조건 거짓</p>
      <h3>{isLogin ? "홍길동 환영" : "로그인 필요"}</h3>

    </div>
  )
}

export default Jsx3If
