import React from 'react'

const StateUp7child1 = ({onSetData}) => {
  return (
    <div>
      <h2>형제 A</h2>
      <p><button onClick={() => onSetData('A형제가 보냄')}>보내기</button></p>
    </div>
  )
}

export default StateUp7child1
