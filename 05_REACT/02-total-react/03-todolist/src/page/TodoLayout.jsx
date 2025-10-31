import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import TodoCount from '../components/TodoCount'

const TodoLayout = () => {
  return (
    <div className='todo-layout'>
      <TodoInput />
      <TodoList />
      <TodoCount />
    </div>
  )
}

export default TodoLayout
