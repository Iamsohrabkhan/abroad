"use client";
import { Header } from "@/components/header";
import Search from "@/components/hero/search";
import { Container } from "@/components/ui/container";
import { useMotionValueEvent, useScroll } from "motion/react";
import React, { useRef, useState } from "react";
import { useAppContext } from "@/components/store/AppContext";
import { MobileSearch } from "@/components/hero/mobilesearch";
import { CircleAlert, Lock } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DateOfBirthCalender } from "./grids/rows1/cards/dateofbirthcalender";
import { Switch } from "@/components/ui/switch";
import Grid from "./grids";
import Cart from "./cart";
import { BestPrice } from "./grids/grid2/gurenteedprice";
import Paypal from "@/icons/paypal";
import Cta from "../availabletrips/cta";
import Payment from "./cart/payement";

const Page = () => {
  const searchHelperRef = useRef<HTMLDivElement>(null);
  const { setHeroSearchBarActive, heroSearchBarActive } = useAppContext();
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
      </Container>{" "}
      <Grid />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        <Cart className="lg:col-span-7" />
        <div className="lg:col-span-5">
          <BestPrice />
          <Payment />
        </div>
      </Container>
      <Cta />
    </section>
  );
};

export default Page;
