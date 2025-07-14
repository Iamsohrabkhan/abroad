import React from "react";
import { Attention } from "./attension";
import { BestPrice } from "./bestPrice";
import { ContinueButton } from "./continuebutton";
import { AlertCircle, ChevronDown, Clock, Leaf, Truck } from "lucide-react";
import { SelectedJourney } from "./selectedJourney";
import { TrainSheduleCard } from "./trainsheduleCard";
import { TicketCondition } from "./ticketCondition";
import ComfortOption from "./comfortOption";

const Grid2 = () => {
  return (
    <div className="mb-12">
      <Attention />
      <BestPrice />
      <div className="mt-6">
        <ContinueButton />
        <div className="border border-[#d3d3d3] pb-12 rounded-md">
          <div className="w-[90%] mx-auto ">
            <SelectedJourney />
            <TrainSheduleCard />
            <TicketCondition />
            <ComfortOption />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid2;
