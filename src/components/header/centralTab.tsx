"use client";
import { Bus, HeartHandshake, PackageOpen } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useAnimationControls,
  Variants,
} from "motion/react";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/AppContext";

const CentralTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [firstTimeLoad, setFirstTimeLoad] = useState(true);
  const {
    heroSearchBarActive,
    finalHeaderSearchActive,
    setFinalHeaderSearchActive,
  } = useAppContext();
  console.log("finalheadersearchactive", finalHeaderSearchActive);
  console.log("heroserachbarActive", heroSearchBarActive);

  const [scope, animate] = useAnimate();
  const control = useAnimationControls();
  useEffect(() => {
    if (heroSearchBarActive) {
      control.start("animate");
    }
    if (!heroSearchBarActive && !finalHeaderSearchActive) {
      control.start("hidden");
    }
    if (finalHeaderSearchActive) {
      control.start("animate");
    }
  }, [heroSearchBarActive, finalHeaderSearchActive]);

  const variants = (firstTimeLoad: boolean): Variants => ({
    initial: {
      y: firstTimeLoad ? "-24px" : "calc(-100% - 24px)",
    },
    animate: {
      y: "-24px",
    },
    hidden: {
      y: "calc(-100% - 24px)",
    },
  });

  return (
    <motion.div
      // initial={{ y: firstTimeLoad ? "-24px" : "calc(-100% - 24px)" }}
      // animate={{ y: "-24px" }}
      // exit={{ y: "calc(-100% - 24px)" }}
      variants={variants(firstTimeLoad)}
      animate={control}
      style={{ y: "-24px" }}
      onAnimationComplete={() => {
        setFirstTimeLoad(false);
      }}
      ref={scope}
      transition={{ duration: 0.6, ease: "circOut" }}
      className="hidden lg:block px-14 bg-white/60 backdrop-blur-md rounded-bl-[40px] rounded-br-[40px] pt-4 pb-7 absolute top-0 left-1/2 -translate-x-1/2 border-[3px] border-l-white/50 border-b-white/60 border-r-white/50"
    >
      <ul className="flex justify-between items-center gap-8">
        {Tabs.map((tab, i) => {
          return (
            <li
              key={tab.label}
              className="flex items-center gap-4 justify-center cursor-pointer relative"
              onClick={() => setActiveTab(i)}
            >
              {i === activeTab && (
                <motion.div
                  layoutId="nav-pill"
                  layoutDependency={activeTab}
                  key={activeTab}
                  className="pill absolute -bottom-3 left-0 right-0 w-full h-1 bg-[#279678]"
                />
              )}
              <div
                className={`border-2  size-10 rounded-full flex justify-center items-center  bg-white transition-all duration-300 ${
                  activeTab === i
                    ? "border-[#279678] [&>svg]:stroke-[#279678]"
                    : "border-[#EAECF0] outline-[#EAECF0] [&>svg]:stroke-[#667085]"
                }`}
              >
                {tab.icon}
              </div>
              <span
                className={`font-bold transition-all duration-300 ${
                  activeTab === i ? "text-[#279678] " : "text-[#667085] "
                }`}
              >
                {tab.label}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
export default CentralTab;

const Tabs = [
  {
    icon: <Bus className="size-5" />,
    label: "Travel",
  },
  {
    icon: <PackageOpen className="size-5" />,
    label: "Ship Parcels",
  },
  {
    icon: <HeartHandshake className="size-5" />,
    label: "Rent buses",
  },
];
