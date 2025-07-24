import React from "react";
import Card from "./card";
import {
  ArrowDown,
  ArrowUp,
  IdCard,
  Sparkles,
  Star,
  Triangle,
  User,
} from "lucide-react";

const Cards = () => {
  return (
    <div className="cards  border border-accent grid grid-cols-2 grid-rows-2 rounded-md">
      <Card
        icon={<User />}
        title="Customer"
        number={2}
        progress="100%"
        progressIcon={<ArrowUp />}
        className="border-b border-r border-accent"
      />
      <Card
        icon={<IdCard />}
        title="Orders"
        number={0}
        progress="100%"
        progressIcon={<ArrowDown />}
        className="border-b  border-accent"
      />
      <Card
        icon={<Triangle />}
        title="Trips"
        number={0}
        progress="100%"
        progressIcon={<ArrowDown />}
        className="border-r border-accent"
      />
      <Card
        icon={<Sparkles />}
        title="Client Rating"
        number={"9,02/10"}
        progressIcon={<ArrowDown />}
      />
    </div>
  );
};

export default Cards;
