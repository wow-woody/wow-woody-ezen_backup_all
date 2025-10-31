import React from 'react'
import { useTodoState } from '../store/useTodoState'

const TodoList = () => {
  const { todos, onToggle, onTodoDelete } = useTodoState();
  return (
    <div className='todo-list-wrap'>
      <ul className='todo-list'>
        {todos.map(todo => (
          <li key={todo.id}>
            <span className={todo.completed ? 'line' : ''}
              onClick={() => onToggle(todo.id)}>
              {todo.text}</span>
            <button onClick={() =>onTodoDelete(todo.id)}>X</button>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default TodoList
