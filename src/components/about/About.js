import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Member from "./Member";
//members
import kailash from "../../media/members/kailash.jpg";
import robin from "../../media/members/robin.jpg";
import suju from "../../media/members/suju.jpg";
import dipesh from "../../media/members/dipesh.jpg";
import bunu from "../../media/members/bunu.jpg";
import dt from "../../media/Icon/DT-logo-1.png";

const members = [
  {
    id: 1,
    name: "Kailash Shrestha",
    description:
      " kailash is an electronics engineer graduated from tu. he is skilled in engineering  things and stuff. im just writing this as a filler",
    facebook: "www.facebook.com/",
    image: kailash,
  },
  {
    id: 2,
    name: "Suju Baniya",
    description:
      " Suju is an electronics engineer graduated from tu. he is skilled in engineering  things and stuff. im just writing this as a filler",
    facebook: "www.facebook.com/",
    image: suju,
  },
  {
    id: 3,
    name: "Robin Shrestha",
    description:
      " Robin is an electronics engineer graduated from tu. he is skilled in engineering  things and stuff. im just writing this as a filler",
    facebook: "www.facebook.com/",
    image: robin,
  },
  {
    id: 4,
    name: "Dipesh Dhamala",
    description:
      " Dipesh is an electronics engineer graduated from tu. he is skilled in engineering  things and stuff. im just writing this as a filler",
    facebook: "www.facebook.com/",
    image: dipesh,
  },
  {
    id: 5,
    name: "Bunu Baniya",
    description:
      " Bunu is an electronics engineer graduated from tu. he is skilled in engineering  things and stuff. im just writing this as a filler",
    facebook: "www.facebook.com/",
    image: bunu,
  },
];

const styles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    backgroundColor: "white",
    padding: theme.spacing(2),
    color: "white",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(0),
    },
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  topContainer: {
    backgroundColor: "#FBA642",
    borderRadius: "25px/35px",
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
    color: "black",
    padding: theme.spacing(0, 3, 0, 3),
  },
  topicHeaders: {
    // background: "#eee",
    // width: "100%",
    color: "black",
    fontWeight: "bold",
  },
}));
const About = () => {
  const classes = styles();
  return (
    <>
      <div style={{ height: 60, backgroundColor: "black" }}></div>

      <div className={classes.root}>
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

          {/* <Grid item sm={12} style={{}}>
          <Typography
            variant="h4"
            align="left"
            className={classes.topicHeaders}
            style={{ marginBottom: 24, marginTop: 24 }}
          >
            OUR LITTLE FAMILY
          </Typography>
        </Grid> */}

          {/* <Grid container spacing={2} justify="center">
          {members.map((item, index) => {
            return (
              <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                <Member member={item} />
              </Grid>
            );
          })}
        </Grid> */}
        </Grid>
      </div>
    </>
  );
};

export default About;
