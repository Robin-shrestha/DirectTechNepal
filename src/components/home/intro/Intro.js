import React from "react";
import image from "../../../media/image/Carousel-1.jpg";

const Intro = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: 650,
        width: "100%",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
        top: 0,
        left: 0,
      }}
    >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h1>We are direct tech</h1>
    </div>
  );
};

export default Intro;
