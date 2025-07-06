"use client";
import { motion } from "motion/react";

const Pill = () => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.25,
        layout: {
          duration: 0.3,
        },
      }}
      layoutId="pill"
      style={{ borderRadius: 999 }}
      className="pill bg-white pointer-events-none inset-0 size-full absolute  z-10 "
    />
  );
};

export default Pill;
