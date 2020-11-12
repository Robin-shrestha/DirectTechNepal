import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import dt from "../../media/Icon/DT-logo-1.png";

const styles = makeStyles((theme) => ({
  root: {
    // paddingTop: theme.spacing(5),
    backgroundColor: "white",
    minHeight: "100vh",
    // padding: theme.spacing(2, 0, 2, 0),
    color: "white",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(0),
    },
  },
  topContainer: {
    padding: theme.spacing(3, 0, 3, 0),
    backgroundColor: "#FBA642",
    border: "1px solid inherit ",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  aboutUsContainer: {
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    placeContent: "center",
  },
  aboutUsImgContainer: {
    marginBottom: theme.spacing(3),
    height: 400,
    width: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  aboutUsPara: {
    backgroundColor: "inherit",
    color: "white",
    padding: theme.spacing(0, 3, 0, 3),
  },
  topicHeaders: {
    // background: "#eee",
    // width: "100%",
    color: "white",
    fontWeight: "bold",
  },
}));
const About = () => {
  const classes = styles();
  return (
    <>
      <div style={{ height: 60, backgroundColor: "black" }} />
      <div className={classes.root} id="#about">
        <Grid container>
          <Grid item container sm={12} className={classes.topContainer}>
            <Grid item sm={12} md={6} className={classes.aboutUsContainer}>
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                className={classes.topicHeaders}
              >
                WHO ARE WE
              </Typography>
              <div>
                <Typography
                  variant="body1"
                  paragraph
                  className={classes.aboutUsPara}
                >
                  The ambitious team startup with fresh insights. We work in
                  website development, Social media marketing, and Graphic
                  Design. Providing services and accepting their demands of
                  creating websites, marketing, and graphic design is our first
                  priority. We opt to satisfy customer needs by providing
                  flexibility in their challenging projects with decision-making
                  procedures. Helping you effortlessly manage your demands
                  without any delay, we work together to give a reliable product
                  to our customers. You can see our works demo and then take the
                  decision on your own. We work from minor to major projects.
                  So, are you ready to go?
                </Typography>
              </div>
            </Grid>
            <Grid item sm={12} md={6} style={{}}>
              <div
                className={classes.aboutUsImgContainer}
                style={{ backgroundImage: `url(${dt})` }}
              ></div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <dib style={{ flexGrow: 1 }} />
    </>
  );
};

export default About;
