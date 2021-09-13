import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },

    palette: {
        primary: indigo,
        secondary: pink,

    },
});

export default theme;