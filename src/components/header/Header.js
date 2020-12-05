import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";
import NavDrawer from "./drawer/NavDrawer";
import DirectTechLogo3 from "../../media/logo/DT-logo-4.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/authActions";
import * as routes from "../../constants/routes";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  appbar: {
    height: 60,
    transition: ".5s",
    color: "white",
  },
  appbarScroll: {
    height: 80,
    transition: ".5s",
    backgroundColor: "rgba(255,255,255,.85)",
    padding: theme.spacing(2, 0, 2, 0),
    color: "black",
  },
  menuButton: {
    color: "inherit",
    [theme.breakpoints.up(700)]: {
      color: "inherit",

      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
  },
  logoContainer: { flexGrow: 5, textAlign: "left" },
  logo: {
    // height: "100%",
    padding: "4px",
    paddingLeft: theme.spacing(7),
    [theme.breakpoints.down(700)]: {
      paddingLeft: theme.spacing(5),
    },
  },

  navContainer: {
    display: "flex",
    color: "inherit",
    flexGrow: 1,
    textAlign: "center",
    [theme.breakpoints.down(860)]: {
      flexWrap: "wrap",
    },
    [theme.breakpoints.down(700)]: {
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
}));

const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const classes = styles();
  const [drawerState, setDrawerState] = useState(false);
  const [scrollOnTop, setScrollOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 65) {
        setScrollOnTop(false);
      } else {
        setScrollOnTop(true);
      }
    };
    console.log(scrollOnTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

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
    <div className={classes.root} id="#header">
      <AppBar
        position={scrollOnTop ? "absolute" : "fixed"}
        color="transparent"
        className={scrollOnTop ? classes.appbar : classes.appbarScroll}
        elevation={scrollOnTop ? 0 : 2}
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
              <img
                src={DirectTechLogo3}
                alt="logo"
                className={classes.logo}
                height={scrollOnTop ? 50 : 80}
              />
            </Link>
          </div>
          {/* <div style={{ display: "hidden", flexGrow: 1 }}></div> */}
          <div className={classes.navContainer}>
            <Button
              className={classes.navbuttons}
              component={RouterLink}
              to={routes.home}
            >
              Home
            </Button>
            <Button
              className={classes.navbuttons}
              component={RouterLink}
              to={routes.about}
            >
              About
            </Button>
            <Button
              component={RouterLink}
              to="/#contact"
              className={classes.navbuttons}
            >
              Contacts
            </Button>
            <Button
              to={routes.gallery}
              component={RouterLink}
              className={classes.navbuttons}
            >
              Gallery
            </Button>
            <Button
              to={routes.browseBlogs}
              component={RouterLink}
              className={classes.navbuttons}
            >
              blogs
            </Button>
            {auth.isAuthenticated ? (
              <>
                <Button
                  to={routes.setting}
                  component={RouterLink}
                  className={classes.navbuttons}
                >
                  {auth.user.username}
                </Button>

                <Button onClick={logoutHandler} className={classes.navbuttons}>
                  Logout
                </Button>
              </>
            ) : (
              <Button
                to={routes.login}
                component={RouterLink}
                className={classes.navbuttons}
              >
                Login
              </Button>
            )}
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
