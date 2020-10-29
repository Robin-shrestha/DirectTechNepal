import React from "react";
import Carousel from "./carousel/HomeCarousel";
import WhatWeDo from "./tabs/WhatWeDo";
import ToolsUsed from "./toolsUsed/ToolsUsed";
import Intro from "./intro/Intro";

const Home = () => {
  return (
    <div>
      <Intro />
      {/* <Carousel /> */}
      <WhatWeDo />
      <ToolsUsed />
    </div>
  );
};

export default Home;
