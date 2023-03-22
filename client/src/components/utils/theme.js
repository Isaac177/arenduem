// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#05ce9f', // aqua-500
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#05ce9f',
                    },
                },
                notchedOutline: {
                    '&.Mui-focused': {
                        borderColor: '#05ce9f',
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: '#05ce9f',
                    },
                },
            },
        },
    },
});

export default theme;
