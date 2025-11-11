import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
  //1. 상태변수
  const [formData,setFormDate]= useState({
    name:"",
    nickname:"",
    email:"",
    password:"",
    phone:"",
    file:null,
    profile:""
  })
  //2. 메서드
  //회원가입
  const handleSubmit  = (e) =>{
    e.preventDefault();
    console.log("회원가입")
  }
  //각각의 input요소 값이 변경될경우
  const handleChange = (e) =>{
    const {name,value,file}= e.target;

    console.log(name,value);
    setFormDate({...formData,[name]:value})
  }

  //3. 화면에 뿌려질 내용
  return (
    <div className='sub-page'>
      <div className="content-inner">
        <div className="login-wrap">
          <h2 className='section-title'>회원가입</h2>
          <p>회원가입을 하면 모든 제품 50%</p>
          <form onSubmit={handleSubmit}>  
            <input type="text" name="name" placeholder='이름' 
            onChange={handleChange}/>
            <input type="text" name="nickname" placeholder='닉이름' 
            onChange={handleChange}/>
            <input type="email" name="email" placeholder='이메일(필수)' 
            onChange={handleChange}/>
            <input type="password" name="password" placeholder='비밀번호' 
            onChange={handleChange}/>
            <input type="text" name="phone" placeholder='전화번호'
            onChange={handleChange} />
            <div className='file-btn'>
              <label for="file">파일선택</label>
              <input type="file" name="file" id="file" 
              onChange={handleChange}/>
            </div>
            <textarea name="profile" placeholder='자기소개' 
            onChange={handleChange}/>
            <button type="submit">회원가입</button>
          </form>
          <p>이미 계정이 있으신가요? <Link to="/login">로그인</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Join