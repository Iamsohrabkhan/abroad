import { Search } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Counter from "../../search/travellar/counter";
const ThirdRow = () => {
  return (
    <div className="bg-white w-full max-w-72 rounded-full p-4 flex items-center justify-between gap-4 border-1 shadow border-[#DFE2E6] divide-x-2 divide-accent">
      <Drawer>
        <DrawerTrigger className="w-full">
          <div className="text-sm  w-full  text-start ">
            <h6 className="font-[400] text-sm ">Travellers</h6>
            <p className="text-black/50 text-sm">Add Traveller</p>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="">
            <DrawerTitle>Add Traverlar</DrawerTitle>
          </DrawerHeader>
          <ul className="divide-y-2 px-8 py-4">
        <li className=" flex gap-2 py-4  justify-between">
          <div className="">
            <h6 className="font-medium text[#222222] text-base">Seniors</h6>
            <p className="text-[#717171] text-sm">Ages 60 or above</p>
          </div>
          <Counter />
        </li>
        <li className="flex gap-4 py-4 justify-between">
          <div className="">
            <h6 className="font-medium text[#222222] text-base">
              Teans/Adults
            </h6>
            <p className="text-[#717171] text-sm">Ages 16 or 59</p>
          </div>
          <Counter />
        </li>
        <li className="flex gap-4 py-4 justify-between">
          <div className="">
            <h6 className="font-medium text[#222222] text-base">Children</h6>
            <p className="text-[#717171] text-sm">Ages 3 to 15</p>
          </div>
          <Counter />
        </li>
        <li className="flex gap-4 py-4 justify-between">
          <div className="">
            <h6 className="font-medium text[#222222] text-base">Babies</h6>
            <p className="text-[#717171] text-sm">Ages 0 to 3</p>
          </div>
          <Counter />
        </li>
        <p className="text-[#717171] text-sm w-full pt-4 max-w-96">
          If the baby doesnt need a seat, it travels free of charges: don’t add
          it in this case. On the other hand, if you wish to reserve a seat for
          him/her, add him/her as a passenger.
        </p>
      </ul>
        </DrawerContent>
      </Drawer>
      <button className="bg-[#25D1A34D] text-sm rounded-4xl w-full flex justify-center gap-2 items-center text-white h-full py-4">
        <Search stroke="white" /> Search
      </button>
    </div>
  );
};

export default ThirdRow;
