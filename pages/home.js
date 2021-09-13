import NavBar from '../components/Home/NavBar';
import IntroCard from '../components/Home/IntroCard';
import ProjectCard from '../components/Porjects/ProjectCard';
import Footer from '../components/footer/footer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Grid, Typography } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    projectText: {
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
    profitPic: {
        height: '629px',
        width: '1000px',
    },


}));

export default function Home() {
    const classes = useStyles();
    const theme = useTheme();

    return (<>
        <NavBar />
        <Container>
            <Grid container>
                <Grid md={8}>
                    <IntroCard />
                </Grid>
                <Grid md={4}>
                    <img className={classes.profitPic} src="/profitPic.png" />
                </Grid>
            </Grid>
            <Typography align='center' className={classes.projectText}>Projects</Typography>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <Footer />
        </Container>
    </>)

}