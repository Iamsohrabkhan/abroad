import { ChevronDown, Clock, Luggage, Truck } from "lucide-react";

import React, { useState } from "react";
import {
  Plug,
  Utensils,
  Wifi,
  Film,
  Thermometer,
  Newspaper,
  Music2,
  Baby,
} from "lucide-react";
import { motion } from "motion/react";

const trainFeatures = [
  { label: "Bagages de grande taille", icon: Luggage },
  { label: "Prise électrique", icon: Plug },
  { label: "FRECCIABistrò", icon: Utensils },
  { label: "WiFi", icon: Wifi },
  { label: "Films", icon: Film },
  { label: "Journaux", icon: Newspaper },
  { label: "Musique", icon: Music2 },
  { label: "Dessins animés", icon: Baby },
  { label: "Climatisation", icon: Thermometer },
];

export const TrainSheduleCard = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="bg-gray-50/50">
      <motion.div
        onClick={() => {
          setActive(!active);
        }}
        className="bg-gray-100 p-4 rounded-md  mt-6 "
        animate={{ border: active ? "0.05px solid #d3d3d3" : "none" }}
        style={{
          borderBottomRightRadius: active ? "0" : "0.5rem",
          borderBottomLeftRadius: active ? "0" : "0.5rem",
        }}
      >
        <div className="inline-flex justify-center items-center gap-4">
          <Truck />
          <span className="font-bold">9:54 am</span>
          <span className="font-bold">Paris Gare de Lyon</span>
        </div>
        <div className=" relative flex flex-col gap-4 pl-12 mt-4 cursor-pointer">
          <div className=" tube bg-accent w-1 h-full translate-x-full rounded-md absolute left-0 top-0 bottom-0 before:content-['_'] before:size-3 before:rounded-full before:bg-accent-foreground before:absolute before:bottom-0 before:left-1/2 before:translate-y-1/2 before:-translate-x-1/2" />
          <div className="inline-flex gap-6 ">
            <div className="time">1h:56m</div>
            <div className="time">0 changes</div>
            <div className="logo">logo</div>
            <div className="md:inline-flex gap-1 hidden">
              <p className="bg-white p-2 rounded-sm text-xs lg:text-shadow-sm">
                2 services available
              </p>
              <div className="flex justify-center items-center">
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    active ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
          </div>
          <div className="inline-flex gap-9">
            <span>18:56</span> <span>Lyon Part-Dieu</span>
          </div>
          <div className="inline-flex gap-1 md:hidden">
            <p className="bg-white p-2 rounded-sm text-xs lg:text-shadow-sm">
              2 services available
            </p>
            <div className="flex justify-center items-center">
              <ChevronDown
                className={`transition-transform duration-300 ${
                  active ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{
          height: active ? "auto" : 0,
          border: active ? "0.05px solid #d3d3d3" : "none",
          borderTop: active ? "0px solid transparent" : "none",

          transition: {
            duration: 0.2,
          },
        }}
        style={{
          borderTopRightRadius: active ? "0" : "0.5rem",
          borderTopLeftRadius: active ? "0" : "0.5rem",
        }}
        className={`overflow-clip `}
      >
        <div className="p-4 ">
          <div className="inline-flex justify-center items-center gap-2 ">
            <Clock />{" "}
            <h5 className="text-base">Durée 2h 8min, 0 correspondance</h5>
          </div>

          <div className="grid grid-cols-12 mt-2 ">
            <div className="col-span-1 relative  flex justify-start w-fit">
              <Truck />
              <div className="tube bg-accent w-1 rounded-md absolute left-1/2 -translate-x-1/2 top-8 bottom-0 before:content-['_'] before:size-3 before:rounded-full before:bg-accent-foreground before:absolute before:bottom-0 before:left-1/2 before:translate-y-1/2 before:-translate-x-1/2" />
            </div>

            <ul className="col-span-2 flex flex-col ">
              <li className="flex items-center justify-center">21:00</li>
              <li className="flex items-center justify-center font-light text-sm mt-6">
                2h 8m
              </li>
              <li className="flex items-center justify-center font-light text-sm mt-auto">
                09:26
              </li>
            </ul>

            <div className="col-span-9  flex flex-col">
              <div className="flex-1 flex items-center px-4">
                Paris Gare de Lyon
              </div>
              <div className="flex-1 flex items-center px-4">
                <div className="inline-flex items-center gap-2 mt-6">
                  <p>TGV INOUI 6633</p>
                  <div className="logo">logo</div>
                </div>
              </div>

              <div className="flex-1 flex items-center px-4 mt-6 text-accent text-sm ">
                <ul className="flex flex-col justify-start items-start gap-1 h-full flex-1 ">
                  {trainFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <li
                        key={index}
                        className="inline-flex justify-center items-center gap-1"
                      >
                        <Icon size={16} />
                        <span>{feature.label}</span>
                      </li>
                    );
                  })}
                  <li className="mt-6 font-bold text-base text-black">
                    Lyon Part-Dieu
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
