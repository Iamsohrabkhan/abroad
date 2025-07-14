import { Calendar, ChevronDown } from "lucide-react";
import React, { useState } from "react";

export const Calender = ({
  swiperActive,
  setSwiperActive,
}: {
  swiperActive: boolean;
  setSwiperActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="inline-flex justify-center items-center gap-2 cursor-pointer"
      onClick={() => {
        setSwiperActive(!swiperActive);
      }}
    >
      <span>
        <Calendar />
      </span>
      <span className="text-xs lg:text-sm">Other days from 19$</span>
      <span>
        <ChevronDown className={`transition-transform duration-300 ${swiperActive ? "rotate-180" : ""}`} />
      </span>
    </div>
  );
};
