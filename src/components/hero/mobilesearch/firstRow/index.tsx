import { Button } from "@/components/ui/button";
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
import Location from "@/icons/loaction";
import { LocationEdit, LocationEditIcon } from "lucide-react";
const FirstRow = () => {
  return (
    <div className="shrink-0 grow-0 basis-full w-full flex justify-center items-center ">
      <div className="bg-white w-full max-w-72 rounded-full p-4 flex items-center justify-between gap-4 border-1 shadow border-[#DFE2E6]">
        <Drawer>
          <DrawerTrigger className="w-full">
            <div className="text-sm  w-full  text-start ">
              <h6 className="font-[400] text-sm ">From</h6>
              <p className="text-black/50 text-sm">Where from?</p>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Search From Where?</DrawerTitle>
              <DrawerDescription>
                <span className="block my-3">
                  Select your starting point to find the best options available.
                </span>
                <input
                  id="name"
                  placeholder="Enter your location"
                  className="border mt-4 border-gray-200 bg-white w-full px-3 h-9 rounded-lg outline-none focus:ring-2 focus:ring-black/5 text-gray-900"
                />
              </DrawerDescription>
              <ul className="flex justify-start flex-col text-start">
                <li className="text-sm text-gray-700 py-2 flex justify-start gap-2 px-3 items-center">
                  <div className="bg-[#EEEEEE] p-3 rounded-md flex justify-center items-center">
                    <Location />
                  </div>
                  <div>Ha Noi, Viet Nam</div>
                </li>
                <li className="text-sm text-gray-700 py-2 flex justify-start gap-2 px-3 items-center">
                  <div className="bg-[#EEEEEE] p-3 rounded-md flex justify-center items-center">
                    <Location />
                  </div>
                  <div>Ha Noi, Viet Nam</div>
                </li>
                <li className="text-sm text-gray-700 py-2 flex justify-start gap-2 px-3 items-center">
                  <div className="bg-[#EEEEEE] p-3 rounded-md flex justify-center items-center">
                    <Location />
                  </div>
                  <div>Ha Noi, Viet Nam</div>
                </li>
              </ul>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        <Drawer>
          <DrawerTrigger className="w-full">
            <div className="text-sm w-full text-start">
              <h6 className="font-[400] text-sm">From</h6>
              <p className="text-black/50 text-sm">Where from?</p>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Search From Where?</DrawerTitle>
              <DrawerDescription>
                <span className="block my-3">
                  Select your starting point to find the best options available.
                </span>
                <input
                  id="name"
                  placeholder="Enter your location"
                  className="border mt-4 border-gray-200 bg-white w-full px-3 h-9 rounded-lg outline-none focus:ring-2 focus:ring-black/5 text-gray-900"
                />
              </DrawerDescription>
              <ul className="flex justify-start flex-col text-start">
                <li className="text-sm text-gray-700 py-2 flex justify-start gap-2 px-3 items-center">
                  <div className="bg-[#EEEEEE] p-3 rounded-md flex justify-center items-center">
                    <Location />
                  </div>
                  <div>Ha Noi, Viet Nam</div>
                </li>
                <li className="text-sm text-gray-700 py-2 flex justify-start gap-2 px-3 items-center">
                  <div className="bg-[#EEEEEE] p-3 rounded-md flex justify-center items-center">
                    <Location />
                  </div>
                  <div>Ha Noi, Viet Nam</div>
                </li>
                <li className="text-sm text-gray-700 py-2 flex justify-start gap-2 px-3 items-center">
                  <div className="bg-[#EEEEEE] p-3 rounded-md flex justify-center items-center">
                    <Location />
                  </div>
                  <div>Ha Noi, Viet Nam</div>
                </li>
              </ul>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};
export default FirstRow;
