import { Container } from "@/components/ui/container";
import React from "react";
import {  ChartBarLabel } from "./chart";
import { ArrowDown, User } from "lucide-react";
import Cards from "./cards";

const Page = () => {
  return (
    <Container>
      <div className="overview border border-accent p-4 rounded-md space-y-6">
        <h4>Month Overview</h4>
        <Cards />
        <ChartBarLabel />
      </div>
    </Container>
  );
};

export default Page;
