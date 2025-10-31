import React, { useState } from 'react'
import { useStore } from '../store/useStore';

const Counter = () => {
    // zustand에서 상태와 메서드 가져오기
    // 설명 : useStore 훅을 사용하여 상태 관리 스토어에서 count 상태 값을 가져옵니다.
    const count1 = useStore((state) => state.count)
    const onMinus = useStore((state) => state.onMinus)
    const onPlus = useStore((state) => state.onPlus)
    

    return (
        <div>
            <h1>{count1}</h1>
            <button onClick={onMinus}>-1</button>
            <button onClick={onPlus}>+1</button>
        </div>
    )
}

export default Counter
