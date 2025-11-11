// import React from 'react'
import '../components/scss/title.scss'

const Title = ({title, subTitle}) => {
  return (
    <div className='title-box'>
        <h2 className='section-title'>{title}</h2>
        <p className='section-sub-Title'>{subTitle}</p>
      
    </div>
  )
}

export default Title
