import React, { useRef } from "react";
import clamp from "lodash-es/clamp";
import { useSprings, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import "./styles.css";

import carousel1 from "../../../media/image/Carousel-1.jpg";
import carousel2 from "../../../media/image/Carousel-2.jpg";
import carousel3 from "../../../media/image/DT-CAROUSEL-1.jpg";
import carousel4 from "../../../media/image/DT-CAROUSEL-2.jpg";

const pages = [carousel1, carousel2, carousel3, carousel4];

export default function HomeCarousel2() {
  const index = useRef(0);
  const [props, set] = useSprings(pages.length, (i) => ({
    x: i * window.innerWidth,
    sc: 1,
    display: "block",
  }));
  const bind = useGesture(
    ({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
      if (down && distance > window.innerWidth / 2)
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            pages.length - 1
          ))
        );
      set((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
        const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
        return { x, sc, display: "block" };
      });
    }
  );
  return (
    <div className="container">
      <div id="root">
        {props.map(({ x, display, sc }, i) => (
          <animated.div
            {...bind()}
            key={i}
            style={{
              display,
              transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
            }}
          >
            <animated.div
              style={{
                transform: sc.interpolate((s) => `scale(${s})`),
                backgroundImage: `url(${pages[i]})`,
              }}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
}
