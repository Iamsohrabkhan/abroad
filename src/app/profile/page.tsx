import { Container } from "@/components/ui/container";
import React from "react";
import CustomMonthChart from "./chart";
import Cards from "./cards";

const Page = () => {
  return (
    <Container>
      <div className="overview border border-accent p-2 md:p-4 lg:p-6 rounded-md space-y-6">
        <h4>Month Overview</h4>
        <Cards />
        <CustomMonthChart />
      </div>
    </Container>
  );
};

export default Page;
