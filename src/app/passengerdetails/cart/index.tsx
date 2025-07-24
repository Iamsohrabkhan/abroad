import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@radix-ui/react-separator";
import {
  ArrowRight,
  BookType,
  Box,
  ChevronDown,
  Plus,
  Trash,
  Trash2,
} from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

const Cart = ({ className }: { className: string }) => {
  return (
    <div className={twMerge("", className)} id="pay-section">
      <h4>Cart</h4>
      <div className="flex gap-2">
        <Checkbox className="size-5 mt-6" icon />
        <div>
          <div className="card p-8 border border-[#d3d3d3] bg-white rounded-md">
            <div className="flex gap-6 justify-between ">
              <h3 className="basis-full">
                Lyon Bus station to Paris Bercy Seine
              </h3>
              <h4 className="basis-1/3 text-end">$55.00</h4>
            </div>
            <div className="profile flex items-center gap-3 py-4 px-2 border border-[#d3d3d3] rounded-md  my-6">
              <BookType />
              yjg
            </div>
            <div className="grid grid-cols-3 bg-gray-200 py-4 px-6 rounded-md gap-6">
              <div className="flex justify-between items-center">
                <div>
                  <ArrowRight />
                  <p>
                    {" "}
                    Tue, <strong>Jul 8,</strong> 2025{" "}
                  </p>
                </div>
                <Separator className="bg-[#d3d3d3] h-full w-0.5" />
              </div>
              <div>
                <div className="inline-flex gap-1">
                  <span>06:20</span>
                  <span>
                    <ArrowRight />
                  </span>
                  <span>06:20</span>
                </div>
                <p>5h 35min .0 changes</p>
              </div>
              <div className="flex justify-between items-center">
                <strong>Seat Request</strong>
                <ChevronDown />
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <p>
                Price and seat locked in Cart untill{" "}
                <strong>12:38pm today</strong>
              </p>
              <button className="py-2 px-4 border border-[#dedede] cursor-pointer inline-flex justify-center items-center gap-2 rounded-md">
                <Trash2 />
                Remove
              </button>
            </div>
          </div>
          <button className="bg-black py-2 px-4 text-white cursor-pointer inline-flex justify-center items-center gap-2 mt-6">
            <Plus />
            Add another trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
