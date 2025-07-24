import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const Card5 = () => {
  return (
    <div className="card p-4 border border-[#d3d3d3] rounded-md space-y-3 bg-white">
      <h4>No added cover</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, eaque?
        Asperiores temporibus delectus unde illum mollitia?
      </p>
      <div>
          <Link href="" target="_blank" className="text-blue-600 text-sm">
            View ticket conditions
          </Link>
      </div>
      <div className="inline-flex mt-6 justify-center items-center gap-3 mb-2  ">
        <Label className=" border-purple-600 border-2 size-6 flex justify-center items-center  rounded-full cursor-pointer">
          <Checkbox
            id="flexibility-check "
            className="size-4 rounded-full cursor-pointer "
          />
        </Label>
        <Label className="font-semibold text-lg" htmlFor="flexibility-check">I'm fine with this.</Label>
      </div>
    </div>
  );
};

export default Card5;
