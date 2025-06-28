import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string; 
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={twMerge("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mt-24", className)}>
      {children}
    </div>
  );
};
