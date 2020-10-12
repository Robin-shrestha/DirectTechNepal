import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";

import carousel1 from "../../../media/image/Carousel-1.jpg";
import carousel2 from "../../../media/image/Carousel-2.jpg";
import carousel3 from "../../../media/image/DT-CAROUSEL-1.jpg";
import carousel4 from "../../../media/image/DT-CAROUSEL-2.jpg";

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
];

const styles = makeStyles((theme) => ({
  root: {},
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    willChange: "opacity",
  },
}));
const Fadingslides = () => {
  const classes = styles();
  const [index, setIndex] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () =>
      void setInterval(
        () => setIndex((state) => (state + 1) % slides.length),
        2000
      ),
    []
  );

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className={classes.bg}
      style={{ ...props, backgroundImage: `url(${item.image})` }}
    />
  ));
};

export default Fadingslides;
