import React from 'react'
import { useTodo } from '../context/todoContext'
import { Box } from '@mui/material'

const DisplayTodo = () => {
  const { state } = useTodo()

  return (
    <Box>
      {
        state.todoList.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))
      }
    </Box>
  )
}

export default DisplayTodo