import React, { useState } from 'react'

const Event9Multi = () => {

    // 1. 상태 변수 - 오브젝트
    const [from, setFrom] = useState({ uname: '', email: '' });
    // 2. 메서드 - 선택한 상태변수 값 변경

    // //    첫뻔째 방법
    // const handleSubmit = (event) => {
    //     // console.log(event.target.name, event.target.value);
    //     console.log(event.target.name);
    //     console.log(event.target.value);
    //     let name = event.target.name;
    //     let value = event.target.value;

    //     // 임시 구조
    //     const newForm = {
    //         uname: from.uname,
    //         email: from.email
    //     }; // 기존 상태변수 복사

    //     newForm[name] = value; // 변경된 값만 업데이트
    //     setFrom(newForm);  // 상태변수 변경 ?? -> 화면에 반영
    // };   // event.target 에서 name 과 value 추출


    //    두번째 방법 - 스프레드 연산자 사용
    const handleSubmit = (event) => {
        const { name, value } = event.target; // 비구조화 할당으로 name 과 value 추출
        setFrom((prev) => ({ ...prev, [name]: value })); // 이전 상태를 복사하고 변경된 값만 업데이트
    }
    // 3. 화면에 보여줄 내용 작성
    return (
        <div>
            <h2>multi input - 멀티 인풋</h2>
            <input
                type="text"
                name='uname'
                value={from.uname}
                onChange={handleSubmit} />

            <input
                type="email"
                name='email'
                value={from.email}
                onChange={handleSubmit}
            />



        </div>
    )
}

export default Event9Multi
