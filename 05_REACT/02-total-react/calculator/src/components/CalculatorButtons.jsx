import React, { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext';
import './Calculator-buttons.css';

// button 배열 만들기
const buttons = [
    'C', '<-', '/', '*',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '=',
    '0', '.'
];

const CalculatorButtons = () => {

    // Context에서 이벤트 핸들러 가져오기
    const { handleClick } = useContext(CalculatorContext);
    return (
        <div className='buttons'>
            {buttons.map((btn, index) => (
                <button key={index} onClick={() => handleClick(btn)}>{btn}</button>
            ))}
        </div>
    )
}

export default CalculatorButtons
