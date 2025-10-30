import React from 'react'

const SkillCard = ({title, des, level}) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{des}</p>
      <div>{level}%</div>
    </>
  )
}

export default SkillCard
