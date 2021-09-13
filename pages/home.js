import NavBar from '../components/Home/NavBar';
import IntroCard from '../components/Home/IntroCard';
import ProjectCard from '../components/Porjects/ProjectCard';
import Footer from '../components/footer/footer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({

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
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <Footer />
        </Container>
    </>)

}