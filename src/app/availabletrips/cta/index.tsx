import { Container } from "@/components/ui/container";
import CardIcon from "@/icons/cardIcon";
import SearchIcon from "@/icons/searchIcon";
import React from "react";

const ctaItems = [
  {
    icon: <SearchIcon />,
    text: "Buy on our website or app and keep ticket at our fingerprints",
  },
  {
    icon: <SearchIcon />,
    text: "Get notified instantly in case of delay or cancellation.",
  },
  {
    icon: <CardIcon />,
    text: "Change or cancel your tickets online and if needed, contact us!",
  },
  {
    icon: <CardIcon />,
    text: "Change or cancel your tickets online and if needed, contact us!",
  },
];

const Cta = () => {
  return (
    <Container className="grid grid-cols-2 gap-6 lg:grid-cols-4 bg-white shadow space-y-0 p-12">
      {ctaItems.map((item, index) => (
        <div
          key={index}
          className="card flex justify-center items-center flex-col text-center gap-3"
        >
          <span>{item.icon}</span>
          <p>{item.text}</p>
        </div>
      ))}
    </Container>
  );
};

export default Cta;
