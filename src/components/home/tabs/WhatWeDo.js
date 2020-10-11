import React, { useState } from "react";
import { Tab, Tabs, Paper, Typography, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import webDev from "../../../media/Icon/Web-Development-icon.png";
import logoDesign from "../../../media/Icon/Logo-icon.png";
import socialMediaMarketing from "../../../media/Icon/Digital-Marketing-icon.png";
import graphicDesign from "../../../media/Icon/Graphic-Design-icon.png";
import TabPanel from "./TabPanel";

import { useSpring, animated } from "react-spring";

const styles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5, 0, 0, 0),
    backgroundColor: "rgba(254,254,254,.5)",
    padding: theme.spacing(2),
  },
  tabs: { display: "flex", justifyContent: "center" },
  card: {
    width: "250px",
    height: "250px",
    background: "rgba(250,250,250,1)",
    border: "15px solid white",
    borderRadius: "10px",
    boxShadow: "10px 10px 30px -5px rgba(0, 0, 0, 0.3)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    transition: "box-shadow .9s",
    "&hover": { boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)" },
  },
}));

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const TabComponent = ({ image }) => {
  const classes = styles();
  const [spring, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      className={classes.card}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: spring.xys.interpolate(trans),
        backgroundImage: `url(${image})`,
      }}
    />
  );
};
const whatWeDoImages = [
  {
    id: 0,
    image: webDev,
    title: "Web development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor malesuada tellus vitae finibus. Quisque purus arcu, rhoncus a odio at, pharetra tincidunt mauris. Nulla bibendum dui id elit sodales, at posuere ipsum elementum. Mauris vestibulum augue mi, eget elementum felis pretium at. Nullam non sapien lectus. Nunc et egestas turpis, vel finibus nunc. Nam sed est ac nunc suscipit iaculis faucibus sit amet tellus. Nullam in elit ullamcorper, imperdiet dui sit amet, accumsan arcu. Nam egestas finibus purus, sed rutrum est viverra non. Nulla sit amet quam orci. Curabitur fermentum sodales lacus at cursus. Praesent et placerat velit, in gravida sapien.  ",
  },
  {
    id: 1,
    image: logoDesign,
    title: "logo Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor malesuada tellus vitae finibus. Quisque purus arcu, rhoncus a odio at, pharetra tincidunt mauris. Nulla bibendum dui id elit sodales, at posuere ipsum elementum. Mauris vestibulum augue mi, eget elementum felis pretium at. Nullam non sapien lectus. Nunc et egestas turpis, vel finibus nunc. Nam sed est ac nunc suscipit iaculis faucibus sit amet tellus. Nullam in elit ullamcorper, imperdiet dui sit amet, accumsan arcu. Nam egestas finibus purus, sed rutrum est viverra non. Nulla sit amet quam orci. Curabitur fermentum sodales lacus at cursus. Praesent et placerat velit, in gravida sapien.  ",
  },
  {
    id: 2,
    image: socialMediaMarketing,
    title: "Social Media Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor malesuada tellus vitae finibus. Quisque purus arcu, rhoncus a odio at, pharetra tincidunt mauris. Nulla bibendum dui id elit sodales, at posuere ipsum elementum. Mauris vestibulum augue mi, eget elementum felis pretium at. Nullam non sapien lectus. Nunc et egestas turpis, vel finibus nunc. Nam sed est ac nunc suscipit iaculis faucibus sit amet tellus. Nullam in elit ullamcorper, imperdiet dui sit amet, accumsan arcu. Nam egestas finibus purus, sed rutrum est viverra non. Nulla sit amet quam orci. Curabitur fermentum sodales lacus at cursus. Praesent et placerat velit, in gravida sapien.  ",
  },
  {
    id: 3,
    image: graphicDesign,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor malesuada tellus vitae finibus. Quisque purus arcu, rhoncus a odio at, pharetra tincidunt mauris. Nulla bibendum dui id elit sodales, at posuere ipsum elementum. Mauris vestibulum augue mi, eget elementum felis pretium at. Nullam non sapien lectus. Nunc et egestas turpis, vel finibus nunc. Nam sed est ac nunc suscipit iaculis faucibus sit amet tellus. Nullam in elit ullamcorper, imperdiet dui sit amet, accumsan arcu. Nam egestas finibus purus, sed rutrum est viverra non. Nulla sit amet quam orci. Curabitur fermentum sodales lacus at cursus. Praesent et placerat velit, in gravida sapien.  ",
  },
];
const WhatWeDo = () => {
  const classes = styles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root} elevation={2}>
      <Typography align="center" variant="h3" gutterBottom>
        WHAT WE DO
      </Typography>
      <div className={classes.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
        >
          {whatWeDoImages.map((item, index) => {
            return (
              <Tab key={item.id} icon={<TabComponent image={item.image} />} />
            );
          })}
        </Tabs>
      </div>
      {whatWeDoImages.map((item, index) => {
        return (
          <TabPanel
            index={index}
            value={value}
            key={item.id}
            description={item.description}
            title={item.title}
            image={item.image}
          />
        );
      })}
    </Paper>
  );
};

export default WhatWeDo;
