import React from "react";
import Carousel from "./carousel/HomeCarousel";
import Carousel2 from "./carousel/HomeCarouselspring";
// import Carousel3 from "./carousel/HomeCarousel2";
import WhatWeDo from "./tabs/WhatWeDo";

const Home = () => {
  return (
    <div>
      <Carousel2 />
      {/* <Carousel3 /> */}
      <WhatWeDo />
    </div>
  );
};

export default Home;
