import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleAlert } from "lucide-react";
import { DateOfBirthCalender } from "./dateofbirthcalender";
import { Switch } from "@/components/ui/switch";
import { LeadPassenger } from "./leadpassengeroption";
import { PhoneInput } from "@/components/ui/phone-input";

const Card2 = () => {
  return (
    <div className="card p-4 border border-[#d3d3d3] rounded-md bg-white">
      <div>
        <h4>Contact Details</h4>
      </div>
      <div className="">
        <div className="grid w-full max-w-sm items-center gap-3 mt-3">
          <Label htmlFor="name">LeadPassenger</Label>
          <LeadPassenger />
        </div>
      </div>
      <div className="w-1/2 pr-3">
        <div className="grid w-full max-w-sm items-center gap-3 mt-3">
          <Label>Phone Number</Label>
          <PhoneInput defaultCountry="US" international />
        </div>
      </div>

      <div className="">
        <div className="grid w-full  items-center gap-3 mt-3">
          <Label className="mt-2">Email ticket and confirmation to:</Label>
          <div className="flex w-full gap-3">
            <Input type="email" placeholder="Email address" />
            <Input type="email" placeholder="Confirm email address" />
          </div>
        </div>
        <button className="text-sm inline-flex justify-center items-center mt-3 gap-1 text-blue-700  ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/657/657563.png "
            alt="wheel chair"
            className="size-5 saturate-100  hue-rotate-[200deg] brightness-0"
          />{" "}
          <span className="underline">Wheelchair Passenger?</span>
        </button>
      
      </div>
    </div>
  );
};

export default Card2;
