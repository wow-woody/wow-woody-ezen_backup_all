import React from 'react'
import topLogo from './assets/top-logo.png';

const Jsx5Import = () => {
  return (
    <div>
      <h2>jsx 문법 - 이미지</h2>
      <p>이미지를 변수에 저장</p>
      <p><img src={topLogo} alt="" /></p>
    </div>
  )
}

export default Jsx5Import
