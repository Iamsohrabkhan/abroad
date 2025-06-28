import { Star } from "lucide-react";
import React from "react";

const StarComponent: React.FC = () => {
  return (
    <span className="inline-block bg-green-600 p-1">
      <Star className="size-3 stroke-white fill-white" />
    </span>
  );
};

export const renderStars = (rating: number): JSX.Element[] => {
  return Array.from({ length: rating }, (_, index) => (
    <StarComponent key={index} />
  ));
};
