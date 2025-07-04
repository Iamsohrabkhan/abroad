"use client";
import React, { useEffect, useRef } from "react";
import Search from "./search";
import Image from "next/image";
import { AppLogo } from "./AppLogo";
import { Heading } from "./Heading";
import { MobileSearch } from "./mobilesearch";
import { motion, useInView } from "motion/react";
import { useAppContext } from "../store/AppContext";

const Hero = () => {
  const searchHelperRef = useRef(null);
      const { setHeroSearchBarActive,heroSearchBarActive } = useAppContext();

  const isInView = useInView(searchHelperRef, {
    margin: "-200px 0px -0px 0px",
    initial: true,
  });
  useEffect(() => {
    setHeroSearchBarActive(isInView);
  }, [isInView]);

  return (
    <section className=" relative mb-18 min-h-screen">
      <Image
        fill
        src="/bg.svg"
        alt="hero"
        className="hero-image object-center object-cover size-full lg:block hidden"
      />
      <Image
        fill
        src="/hero.png"
        alt="hero"
        className="hero-image object-center object-cover size-full lg:hidden"
      />
      <motion.div
        layout
        className="relative z-50  flex justify-center items-center size-full flex-col gap-4 pt-24 lg:pt-0 min-h-screen"
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
