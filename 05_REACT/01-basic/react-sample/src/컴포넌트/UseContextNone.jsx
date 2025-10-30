import React, { useState } from 'react'
import ColorSelectNone from './ColorSelectNone'
import ColorDisplayNone from './ColorDisplayNone';

const UseContextNone = () => {

    // 1. 상태 변수
    const [color, setColor] =useState('#0000ff');

    // 2. 함수 - 메서드

    // 3. 렌더링 되는 부분 (화면에 보이는 부분)
  return (
    <div>
        <ColorSelectNone sendColor={color} onSendChange={setColor} />
        <ColorDisplayNone sendColor={color} />
    </div>
  )
}

export default UseContextNone