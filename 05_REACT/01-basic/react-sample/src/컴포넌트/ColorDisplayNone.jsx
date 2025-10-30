import React from 'react'
import ColorDisplayChildNone from './ColorDisplayChildNone'

const ColorDisplayNone = ({sendColor}) => {
  return (
    <div>
      <ColorDisplayChildNone color={sendColor} />
    </div>
  )
}

export default ColorDisplayNone