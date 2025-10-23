import React from 'react'

const user = [
    {id: 1, name: '홍길동', gender:true},
    {id: 2, name: '이영희', gender:false},
    {id: 3, name: '이나라', gender:false},
    {id: 4, name: '짱구', gender:true}
];

const manUsers = user.filter( (user) => user.gender === true );

const List6Filter = () => {
  return (
    <div>
      <h2>리스트 필터</h2>
      <p>조건에 맞는요소 추출</p>
      <ul>
        {manUsers.map(man => 
            <li key={man.id}>{man.name}</li>
        )}

      </ul>
    </div>
  )
}

export default List6Filter
