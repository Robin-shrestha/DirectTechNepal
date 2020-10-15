import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import carousel1 from "../../../media/image/Carousel-1.jpg";
import carousel2 from "../../../media/image/Carousel-2.jpg";
import carousel3 from "../../../media/image/DT-CAROUSEL-1.jpg";
import carousel4 from "../../../media/image/DT-CAROUSEL-2.jpg";
import { useTransition, useSprings, animated, config } from "react-spring";
import Prev from "@material-ui/icons/ArrowBackIos";
import Next from "@material-ui/icons/ArrowForwardIos";

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
    height: "600px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    willChange: "opacity",
  },
  slideInactive: {
    display: "none",
  },
  slideActive: {
    display: "block",
  },

  carouselArrow: {
    position: "absolute",
    top: "50%",
    display: "block",
    color: "black",
    cursor: "pointer",
    // transform: "translateY(-50%)",
    transition: "opacity .2s cubic-bezier(.4,0,1,1)",
    borderRadius: "50%",
    fontSize: 16,
    textDecoration: "none",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  arrowLeft: {
    left: 32,
    zIndex: "555555",
  },
  arrowRight: {
    right: 32,
    zIndex: "555555",
  },
  CarouselContainer: { position: "relative" },
  carouselIndicators: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "absolute",
    bottom: "1em",
    left: "50%",
  },
  carouselIndicator: {
    display: "block",
    marginLeft: "4px",
    marginRight: "4px",

    borderRadius: "50%",
    width: "12px",
    height: "12px",
    backgroundColor: "#ddd",
    cursor: "pointer",
    opacity: "0.45",
    transition: "opacity 0.15s cubic-bezier(0.4, 0, 1, 1)",
  },
  carouselIndicatorActive: {
    backgroundColor: "#00acc1",
    "$:hover": {
      opacity: ".85",
    },
  },
}));
const Arrow = ({ direction, activeIndex, setActiveIndex, slideLength }) => {
  const classes = styles();
  const onArrowClick = (e) => {
    e.preventDefault();
    let index = activeIndex;
    // let slideLength = 9;
    if (direction === "left") {
      if (index < 1) {
        index = slideLength - 1;
      } else {
        --index;
      }
    } else if (direction === "right") {
      if (index == slideLength - 1) {
        index = 0;
      } else {
        ++index;
      }
    }
    setActiveIndex(index);
  };
  return (
    <IconButton
      className={clsx(
        classes.carouselArrow,
        direction === "right" ? classes.arrowRight : null,
        direction === "left" ? classes.arrowLeft : null
      )}
      onClick={(e) => onArrowClick(e)}
    >
      {direction === "left" ? <Prev /> : <Next />}
    </IconButton>
  );
};

const Indicator = ({ activeIndex, setActiveIndex }) => {
  const classes = styles();
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  return (
    <ul className={classes.carouselIndicators}>
      {slides.map((item, index) => {
        return (
          <li key={item.id}>
            <a
              className={clsx(
                classes.carouselIndicator,
                item.id === activeIndex ? classes.carouselIndicatorActive : null
              )}
              onClick={(e) => goToSlide(index)}
            />
          </li>
        );
      })}
    </ul>
  );
};
const HomeCarouselSpring = () => {
  const [index, setIndex] = useState(0);
  const classes = styles();

  useEffect(
    () =>
      void setInterval(
        () => setIndex((state) => (state + 1) % slides.length),
        3500
      ),
    []
  );

  const transition = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0.5 },
    enter: { opacity: 1 },
    leave: { opacity: 0.5 },
    // rom: { transform: "translate3d(-100px,0,0)" },
    // enter: { transform: "translate3d(0,0px,0)" },
    // leave: { transform: "translate3d(-100px,0,0)" },
    // config: { tension: 400, friction: 220 },
    config: config.molasses,
  });

  return (
    <div className={classes.CarouselContainer}>
      <Arrow
        direction="left"
        activeIndex={index}
        setActiveIndex={setIndex}
        slideLength={slides.length}
      />
      <div className={classes.slides}>
        {/* {slides.map((item, indec) => {
          return (
            <div
              key={item.id}
              className={clsx(
                classes.slide,
                item.id == index ? classes.slideActive : classes.slideInactive
              )}
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
          );
        })} */}
        {transition.map(({ item, props, key }) => {
          return (
            <animated.div
              key={key}
              className={clsx(
                classes.slide,
                item.id == index ? classes.slideActive : classes.slideInactive
              )}
              style={{ ...props, backgroundImage: `url(${item.image})` }}
            />
          );
        })}
      </div>
      <Arrow
        direction="right"
        activeIndex={index}
        setActiveIndex={setIndex}
        slideLength={slides.length}
      />
      <Indicator activeIndex={index} setActiveIndex={setIndex} />
    </div>
  );
};

export default HomeCarouselSpring;
