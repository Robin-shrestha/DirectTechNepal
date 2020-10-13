import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import colors from "@material-ui/core/colors";
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
    description: "description of kailash",
    facebook: "www.facebook.com/",
    image: kailash,
  },
  {
    id: 2,
    name: "Suju Baniya",
    description: "description of Suju",
    facebook: "www.facebook.com/",
    image: suju,
  },
  {
    id: 3,
    name: "Robin Shrestha",
    description: "description of Robin",
    facebook: "www.facebook.com/",
    image: robin,
  },
  {
    id: 4,
    name: "Dipesh Dhamala",
    description: "description of Dipesh",
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
          We are an ambitious start up collective willing to satand up for
          ourselves in this ompetetive and harsh world.We are constantly
          learning and updating our skills so that we will be able to deliver
          you with the best results that you hav entrusted to us. Our small
          group is very intrested in fulfilling your small project in mind
          regarding graphics, logo or web design.
        </Typography>
        <Typography variant="body1" paragraph>
          We are an ambitious start up collective willing to satand up for
          ourselves in this ompetetive and harsh world.We are constantly
          learning and updating our skills so that we will be able to deliver
          you with the best results that you hav entrusted to us. Our small
          group is very intrested in fulfilling your small project in mindasdsd
          regarding graphics, logo or web design.
        </Typography>
      </Paper>
      <Typography variant="h4" align="center">
        OUR LITTLE FAMILY
      </Typography>
      <div className={classes.memberCard}>
        {members.map((item, index) => {
          return <Member key={item.id} member={item} />;
        })}
      </div>
    </div>
  );
};

export default About;
