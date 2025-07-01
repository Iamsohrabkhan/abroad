import { motion } from "motion/react";

import React, { useEffect, useState } from "react";
import { CalenderDialog } from "./calenderdialog";
import { FromDialog } from "./fromdialog";
import { ToDialog } from "./todialog";
import { Traveller } from "./travellar";

const Dialog = ({
  active,
  activePill,
  toWidth,
}: {
  active: boolean;
  activePill: number;
  toWidth: number;
}) => {
  return (
    <>
      {active && (
        <motion.div
          className={`absolute top-[calc(14px*6)]  bg-white z-[60] shadow-md origin-top 
            ${activePill === 0 ? "w-0" : "min-w-96"} 
            // ${activePill === 2 ? "w-0" : "min-w-96"} 
            
            ${(activePill === 3 || activePill === 4) && "left-0 right-0"} ${
            activePill === 5 && "left-auto right-0"
          }`}
          layout
          style={
            {
              borderRadius: 24,
              left: activePill === 2 && toWidth,
            } as React.CSSProperties
          }
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            scale: {
              duration: 0.3,
              ease: "circOut",
            },
          }}
        >
          {activePill === 1 && <FromDialog />}
          {activePill === 2 && <ToDialog />}
          {(activePill === 3 || activePill === 4) && (
            <CalenderDialog activePill={activePill} />
          )}
          {activePill === 5 && <Traveller activePill={activePill} />}
        </motion.div>
      )}
    </>
  );
};

export default Dialog;
