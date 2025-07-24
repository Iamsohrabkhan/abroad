import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleAlert, Luggage, Minus, Plus, RockingChair } from "lucide-react";
import { DateOfBirthCalender } from "../dateofbirthcalender";
import { Switch } from "@/components/ui/switch";
import { LeadPassenger } from "../leadpassengeroption";
import { PhoneInput } from "@/components/ui/phone-input";
import Ouigo from "@/icons/ouigo";
import ComfortOption from "./confirmOption";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Attention } from "./attension";
import { Checkbox } from "@/components/ui/checkbox";
import Counter from "./counter";

const Card3 = () => {
  return (
    <div className="card p-4 border border-[#d3d3d3] rounded-md bg-white">
      <div className="flex justify-between items-center">
        <h4>
          Lyon <span className="font-light">to</span> Paris
        </h4>
        <Ouigo />
      </div>
      <div className="flex gap-4 mt-4">
        <RockingChair />
        <div>
          <h4>Seating</h4>
          <div className="mt-3">
            <ComfortOption />
          </div>
          <p className="text-xs pl-4 mt-4">
            Seating preference can not gureented
          </p>
        </div>
      </div>
      <Separator className="w-full h-1 bg-[#d3d3d3] my-6" />
      <div className="flex gap-4 mt-4">
        <Luggage />
        <div className="space-y-6">
          <h4>Luggage Alowance</h4>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <Link
              target="_blank"
              href="/luggageallowance"
              className="text-blue-400"
            >
              View allow dimension
            </Link>
          </p>
          <Attention />
          <Separator className="w-full h-1 bg-[#d3d3d3] my-6" />
          <div className="mt-6 space-y-6">
            <h5 className="font-bold">Extras</h5>
            <h6 className="font-semibold">Luggage</h6>
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <Label htmlFor="terms">
                Bike / kickscooter folded or bike disassembled in a cover
                (5.00$)
              </Label>
            </div>
          </div>
          <div className="space-y-4">
            <Counter Label="Extra Beggage (5.00$)" />
            <Counter Label="Pram (Free))" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
