import React from "react";

export const Attention = () => {
  return (
    <div className="attention bg-blue-50 py-6 relative">
      <div className="absolute top-0 left-0 bottom-0 bg-blue-700 w-3" />

      <p className="w-[90%] mx-auto text-sm">
        Your Train have been departs from <b>Lyon St-Excpery,</b> which is{" "}
        <b>12,.02</b> miles away from <b>lyon</b>. We show you this to give your
        more choice.{" "}
      </p>
    </div>
  );
};
