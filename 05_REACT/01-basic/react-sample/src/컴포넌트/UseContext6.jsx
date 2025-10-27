import React, { useState } from 'react'
import { SearchContext } from '../context/SearchContext';
import FruitsShow from './FruitsShow';
import SearchText from './SearchText';

const UseContext6 = () => {

  // 과일의 종류를 저장할 배열 list로 만든 후 화면에 보여주기
  // input - 입력한 input에 글자가 과일 배열에 데이터가 있으면 
  // 일치하는 과일만 화면에 뿌려주기

  // 1. 과일 배열 데이터
  const fruits = ['apple', 'banana', 'mango', 'orange', 'cherry', 'melon', 'watermelon'];

  // 2. 상태변수 - input에 입력한 값 저장
  const [text, setText] = useState('');

  // 화면에 보여줄 내용 작성
  return (

    <SearchContext.Provider value={{ text, setText, fruits }}>

      <div>
        <h2>찾을 과일의 종류를 입력하세요</h2>
        <SearchText />
        <FruitsShow />
      </div>
    </SearchContext.Provider>  // 꼭 닫아줘야 함
  )
}

export default UseContext6
