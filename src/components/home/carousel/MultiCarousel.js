import React, { useState } from "react";
import { Backdrop, CardActionArea } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const settings = {
    dots: true,
    infinite: true,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: widthHandler(),
    slidesToScroll: widthHandler(),
  };

  const handleOpen = (tile) => {
    // e.preventDefault();
    setOpen(true);
    setCurrentImage(tile);
  };
  const handleClose = () => {
    setOpen(false);
    setCurrentImage("");
  };

  return (
    <div style={{ padding: 32 }}>
      <Slider {...settings}>
        {slides.map((item) => {
          return (
            <CardActionArea
              key={item.id}
              style={{ margin: 0 }}
              onClick={(e) => {
                e.preventDefault();
                handleOpen(item.image);
              }}
            >
              <img
                src={item.image}
                alt={`${item.id}`}
                style={{
                  objectFit: "contain",
                  height: "300px",
                  width: "100%",
                }}
              ></img>
            </CardActionArea>
          );
        })}
      </Slider>
      <Backdrop
        style={{
          zIndex: 5555,
          color: "#fff",
        }}
        open={open}
        onClick={handleClose}
      >
        <div>
          <img
            src={currentImage}
            alt="current"
            style={{
              height: "90vh",
              width: "90vw",
              objectFit: "contain",
            }}
          />
          {/* <Button onClick={handleClose}>close</Button> */}
        </div>
      </Backdrop>
    </div>
  );
};

export default MultiCarousel;
