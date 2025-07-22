import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const Counter = ({ Label }: { Label: string }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0)); // optional guard to prevent negative values

  return (
    <div>
        <div className="inline-flex gap-3 justify-center items-center">
          <button
            className="bg-[#d3d3d3] size-8 flex justify-center items-center rounded-full cursor-pointer"
            onClick={decrement}
          >
            <Minus className="size-4" />
          </button>
          <h5 className="min-w-8 text-center">{count}</h5>
          <button
            className="bg-[#d3d3d3] size-8 flex justify-center items-center rounded-full cursor-pointer"
            onClick={increment}
          >
            <Plus className="size-4" />
          </button>
          <p>{Label}</p>
        </div>
    </div>
  );
};

export default Counter;
