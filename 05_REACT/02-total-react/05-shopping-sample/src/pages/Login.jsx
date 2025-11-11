import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./scss/login.scss";

const Login = () => {
  //1. 변수
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //store  전역변수
  const {onLogin, onGoogleLogin, onKakaoLogin} =useState();

  
  const navigate = useNavigate();

  //2. 메서드
  //기본 로그인
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("전송")
  }
  //구글 로그인
  const handleGoogleLogin = () => {
    console.log("구글")
  }

  //카카오 로그인
  const handleKakaoLogin = () => {
    console.log("카카오")
  }

  //3. 화면에 뿌려질 내용
  return (
    <div className="sub-page">
      <div className='content-inner'>
        <div className="login-wrap">
          <h2 className='section-title'>로그인</h2>
          <p>로그인을 더 많은 혜택을 받을수 있어요</p>
          <form onSubmit={handleSubmit} >
            <input type="email" value={email}
              placeholder='이메일을 입력하세요'
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="password" value={password}
              placeholder='비밀번호는 6자리 이상입니다'
              required
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit">로그인</button>
            <button onClick={handleGoogleLogin}>Google 로그인</button>
            <button className="kakao" onClick={handleKakaoLogin}>Kakao 로그인</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login