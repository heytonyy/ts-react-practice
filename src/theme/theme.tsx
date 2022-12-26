import { createTheme } from '@mui/material/styles'
import '../css/googleFonts.css'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#03a9f4',
        },
        secondary: {
            main: '#ff80ab',
        },
        error: {
            main: '#d50000',
        },
        info: {
            main: '#00bfa5',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Carter One',
        },
        h2: {
            fontFamily: 'Carter One',
        },
        button: {
            fontFamily: 'Carter One',
        },
        h3: {
            fontFamily: 'Carter One',
        },
        h4: {
            fontFamily: 'Carter One',
        },
        h5: {
            fontFamily: 'Carter One',
        },
        h6: {
            fontFamily: 'Carter One',
        },
        subtitle1: {
            fontFamily: 'Droid Sans',
        },
        subtitle2: {
            fontFamily: 'Droid Sans',
        },
        overline: {
            fontFamily: 'Droid Sans',
        },
    }
})