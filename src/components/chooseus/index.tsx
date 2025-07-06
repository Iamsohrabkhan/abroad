import { Bus } from "lucide-react";
import { Zap } from "lucide-react";
import { Headset } from "lucide-react";
import { Route } from "lucide-react";
import React from "react";
import RouteFill from "./routefill";
import Truck from "./truck";
import Fastest from "./fastest";
import Headphone from "./headphone";
import { Separator } from "../ui/separator";
import Line from "./line";

const ChooseUs = () => {
  return (
    <section className="">
      <h2 className="text-center mb-12">Why choose us to book ?</h2>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card
          icon={<RouteFill />}
          heading={"+1,00,000  Bus Routes"}
          paragraph={"Offering unparalleled choices for your travel needs"}
        />
        <Card
          icon={<Truck />}
          heading="3500+ Bus Partners"
          paragraph="Ranging from State RTCs to private partners"
        />
        <Card
          icon={<Fastest />}
          heading="Fastest Bus Booking"
          paragraph="Swift and seamless bus ticket booking experience"
        />
        <Card
          icon={<Headphone />}
          heading="24/7 Customer Support"
          paragraph="Available for all your bus booking needs"
        />
      </div>
    </section>
  );
};

export default ChooseUs;

type CardProps = {
  icon: React.ReactNode;
  heading: string;
  paragraph: string;
};

const Card = ({ icon, heading, paragraph }: CardProps) => {
  return (
    <div className="relative rounded-2xl">
      <div
        className="blob absolute -z-50 top-0 right-0 bg-black/50 size-24 rounded-full bg-[conic-gradient(from_0deg,#F262B5_0%,#5FC5FF_16.66%,#FFAC89_33.33%,#8155FF_50%,#789DFF_66.66%,#9F73F1_83.33%,#F262B5_100%)]
                shadow-[0_0_60px_rgba(242,98,181,0.5),0_0_120px_rgba(95,197,255,0.3),0_0_180px_rgba(255,172,137,0.2)]
                hover:shadow-[0_0_80px_rgba(242,98,181,0.7),0_0_160px_rgba(95,197,255,0.5),0_0_240px_rgba(255,172,137,0.3)] animate-blob  mix-blend-multiply "
      />
      <div className="relative flex items-center justify-between gap-6 shadow  p-7 bg-white/60 backdrop-blur-lg z-10 h-full rounded-2xl">
        {icon}
        <div className="content flex justify-between flex-col relative rounded-2xl">
        <div className="h-14 absolute -left-4 -translate-y-1/2 top-1/2 ">
          <Line  />
        </div>
          <h5 className="text-[18px]">{heading}</h5>
          <p className="text-xs">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};
