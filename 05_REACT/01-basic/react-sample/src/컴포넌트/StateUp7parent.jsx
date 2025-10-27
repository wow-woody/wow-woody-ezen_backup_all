import React, { useState } from 'react'
import StateUp7child1 from './StateUp7child1';
import StateUp7child2 from './StateUp7child2';

const StateUp7parent = () => {
    const [data, setData] =useState('');
  return (
    <div>
      <h2>형제간 데이터 전달</h2>
      <p>A형제 이벤트 발생 B형제 변경</p>
      <StateUp7child1 onSetData={setData}/>
      <StateUp7child2 dataSend={data}/>
    </div>
  )
}

export default StateUp7parent
