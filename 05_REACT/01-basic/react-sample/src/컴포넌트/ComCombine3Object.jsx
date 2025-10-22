import React from 'react';
import { productData } from './data/productData';

//상품목록에 사용할 li태그 컴퍼넌트
function Product({ title, name, img, price, category, badges }) {
    return (
        <>
            <li>
                <h1>{category}</h1>
                <p>
                    <img src={img} alt="" />
                </p>
                <p>{badges}</p>
                <h2>{title}</h2>
                <p>{price}</p>
            </li>
        </>
    )
};


const ComCombine3Object = () => {
    return (
        <div>
            <h2>오브젝트 값을 합성 연습</h2>
            <ul className="product-list">
                {productData.map(p => {
                    return <Product title={p.name} img={p.image} price={p.price} category={p.category} badges={p.badges} />
                })}
            </ul>
        </div>
    )
};

export default ComCombine3Object;