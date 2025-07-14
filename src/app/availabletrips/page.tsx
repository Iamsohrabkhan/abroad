"use client";
import { Header } from "@/components/header";
import Search from "@/components/hero/search";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useInView, useMotionValueEvent, useScroll } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Tabs from "./tabs";
import DateSlider from "./dateSlider";
import { ChevronRight, ChevronUp } from "lucide-react";
import Grid1 from "./grid/grid1";
import Grid2 from "./grid/grid2";
import { TrainSheduleCard } from "./grid/grid2/trainsheduleCard";
import SearchIcon from "@/icons/searchIcon";
import Cta from "./cta";
import { useAppContext } from "@/components/store/AppContext";
import { MobileSearch } from "@/components/hero/mobilesearch";

const Page = () => {
  const searchHelperRef = useRef<HTMLDivElement>(null);
  const { setHeroSearchBarActive, heroSearchBarActive } = useAppContext();
  console.log("🚀 ~ Page ~ heroSearchBarActive:", heroSearchBarActive);
  const [swiperActive, setSwiperActive] = useState<boolean>(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 99) {
      setHeroSearchBarActive(false);
    } else {
      setHeroSearchBarActive(true);
    }
  });
  return (
    <section className={` ${heroSearchBarActive && "[--logo-color:black]"}`}>
      <Container className="">
        <Header />
        <div className="relative h-0 hidden lg:h-24 lg:block pointer-events-none mt-64 max-w-fit ">
          {heroSearchBarActive && <Search />}
        </div>
        <MobileSearch />
      </Container>

      <Container className="space-y-6">
        <h1 className="text-center whitespace-pre-wrap">There we go!</h1>
        {/* <Tabs swiperActive={swiperActive} setSwiperActive={setSwiperActive} /> */}

        {/* <DateSlider
          swiperActive={swiperActive}
          setSwiperActive={setSwiperActive}
        /> */}
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-12">
          <Grid1 />
          <Grid2 />
        </div>
      </Container>

      <Cta />
    </section>
  );
};

export default Page;
