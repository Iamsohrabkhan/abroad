"use client";
import FirstRow from "./firstRow";
import ThirdRow from "./thirdrow";
import SecondRow from "./secondRow";
import { useState } from "react";
import { motion } from "motion/react";
import { MobileSearchTabs } from "./mobiletabs";

export const MobileSearch = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="lg:hidden relative z-50 flex justify-center items-center flex-col w-full bg-white py-6 mx-auto max-w-84 rounded-4xl shadow-lg border border-[#DFE2E6] gap-4">
      <MobileSearchTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <h4 className="text-[16px] mt-[21px] mb-[14px]">Start my booking</h4>
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </div>
  );
};
