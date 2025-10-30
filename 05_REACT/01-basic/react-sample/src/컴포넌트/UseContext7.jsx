import React, { useState } from 'react'
import { ColorContext } from '../context/ColorConText';
import ColorSelect from './ColorSelect';
import ColorDisplay from './ColorDisplay';

// useContext
// 1. context 생성
// 2. 제공자(provider)로 부모요소 감싸기
//    최상단의 조상에 생성한 context를 제공한다면 앱 전체에서 사용 가능
// 제공되는 종류
// 3. 자식 또는 후손에서는 제공되는 종류 중에서 필요한 것을 사용




const UseContext7 = () => {

  // 1. 상태 변수 생성- 상태 변수는 객체로 생성(중첩 가능)
  const [color, setColor]=useState();
  return (
    <ColorContext.Provider value={{color, setColor}}>
    <div>
      <h2>useContext 7</h2>
      <ColorSelect /> {/* 반드시 연결할 파일 각자에 import 해야함 */}
      <ColorDisplay />{/* 반드시 연결할 파일 각자에 import 해야함 */}
    </div>
    </ColorContext.Provider>
  )
}

export default UseContext7


