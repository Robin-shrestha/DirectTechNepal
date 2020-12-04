import React from "react";
import { Typography, Grid, IconButton, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import facebookIcon from "../../media/Icon/facebook.png";
import instagramIcon from "../../media/Icon/instagram.png";
import * as mediaLinks from "../../constants/socialMedialLinks";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import * as routes from "../../constants/routes";

const styles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient( rgba(50, 52, 184,0.01),rgba(50, 52, 184,0.01) 10%, rgba(50, 52, 184,0.01) 10%, rgba(50, 52, 184,0.5) 50% , rgba(50, 52, 184,0.5) 50%, rgba(50, 52, 184,0.75) 100%)",
    padding: theme.spacing(15, 0, 5, 0),
  },
  lists: {
    listStyle: "none",

    padding: theme.spacing(0),
    "& li": {
      padding: theme.spacing(1),
    },
    "& a": {
      color: "rgba(12,12,12,.8)",
      textDecoration: "none",
      fontSize: 20,
    },
    "& a:hover": {
      textDecoration: "none",
      fontWeight: 600,
      cursor: "pointer",
    },
  },
  section: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginBottom: theme.spacing(5),
    },
  },
  ourServcesContainer: {
    "& h5": {},
  },
  companyContainer: {},
  aboutContainer: {
    "& p": { padding: theme.spacing(2, 0, 0, 1), color: "rgba(12,12,12,.8)" },
  },
  iconContainer: {
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(5),
    },
  },
  copyrightContainer: {
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(8),
      textAlign: "right",
    },
  },
}));
const Footer1 = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={1} />
        <Grid item container sm={10}>
          <Grid item xs={12} sm={6} lg={4}>
            <div className={clsx(classes.section, classes.ourServcesContainer)}>
              <Typography variant="h5" gutterBottom>
                Our Services
              </Typography>
              <ul className={classes.lists}>
                <li>
                  <Link component={RouterLink} to={routes.services}>
                    Web Development{" "}
                  </Link>
                </li>
                <li>
                  <Link component={RouterLink} to={routes.services}>
                    Logo Design{" "}
                  </Link>
                </li>
                <li>
                  <Link component={RouterLink} to={routes.services}>
                    Social Media marketion{" "}
                  </Link>
                </li>
                <li>
                  <Link component={RouterLink} to={routes.services}>
                    Graphic Design{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <div className={clsx(classes.section, classes.companyContainer)}>
              <Typography variant="h5" gutterBottom>
                Company
              </Typography>
              <ul className={classes.lists}>
                <li>
                  <Link component={RouterLink} to={routes.about}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link component={RouterLink} to={routes.browseBlogs}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link component={RouterLink} to="/#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} lg={5}>
            <div className={clsx(classes.section, classes.aboutContainer)}>
              <Typography variant="h5" gutterBottom>
                About DirectTech Nepal
              </Typography>
              <Typography variant="body1">
                DirectTech Nepal is a new startup company focusing on Web
                Development , Graphics Desing and Social Media Marketing. We are
                a team of inspired and motivated designers and developers. We
                love taking on challanges that requires careful thinking,
                strategy and skills so that we can deliver top notch products to
                our clients.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={clsx(classes.section, classes.iconContainer)}>
              <IconButton component={Link} href={mediaLinks.facebook}>
                <img
                  src={facebookIcon}
                  alt="fb icon"
                  style={{
                    height: 32,
                    widht: 32,
                  }}
                />
              </IconButton>
              <IconButton component={Link} href={mediaLinks.instagram}>
                <img
                  src={instagramIcon}
                  alt="ig icon"
                  style={{
                    height: 32,
                    widht: 32,
                  }}
                />{" "}
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={clsx(classes.section, classes.copyrightContainer)}>
              <Typography variant="body2">
                CopyRight @ 2020 DirectTech Nepal. All Rights Reserved{" "}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </div>
  );
};

export default Footer1;
