import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Search } from "lucide-react";
import FirstRow from "./firstRow";
import ThirdRow from "./thirdrow";
import SecondRow from "./secondRow";

export const MobileSearch = () => {
  return (
    <div className="lg:hidden relative z-50 flex justify-center items-center flex-col w-full gap-2 bg-white py-6 mx-auto max-w-84 rounded-4xl shadow-lg border border-[#DFE2E6]">
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </div>
  );
};
