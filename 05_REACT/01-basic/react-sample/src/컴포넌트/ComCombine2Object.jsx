import React from 'react';
import { personData } from './data/personData';


function Profile({ name, img }) {
    return (
        <>
            <li>
                <h2>{name}</h2>
                <p><img
                    src={img}
                    alt="" />
                </p>
            </li>
        </>
    );
};


const ComCombine2Object = () => {
    return (
        <div>
            <h2>오브젝트 값을 합성 연습</h2>
            <ul className="item-list">
                {personData.map(p => {
                    return <Profile name={p.name} img={p.img} />
                })}
            </ul>
        </div>
    )

};

export default ComCombine2Object;

<li>
    <p><img src="" alt="" /></p>
    <h3>이름</h3>
    <p>가격</p>
</li>