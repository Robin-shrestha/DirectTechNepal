import React, { useState } from "react";
import { Tab, Tabs, Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// /tabs/
import webDevTab from "../../../media/whatwedo/whatwedo-tabs/Web-Development-icon.png";
import logoDesignTab from "../../../media/whatwedo/whatwedo-tabs/Logo-icon.png";
import socialMediaMarketingTab from "../../../media/whatwedo/whatwedo-tabs/Digital-Marketing-icon.png";
import graphicDesignTab from "../../../media/whatwedo/whatwedo-tabs/Graphic-Design-icon.png";
//panel
import webDevpanel from "../../../media/whatwedo/whatwedo-panel/web-dev.png";
import logoDesignPanel from "../../../media/whatwedo/whatwedo-panel/logo-design-photo.png";
import socialMediaMarketingPanel from "../../../media/whatwedo/whatwedo-panel/Social-media-marketing.png";
import graphicDesignPanel from "../../../media/whatwedo/whatwedo-panel/graphic-design-photo.png";
//borders
import waveTop from "../../../media/Wave BG/BG3.png";
import waveBottom from "../../../media/Wave BG/BG1.png";

import TabPanel from "./TabPanel";

import { useSpring, animated } from "react-spring";

const styles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 0, 0, 0),
    backgroundColor: "inherit",
    // padding: theme.spacing(2),
    backgroundColor: "#FBA642",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  card: {
    width: "180px",
    height: "180px",
    background: "rgba(250,250,250,1)",
    border: "15px solid white",
    borderRadius: "10px",
    boxShadow: "10px 10px 30px -5px rgba(0, 0, 0, 0.3)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    transition: "box-shadow .5s",
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
    tabImage: webDevTab,
    panelImage: webDevpanel,
    title: "Web development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor malesuada tellus vitae finibus. Quisque purus arcu, rhoncus a odio at, pharetra tincidunt mauris. Nulla bibendum dui id elit sodales, at posuere ipsum elementum. Mauris vestibulum augue mi, eget elementum felis pretium at. Nullam non sapien lectus. Nunc et egestas turpis, vel finibus nunc. Nam sed est ac nunc suscipit iaculis faucibus sit amet tellus. Nullam in elit ullamcorper, imperdiet dui sit amet, accumsan arcu. Nam egestas finibus purus, sed rutrum est viverra non. Nulla sit amet quam orci. Curabitur fermentum sodales lacus at cursus. Praesent et placerat velit, in gravida sapien.  ",
  },
  {
    id: 1,
    tabImage: logoDesignTab,
    panelImage: logoDesignPanel,

    title: "logo Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor malesuada tellus vitae finibus. Quisque purus arcu, rhoncus a odio at, pharetra tincidunt mauris. Nulla bibendum dui id elit sodales, at posuere ipsum elementum. Mauris vestibulum augue mi, eget elementum felis pretium at. Nullam non sapien lectus. Nunc et egestas turpis, vel finibus nunc. Nam sed est ac nunc suscipit iaculis faucibus sit amet tellus. Nullam in elit ullamcorper, imperdiet dui sit amet, accumsan arcu. Nam egestas finibus purus, sed rutrum est viverra non. Nulla sit amet quam orci. Curabitur fermentum sodales lacus at cursus. Praesent et placerat velit, in gravida sapien.  ",
  },
  {
    id: 2,
    tabImage: socialMediaMarketingTab,
    panelImage: socialMediaMarketingPanel,

    title: "Social Media Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor malesuada tellus vitae finibus. Quisque purus arcu, rhoncus a odio at, pharetra tincidunt mauris. Nulla bibendum dui id elit sodales, at posuere ipsum elementum. Mauris vestibulum augue mi, eget elementum felis pretium at. Nullam non sapien lectus. Nunc et egestas turpis, vel finibus nunc. Nam sed est ac nunc suscipit iaculis faucibus sit amet tellus. Nullam in elit ullamcorper, imperdiet dui sit amet, accumsan arcu. Nam egestas finibus purus, sed rutrum est viverra non. Nulla sit amet quam orci. Curabitur fermentum sodales lacus at cursus. Praesent et placerat velit, in gravida sapien.  ",
  },
  {
    id: 3,
    tabImage: graphicDesignTab,
    panelImage: graphicDesignPanel,

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
      <div
        style={{
          backgroundImage: `url(${waveTop})`,
          height: 140,
          backgroundSize: "cover",
        }}
      ></div>
      <Typography align="center" variant="h3" gutterBottom>
        GROW YOUR ONLINE PRESENCE WITH US{" "}
      </Typography>
      <Typography align="center" variant="h4" gutterBottom>
        Web development & design services
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
              <Tab
                key={item.id}
                icon={<TabComponent image={item.tabImage} />}
              />
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
            image={item.panelImage}
          />
        );
      })}
      <div
        style={{
          backgroundImage: `url(${waveBottom})`,
          height: 140,
          backgroundSize: "cover",
        }}
      ></div>
    </Paper>
  );
};

export default WhatWeDo;
