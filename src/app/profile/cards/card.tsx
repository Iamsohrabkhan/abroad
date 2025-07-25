import React from "react";
import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { CardDescription } from "@/components/ui/card";

interface CardProps {
  title: string;
  numberSub?: string;
  number?: number | string;
  icon?: React.ReactNode; // e.g. <User />
  progress?: string;
  progressIcon?: React.ReactNode; // e.g. <ArrowDown />
  className?: string;
  numberClassName?: string;
  paragraph: string;
  ArrowButton?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  numberSub,
  number,
  icon,
  paragraph,
  className,
  numberClassName,
  ArrowButton,
}) => {
  return (
    <div
      className={twMerge(
        "card p-8 shadow-2xs flex flex-col gap-6 justify-between rounded-3xl ",
        className
      )}
    >
      <div className="flex gap-2 items-center">
        {number && (
          <>
            <div
              className={twMerge(
                "p-2 text-[#1A1528] text-2xl font-bold rounded-md",
                numberClassName
              )}
            >
              {number}
            </div>
            {icon && <div>{icon}</div>}
            {numberSub && (
              <div className="text-4xl font-bold">
                <sub>{numberSub}</sub>
              </div>
            )}
          </>
        )}

        {ArrowButton && (
          <div className=" flex flex-col gap-2">
            <h5 className="text-[#1A1528] font-[300]]">Alexandragade 10</h5>
            <div className="inline-flex justify-center items-center gap-2">
              <ArrowIcon />
              <button className="bg-mint-dark py-1.5 px-2 rounded-xl text-white">Campusvej 55</button>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2  flex-col">
        <h4 className="text-2xl">{title}</h4>
        <p className="text-xs font-light text-[#404040]">{paragraph}.</p>
      </div>
    </div>
  );
};

export default Card;

const ArrowIcon = () => (
  <svg
    width="22"
    height="23"
    viewBox="0 0 22 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.9629 16.5123C21.2917 16.1835 21.2917 15.6503 20.9629 15.3215L15.604 9.96261C15.2752 9.63377 14.742 9.63377 14.4132 9.96261C14.0843 10.2915 14.0843 10.8246 14.4132 11.1535L19.1766 15.9169L14.4132 20.6803C14.0843 21.0092 14.0843 21.5423 14.4132 21.8712C14.742 22.2 15.2752 22.2 15.604 21.8712L20.9629 16.5123ZM1 0.759766H0.157937C0.157937 3.47011 1.18836 7.47111 4.25379 10.8031C7.34226 14.1601 12.4227 16.759 20.3674 16.759V15.9169V15.0748C12.8182 15.0748 8.21496 12.6213 5.49319 9.66285C2.74838 6.67936 1.84206 3.1018 1.84206 0.759766H1Z"
      fill="#1A1528"
    />
  </svg>
);
