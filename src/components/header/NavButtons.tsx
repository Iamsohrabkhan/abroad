"use client";
import { Globe, Menu } from "lucide-react";
import { Button } from "../ui/button";

const NavButton = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex justify-center items-center ">
      <Button
        variant="secondary"
        className="rounded-full mr-2 cursor-pointer "
      >
        Sign In
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full mr-2 cursor-pointer"
      >
        <Globe />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="menu-button rounded-full cursor-pointer relative border-2 border-[#EAECF0]"
      >
        {isOpen && <div className="cross absolute inset-0  z-[61]"></div>}
        <div
          className="absolute inset-0 flex items-center justify-center border-2 border-[#EAECF0] rounded-full"
          onClick={() => setIsOpen(true)}
        >
          <Menu />
        </div>
      </Button>
    </div>
  );
};

export default NavButton;
