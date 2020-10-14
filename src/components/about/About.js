import React from "react";
import { Box, Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Member from "./Member";
//members
import kailash from "../../media/members/kailash.jpg";
import robin from "../../media/members/robin.jpg";
import suju from "../../media/members/suju.jpg";
import dipesh from "../../media/members/dipesh.jpg";

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
];

const styles = makeStyles((theme) => ({
  root: { padding: theme.spacing(5), marginTop: theme.spacing(8) },
  memberCard: {},
}));
const About = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <Typography variant="h3" align="center" gutterBottom>
          WHO ARE WE
        </Typography>
        <Typography variant="body1" paragraph>
          The ambitious team startup with fresh insights in the field of Website
          Development, Social media marketing, Graphics Designing and Logo
          Designing. We opt to satisfy the customer needs by providing
          flexibility in their challenging projects with decision making
          procedures. Helping you effortlessly manage your demands without any
          delay.
        </Typography>
      </Paper>
      <Typography variant="h4" align="center" gutterBottom>
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
