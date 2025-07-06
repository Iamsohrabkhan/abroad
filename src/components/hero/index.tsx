"use client";
import React, { useEffect, useRef } from "react";
import Search from "./search";
import Image from "next/image";
import { AppLogo } from "./AppLogo";
import { Heading } from "./Heading";
import { MobileSearch } from "./mobilesearch";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useAppContext } from "../store/AppContext";

const Hero = () => {
  const searchHelperRef = useRef(null);
  const sectionRef = useRef(null);
  const { setHeroSearchBarActive, heroSearchBarActive } = useAppContext();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Animate the curve control point from curved to increasingly linear
  const curveDepth = useTransform(scrollYProgress, [0, 1], [1.02, 0.75]);

  const isInView = useInView(searchHelperRef, {
    margin: "-200px 0px -0px 0px",
    initial: true,
  });
  useEffect(() => {
    setHeroSearchBarActive(isInView);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative max-lg:mb-18">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="myClipPath" clipPathUnits="objectBoundingBox">
            <motion.path
              d={useTransform(
                curveDepth,
                (depth) => `M0 0H1V0.85Q0.5 ${depth} 0 0.85V0Z`
              )}
            />
          </clipPath>
        </defs>
      </svg>
      <div className="absolute size-full hero bg-no-repeat bg-cover bg-center [clip-path:url(#myClipPath)] [-webkit-clip-path:url(#myClipPath)] -z-10" />
      <Image
        fill
        src="/hero.png"
        alt="hero"
        priority
        sizes="100vw"
        className="object-center object-cover size-full lg:[clip-path:url(#myClipPath)] lg:[-webkit-clip-path:url(#myClipPath)]"
      />
      <motion.div
        layout
        className="relative z-50 flex justify-center items-center size-full flex-col gap-4 pt-24 lg:pt-0 min-h-[80vh]"
      >
        <Heading />
        <div className="relative h-0 hidden lg:h-24 lg:block pointer-events-none">
          <div
            ref={searchHelperRef}
            className="absolute w-64 h-12 left-1/2 top-0 -translate-1/2"
          />
          {heroSearchBarActive && <Search />}
        </div>
        <MobileSearch />
        <AppLogo />
      </motion.div>
    </section>
  );
};

export default Hero;
