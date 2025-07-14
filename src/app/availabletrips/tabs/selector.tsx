import React, { useState } from "react";

const TransportSelector: React.FC = () => {
  const [selected, setSelected] = useState<"train" | "bus">("train");

  return (
    <ul className="inline-flex cursor-pointer justify-center items-center">
      <li
        onClick={() => setSelected("train")}
        className={`min-w-36 min-h-12 flex justify-center items-center rounded-l-full border-2 
          ${selected === "train" ? "border-blue-500 outline-blue-500 bg-blue-50" : "border-gray-300"}`}
      >
        Train - $55.00
      </li>
      <li
        onClick={() => setSelected("bus")}
        className={`min-w-36 min-h-12 flex justify-center items-center rounded-r-full border-2 
          ${selected === "bus" ? "border-blue-500 outline-blue-500 bg-blue-50" : "border-gray-300"}`}
      >
        Bus
      </li>
    </ul>
  );
};

export default TransportSelector;
