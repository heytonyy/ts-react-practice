import React, { useState } from 'react'
import { TodoType } from '../context/todoContext'
import { Box, Typography, TextField } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles'
import { useTodo } from '../context/todoContext'
import { Types } from '../context/todoReducer'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    background: `linear-gradient(90deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    margin: theme.spacing(1),

    transition: 'all 0.3s ease-in-out',

    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: `0px 0px 10px 0px ${theme.palette.grey[300]}`,
    }
}))

const IconMenu = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(1),
}))

const StyledUncheckedIcon = styled(CheckBoxOutlineBlankIcon)(({ theme }) => ({
    transition: 'all 0.3s ease-in-out',

    '&:hover': {
        transform: 'scale(1.1)',
    }
}))

const StyledEditIcon = styled(EditIcon)(({ theme }) => ({
    transition: 'all 0.3s ease-in-out',

    '&:hover': {
        transform: 'scale(1.1)',
    }
}))

const StyledDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
    transition: 'all 0.3s ease-in-out',

    '&:hover': {
        transform: 'scale(1.1)',
    }
}))

const StyledCheckedIcon = styled(CheckBoxIcon)(({ theme }) => ({
    transition: 'all 0.3s ease-in-out',

    '&:hover': {
        transform: 'scale(1.1)',
    }
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
}))


interface Props {
    data: TodoType;
}

const OneTodo: React.FC<Props> = ({ data }) => {
    const { id, title, completed } = data
    const { dispatch } = useTodo()
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(title);

    const deleteTodo = () => {
        dispatch({ type: Types.Delete, payload: { id } })
    }

    const completeTodo = () => {
        dispatch({ type: Types.Toggle, payload: { id } })
    }

    const toggleEdit = () => {
        if (!edit && !completed) {
            setEdit(!edit)
        }
    }

    const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: Types.Edit, payload: { id, title: editTodo } });
        setEdit(false);
    }

    return (
        <form onSubmit={handleEdit}>
            <StyledBox>
                <Typography variant="subtitle1">
                    {
                        edit ?
                            <StyledTextField value={editTodo} onChange={(e) => setEditTodo(e.target.value)} size="small" />
                            : <> {completed ? <s>{title}</s> : title} </>
                    }
                </Typography>
                <IconMenu>
                    {
                        completed ? <StyledCheckedIcon onClick={completeTodo} /> :
                            <StyledUncheckedIcon onClick={completeTodo} />
                    }
                    <StyledEditIcon onClick={toggleEdit} />
                    <StyledDeleteIcon onClick={deleteTodo} />
                </IconMenu>
            </StyledBox>
        </form>
    )
}


export default OneTodo