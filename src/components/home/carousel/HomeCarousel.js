import React, { useState } from "react";
import {
  Paper,
  Button,
  CardMedia,
  Typography,
  Box,
  Slide,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import image1 from "../../../media/image/1.jpeg";
import carousel1 from "../../../media/image/Carousel-1.jpg";
import carousel2 from "../../../media/image/Carousel-2.jpg";
import carousel3 from "../../../media/image/DT-CAROUSEL-1.jpg";
import carousel4 from "../../../media/image/DT-CAROUSEL-2.jpg";

import { red } from "@material-ui/core/colors";

const styles = makeStyles((theme) => ({
  root: { width: "100%" },
  image: { height: 600 },
}));

const HomeCarousel = () => {
  const classes = styles();
  const carouselData = [
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 6000,
    autoplay: true,
    centerPadding: "60px",
  };
  return (
    <div className={classes.root}>
      <Slider {...settings}>
        {carouselData.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                height: "inherit",
                width: "100%",
              }}
            >
              <img
                src={item.image}
                style={{
                  height: "inherit",
                  width: "100%",
                  backgroundSize: "contain",
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
