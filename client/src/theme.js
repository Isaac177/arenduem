import { createTheme } from '@mui/material/styles';

const Colors = {
    primaryAqua: '#19BA99',
    primaryGrey: '#BDC3C7',
}

const Sizes = {
    height: '48px',
}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primaryAqua,
        }
    },
    components: {
        MuiTextField: {
            root: {
                height: Sizes.height,
            },
            variants: [{
                props: {variant: 'filled'},
                style: {
                    backgroundColor: Colors.primaryGrey,
                }
            }]
        }
    }
});

export default theme;