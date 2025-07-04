"use client";
import { ArrowLeftRight, SearchIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useClickOutside, useEventListener } from "react-haiku";

import Pill from "./pill";
import Dialog from "./dialog";
import { motion } from "motion/react";

import { useMeasure } from "react-use";
import { useAppContext } from "@/components/store/AppContext";

const HeaderSearch = () => {
  const container = useRef<HTMLDivElement>(null);
  const { heroSearchBarActive } = useAppContext();
  const {
    activeDialog,
    setActiveDialogPill,
    setActiveDialog,
    activeDialogPill,
  } = useAppContext();

  const fromInputRef = useRef<HTMLInputElement>(null);
  const toInputRef = useRef<HTMLInputElement>(null);

  useEventListener("click", () => setActiveDialog(true), container);
  useClickOutside(container, () => {
    setActiveDialog(false);
    setActiveDialogPill(false);
  });
  const fromRef = useRef<HTMLDivElement>(null);
  const [toRef, { width }] = useMeasure();

  useEffect(() => {
    if (container.current) {
      if (activeDialog) {
        container.current.classList.add("active");
      } else {
        container.current.classList.remove("active");
      }
    }
  }, [activeDialog]);

  return (
    <motion.div
      ref={container}
      className="relative hidden lg:block z-[999]"
      layoutId="search"
    >
      <motion.div
        className={`lg:rounded-full  lg:max-w-none flex lg:flex-row flex-col duration-300 -space-x-2 transition-all ease-out [&_input]:cursor-pointer ${
          !activeDialog ? "bg-white" : "bg-accent"
        } ${heroSearchBarActive && "w-64"}`}
        layout
      >
        <div ref={toRef} className="flex relative ">
          <motion.div
            className="from py-3.5 pl-8 pr-0 2xl:pr-4 lg:rounded-full hover:bg-[#DDDDDD]  space-y-1 cursor-pointer relative isolate "
            layout
            ref={fromRef}
            onClick={() => {
              setActiveDialogPill(1);
              fromInputRef?.current?.focus();
            }}
          >
            {activeDialogPill === 1 && <Pill />}
            <h3 className="text-sm  relative z-20 w-fit">Where From?</h3>
            <input
              ref={fromInputRef}
              className="text-sm w-fit placeholder:text-black/50 outline-none border-none relative z-20"
              placeholder="Departure"
            ></input>
          </motion.div>
          <div className="absolute bg-white left-1/2 top-1/2 translate-x-[calc(-50%-1rem)] shadow-xl p-3 rounded-full -translate-y-1/2 z-50 hidden">
            <ArrowLeftRight className="size-5" />
          </div>
          <motion.div
            layout
            onClick={() => {
              setActiveDialogPill(2);
              toInputRef?.current?.focus();
            }}
            className="to py-3.5 pl-8 pr-0 2xl:pr-4 rounded-full cursor-pointer hover:bg-[#DDDDDD]  space-y-1 relative hidden"
          >
            {activeDialogPill === 2 && <Pill />}
            <h3 className="text-sm relative z-20">To</h3>
            <input
              ref={toInputRef}
              className="text-sm placeholder:text-black/50 outline-none border-none relative z-20"
              placeholder="Where to?"
            ></input>
          </motion.div>
        </div>
        <div className="flex">
          <div
            className="desparture py-3.5 pl-8 pr-4 2xl:pr-16 rounded-full hover:bg-[#DDDDDD] cursor-pointer space-y-1 relative"
            onClick={() => {
              setActiveDialogPill(3);
            }}
          >
            {activeDialogPill === 3 && <Pill />}

            <h3 className="text-sm relative z-50">Add Date</h3>
            <h3 className="text-sm text-black/50 relative z-50">Add date</h3>
          </div>
          {heroSearchBarActive && (
            <div
              className="return py-3.5 pl-8 pr-4 2xl:pr-16 rounded-full hover:bg-[#DDDDDD] cursor-pointer space-y-1 relative "
              onClick={() => setActiveDialogPill(4)}
            >
              {activeDialogPill === 4 && <Pill />}
              <h3 className="text-sm  relative z-50">Return</h3>
              <h3 className="text-sm relative z-50 text-black/50 ">
                (Optional)
              </h3>
            </div>
          )}
        </div>
        <div
          className="return flex justify-between items-center pl-6 pr-3 gap-5 py-3.5  rounded-full hover:bg-[#DDDDDD] cursor-pointer relative"
          onClick={() => setActiveDialogPill(5)}
        >
          {activeDialogPill === 5 && <Pill />}
          <div className="  space-y-1">
            <h3 className="text-sm relative z-20">Travellers</h3>
            <h3 className="text-sm text-black/50 outline-none border-none relative z-20">
              Add travellers
            </h3>
          </div>
          <div className="w-24 2xl:w-32 flex justify-end items-center relative z-20">
            <div
              className={`h-12   rounded-full flex justify-center items-center transition-all duration-300 ease-in-out ${
                activeDialog
                  ? "w-24 2xl:w-32 gap-3 bg-[#279678] border-[3px] border-[#25D1A3]"
                  : "w-12 bg-[#25D1A34D]"
              }`}
            >
              <SearchIcon className="stroke-white size-4 " />
              {activeDialog && (
                <motion.h6
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-white  text-xs"
                >
                  Search
                </motion.h6>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      <Dialog
        active={activeDialog}
        activePill={activeDialogPill}
        toWidth={width / 2}
      />
    </motion.div>
  );
};

export default HeaderSearch;
