import React from 'react'
import { useTodoState } from '../store/useTodoState'

const TodoInput = () => {
  const {inputText, onInputText,onAddTodo} =useTodoState();
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo();
  }
  return (
    
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={inputText}
        onChange={(event) => onInputText(event.target.value)} />
      <button type="submit">추가</button>
    </form>
  )
}

export default TodoInput
