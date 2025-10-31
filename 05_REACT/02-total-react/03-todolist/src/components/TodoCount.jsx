import React from 'react'
import { useTodoState } from '../store/useTodoState'

const TodoCount = () => {
 
  // 1. 상태 가져오기 -> useTodoState.js에서 onTodoTotal 가져오기
  const {onTodoTotal} = useTodoState();

  return (
    <div>
      <p>총 할일 : {onTodoTotal()} </p>
      <p>완료된 할 일 : {onTodoComplete()}</p>
    </div>
  )
}

export default TodoCount