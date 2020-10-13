import React, { useState, useEffect } from "react";
import {} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import carousel1 from "../../../media/image/Carousel-1.jpg";
import carousel2 from "../../../media/image/Carousel-2.jpg";
import carousel3 from "../../../media/image/DT-CAROUSEL-1.jpg";
import carousel4 from "../../../media/image/DT-CAROUSEL-2.jpg";
import { useTransition, animated, config } from "react-spring";
import transitions from "@material-ui/core/styles/transitions";

const slides = [
  {
    id: 0,
    image: carousel1,
  },
  {
    id: 1,
    image: carousel2,
  },
  {
    id: 2,
    image: carousel3,
  },
  {
    id: 3,
    image: carousel4,
  },
];

const styles = makeStyles((theme) => ({
  root: {},
  slide: {
    position: "static",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    willChange: "opacity",
  },
}));
const HomeCarouselSpring = () => {
  const [index, setIndex] = useState(0);
  const classes = styles();

  useEffect(
    () => void setInterval(() => setIndex((state) => (state + 1) % 4), 8000),
    []
  );

  const transition = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0, transform: "scale(1.1)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.9)" },
    config: { tension: 320, friction: 220 },
  });
  console.log(transition);
  return transition.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className={classes.slide}
      style={{ ...props, backgroundImage: `url(${item.image})` }}
    />
  ));
};

export default HomeCarouselSpring;
