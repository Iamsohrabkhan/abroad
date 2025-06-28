"use client";

import React, { useRef } from "react";
import {
  motion,
  wrap,
  useScroll,
  useMotionValue,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
} from "motion/react";
import MarqueLi from "./marqueeli";
const Marquee = ({ baseVelocity = -2 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 600,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <>
      {/* Testimonial Card Wrapper */}
      <div className="overflow-x-clip ">
        <h2 className="text-center mb-8">Official Distributer</h2>
        <motion.ul
          style={{ x }}
          className="relative  max-w-fit flex items-center flex-row [&>li]:flex-grow-0 [&>li]:flex-shrink-0 flex-nowrap [&>li]:ml-2 w-fit"
        >
          <MarqueLi />
          <MarqueLi />
        </motion.ul>
      </div>
    </>
  );
};

export default Marquee;
