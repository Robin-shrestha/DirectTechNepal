import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import carousel1 from "../../../media/gallery/ART-1.png";
import carousel2 from "../../../media/gallery/ART-5.png";
import carousel3 from "../../../media/gallery/ART-3.png";
import carousel4 from "../../../media/gallery/ART-8.png";

const slides = [
  {
    id: 1,
    image: carousel1,
  },
  {
    id: 2,
    image: carousel2,
  },
  {
    id: 3,
    image: carousel3,
  },
  {
    id: 4,
    image: carousel4,
  },
  {
    id: 5,
    image: carousel1,
  },
  {
    id: 6,
    image: carousel2,
  },
  {
    id: 7,
    image: carousel3,
  },
  {
    id: 8,
    image: carousel4,
  },
  {
    id: 9,
    image: carousel4,
  },
];

const widthHandler = () => {
  if (window.innerWidth > 450 * 3) {
    return 3;
  } else if (window.innerWidth > 450 * 2) {
    return 2;
  } else {
    return 1;
  }
};
const MultiCarousel = () => {
  //   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //   useEffect(() => {
  //     function handleResize() {
  //       setWindowWidth(window.innerWidth);
  //     }
  //     window.addEventListener("resize", handleResize);
  //     handleResize();
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, [window.innerWidth]);

  const settings = {
    dots: true,
    infinite: true,
    // centerMode: true,
    speed: 500,
    slidesToShow: widthHandler(),
    slidesToScroll: widthHandler(),
  };
  return (
    <div style={{ padding: 32 }}>
      <Slider {...settings}>
        {slides.map((item) => {
          return (
            <div key={item.id} style={{ margin: 16 }}>
              <img
                src={item.image}
                style={{
                  objectFit: "contain",
                  height: "300px",
                  width: "100%",
                }}
              ></img>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MultiCarousel;
