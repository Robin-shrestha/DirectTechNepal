import React, { useState } from "react";
import { Tab, Tabs, Paper, Typography, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import webDev from "../../../media/Icon/Web-Development-icon.png";
import logoDesign from "../../../media/Icon/Logo-icon.png";
import socialMediaMarketing from "../../../media/Icon/Digital-Marketing-icon.png";
import graphicDesign from "../../../media/Icon/Graphic-Design-icon.png";
import TabPanel from "./TabPanel";

const styles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5, 0, 0, 0),
    backgroundColor: "#eee",
    padding: theme.spacing(2),
  },
  tabs: { display: "flex", justifyContent: "center" },
}));

const TabComponent = ({ image }) => {
  return (
    <CardActions style={{ margin: "8px" }}>
      <img
        src={image}
        style={{
          height: "200px",
          width: "200px",
          objectFit: "fit",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      />
    </CardActions>
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
