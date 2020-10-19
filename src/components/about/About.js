import React from "react";
import { Box, Paper, Typography, Grid } from "@material-ui/core";
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
      " Dipesh is an electronics engineer graduated from tu. he is skilled in engineering  things and stuff. im just writing this as a filler",
    facebook: "www.facebook.com/",
    image: bunu,
  },
];

const styles = makeStyles((theme) => ({
  root: { padding: theme.spacing(5), marginTop: theme.spacing(8) },
  memberCard: {},
  aboutUsImgContainer: {
    marginBottom: theme.spacing(3),
    height: 400,
    width: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  aboutUsPara: {
    padding: theme.spacing(0, 3, 0, 3),
  },
  topicHeaders: {
    background: "#eee",
    // width: "100%",
    paddingLeft: theme.spacing(6),
  },
}));
const About = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div
        className={classes.aboutUsImgContainer}
        style={{ backgroundImage: `url(${dt})` }}
      ></div>
      <Paper elevation={0}>
        <Typography
          variant="h4"
          align="left"
          gutterBottom
          className={classes.topicHeaders}
        >
          WHO ARE WE
        </Typography>
        <Typography variant="body1" paragraph className={classes.aboutUsPara}>
          The ambitious team startup with fresh insights in the field of Website
          Development, Social media marketing, Graphics Designing and Logo
          Designing. We opt to satisfy the customer needs by providing
          flexibility in their challenging projects with decision making
          procedures. Helping you effortlessly manage your demands without any
          delay.
        </Typography>
      </Paper>
      <Paper elevation={0}>
        <Typography
          variant="h4"
          align="left"
          gutterBottom
          className={classes.topicHeaders}
        >
          OUR GOALS
        </Typography>
        <Typography variant="body1" paragraph className={classes.aboutUsPara}>
          we do the usual shit and stuff regarding web development, logo and
          graphics design and social media marketting
        </Typography>
      </Paper>
      <Typography
        variant="h4"
        align="left"
        className={classes.topicHeaders}
        style={{ marginBottom: 24 }}
      >
        OUR LITTLE FAMILY
      </Typography>
      <div>
        <Grid container spacing={2}>
          <Grid item sm={1} />
          <Grid item container sm={10} spacing={2}>
            {members.map((item, index) => {
              return (
                <Grid key={item.id} item xs={12} lg={6}>
                  <Member member={item} />
                </Grid>
              );
            })}
          </Grid>

          <Grid item sm={1} />
        </Grid>
      </div>
    </div>
  );
};

export default About;
