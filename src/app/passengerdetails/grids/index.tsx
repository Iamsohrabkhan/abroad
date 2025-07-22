import { Container } from "@/components/ui/container";
import React from "react";
import Row1 from "./rows1";
import Grid2 from "./grid2/index.";

const Grid = () => {
  return (
    <Container className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 ">
      <Row1 className="lg:col-span-7 xl:col-span-8" />
      <Grid2 className="lg:col-span-5 xl:col-span-4" />
    </Container>
  );
};

export default Grid;
