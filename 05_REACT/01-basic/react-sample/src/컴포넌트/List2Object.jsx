import React from 'react'


// 변수 컴퍼넌트 밖에, 안에 어디에 만들어도 상관없음
//참조할 변수
const skillList = [
    { id: 1, title: 'HTML', content: '홈페이지 구조를 나타낼 때 사용' },
    { id: 2, title: 'CSS', content: '홈페이지 디자인을 할 때 사용' },
    { id: 3, title: 'JavaScript', content: '홈페이지에 동적인 기능을 넣을 때 사용' },
    { id: 4, title: 'React', content: '실시간 체크, 가상돔 사용, 컴포넌트 사용으로 효율적인 화면구성을 할 때 사용' },
];
const List2Object = () => {
    // 1. 상태변수 - 변경되는 변수

    return (
        <div>
            <h2>프론트엔드 스킨</h2>
            <ul className='skill-list'>

                {skillList.map((skill) => (
                    <li key={skill.id}>
                        <h3>{skill.title}</h3>
                        <p>{skill.content}</p>
                    </li>
                ))};
            </ul>

        </div>
    )
}



export default List2Object
