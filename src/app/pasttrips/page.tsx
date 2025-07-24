import { Container } from "@/components/ui/container";
import Ouigo from "@/icons/ouigo";
import { Separator } from "@radix-ui/react-separator";
import {
  ArrowRight,
  ChevronDown,
  MessageCircleMore,
  Smartphone,
  User,
} from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <Container>
      <div>
        <h2>My Booking</h2>
        <ul className="flex gap-4 mt-4">
          <li>Upcoming trips</li>
          <li>Past trips</li>
        </ul>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6">
        <div className="p-6 border border-accent space-y-6 lg:col-span-8 rounded-md h-fit shadow-xl">
          <div className="flex justify-between items-center">
            <h4>Toulouse Metabiau to Paris Austerlitz</h4>
            <h5>$55.00</h5>
          </div>
          <div className="gap-4 flex">
            <User />
            <h5 className="uppercase">Balendine pelagie seni epse yapo</h5>
          </div>
          <div className="grid  grid-cols-2 lg:grid-cols-3 lg:items-center bg-gray-100 py-4 px-6 rounded-md gap-6">
            <div className="flex justify-between items-center ">
              <div className="flex gap-2 ">
                <ArrowRight />
                <p>
                  Tue, <strong>28 Aug</strong>
                </p>
              </div>
            </div>
            <div>
              <div className="inline-flex gap-1">
                <span>06:20</span>
                <span>
                  <ArrowRight />
                </span>
                <span>06:20</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p>5h 35min .0 changes</p>
              <ChevronDown />
            </div>
          </div>
          <button className="border border-accent py-3 px-4 font-bold">
            Manage booking
          </button>
        </div>
        <div className="lg:col-span-4 p-6 border border-accent space-y-6 shadow-xl rounded-md relative">
          {/* <svg
            className="absolute w-4 h-4 top-6 left-0.5 translate-y-1/2 -translate-x-full"
            viewBox="0 0 100 100"
          >
            <polygon
              points="100,0 100,100 0,50"
              fill="white"
              stroke="black"
              strokeWidth="6"
            />
          </svg> */}

          <h4>Your tickets</h4>
          <div className="p-4 border rounded-md border-accent flex justify-between items-center">
            <Smartphone />
            <div className="flex flex-col gap-1">
              <button className="font-bold">etickets</button>
              <button className="text-blue-400">View tickets</button>
              <button className="text-blue-400">How it works</button>
            </div>
            <Ouigo />
          </div>
          <p>Passenger need valid form of ID</p>
          <button className="bg-gray-100 p-3 w-full flex justify-start rounded-md">
            Booking reference: &nbsp;{" "}
            <strong className="uppercase"> TPRUZu</strong>
          </button>
        </div>
      </div>

      <button className="flex justify-center items-center p-3 border border-accent w-full gap-2 text-accent">
        <MessageCircleMore />
        Tell us what you think about our My booking Page
      </button>
    </Container>
  );
};

export default Page;
