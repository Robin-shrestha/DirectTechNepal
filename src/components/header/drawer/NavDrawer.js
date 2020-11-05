import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";
import GalleryIcon from "@material-ui/icons/Image";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LoginIcon from "@material-ui/icons/LockOpen";
import LogoutIcon from "@material-ui/icons/Lock";
import SettingsIcon from "@material-ui/icons/Settings";

import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../actions/authActions";

const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: "rgba(238,238,238,1)",
    height: "100%",
  },
  fullList: {
    width: "auto",
  },
  contentTitle: {
    marginTop: "1em",
  },
});

const NavDrawer = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { drawerState, toggleDrawer } = props;
  const logoutHandler = () => {
    dispatch(logout());
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        className={classes.contentTitle}
      >
        Content
      </Typography>
      <List>
        <ListItem button component={RouterLink} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button component={RouterLink} to="/about">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText>About Us</ListItemText>
        </ListItem>
        <ListItem button component={RouterLink} to="/contactus">
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <ListItemText>Contact Us</ListItemText>
        </ListItem>
        <ListItem button component={RouterLink} to="/gallery">
          <ListItemIcon>
            <GalleryIcon />
          </ListItemIcon>
          <ListItemText>Gallery</ListItemText>
        </ListItem>
      </List>

      <Divider />
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        className={classes.contentTitle}
      >
        Catch Us on
      </Typography>
      <List>
        <ListItem button>
          <ListItemIcon>
            <FacebookIcon />
          </ListItemIcon>
          <ListItemText>Facebook</ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <InstagramIcon />
          </ListItemIcon>
          <ListItemText>Instagram</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WhatsAppIcon />
          </ListItemIcon>
          <ListItemText>WhatsApp</ListItemText>
        </ListItem>
      </List>
      <Divider />
      {auth.isAuthenticated ? (
        <List>
          <ListItem button onClick={logoutHandler}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItem>
          <ListItem button component={RouterLink} to="/members/setting">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText>{auth.user.username}</ListItemText>
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem button component={RouterLink} to="/login">
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText>login</ListItemText>
          </ListItem>
        </List>
      )}
    </div>
  );

  return (
    <>
      <Drawer anchor="left" open={drawerState} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
};

export default NavDrawer;
