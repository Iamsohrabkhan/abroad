import React from "react";
import { twMerge } from "tailwind-merge";
import { BestPrice } from "./gurenteedprice";

const tripData = [
  {
    time: "12:00 am",
    station: "Layon Perrache",
    duration: "2h 1m",
    changes: "0 changes",
  },
  {
    time: "12:00 am",
    station: "Layon Perrache",
    duration: "2h 1m",
    changes: "0 changes",
  },
  {
    time: "12:00 am",
    station: "Layon Perrache",
    duration: "2h 1m",
    changes: "0 changes",
  },
];

const Grid2 = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge("", className)}>
      <div className="sticky top-24">
        <div className={"bg-white p-8 "}>
          <div className="inline-flex gap-2 items-center justify-center">
            <h4>Your trip</h4>
            <h5>1 Adult</h5>
          </div>
          <div className="bg-gray-200 p-4 rounded-md mt-4">
            <h4 className="text-sm">Outbounding Tue Jul 8</h4>
            <div className="grid grid-cols-12 gap-2 mt-6">
              {/* Left timeline */}
              <div className="col-span-1 relative">
                <div className="w-4 relative h-full">
                  <div className="ball absolute size-4 rounded-full bg-blue-600 top-0 z-10" />
                  <div className="line absolute top-0 bottom-0 w-1 bg-blue-400 left-1/2 -translate-x-1/2" />
                  <div className="ball absolute size-4 rounded-full bg-blue-600 bottom-0 z-10" />
                </div>
              </div>
              {/* Right content: time + detail in one row for perfect alignment */}
              <div className="col-span-11 flex flex-col gap-4">
                {tripData.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-2 items-start"
                  >
                    {/* Time */}
                    <div className="col-span-3">
                      <h5>{item.time}</h5>
                    </div>
                    {/* Details */}
                    <div className="col-span-9">
                      <h5 className="font-bold">{item.station}</h5>
                      <p>
                        <span className="text-[#777]">{item.duration}, </span>
                        <span className="text-blue-500">{item.changes}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="text-blue-400 mt-2">
              View ticket conditions
            </button>
          </div>
          <div className="flex justify-between items-center mt-6">
            <h4>Total</h4> <h4>$25.00</h4>
          </div>
          <button
            className="text-3xl bg-green-700 flex flex-col items-center justify-center w-full py-2 text-white mt-6 rounded-md"
            onClick={() => {
              const element = document.getElementById("pay-section");
              if (element) {
                const offsetTop =
                  element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: offsetTop - 100, // Leave 100px space on top
                  behavior: "smooth",
                });
              }
            }}
          >
            <span>Continue</span>{" "}
            <span className="text-lg">to flexibility</span>
          </button>
        </div>
        <BestPrice />
      </div>
    </div>
  );
};

export default Grid2;
