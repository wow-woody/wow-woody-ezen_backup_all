import React, { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import './Calculator-Show.css';

const CalculatorShow = () => {
    const { input } = useContext(CalculatorContext); // Context에서 상태 변수 가져오기
    return (
        <div>
            <div className='display'>{input || '0'}</div>
        </div>
    )
}

export default CalculatorShow
