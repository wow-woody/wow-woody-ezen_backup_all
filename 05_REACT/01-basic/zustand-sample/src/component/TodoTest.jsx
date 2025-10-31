import React from 'react'
import { useList } from '../store/useList'

const TodoTest = () => {

    // 1. zustand에서 상태와 메서드 가져오기
    const { text1, items, onText1, onAdd } = useList();

    // 2. 입력한 글자의 추가 버튼을 클릭하면 배열에 넣기
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd();
        console.log("호출");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={text1}
                    onChange={(e) => onText1(e.target.value)}
                />
                <button type='submit'>추가</button>
            </form>
            <ul>
                {items.map((todo, index) => 
                    <li key={index}>{todo}</li>
                )}

            </ul>
        </div>
    )
}

export default TodoTest
