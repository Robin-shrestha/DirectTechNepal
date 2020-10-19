import React, { useState, useEffect } from "react";
import {} from "@material-ui/core";
import { formatMs, makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../../../media/image/Carousel-1.jpg";
import carousel2 from "../../../media/image/Carousel-2.jpg";
import carousel3 from "../../../media/image/DT-CAROUSEL-1.jpg";
import carousel4 from "../../../media/image/DT-CAROUSEL-2.jpg";

const styles = makeStyles((theme) => ({
  root: { backgroundColor: "black", width: "100%" },
}));

const slides = [
  {
    id: 1,
    title: "title 1",
    image: carousel1,
    description: "description of the image 1",
  },
  {
    id: 2,
    title: "title 2",
    image: carousel2,
    description: "description of the image 2",
  },
  {
    id: 3,
    title: "title 3",
    image: carousel3,
    description: "description of the image 1",
  },
  {
    id: 4,
    title: "title 4",
    image: carousel4,
    description: "description of the image 1",
  },
];
const HomeCarousel = () => {
  const classes = styles();
  const [index, setindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setindex((state) => (state + 1) % 4),
      3500
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3500,
    autoplay: true,
    centerPadding: "60px",
    pauseOnHover: false,
    pauseOnDotsHover: true,
  };
  return (
    <div className={classes.root}>
      <Slider {...settings}>
        {slides.map((item) => {
          return (
            // <div
            //   key={item.id}
            //   style={{
            //     backgroundImage: `url(${item.image})`,
            //     height: "400px",
            //     backgroundSize: "contain",
            //     backgroundPosition: "center center",
            //     backgroundRepeat: "no-repeat",
            //   }}
            // ></div>
            <div
              key={item.id}
              style={{
                // height: "inherit",
                width: "100%",
                height: "450px",
              }}
            >
              <img
                src={item.image}
                alt="carousel img"
                style={{
                  height: "inherit",
                  width: "100%",
                  backgroundSize: "containe",
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
