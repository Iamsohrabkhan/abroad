import React, { useState } from "react";
import { Prices } from "./prices";
import { TabsCariers } from "./carriers";
import { Calender } from "./calender";
import TransportSelector from "./selector";
import { DirectOnly } from "./directOnly";

const Tabs = ({ swiperActive, setSwiperActive }: { swiperActive: boolean; setSwiperActive: React.Dispatch<React.SetStateAction<boolean>> }) => {

  return (
    <div className="flex justify-between items-center ">
      <div className="tabs inline-flex justify-center items-center gap-4 text-accent">
        <TransportSelector />
        <DirectOnly />
        <Prices />
        <TabsCariers />
      </div>
      <Calender swiperActive={swiperActive} setSwiperActive={setSwiperActive} />
    </div>
  );
};

export default Tabs;
