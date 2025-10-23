import React from 'react'

const List1 = () => {

    // 1. 배열 데이터 만들기
    let fruits = ['사과', '배', '바나나'];


    // 3. 배열 데이터 붙일 내용 - DOM 구조 jsx 문법
  return (
    <div>
      <h2>리스트 보여주기</h2>
      <p>배열에 데이터를 조작하여 새롭게 만들기</p>
      <p>배열 데이터를 li 목록으로 만들기</p>

      <ul>
        {/* map 작성 방법 */}
        {/*     배열명.map(배열데이터 저장변수, 순서 저장변수, 배열명) => {}; */}
      
        {/* map 작성 방법 - return 사용 안 할 때는 {} 중괄호 안쓰고 가능 중괄호를 ()소괄호로 대체*/}
        {/*     
                배열명.map((배열데이터 저장변수, 순서 저장변수, 배열명) => 실행할 문장
                    배열명.map()=>{
                        return 반환값        
                    }); 
        */}
        {/* 배열데이터를 렌더링할 때는 드시 key값을 속성으로 넣기*/}
        {fruits.map((item, id) => <li key={id}>{item}</li> )};
      </ul>

    </div>
  )
}

export default List1
