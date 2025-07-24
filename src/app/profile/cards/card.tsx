import React from "react";
import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { CardDescription } from "@/components/ui/card";

interface CardProps {
  title: string;
  number: number | string;
  icon: React.ReactNode; // e.g. <User />
  progress?: string;
  progressIcon?: React.ReactNode; // e.g. <ArrowDown />
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  number,
  icon,
  progress,
  progressIcon,
  className,
}) => {
  return (
    <div className={twMerge("card p-4 space-y-12 ", className)}>
      <div className="flex gap-2 items-center">
        <div className="p-2 bg-accent rounded-md">{icon}</div>
        <CardDescription className="text-nowrap">{title}</CardDescription>
      </div>
      <div className="flex gap-2 items-center justify-between">
        <h4 className="p-2">{number}</h4>
        {progress && progressIcon && (
          <h5
            className="bg-orange-100 font-semibold text-sm text-orange-950 p-1 rounded-md inline-flex justify-center items-center gap-2
    [&>svg]:size-4
    "
          >
            {progressIcon}
            {progress}
          </h5>
        )}
      </div>
    </div>
  );
};

export default Card;
