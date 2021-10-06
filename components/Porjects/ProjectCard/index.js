import React, { useContext } from "react";
import AppContext from "../../../context";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import { Typography, Button } from "@material-ui/core";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Image from "next/image";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "50px",
  },
  projectImage: {
    height: "526px",
    width: "496px",
    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    // flex: '1 0 auto',
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  button: {
    borderRadius: "20px",
    width: "30%",
  },
  textDivider: {
    margin: "20px",
  },
}));

export default function ProjectCard({
  projectTitle,
  projectIntro,
  projectImgPath,
  github,
  demo,
}) {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const { setCurrentProject } = useContext(AppContext);

  function handleDirectToProject() {
    setCurrentProject({
      projectTitle,
      projectIntro,
      projectImgPath,
      github,
      demo,
    });
    router.push("/project");
  }

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.textDivider}>
            <Typography component="h5" variant="h5">
              {projectTitle}
            </Typography>
          </div>
          <div className={classes.textDivider}>
            <Typography variant="subtitle1" color="textSecondary">
              {projectIntro}
            </Typography>
          </div>
          <div className={classes.textDivider}>
            <Button
              onClick={handleDirectToProject}
              className={classes.button}
              variant="outlined"
            >
              View Porject
            </Button>
          </div>
        </CardContent>
      </div>
      <img className={classes.projectImage} src={projectImgPath} />
      <CardMedia
        className={classes.cover}
        title="Live from space album cover"
      />
    </Card>
  );
}
