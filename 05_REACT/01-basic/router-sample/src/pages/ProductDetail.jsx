import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    return (
        <div className='sub-page'>
            <div className='inner'>
                <h2>Product Detail</h2>
                <p>상품의 id:</p>
            </div>

        </div>
    )
}

export default ProductDetail
