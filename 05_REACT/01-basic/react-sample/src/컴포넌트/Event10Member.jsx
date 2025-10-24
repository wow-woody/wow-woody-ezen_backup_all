import React, { useState } from 'react'

const Event10Member = () => {

    let initForm = {
        name: "",
        email: "",
        password: ""
    }; // 초기값 설정 //{name: "", email: "", password: ""}이 들어 갈 내용을 축약 선언한 것 - 미리 변수로 선언


    // 1. 상태 변수
    const [form, setForm] = useState({
        // name: "",
        // email: "",
        // password: ""
        initForm //let innitForm = { name: "", email: "", password: ""}의 값을 불러옴, 안에 내용을 축약 선언한 것
    })



    // 2. 메서드
    const handleChange = (event) => {
        const { name, value } = event.target; // name 과 value 추출
        setForm((prev) => ({ ...prev, [name]: value })); // 이전 상태 복사 후 변경된 값만 업데이트
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 동작 막기 - 새로고침 방지
        alert(`가입 완료 - 회원가입 정보, \n이름: ${form.name}, \n이메일: ${form.email}`);
        // alert( `입력한 내용은: ${text}` ) \n -> 이건 줄바꿈;
        setForm({
            // name: "",
            // email: "",
            // password: ""
            initForm //let innitForm = { name: "", email: "", password: ""}의 값을 불러옴, 안에 내용을 축약 선언한 것
        }); // 값 입력 후 초기화
    }



    // 3. 화면에 보여줄 내용 작성
    return (
        <div>
            <h2>회원가입 폼</h2>

            <form  onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='name'
                    placeholder='이름'
                    autocomplete="username" // 자동 완성 기능 ux 권장 사항
                    value={form.name}
                    onChange={handleChange} />

                <br />

                <input
                    type="email"
                    name='email'
                    placeholder='이메일을 입력해주세요'
                    autocomplete="email"  // 현재 이메일 자동완성 기능 ux 권장 사항
                    value={form.email}
                    onChange={handleChange} />

                <br />

                <input
                    type="password"
                    name='password'
                    placeholder='비밀번호를 입력해주세요'
                    autocomplete="current-password" // 현재 비밀번호 자동완성 기능 ux 권장 사항 ??
                    value={form.password}
                    onChange={handleChange} />

                <br />

                <button type='submit'>회원가입</button>
            </form>

        </div>
    )
}

export default Event10Member
