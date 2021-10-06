import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

const introText = {};

export default function Introduction({ projectIntro }) {
  return (
    <Fragment>
      <Typography align="left" className={introText}>
        {projectIntro}
      </Typography>
    </Fragment>
  );
}
