"use client";
import { motion } from "motion/react";
import Counter from "./counter";

export const Traveller = ({ activePill }: { activePill: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <ul className="divide-y-2 px-8 py-4">
        <li className=" flex gap-2 py-4  justify-between">
          <div className="">
            <h6 className="font-medium text[#222222] text-base">Seniors</h6>
            <p className="text-[#717171] text-sm">Ages 60 or above</p>
          </div>
          <Counter />
        </li>
        <li className="flex gap-4 py-4 justify-between">
          <div className="">
            <h6 className="font-medium text[#222222] text-base">
              Teans/Adults
            </h6>
            <p className="text-[#717171] text-sm">Ages 16 or 59</p>
          </div>
          <Counter />
        </li>
        <li className="flex gap-4 py-4 justify-between">
          <div className="">
            <h6 className="font-medium text[#222222] text-base">Children</h6>
            <p className="text-[#717171] text-sm">Ages 3 to 15</p>
          </div>
          <Counter />
        </li>
        <li className="flex gap-4 py-4 justify-between">
          <div className="">
            <h6 className="font-medium text[#222222] text-base">Babies</h6>
            <p className="text-[#717171] text-sm">Ages 0 to 3</p>
          </div>
          <Counter />
        </li>
        <p className="text-[#717171] text-sm w-full pt-4 max-w-96">
          If the baby doesnt need a seat, it travels free of charges: don’t add
          it in this case. On the other hand, if you wish to reserve a seat for
          him/her, add him/her as a passenger.
        </p>
      </ul>
    </motion.div>
  );
};
