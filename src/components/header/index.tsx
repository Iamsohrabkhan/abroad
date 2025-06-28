"use client";
import Logo from "./logo";
import CentralTab from "./centralTab";
import NavButton from "./NavButtons";
import { useRef, useState } from "react";
import NavMenu from "./navMenu";
import { useClickOutside } from "react-haiku";
type BooleanState = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
export const Header = () => {
  const [isOpen, setIsOpen]: BooleanState = useState(false);
  const navMenuRef = useRef<HTMLElement>(null);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  // Pass an array of refs
  useClickOutside( navMenuRef, handleClickOutside);

  return (
    <header className="fixed z-[60] top-0 left-0 right-0 w-full max-w-7xl mx-auto">
      <nav className="px-4 lg:px-0 flex justify-between items-center py-4 lg:py-0 ">
        <Logo />
        <CentralTab />
        <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
      {isOpen && <NavMenu navMenuRef={navMenuRef} />}
    </header>
  );
};
