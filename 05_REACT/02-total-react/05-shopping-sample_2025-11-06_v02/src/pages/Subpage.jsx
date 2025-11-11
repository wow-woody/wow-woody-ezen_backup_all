import React from 'react'
import Title from '../components/Title'
import ProductListPage from './ProductListPage'
import Input from '../components/Input'

const Subpage = ({title,category,banner}) => {
  return (
    <div className='sub-page'>
        <div className="sub-banner">
            {banner? <img src={banner} alt={title}/> : ""}
        </div>
        <Title title={title} />
        <Input />
        <ProductListPage category={category} />
    </div>
  )
}

export default Subpage