import React from 'react'
import { TodoType } from '../context/todoContext'
import { Box } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles'
import { useTodo } from '../context/todoContext'
import { Types } from '../context/todoReducer'
import primaryBg from '../assets/primary-bg.svg'
import secondaryBg from '../assets/secondary-bg.svg'

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundImage: `url(${primaryBg})`,
    boxShadow: '0 0 5px black',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    margin: theme.spacing(1),
}))

const IconMenu = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1),
}))

const StyledCheckIcon = styled(CheckIcon)(({ theme }) => ({
    transition: 'all 0.3s ease-in-out',

    '&:hover': {
        boxShadow: '0 0 5px black',
        transform: 'scale(1.03)',
    }
}))

const StyledEditIcon = styled(EditIcon)(({ theme }) => ({
    transition: 'all 0.3s ease-in-out',

    '&:hover': {
        boxShadow: '0 0 5px black',
        transform: 'scale(1.03)',
    }
}))

const StyledDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
    transition: 'all 0.3s ease-in-out',

    '&:hover': {
        boxShadow: '0 0 5px black',
        transform: 'scale(1.03)',
    }
}))

interface Props {
    data: TodoType;
}

const OneTodo: React.FC<Props> = ({ data }) => {
    const { id, title, completed } = data
    const { dispatch } = useTodo()

    const deleteTodo = () => {
        dispatch({ type: Types.Delete, payload: { id } })
    }

    const completeTodo = () => {
        dispatch({ type: Types.Toggle, payload: { id } })
    }

    return (
        <StyledBox>
            {
                completed ? <s>{title}</s> : title
            }
            <IconMenu>
                <StyledEditIcon />
                <StyledDeleteIcon onClick={deleteTodo} />
                <StyledCheckIcon onClick={completeTodo}/>
            </IconMenu>
        </StyledBox>
    )
}

export default OneTodo