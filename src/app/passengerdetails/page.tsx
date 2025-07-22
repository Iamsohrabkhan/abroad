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
      <Container className="grid grid-cols-12 gap-6">
        <Cart />
        <div className="col-span-5">
          <BestPrice />
          <Payment />
        </div>
      </Container>
    </section>
  );
};

export default Page;

const Payment = () => {
  return (
    <div className="card mt-6 px-6 py-6 shadow outline-accent space-y-6 ">
      <div className="flex justify-between items-center">
        <h4 className="">
          Total to pay <Lock className="inline-block" />
        </h4>
        <h5>15.00$</h5>
      </div>
      <p>No Booking fee</p>
      <p className="text-blue-600">Add a discount code</p>
      <p>
        Confirmation will be sent to <br /> 70******@gmail.com{" "}
        <span className="text-blue-600">Add email address</span>
      </p>
      <button className="text-white bg-mint flex justify-center items-center py-3 rounded-md w-full">
        Pay with Card
      </button>
      <button className="text-white bg-yellow-500 flex justify-center items-center py-3 rounded-md w-full">
        Pay with &nbsp;
        <Paypal />
      </button>
    </div>
  );
};
