import Frecciarossa from "@/icons/Frecciarossa";
import Ouigo from "@/icons/ouigo";
import Tsv from "@/icons/tsv";
import { ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import Train from "./train";

export const Banner = () => {
  const ref = useRef(null);
  return (
    <div className="banner  font-medium min-h-32 flex justify-between pl-32 pr-3 items-center relative" ref={ref}>
      <Train ref={ref} />

      <div>
        <h5 className="box text-sm">Discover on board services</h5>
        <div className="bg-white p-3 rounded-4xl inline-flex justify-center items-center gap-4">
          <Frecciarossa />
          <Tsv />
          <Ouigo />
        </div>
      </div>
      <button className="inline-flex">
        Compare <ChevronRight />
      </button>
      <div className="bg-green-800 absolute bottom-0 left-0 right-0 h-2"></div>
    </div>
  );
};
