import React, { useContext } from 'react'
import { ColorContext } from '../context/ColorConText';

const ColorSelect = () => {
    const {color, setColor} = useContext(ColorContext);
  return (
    <div>
      <input type="color" value={color} onChange={(event) => setColor(event.target.value)}/>
    </div>
  )
}

export default ColorSelect
