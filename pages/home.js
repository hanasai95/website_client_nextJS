import NavBar from "../components/Home/NavBar";
import IntroCard from "../components/Home/IntroCard";
import ProjectCard from "../components/Porjects/ProjectCard";
import Footer from "../components/footer/footer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
    height: "629px",
    width: "1000px",
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const ProjectListComponents = generateProjectCard(projectData);

  return (
    <>
      <NavBar />
      <Container>
        <Grid container>
          <Grid item md={8}>
            <IntroCard />
          </Grid>
          <Grid item md={4}>
            <img className={classes.profitPic} src="/profitPic.png" />
          </Grid>
        </Grid>
        <Typography align="center" className={classes.projectText}>
          Projects
        </Typography>
        {ProjectListComponents}
        {/* <ProjectCard />
            <ProjectCard />
            <ProjectCard /> */}

        <Footer />
      </Container>
    </>
  );
}

function generateProjectCard(data) {
  return data.map((project) => (
    <ProjectCard
      projectTitle={project.title}
      projectIntro={project.intro}
      projectImgPath={project.imgPath}
      github={project.github}
      demo={project.demo}
    />
  ));
}

const projectData = [
  {
    title: "Ecommerce Project build with NextJS",
    intro:
      " This is a E-commerce Typescript NextJS app that allows user to buy betta fish online, functions including add to cart and check out",
    imgPath: "/e-comerce-home.png",
    github: "https://github.com/hanasai95/rick-and-morty-wiki-NextJS",
    demo: "https://rick-and-morty-wiki-next-js.vercel.app/",
  },
  {
    title: "Rick and Morty Wiki build with NextJS",
    intro:
      " This is a NextJS app thats shows all characters from the show 'Rick and Morty Wiki', it allowas user to search characters by name, and load more.",
    imgPath: "/rick-main.png",
    github: " https://github.com/hanasai95/movies-tags",
    demo: "https://movies-tags.vercel.app/",
  },
  {
    title: "Movie tags build with ReactJS",
    intro:
      " This is an exercise app that allows a user to save tags for movies in a single page list. An movie can have a maximum of 5 tags and is removable, but not editable. Each movie in the list displays the name of the movie and date. Tags is persisted so that the tags remain across browser sessions. The list is also filterable by user defined tags through a simple search. The UI components are all created by pure css, without using any third party libraries",
    imgPath: "/tag-main.png",
    github: "https://github.com/hanasai95/ecomerce-project-nextjs-app",
    demo: "https://ecomerce-project-nextjs-app-rlq7v436g-hanasai95.vercel.app/",
  },
];
