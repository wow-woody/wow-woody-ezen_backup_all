import React, { useState } from 'react'

const Event6ChangeRadio = () => {

    // 1. 상태 변수 - 선택한 성별을 저장하는 상태 변수 생성
    const [gender, setGender] = useState(""); // 초기값 빈 문자열


    // 2. 메서드 - 상태 변수의 값 변경 - 라디오 버튼 선택에 따라
    const handleChange=(event)=>{
        console.log(event.target.value); // 선택한 라디오 버튼의 value 값 콘솔 출력
        setGender(event.target.value); // 상태 변수 gender 값을 변경
    };



    //3. 화면에 보여줄 내용 작성
    return (
        <div>
            <h2>ChangeEvent - radio 라디오</h2>
            <p>선택한 성별:{gender}</p>
            <label >
                <input type="radio" name="gender" value="male" onChange={handleChange}/> 남자
            </label>
            <label >
                <input type="radio" name="gender" value="female" onChange={handleChange}/> 여자
            </label>
            {/*label 안에 input 넣으면 좋음???확인 */}
        </div>
    )
}

export default Event6ChangeRadio