import React from "react";
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";
import logo from "../../media/logo/logo.png";

import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";
import InstagramIcon from "@material-ui/icons/Instagram";
import DirectTechLogo from "../../media/Icon/Direct-Tech-logo.png";

const styles = makeStyles((theme) => ({
  root: { padding: theme.spacing(3), backgroundColor: "#e5e3de" },
  image: { height: "200px", width: "200px", marginBottom: theme.spacing(2) },
  contactsContainer: { textAlign: "left" },
  contacts: { display: "flex", alignSelf: "flex-start" },
}));
const Footer = () => {
  const classes = styles();
  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className={classes.contactsContainer}>
              <img src={DirectTechLogo} className={classes.image} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={classes.contacts}>
                  <PhoneIcon />
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ paddingLeft: "8px" }}
                  >
                    9841xxxxxx
                  </Typography>
                </div>
                <div className={classes.contacts}>
                  <FacebookIcon />

                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ paddingLeft: "8px" }}
                  >
                    <Link
                      href="https://www.facebook.com/directtechnepal"
                      color="inherit"
                    >
                      /directtechnepal
                    </Link>
                  </Typography>
                </div>
                <div className={classes.contacts}>
                  <InstagramIcon />
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ paddingLeft: "8px" }}
                  >
                    <Link
                      href="https://www.instagram.com/directtechnepal/"
                      color="inherit"
                    >
                      @directtechnepal
                    </Link>
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Paper>
  );
};

export default Footer;
