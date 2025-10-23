import React from 'react'
import { productData } from './data/productData'
import ProductItem from './ProductItem'


//한꺼번에 여러개 넣기 : 상품 목록을 보여줄 컴포넌트 함수 생성 - li 생성 목록
const List5Product = () => {
    return (
        <div>
            <h2>상품목록(배지포함)</h2>
            <ul className="product-list">
                {productData.map((item, id) =>
                    <ProductItem key={id} product = {item} />
                )}
            </ul>
        </div>
    )
}

export default List5Product
