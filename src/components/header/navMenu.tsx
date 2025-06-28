import { CircleQuestionMark, House, HouseIcon } from "lucide-react";

const NavMenu = ({ navMenuRef }: { navMenuRef: any }) => {
  return (
    <div
      ref={navMenuRef}
      className="flex items-center justify-between bg-white absolute right-0 top-20 rounded-md"
    >
      <ul className="flex gap-4 flex-col divide-y  py-3 divide-gray-200">
        <li className="flex justify-start items-center px-6 py-2 min-w-64 gap-2 cursor-pointer hover:bg-gray-100 rounded-md">
          <CircleQuestionMark className="size-4" />
          <span>Help Center</span>
        </li>
        <li className="flex justify-start items-center px-6 py-2 min-w-64 gap-2 cursor-pointer hover:bg-gray-100 rounded-md">
          <div className="flex justify-center gap-1 flex-col">
            <h6 className="font-medium">Become a host</h6>
            <p className="text-xs text-gray-500 font-light">
              It's easy to start hosting and <br />
              earn extra income
            </p>
          </div>
          <HouseIcon className="stroke-green-500  size-10" />
        </li>
        <li className=" cursor-pointerrounded-md space-y-2">
          <div className=" hover:bg-gray-100  px-6 py-2 cursor-pointer ">
            Refer a host
          </div>
          <div className=" hover:bg-gray-100   px-6 py-2 cursor-pointer">
            Find a co-host
          </div>
          <div className=" hover:bg-gray-100  px-6 py-2 cursor-pointer ">
            Gift Cards
          </div>
        </li>
        <li className=" cursor-pointerrounded-md px-6 py-2 hover:bg-gray-100  cursor-pointer">
          Sign up or login
        </li>
      </ul>
    </div>
  );
};
export default NavMenu;
