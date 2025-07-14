import { motion } from "motion/react";
import React from "react";

export const SwiperWrapper = ({
  children,
  swiperActive,
  setSwiperActive,
}: {
  children: React.ReactNode;
  swiperActive: boolean;
  setSwiperActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div animate={{
      height: swiperActive ? "auto" : "0",
    }}
    className="overflow-clip"
    >
      <div className="px-12  relative ">{children}</div>
    </motion.div>
  );
};
