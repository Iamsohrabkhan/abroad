import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleAlert } from "lucide-react";
import {DateOfBirthCalender} from "./dateofbirthcalender";
import { Switch } from "@/components/ui/switch";

const Card1 = () => {
  return (
    <div className="card p-4 border border-[#d3d3d3] bg-white rounded-md">
      <div>
        <h4>Adult</h4>
        <p>Ages 26 - 59</p>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="grid w-full max-w-sm items-center gap-3 mt-3">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3 mt-3">
          <Label htmlFor="lastname">Lastname</Label>
          <Input type="text" id="lastname" placeholder="Lastname" />
        </div>
      </div>
      <div className="w-1/2 pr-3">
        <div className="grid w-full max-w-sm items-center gap-3 mt-3">
          <DateOfBirthCalender />
        </div>
      </div>
      <div className="">
        <div className="flex items-center space-x-2 mt-3 w-fit ml-auto cursor-pointer">
          <Label htmlFor="airplane-mode">Save Details</Label>
          <Switch id="airplane-mode" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Card1;
