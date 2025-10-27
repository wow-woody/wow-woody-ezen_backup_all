import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext';

const FruitsShow = () => {
    const { fruits, text } = useContext(SearchContext);
    // 입력한 데이터가 들어있는 요소를 찾아서 새로운 배열로 만들기
    const filtered = fruits.filter(item => item.toLowerCase().includes(text.toLowerCase()));
    return (
        <ul>
            {filtered.map(item => 
                <li key={item}>{item}</li>
            )}
        </ul>
    );
}

export default FruitsShow
