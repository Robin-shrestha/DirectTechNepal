import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import dt from "../../media/Icon/DT-logo-1.png";
import CoreValues from "./CoreValues";

const styles = makeStyles((theme) => ({
  root: { marginTop: theme.spacing(0) },
  aboutus: {
    background: "rgb(9,9,121)",
    background:
      " linear-gradient(90deg, rgba(9,9,121,.81) 9%, rgba(255,5,5,.71) 49%, rgba(9,9,121,.81) 91%)",
    // height: theme.spacing(10),
    color: "white",
    textAlign: "center",
    placeItems: "center",
    padding: theme.spacing(12, 0, 4, 0),
  },
  aboutUsImgContainer: {
    height: "100%",
    alignContent: "center",
    padding: theme.spacing(3, 5, 3, 0),
  },
  aboutUsImg: {
    width: "100%",
  },
  aboutUsParaContainer: { padding: theme.spacing(5, 0, 5, 6) },
}));
const About = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div className={classes.aboutus}>
        <Typography variant="h2">About Us</Typography>
      </div>
      <Grid container>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Grid item md={6} style={{ alignSelf: "center" }}>
            <div className={classes.aboutUsImgContainer}>
              <img src={dt} alt="dt-logo" className={classes.aboutUsImg} />
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.aboutUsParaContainer}>
              <Typography variant="h4" gutterBottom align="left">
                Smart and Ambitious team of developers and designers
              </Typography>
              <Typography variant="body1" gutterBottom>
                The ambitious team startup with fresh insights.{" "}
                <span style={{ fontWeight: "bold" }}>
                  We predominantly focus in{" "}
                  <span style={{ color: "red" }}>web development</span>,{" "}
                  <span style={{ color: "red" }}>Social media marketing</span>,
                  and <span style={{ color: "red" }}>Graphic Design</span>.
                </span>{" "}
                Providing services and accepting their demands of creating
                websites, marketing, and graphic design is our first priority.
                We opt to satisfy customer needs by providing flexibility in
                their challenging projects with decision-making procedures.
                Helping you effortlessly manage your demands without any delay,
                we work together to give a reliable product to our customers.
              </Typography>
              <Typography
                variant="body1"
                style={{ fontWeight: "bold" }}
                gutterBottom
              >
                So, are you ready to go?
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <CoreValues />
    </div>
  );
};

export default About;
