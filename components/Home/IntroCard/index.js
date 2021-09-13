
import { Typography, Button } from "@material-ui/core";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({

    firstTitle: {
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "27px",
        textTransform: "uppercase",
        color: "#5F93C9",
    },
    firstParagraph: {
        fontFamily: "Playfair Display",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "64px",
        lineHeight: "120%",
        color: "#25282B",
        order: 0,
        flexGrow: 0,
        margin: "32px 0px",
    },

    secondParagraph: {
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        lineHeight: "150%",
        color: "#828282",
        order: 0,
        flexGrow: 0,
        margin: "20px 0px",

    },
    linkedinButton: {
        background: "#5F93C9",
    },

    profitPic: {
        height: '629px',
        width: '1000px',
    },
}));



export default function IntroCard() {
    const classes = useStyles();
    return <div>
        <Typography className={classes.firstTitle}>UI developer</Typography>

        <Typography className={classes.firstParagraph}>
            Hello, My name<br />
            is Hana Cai
        </Typography>
        <Typography className={classes.secondParagraph}>Short text with details about you, <br />what you do or your professional career. You can add <br />more information on the about page.</Typography>
        <Button className={classes.linkedinButton} variant='contained' >LinkedIn</Button>
        <Button variant='outlined' >GitHub</Button>

    </div >
}

