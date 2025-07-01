import React from "react";
import Greentick from "../../icons/greentick";
import { AccordionComponent } from "./accordion";
import { NoHiddenFees } from "./nohiddenfees";

const Faqs = () => {
  return (
    <section className="lg:grid lg:grid-cols-2 md:justify-between md:items-start ">
      <NoHiddenFees />
      <div className="mt-6 lg:mt-0 ">
        <AccordionComponent />
      </div>
    </section>
  );
};

export default Faqs;
