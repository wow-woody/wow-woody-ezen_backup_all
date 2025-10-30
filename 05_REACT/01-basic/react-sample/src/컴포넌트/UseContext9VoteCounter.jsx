import React, { useState } from 'react'
import { UseContext9VoteContext } from '../context/UseContext9VoteContext';
import UseContext9VoteButtonUse from './UseContext9VoteButtonUse.jsx';

const UseContext9VoteCounter = () => {

  // 1. 상태변수
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
    <UseContext9VoteContext.Provider value={{ agree, disagree, handleAgree }}>
      <UseContext9VoteButtonUse type="찬성" />
      <UseContext9VoteButtonUse type="반대" />
    </UseContext9VoteContext.Provider>
  )
}

export default UseContext9VoteCounter
