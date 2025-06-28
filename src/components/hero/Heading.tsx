import { Sparkle } from "lucide-react";

export const Heading = () => {
  return (
    <>
      <h1 className="text-white text-center">
        Cheap Train Tickets <br className="lg:hidden" /> in the UK
      </h1>
      <h4 className="text-white text-center text-balance">
        Search and Compare <br className="lg:hidden" /> Train Times and Prices
      </h4>
      <div className="flex justify-center items-center gap-4 bg-white h-9 w-64 rounded-2xl font-bold">
        <div className="text-sm">Safe & Excellent</div>
        <div className="bg-[#FF5681] text-white text-sm w-28 h-7 flex justify-center items-center rounded-2xl gap-0.5">
          Rated 4.7/5 <Sparkle className="size-3.5" />
        </div>
      </div>
    </>
  );
};
