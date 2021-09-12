// import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh',
//     },
//     main: {
//         marginTop: theme.spacing(8),
//         marginBottom: theme.spacing(2),
//     },
//     footer: {
//         padding: theme.spacing(3, 2),
//         marginTop: 'auto',
//         backgroundColor:
//             theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
//     },
// }));

// export default function StickyFooter() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <CssBaseline />

//             <footer className={classes.footer}>
//                 <Container maxWidth="sm">
//                     <Typography variant="body1">My sticky footer can be found here.</Typography>
//                     <Copyright />
//                 </Container>
//             </footer>
//         </div>
//     );
// }

import React from "react";
import { render } from "react-dom";

const footerStyle = {
    backgroundColor: "purple",
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
};

const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
};

export default function Footer({ children }) {
    return (
        <div>
            <div style={phantomStyle} />
            <div style={footerStyle}>{children}</div>
        </div>
    );
}