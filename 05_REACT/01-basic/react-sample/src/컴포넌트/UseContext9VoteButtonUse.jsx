import React, { useContext } from 'react'
import { UseContext9VoteContext } from '../context/UseContext9VoteContext';

const UseContext9VoteButtonUse = ({ type }) => {
    
    // 1.상태 변수 - useContext
    const { agree, disagree, handleAgree } = useContext(UseContext9VoteContext);

    // 1-2. 변수 - 삼항 조건 연산자 
    //      작성 이유 : 버튼에 찬성(찬성 수), 반대(반대 수) 표시하기 위해
    const count = type === '찬성' ? agree : disagree; 

    // 2. 함수 - 메서드


    // 3. 렌더링 되는 부분 (화면에 보이는 부분)
    return (
        <button onClick={() => handleAgree(type)}>{type}({count})</button>
    )
}

export default UseContext9VoteButtonUse