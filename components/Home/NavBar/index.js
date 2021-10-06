import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HambergerMenu from "./hambergerManu";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBar: {
    background: "none",
  },

  title: {
    flexGrow: 1,
    color: "black",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const isHamburger = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  function redirectAbout() {
    router.push("/about");
  }
  function redirectProject() {
    router.push("/home");
  }

  return (
    <div className={classes.root}>
      <AppBar elevation={0} className={classes.navBar} position="sticky">
        <Toolbar>
          <HambergerMenu />
          <Typography variant="h6" className={classes.title}>
            Hana Cai
          </Typography>
          {!isHamburger ? (
            <div>
              <Button onClick={redirectAbout} color="black">
                About
              </Button>
              <Button onClick={redirectProject} color="black">
                Porjects
              </Button>
              <Button color="black">Contact</Button>
            </div>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
