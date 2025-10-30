import React from 'react'
import { useContext } from 'react'
import { ColorContext } from '../context/ColorConText';

const ColorDisplayChild = () => {
    const { color } = useContext(ColorContext);
    return (
        <div style={{ background: color, width: 100 }}>
            ColorDisplay
        </div>
    )
}

export default ColorDisplayChild
