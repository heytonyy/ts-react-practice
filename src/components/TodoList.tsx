import React from 'react'
import { useTodo } from '../context/todoContext'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import OneTodo from './OneTodo'

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}))

const TodoList: React.FC = () => {
  const { state } = useTodo()

  return (
    <StyledBox>
      {
        state.todoList.map((todo) => (
          <OneTodo key={todo.id} data={todo}/>
        ))
      }
    </StyledBox>
  )
}

export default TodoList