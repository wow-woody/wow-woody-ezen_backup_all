import React from 'react'


// 일반함수 만들기
function greeting() {
    return '리액트 노잼 그래도 자바보다는 쉬운 듯'
};



const Jsx2Function = () => {
  return (
    <div>
      <h2>jsx 문법 - 함수 호출하기</h2>
      <p><strong>{greeting()}</strong></p>
    </div>
  )
}

export default Jsx2Function