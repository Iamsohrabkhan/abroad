import { Container } from "@/components/ui/container";
import React from "react";
import { Chart } from "./chart";
import { ArrowDown, User } from "lucide-react";
import Cards from "./cards";

const Page = () => {
  return (
    <Container>
      <div className="overview border border-accent p-4 rounded-md space-y-6">
        <h4>Month Overview</h4>
        <Cards />
        <Chart />
      </div>
    </Container>
  );
};

export default Page;
