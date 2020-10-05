import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Link,
} from "@material-ui/core";

import { makeStyles, fade } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Link as RouterLink } from "react-router-dom";

import NavDrawer from "./drawer/NavDrawer";

const styles = makeStyles((theme) => ({
  root: {
    color: "white",
    flexGrow: 1,
    width: "100%",
  },
  menuButton: {
    [theme.breakpoints.up(680)]: {
      display: "none",
    },
  },
  title: { flexGrow: 3, textAlign: "center" },
  toolbar: { display: "flex", justifyContent: "space-around" },
  navContainer: {
    color: "white",
    flexGrow: 1,
    textAlign: "right",
    borderRight: "2px solid",
    [theme.breakpoints.down(680)]: {
      display: "none",
    },
  },
  navbuttons: {},
  socialMediaContainer: {
    color: "white",
    flexGrow: 1,
    [theme.breakpoints.down(680)]: {
      display: "none",
    },
  },
}));

const Header = (props) => {
  const classes = styles();
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="absolute" color="transparent">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link
              component={RouterLink}
              underline="none"
              color="inherit"
              to="/"
            >
              DIRECT TECH
            </Link>
          </Typography>
          {/* <div style={{ display: "hidden", flexGrow: 1 }}></div> */}
          <div className={classes.navContainer}>
            <Button color="inherit" className={classes.navbuttons}>
              Home
            </Button>
            <Button color="inherit" className={classes.navbuttons}>
              About Us
            </Button>
            <Button color="inherit" className={classes.navbuttons}>
              Contacts
            </Button>
            <Button color="inherit" className={classes.navbuttons}>
              Gallery
            </Button>
          </div>
          <div className={classes.socialMediaContainer}>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit">
              <WhatsAppIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <NavDrawer
        drawerState={drawerState}
        setDrawerState={setDrawerState}
        toggleDrawer={toggleDrawer}
      />{" "}
    </div>
  );
};

export default Header;
