import React, { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import "../css/googleFonts.css"
import { useTodo, TodoType } from '../context/todoContext'
import { Types } from '../context/todoReducer'

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(1),
    gap: theme.spacing(1),
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
    borderRadius: theme.spacing(1),
    width: '100%',

    '& .MuiInputBase-input': {
        background: "white",
        fontFamily: theme.typography.h1.fontFamily,
    },
    '& .MuiInputBase-input:focus': {
        border: theme.palette.primary.main,
    },
}))

const AddButton = styled(Button)(({ theme }) => ({
    background: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    color: "white",
    textAlign: 'center',

    '&:hover': {
        background: theme.palette.primary.light,
    },
}))

const SuggestButton = styled(Button)(({ theme }) => ({
    background: theme.palette.secondary.main,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    color: "white",
    textAlign: 'center',

    '&:hover': {
        background: theme.palette.secondary.light,
    },
}))

const InputTodo: React.FC = () => {
    const [todo, setTodo] = useState<string>("")
    const { dispatch } = useTodo()

    const handleAdd = () => {
        const newTodo: TodoType = {
            id: crypto.randomUUID(),
            title: todo,
            completed: false,
        }
        dispatch({ type: Types.Add, payload: newTodo })
        console.log(newTodo)
        setTodo("");
    }

    return (
        <StyledBox>
            <StyledTextField
                onChange={(e) => setTodo(e.target.value)}
                value={todo} />
            <AddButton onClick={handleAdd}>Add</AddButton>
            <SuggestButton>Suggest</SuggestButton>
        </StyledBox>
    )
}

export default InputTodo