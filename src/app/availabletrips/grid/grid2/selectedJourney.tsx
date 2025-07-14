import { AlertCircle, Leaf } from "lucide-react";
import React from "react";

export const SelectedJourney = () => {
  return (
    <div className="lg:flex justify-between items-center mt-6">
      <h3>Select Journey</h3>
      <button className="text-green-500 mt-4 lg:mt-0 bg-green-100 flex justify-center items-center gap-3 px-4 py-2">
        <Leaf /> 97% less Co<sub>2</sub> by car <AlertCircle />
      </button>
    </div>
  );
};
