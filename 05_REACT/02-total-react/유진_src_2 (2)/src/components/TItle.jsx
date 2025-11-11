import React from 'react'
import "./scss/title.scss";

const TItle = ({title,subTitle}) => {
  return (
    <div className='title-box'>
        <h2 className='section-title'>{title}</h2>
        <p className='section-sub-title'>{subTitle}</p>
    </div>
  )
}

export default TItle