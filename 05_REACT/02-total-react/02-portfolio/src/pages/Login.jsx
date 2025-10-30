import React from 'react'

const Login = () => {
  return (
    <div className='sub-contents'>
        <div className="content-inner">
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="이메일" required/>
                <input type="password" required/>
                <button>로그인</button>
                <button>카카오로그인</button>
                <button>아이디/비밀번호찾기</button>
            </form>
        </div>

    </div>
  )
}

export default Login