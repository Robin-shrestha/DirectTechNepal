import React, { useEffect } from "react";
import MultiCarousel from "./carousel/MultiCarousel";
import WhatWeDo from "./tabs/WhatWeDo";
import ToolsUsed from "./toolsUsed/ToolsUsed";
import Intro from "./intro/Intro";
import LatestBlogs from "./blog/LatestBlog";
// import About from "../about/About";
// import Contact from "../contact/Contact";
import { Link } from "react-router-dom";
import { IconButton, Tooltip } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Home = () => {
  return (
    <div id="#home">
      <Intro />
      {/* <About /> */}
      <WhatWeDo />
      <MultiCarousel />
      <ToolsUsed />
      <LatestBlogs />
      {/* <Contact /> */}
      <div style={{ textAlign: "center" }}>
        <Tooltip title="jump to top">
          <IconButton component={Link} to="#home">
            <ArrowUpwardIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Home;
