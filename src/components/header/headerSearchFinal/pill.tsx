"use client";
import { useAppContext } from "@/components/store/AppContext";
import { motion, MotionConfig } from "motion/react";

const Pill = () => {
  const { initalFinalHeaderPill, setInitalFinalHeaderPill } = useAppContext();
  return (
    <MotionConfig transition={{ delay: 5 }}>
      <motion.div
        initial={{
          opacity: !initalFinalHeaderPill ? 0 : 1,
          scale: !initalFinalHeaderPill ? 0.8 : 1,
        }}
        onAnimationComplete={() => {
          setInitalFinalHeaderPill(true);
        }}
        layoutDependency={initalFinalHeaderPill}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.25,
         
        }}
        layoutId={initalFinalHeaderPill ? "pill" : "nothing"}
        style={{ borderRadius: 999 }}
        className="pill bg-white pointer-events-none inset-0 size-full absolute  z-10 "
      />
    </MotionConfig>
  );
};

export default Pill;
