import React, { useState } from 'react'
import UseContext8VoteButton from './UseContext8VoteButton';
import UseContext8VoteTotal from './UseContext8VoteTotal';
const UseContext8VoteCounterNone = () => {

  // 1. 상태 변수
  const [agree, setAgree] = useState(0);
  const [disagree, setDisagree] = useState(0);

  // 2. 함수 - 메서드
  const handleAgree = (type) => {
    if (type === '찬성') {
      setAgree(prev => prev + 1);
    } else {
      setDisagree(prev => prev + 1);
    }
  }

  // 3. 렌더링 되는 부분 (화면에 보이는 부분)

  return (
    <div>
      <UseContext8VoteButton type='찬성' count={agree} onAgree={() => handleAgree('찬성')} />
      <UseContext8VoteButton type='반대' count={disagree} onAgree={() => handleAgree('반대')} />
      <UseContext8VoteTotal VoteTotal={agree + disagree}/>

    </div>
  )
}

export default UseContext8VoteCounterNone
