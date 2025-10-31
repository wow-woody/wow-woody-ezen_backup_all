import React from 'react'
import { useToggle } from '../store/useToggle'

const Toggle = () => {
    const {on, onToggle} = useToggle();
    return (
        <div>
            <h2>{on ? 'ON' : 'OFF' }</h2>
            <button onClick={onToggle}>토글</button>
        </div>
    )
}

export default Toggle
