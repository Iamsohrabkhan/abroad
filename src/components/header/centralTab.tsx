"use client";
import { Bus, HeartHandshake, PackageOpen } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const CentralTab = ({ state }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <motion.div
      initial={false}
      animate={{ y: state ? "-24px" : "calc(-100% - 24px)" }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className="hidden lg:block px-14 bg-white/60 backdrop-blur-md rounded-bl-[40px] rounded-br-[40px] pt-4 pb-7 absolute top-0 left-1/2 -translate-x-1/2 border-2 border-white"
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
                  className="pill absolute -bottom-3 left-0 right-0 w-full h-1 bg-[#279678]"
                ></motion.div>
              )}
              <div
                className={`border-3  size-10 rounded-full flex justify-center items-center  bg-white transition-all duration-300 ${
                  activeTab === i
                    ? "border-[#279678] [&>svg]:stroke-[#279678]"
                    : "border-[#667085] [&>svg]:stroke-[#667085]"
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
