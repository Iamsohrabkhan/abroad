import React from "react";
import Search from "./search";
import Image from "next/image";
import { AppLogo } from "./AppLogo";
import { Heading } from "./Heading";

const Hero = () => {
  return (
    <section className=" relative mb-18">
      <Image
        fill
        src="/hero.png"
        alt="hero"
        className="object-center object-cover"
      />
      <div className="relative z-50 min-h-screen flex justify-center items-center size-full flex-col gap-4">
        <Heading />
        <Search />
        <AppLogo />
      </div>
    </section>
  );
};

export default Hero;
