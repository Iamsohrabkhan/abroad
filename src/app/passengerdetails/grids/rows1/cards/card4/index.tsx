import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, CircleAlert, Sparkles } from "lucide-react";
import { DateOfBirthCalender } from "../dateofbirthcalender";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

const Card1 = () => {
  return (
    <div>
      <h2>Flexibility</h2>

      <div className="card  border border-green-500 rounded-md bg-white">
        <div>
          <div className="p-4 bg-green-50 ">
            <h4 className="inline-flex justify-center items-center gap-2">
              <Sparkles className="stroke-yellow-400" />
              <span>Available on this Journey</span>
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="p-4 ">
            <div className="space-y-3">
              <button className="bg-green-100 text-sm border-green-400 border inline-flex justify-center items-center p-2 rounded-md">
                Added Flexibility
              </button>
              <h3>Cancel for any reason</h3>
              <ul className="space-y-2 list-none flex flex-col ">
                <li className="inline-flex items-center justify-start gap-2 ">
                  <Check className="stroke-green-500" />
                  <span>
                    Cancel <strong>up to 6 hours</strong> before travel
                  </span>
                </li>
                <li className="inline-flex items-center justify-start gap-2">
                  <Check className="stroke-green-500" />
                  <span>
                    Get <strong>75% of ticket price.</strong>
                  </span>
                </li>
                <li className="inline-flex items-center justify-start gap-2">
                  <Check className="stroke-green-500" />
                  <span>
                    <strong>No question asked</strong>
                  </span>
                </li>
              </ul>
            </div>
            <div className="inline-flex mt-6 justify-center items-center gap-3 mb-2  ">
              <Label className=" border-purple-600 border-2 size-6 flex justify-center items-center  rounded-full cursor-pointer">
                <Checkbox
                  id="flexibility-check "
                  className="size-4 rounded-full cursor-pointer "
                />
              </Label>
              <Label htmlFor="flexibility-check">Add for this only $5.27</Label>
            </div>
          </div>
          <div className="flex justify-end pt-4 pb-24 pr-4">
            <Image
              width={150}
              height={50}
              
              alt="woman in window"
              src="https://images.unsplash.com/photo-1713561684892-0c229d71d11e?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-md object-cover object-right aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
