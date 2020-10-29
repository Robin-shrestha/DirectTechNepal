import { Typography } from "@material-ui/core";
import React from "react";
import image from "../../../media/image/Carousel-1.jpg";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  introBackground: {
    height: 650,
    width: "100%",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    position: "relative",
    top: 0,
    left: 0,
    [theme.breakpoints.down("sm")]: {
      height: 450,
    },
  },
  titleContainer: {
    paddingTop: 250,
    animation: `$myEffect 3500ms ${theme.transitions.easing.easeInOut} `,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "25%",
    },
  },
  "@keyframes myEffect ": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.75rem",
    },
  },
  SubTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.75rem",
    },
  },
}));

const Intro = () => {
  const classes = styles();
  return (
    <div
      className={classes.introBackground}
      style={{
        backgroundImage: `url(${image})`,
        // paddingTop: "100%",
      }}
    >
      <div className={classes.titleContainer}>
        <Typography
          variant="h1"
          align="center"
          className={classes.title}
          style={{ color: "white" }}
        >
          We are Direct Tech
        </Typography>
        <Typography
          variant="h2"
          align="center"
          className={classes.SubTitle}
          style={{ color: "white" }}
        >
          Here to thrive
        </Typography>
      </div>
    </div>
  );
};

export default Intro;
