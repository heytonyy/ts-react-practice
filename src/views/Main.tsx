import React from 'react'
import InputTodo from '../components/InputTodo'
import Header from '../components/Header'
import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../theme/theme'
import { TodoProvider } from '../context/todoContext'
import TodoList from '../components/TodoList'

const StyledContainer = styled(Container)(({ theme }) => ({
    background: theme.palette.divider,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    width: '80%',
    margin: `${theme.spacing(10)} auto`,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
}))

const Main: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <TodoProvider>
                <StyledContainer>
                    <Header />
                    <InputTodo />
                    <TodoList />
                </StyledContainer>
            </TodoProvider>
        </ThemeProvider>
    )
}

export default Main