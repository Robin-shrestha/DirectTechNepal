import React from "react";
import Carousel from "./carousel/HomeCarousel";
import WhatWeDo from "./tabs/WhatWeDo";
import ToolsUsed from "./toolsUsed/ToolsUsed";

const Home = () => {
  return (
    <div>
      <Carousel />
      <WhatWeDo />
      <ToolsUsed />
    </div>
  );
};

export default Home;
