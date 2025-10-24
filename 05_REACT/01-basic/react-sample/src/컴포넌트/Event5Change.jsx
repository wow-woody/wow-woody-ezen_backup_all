import React, {useState} from 'react'

const Event5Change = () => {
    // 1. 상태변수 - 체크박스 상태 저장
    const [check, setCheck]=useState(false); // 초기값 false(체크 안된 상태)


    // 2. 매서드 - 상태변수의 값 변경 - 체크박스 체크 여부에 따라
    const handleChange=(event)=>{
        console.log(event.target.checked); // 체크박스 체크 여부 콘솔 출력
        // setCheck(checked => event.target.checked); // 상태 변수 check 값을 변경
        setCheck(event.target.checked) // 위와 동일
        
    };
    // 3. 화면에 보여줄 내용 자성
  return (
    <div>
      <h2>ChangeEvent - checkbox 체크박스</h2>
      <label>
        <input type="checkbox" onChange={handleChange}/> {/*체크박스에 onChange={handleChange} 이벤트 함수 연결*/} 
        약관에 동의합니다.
      </label>
  <p>{check ? "동의함" : "동의 안 함"}</p>
    </div>
  )
}

export default Event5Change
