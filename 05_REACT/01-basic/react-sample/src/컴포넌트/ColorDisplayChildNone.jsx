import React from 'react'

const ColorDisplayChildNone = ({color}) => {
  return (
    <div style={{background:color, width:200}}>
      <p>ColorDisplayChildNoneb<br />선택된 색상 : {color}</p>
        <span></span>
    </div>
  )
}

export default ColorDisplayChildNone
