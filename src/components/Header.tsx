import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledBox = styled(Box)(({theme}) => ({
    fontFamily: theme.typography.h1.fontFamily,
    textAlign: 'center',
    fontSize: theme.typography.h3.fontSize,
}))

const Header: React.FC = () => {
    return (
        <StyledBox>
            Todo List
        </StyledBox>
    )
}

export default Header