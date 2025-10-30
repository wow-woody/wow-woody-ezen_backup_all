import React from 'react'
import './css/style1css.css';

const Style1css = () => {
    // 스타일 저장할 변수
    const boxStyle = {
        backgroundColor: "#eee",
        fontsize: "30px",
    }
  return (
    <div className='inner'>
        <h2 className='title'>인라인 css</h2>
        <p style={{fontSize:"40px"}}>태그 css 주기</p>
        <div style={boxStyle}>여기에 box 인사인 css</div>
    </div>
  )
}

export default Style1css