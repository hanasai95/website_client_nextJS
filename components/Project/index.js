import React, {
  useEffect,
  Fragment,
  useContext,
  useImperativeHandle,
} from "react";
import Introduction from "./Introduction";
import ProjectPhoto from "./ProjectPhotoDisplay";
import AppContext from "../../context";
import { Typography, Button } from "@material-ui/core";
import { useRouter } from "next/router";

export default function ProjectComponents() {
  const { currentProject } = useContext(AppContext);
  const router = useRouter();

  const { projectTitle, projectIntro, projectImgPath, github, demo } =
    currentProject;
  useEffect(() => {
    if (!projectTitle || !projectIntro || !projectImgPath || !github || !demo)
      router.push("/home");
  }, [projectImgPath]);
  console.log("test", {
    projectTitle,
    projectIntro,
    projectImgPath,
    github,
    demo,
  });
  function handleRedirectGithub() {
    router.push(github);
  }
  function handleRedirectDemo() {
    router.push(demo);
  }

  return (
    <Fragment>
      <Typography align="center" variant="h4">
        {projectTitle}
      </Typography>
      <Introduction projectIntro={projectIntro} />
      {projectImgPath && <ProjectPhoto projectImgPath={projectImgPath} />}
      <Button onClick={handleRedirectGithub} variant="outlined" color="primary">
        Github
      </Button>
      <Button onClick={handleRedirectDemo} variant="contained" color="primary">
        Demo URL
      </Button>
    </Fragment>
  );
}
