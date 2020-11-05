import React, { useState } from "react";
import { Tab, Tabs, Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//borders
import waveTop from "../../../media/Wave BG/BG3.png";
import waveBottom from "../../../media/Wave BG/BG1.png";

import TabPanel from "./TabPanel";

import { useSpring, animated } from "react-spring";

// /tabs/
import webDevTab from "../../../media/whatwedo/whatwedo-tabs/Web-Dev.png";
import logoDesignTab from "../../../media/whatwedo/whatwedo-tabs/Logo-design.png";
import socialMediaMarketingTab from "../../../media/whatwedo/whatwedo-tabs/Social-media-marketing.png";
import graphicDesignTab from "../../../media/whatwedo/whatwedo-tabs/Graphic-Design.png";
//panel
import webDevpanel from "../../../media/whatwedo/whatwedo-panel/web-dev.png";
import logoDesignPanel from "../../../media/whatwedo/whatwedo-panel/logo-design-photo.png";
import socialMediaMarketingPanel from "../../../media/whatwedo/whatwedo-panel/Social-media-marketing.png";
import graphicDesignPanel from "../../../media/whatwedo/whatwedo-panel/graphic-design-photo.png";

const whatWeDoData = [
  {
    id: 0,
    tabImage: webDevTab,
    panelImage: webDevpanel,
    title: "Web development",
    description: () => {
      return (
        <div>
          <Typography variant="body1">
            Web development is needed for every organization wanting to save
            time and money on advertising. Owning a website allows much more
            detailed customizations and an increase in brand awareness. We are
            here for you to create static, dynamic, custom web designs according
            to you and your business needs.
          </Typography>
        </div>
      );
    },
  },
  {
    id: 1,
    tabImage: logoDesignTab,
    panelImage: logoDesignPanel,

    title: "logo Design",
    description: () => {
      return (
        <div>
          <Typography variant="body1">
            The logo makes a strong first impression. It is the foundation of
            brand identity. We make sure our design will foster your business
            demands. We have a well-specialized person for logo design. We make
            a logo as per our client’s suggestion and needs. Design is done
            ensuring consistency, scalability, relevance, and versatility.
          </Typography>
        </div>
      );
    },
  },
  {
    id: 2,
    tabImage: socialMediaMarketingTab,
    panelImage: socialMediaMarketingPanel,

    title: "Social Media Marketing",
    description: () => {
      return (
        <div>
          <Typography variant="body1">
            As social media is the fastest-growing trend in the history of the
            world, using social media platforms like Facebook, Instagram,
            Twitter, LinkedIn, Pinterest, YouTube, Snapchat, and so on will
            boost up the marketing. We promote any brands, pages, online stores,
            products at an affordable cost and work with clients in a friendly
            environment.
          </Typography>
        </div>
      );
    },
  },
  {
    id: 3,
    tabImage: graphicDesignTab,
    panelImage: graphicDesignPanel,

    title: "Graphic Design",
    description: () => {
      return (
        <div>
          <Typography variant="body1">
            Professional Brochure Design: we make sure our brochure design will
            have informative and complete content provided by our clients. Since
            the brochure plays an important role in communications strategy, you
            will find consistency in our work.
          </Typography>
        </div>
      );
    },
  },
];

const styles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 0, 0, 0),
    backgroundColor: "inherit",
    padding: theme.spacing(5, 0, 2, 0),
    backgroundColor: "#FBA642",
    color: "white",
  },
  tabs: {
    // padding: theme.spacing(4, 0, 4, 0),
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
  flexContainer: { display: "flex", height: 250 },
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

const WhatWeDo = () => {
  const classes = styles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root} elevation={2}>
      <Typography align="center" variant="h3" gutterBottom color="inherit">
        GROW YOUR ONLINE PRESENCE WITH US{" "}
      </Typography>

      <div className={classes.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          classes={{
            flexContainer: classes.flexContainer,
          }}
        >
          {whatWeDoData.map((item, index) => {
            return (
              <Tab
                key={item.id}
                icon={<TabComponent image={item.tabImage} />}
              />
            );
          })}
        </Tabs>
      </div>
      {whatWeDoData.map((item, index) => {
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
    </Paper>
  );
};

export default WhatWeDo;
