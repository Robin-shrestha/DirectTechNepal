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
import Carousel from "react-material-ui-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import image1 from "../../../media/image/1.jpeg";
import image2 from "../../../media/image/2.jpg";
import image3 from "../../../media/image/3.jpg";
import image1 from "../../../media/image/penguins.jpg";

const styles = makeStyles((theme) => ({
  carousel: { marginBottom: theme.spacing(4) },
  paper: {},
  cardMedia: {
    height: "600px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  carouselDesc: {
    margin: theme.spacing(0, 0, 5, 5),
    color: "white",
    padding: theme.spacing(2),
  },
  button: {
    color: "white",
    borderColor: "#eee",
    justifySelf: "center",
  },
}));

const HomeCarousel = () => {
  const classes = styles();
  const carouselData = [
    {
      id: 1,
      title: "title 1",
      image: image2,
      description: "description of the image 1",
    },
    {
      id: 2,
      title: "title 2",
      image: image1,
      description: "description of the image 2",
    },
    {
      id: 3,
      title: "title 3",
      image: image3,
      description: "description of the image 1",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider
      {...settings}
      arrows={false}
      autoplaySpeed={10000}
      autoplay
      centerPadding="100px"
      // fade
      focusOnSelect
      pauseOnDotsHover
    >
      {carouselData.map((item, index) => {
        return (
          <Paper key={index} className={classes.paper}>
            <CardMedia image={item.image} className={classes.cardMedia}>
              <div className={classes.carouselDesc}>
                <Typography variant="h4" gutterBottom align="left">
                  {item.title}
                </Typography>
                <Box pl={2}>
                  <Typography varialn="body1" align="left" paragraph>
                    {item.description}
                  </Typography>
                </Box>
                <Button variant="outlined" className={classes.button}>
                  Check it out!
                </Button>
              </div>
            </CardMedia>
          </Paper>
        );
      })}
    </Slider>
  );
};

export default HomeCarousel;
