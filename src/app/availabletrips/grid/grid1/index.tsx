import { ChevronRight, ChevronUp } from "lucide-react";
import React from "react";
import { Matrix } from "./table";
import { Banner } from "./banner";

const Grid1 = () => {
  return (
    <div className="mb-12">
      <Banner />
      <button className="w-full border border-accent cursor-pointer bg-white flex justify-center items-center gap-3 py-2 mt-6">
        <ChevronUp /> Earlier
      </button>
      <Matrix />
    </div>
  );
};

export default Grid1;
