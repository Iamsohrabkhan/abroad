"use client";
import { motion } from "motion/react";
import Location from "@/icons/loaction";

export const ToDialog = () => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2,duration:0.0001 }}
      className="p-8 flex flex-col gap-2 h-64 overflow-y-scroll"
    >
      <li className="flex justify-center items-center w-fit gap-2 font-normal">
        <div className="bg-[#EEEEEE] size-12 flex justify-center items-center cursor-pointer rounded-md">
          <Location />
        </div>
        <h6>Ha Noi, Viet Nam</h6>
      </li>
      <li className="flex justify-center items-center w-fit gap-2">
        <div className="bg-[#EEEEEE] size-12 flex justify-center items-center cursor-pointer rounded-md">
          <Location />
        </div>
        <h6>Ha Noi, Viet Nam</h6>
      </li>
      <li className="flex justify-center items-center w-fit gap-2">
        <div className="bg-[#EEEEEE] size-12 flex justify-center items-center cursor-pointer rounded-md">
          <Location />
        </div>
        <h6>Ha Noi, Viet Nam</h6>
      </li>
      <li className="flex justify-center items-center w-fit gap-2">
        <div className="bg-[#EEEEEE] size-12 flex justify-center items-center rounded-md">
          <Location />
        </div>
        <h6>Ha Noi, Viet Nam</h6>
      </li>
      <li className="flex justify-center items-center w-fit gap-2">
        <div className="bg-[#EEEEEE] size-12 flex justify-center items-center rounded-md">
          <Location />
        </div>
        <h6>Ha Noi, Viet Nam</h6>
      </li>
      <li className="flex justify-center items-center w-fit gap-2">
        <div className="bg-[#EEEEEE] size-12 flex justify-center items-center rounded-md">
          <Location />
        </div>
        <h6>Ha Noi, Viet Nam</h6>
      </li>
    </motion.ul>
  );
};
