import React from "react";
import MultiCarousel from "./carousel/MultiCarousel";
import WhatWeDo from "./tabs/WhatWeDo";
import ToolsUsed from "./toolsUsed/ToolsUsed";
import Intro from "./intro/Intro";
import LatestBlogs from "./blog/LatestBlog";

const Home = () => {
  return (
    <div>
      <Intro />
      <WhatWeDo />
      <MultiCarousel />
      <ToolsUsed />
      <LatestBlogs />
    </div>
  );
};

export default Home;
