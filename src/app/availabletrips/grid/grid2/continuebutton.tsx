import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

export const ContinueButton = () => {
  return (
    <div className="bg-blue-950 text-white rounded-t-sm p-6 flex justify-between lg:items-center flex-col lg:flex-row gap-4 lg:gap-0">
      <div className="inline-flex flex-col gap-3 lg:gap-1">
        <p>Outbound</p>
        <p>$55.00</p>
        <p className="bg-yellow-400 text-black px-1 py-0.5 rounded-md w-fit lg:w-auto">
          Cheapest
        </p>
        <p>1 Adult</p>
      </div>
      <button className="bg-green-600 text-white text-start p-3 lg:w-auto rounded-md w-fit lg:p-3 inline-flex lg:flex lg:justify-center items-center gap-6 lg:gap-12">
        <div>
            <span className="font-semibold text-xl">Continue</span> <br />{" "}
            <span className="text-sm">to next Step</span>
        </div>
        <ChevronRight/>
      </button>
    </div>
  );
};
