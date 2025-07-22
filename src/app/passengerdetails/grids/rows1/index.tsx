import { CircleAlert } from "lucide-react";
import Card1 from "./cards/card1";
import Card2 from "./cards/card2";
import Card3 from "./cards/card3";
import { twMerge } from "tailwind-merge";
import Card4 from "./cards/card4";
import Card5 from "./cards/card5";

const Row1 = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge(className)}>
      <div>
        <h3>Passenger details</h3>
        <div className="inline-flex justify-center items-center gap-4 ">
          <CircleAlert className="size-8" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam enim,
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="space-y-4 mt-6">
          <Card1 />
          <Card2 />
          <h4>
            Seating and extras
            <span className="font-light text-sm">(Optional)</span>
          </h4>
          <Card3 />

          <Card4 />
          <Card5 />
        </div>
      </div>
      <p className="text-xs mt-6">
        By adding a travel extra, I declare I have read the relavent{" "}
        <span>product information document</span> and agree to the{" "}
        <span>Term and conditions,</span> I understand If I exchange my ticket,
        any travel extras will not apply to my new ticket.{" "}
      </p>
    </div>
  );
};

export default Row1;
