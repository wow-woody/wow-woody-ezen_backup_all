import React from 'react'

const ColorSelectNone = ({ sendColor, onSendChange }) => {
    return (
        <div>
            <input
                type="color"
                value={sendColor}
                onChange={(event) => onSendChange(event.target.value)} />
        </div>
    )
}

export default ColorSelectNone
