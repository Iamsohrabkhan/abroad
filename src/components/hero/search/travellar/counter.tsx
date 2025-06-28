import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={handleDecrement}
        disabled={count === 0}
        className={`border-[#717171] outline-[#717171] size-8 flex justify-center items-center border outline rounded-full cursor-pointer ${
          count === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <Minus className="size-4" />
      </button>

      <h5 className="min-w-8 text-center">{count}</h5>

      <button
        onClick={handleIncrement}
        className="border-[#717171] outline-[#717171] size-8 flex justify-center items-center border outline rounded-full cursor-pointer"
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
};

export default Counter;
