"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import Location from "@/icons/loaction";
import { useState } from "react";

const SecondRow = () => {
  const [departureDate, setDepartureDate] = React.useState<Date | undefined>(
    new Date()
  );
  const [returnDate, setReturnDate] = React.useState<Date | undefined>(
    new Date()
  );
  return (
    <div className="shrink-0 grow-0 basis-full w-full flex justify-center items-center ">
      <div className="bg-white w-full max-w-72 rounded-full p-4 flex items-center justify-between gap-4 border-1 shadow border-[#DFE2E6] relative divide-x-2 divide-accent">
        <Drawer>
          <DrawerTrigger className="w-full">
            <div className="text-sm  w-full  text-start ">
              <h6 className="font-[400] text-sm ">Departure</h6>
              <p className="text-black/50 text-sm">{`${departureDate?.getDate()} ${departureDate?.getMonth()} ${departureDate?.getFullYear()}`}</p>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="">
              <DrawerTitle>Departure Date</DrawerTitle>
            </DrawerHeader>
            <div className="flex justify-center items-center">
              <Calendar
                mode="single"
                selected={departureDate}
                onSelect={setDepartureDate}
                className="rounded-md border shadow-sm w-full max-w-xs"
                captionLayout="dropdown"
              />
            </div>
          </DrawerContent>
        </Drawer>
     
        <Drawer>
          <DrawerTrigger className="w-full">
            <div className="text-sm  w-full  text-start ">
              <h6 className="font-[400] text-sm ">Return</h6>
              <p className="text-black/50 text-sm">{`(Optional)`}</p>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="">
              <DrawerTitle>Departure Date</DrawerTitle>
            </DrawerHeader>
            <div className="flex justify-center items-center">
              <Calendar
                mode="single"
                selected={returnDate}
                onSelect={setReturnDate}
                className="rounded-md border shadow-sm w-full max-w-xs"
                captionLayout="dropdown"
              />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};
export default SecondRow;
