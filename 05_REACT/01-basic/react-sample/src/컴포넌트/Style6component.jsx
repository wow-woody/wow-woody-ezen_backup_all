import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  // background:#ccc;
  background: ${props =>
    props.primary ? 'skyblue' : props.green ? 'green' : '#ccc'};
  border: none;
`

const Style6component = () => {
  return (
    <div>
      <h3>props로 스타일 제어하기</h3>
      {/*  button 2개 첫번째 배경색 회색, 두번째 하늘색, 첫번째 #222, 두번째 회색*/}
      <Button>기본버튼</Button>
      <Button primary>강조버튼</Button>
      <Button green>그린버튼</Button>
    </div>
  )
}

export default Style6component
