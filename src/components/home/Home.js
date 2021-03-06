import React from "react";
import MultiCarousel from "./carousel/MultiCarousel";
import WhatWeDo from "./tabs/WhatWeDo";
import ToolsUsed from "./toolsUsed/ToolsUsed";
import Intro from "./intro/Intro";
import LatestBlogs from "./blog/LatestBlog";
// import About from "../about/About";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <div id="#home">
      <Intro />
      {/* <About /> */}
      <WhatWeDo />
      <MultiCarousel />
      {/* <ToolsUsed /> */}
      <LatestBlogs />
      <Contact />
    </div>
  );
};

export default Home;
