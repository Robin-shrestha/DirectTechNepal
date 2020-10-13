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
import DirectTechLogo from "../../media/logo/DT-logo-1.png";
import DirectTechLogo1 from "../../media/logo/DT-logo-2.png";
import DirectTechLogo2 from "../../media/logo/DT-logo-3.png";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  appbar: {
    // opacity: "25%",
    backgroundColor: "#E5E3DE",
    height: 60,
    [theme.breakpoints.down(780)]: {
      height: "60px",
    },
    [theme.breakpoints.down(500)]: {
      backgroundColor: "rgba(238, 238, 238, 1)",
      position: "static",
    },
  },
  menuButton: {
    [theme.breakpoints.up(780)]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
  },
  logoContainer: { flexGrow: 3, textAlign: "center" },
  logo: {
    height: "50px",
    padding: "4px",
  },

  navContainer: {
    flexGrow: 1,
    textAlign: "right",
    borderRight: "2px solid black",
    [theme.breakpoints.down(780)]: {
      display: "none",
    },
  },
  navbuttons: {
    fontSize: 20,
    color: "#111",
  },
  socialMediaContainer: {
    padding: theme.spacing(0, 0, 0, 1),
    // color: "white",
    flexGrow: 1,
    [theme.breakpoints.down(780)]: {
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
      <AppBar position="static" color="transparent" className={classes.appbar}>
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
          <div className={classes.logoContainer}>
            <img src={DirectTechLogo} alt="logo" className={classes.logo} />
            <img src={DirectTechLogo1} alt="logo" className={classes.logo} />
            <img src={DirectTechLogo2} alt="logo" className={classes.logo} />
          </div>
          {/* <div style={{ display: "hidden", flexGrow: 1 }}></div> */}
          <div className={classes.navContainer}>
            <Button className={classes.navbuttons}>Home</Button>
            <Button className={classes.navbuttons}>About Us</Button>
            <Button className={classes.navbuttons}>Contacts</Button>
            <Button className={classes.navbuttons}>Gallery</Button>
          </div>
          <div className={classes.socialMediaContainer}>
            <Link
              href="https://www.facebook.com/directtechnepal/"
              color="inherit"
            >
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
            </Link>
            <Link
              href="https://www.instagram.com/directtechnepal/"
              color="inherit"
            >
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
            </Link>
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
