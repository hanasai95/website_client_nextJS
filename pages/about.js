import { Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import NavBar from "../components/Home/NavBar";
import Footer from "../components/footer/footer";

export default function About() {
  return (
    <Fragment>
      <NavBar />
      <Typography align="center" variant="h3">
        About
      </Typography>
      <Typography align="center">Intro</Typography>
      <Footer />
    </Fragment>
  );
}
