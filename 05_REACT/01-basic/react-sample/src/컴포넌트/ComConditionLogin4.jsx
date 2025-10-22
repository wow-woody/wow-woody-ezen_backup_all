import React,{useState} from 'react'

const ComConditionLogin4 = () => {
    // 로그인 상태를 타나낼 컴포넌트
    function Login() {
        return (
            <div>
                <button>로그아웃</button>
                <p>홍길동님 환영합니다.</p>
            </div>
        );
    };

    // 로그아웃 상태를 나타낼 컴포넌트
    function Logout() {
        return (
            <div>
                <button>로그인</button>
                <p>로그아웃 상태입니다.</p>
            </div>
        );
    };

    // 1. 상태 변수 선언(컴포넌트에 사용될 변수)
    let [login, setLogin] = useState(true); // 로그인 상태를 저장하는 변수 true/false

    // 2. 매서드 - 동작(함수) 작성

    // 3. 출력할, 붙일 내용 - DOM 구조 jsx 문법


  return (
    <div>
        <h2>로그인 예제</h2>
        {/* 변수 하나 생성 - 그 변수 안에 상태가 true이면 로그인 상태를 보여주고, 버튼은 "로그아웃" 사용자 이름 보여주고
        false 로그 아웃 상태 보여주고 -> 버튼은 "로그인 상태를 보여줌"*/}
        
        {/* login ? 참 true : 거짓 false */}
        {login ? <Login /> : <Logout />} 
        
    </div>
  );
};

export default ComConditionLogin4
