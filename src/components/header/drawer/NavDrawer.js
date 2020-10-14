import React, { useState } from "react";
import clsx from "clsx";
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
import { Link as RouterLink } from "react-router-dom";

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
  const classes = useStyles();
  const { drawerState, setDrawerState, toggleDrawer } = props;

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
        <ListItem button>
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <ListItemText>Contact Us</ListItemText>
        </ListItem>
        <ListItem button>
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
