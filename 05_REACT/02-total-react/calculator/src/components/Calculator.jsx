import React, { useState } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import CalculatorShow from './CalculatorShow';
import CalculatorButtons from './CalculatorButtons';
import './Calculator.css';


const Calculator = () => {

  // 계산기에 보여지는 영역 - 상태 변수
  const [input, setInput] = useState('');

  // 계산기 버튼을 클릭하면 보여질 영역을 제어할 메서드 - 이벤트 핸들러
  const handleClick = (value) => {
    console.log(value);
    if (value === '=') {
      try {
      // 전체 문자를 수식으로 변경   // eval() : 문자열을 수식으로 변경해주는 JS 내장 함수
      let result = eval(input);
      // setInput에 넣을 대는 문자로 변경
      setInput(String(result));
    } catch (error) {
      setInput('Error');
    }
  } else if (value === 'C') {
    setInput('');
  }
  else if (value === '<-') {
    // splice 특정 위치부터 특정 위치까지 내용을 추출할 때 
    // 원본에는 변화가 없음
    // a = [1,2,3,4,5]
    // a.splice(1,3)  => [2,3]
    // a.slice(0, -1) => [1,2,3,4]
    setInput(input.slice(0, -1));
  }

  else {
    setInput(input + value);
  }
}

return (
  <CalculatorContext.Provider value={{ input, setInput, handleClick }}>
    <div className='calculator-layout'>
      <CalculatorShow />
      <CalculatorButtons />
    </div>
  </CalculatorContext.Provider>

)
}

export default Calculator
