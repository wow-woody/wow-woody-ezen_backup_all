import React from 'react'
import { useInput } from '../store/useInput'

const TextInput = () => {

    const {text, onText} = useInput();

    return (
        <div>
            <h2>입력값 : {text}</h2>
            <input value={text}
                onChange={(e) =>onText(e.target.value)} />
        </div>
    )
}

export default TextInput
