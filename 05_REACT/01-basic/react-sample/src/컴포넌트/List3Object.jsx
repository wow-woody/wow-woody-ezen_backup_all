import React from 'react'
import { drinks } from './data/Data';
import DrinkList from './DrinkList';

//음료의 목록을 보여줄 li태그 컴포넌트 생성

// function DrinkList({name, img, cont }) {
//     return (
//         <>
//             <li>
//                 <p><img src={img} alt="" /></p>
//                 <h2>{name}</h2>
//                 <p>{cont}</p>
//             </li>
//         </>
//     )
// };


const List3Object = () => {
    return (
        <div>
            <h2>음료 리스트</h2>
            <ul className="drink-list">
                {drinks.map(drink => (
                    <DrinkList 
                        key={drink.id}
                        name={drink.name}
                        img={drink.imageId}
                        cont={drink.accomplishment} 
                         />
                ))};
            </ul>
        </div>
    )
}

export default List3Object
