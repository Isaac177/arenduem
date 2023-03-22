// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00B4D8', // aqua-500
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#00B4D8',
                    },
                },
                notchedOutline: {
                    '&.Mui-focused': {
                        borderColor: '#00B4D8',
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: '#00B4D8',
                    },
                },
            },
        },
    },
});

export default theme;
