import NavBar from '../components/Home/NavBar';
import IntroCard from '../components/Home/IntroCard';
import ProjectCard from '../components/Porjects/ProjectCard';
import Footer from '../components/footer/footer';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    profitPic: {
        height: '500px',
        width: '300px',
    },
}));

export default function Home() {
    const classes = useStyles();
    const theme = useTheme();

    return (<>
        <NavBar />
        <img className={classes.profitPic} src="/profitPic.png" />
        <IntroCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <Footer />
    </>)
}