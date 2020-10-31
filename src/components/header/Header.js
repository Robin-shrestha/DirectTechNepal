import React, { useState } from "react";

import { AppBar, Toolbar, IconButton, Button, Link } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";
import NavDrawer from "./drawer/NavDrawer";
import DirectTechLogo3 from "../../media/logo/DT-logo-4.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/authActions";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  appbar: {
    height: 60,
  },
  menuButton: {
    color: "white",
    [theme.breakpoints.up("sm")]: {
      color: "white",

      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
  },
  logoContainer: { flexGrow: 5, textAlign: "left" },
  logo: {
    height: "50px",
    padding: "4px",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 160,
    },
  },

  navContainer: {
    display: "flex",
    color: "white",
    flexGrow: 1,
    textAlign: "center",
    // borderRight: "2px solid white",
    [theme.breakpoints.down(600)]: {
      display: "none",
    },
  },
  navbuttons: {
    fontSize: 16,
    color: "inherit",
    padding: theme.spacing(0, 2, 0, 2),
    "&:hover": {
      borderBottom: "solid 2px red",
    },
    "&:focus": {
      borderBottom: "solid 2px red",
    },
  },
  // socialMediaContainer: {
  //   padding: theme.spacing(0, 0, 0, 1),
  //   color: "white",

  //   // color: "white",
  //   flexGrow: 1,
  //   [theme.breakpoints.down(780)]: {
  //     display: "none",
  //   },
  // },
}));

const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const classes = styles();
  const [drawerState, setDrawerState] = useState(false);

  const logoutHandler = () => {
    dispatch(logout());
  };
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
      <AppBar
        position="absolute"
        color="transparent"
        className={classes.appbar}
        elevation={1}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logoContainer}>
            <Link component={RouterLink} to="/">
              <img src={DirectTechLogo3} alt="logo" className={classes.logo} />
            </Link>
          </div>
          {/* <div style={{ display: "hidden", flexGrow: 1 }}></div> */}
          <div className={classes.navContainer}>
            <Button
              className={classes.navbuttons}
              component={RouterLink}
              to="/"
            >
              Home
            </Button>
            <Button
              className={classes.navbuttons}
              component={RouterLink}
              to="/about"
            >
              About Us
            </Button>
            <Button
              component={RouterLink}
              to="/contactus"
              className={classes.navbuttons}
            >
              Contacts
            </Button>
            <Button
              to="/gallery"
              component={RouterLink}
              className={classes.navbuttons}
            >
              Gallery
            </Button>
            {auth.isAuthenticated ? (
              <>
                <Button onClick={logoutHandler} className={classes.navbuttons}>
                  Logout
                </Button>
                <Button
                  to="/setting"
                  component={RouterLink}
                  className={classes.navbuttons}
                >
                  Setting
                </Button>
              </>
            ) : (
              <Button
                to="/login"
                component={RouterLink}
                className={classes.navbuttons}
              >
                Login
              </Button>
            )}
          </div>
          {/* <div className={classes.socialMediaContainer}>
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
          </div> */}
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
