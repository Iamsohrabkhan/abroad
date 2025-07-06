"use client";
import Logo from "./logo";
import CentralTab from "./centralTab";
import NavButton from "./NavButtons";
import { useRef, useState } from "react";
import NavMenu from "./navMenu";
import { useClickOutside } from "react-haiku";
import HeaderSearch from "./headerSearchInitial";
import { motion } from "motion/react";
import { useAppContext } from "../store/AppContext";
import HeaderSearchFinal from "./headerSearchFinal";
type BooleanState = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
export const Header = () => {
  const [isOpen, setIsOpen]: BooleanState = useState(false);
  const navMenuRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const {
    heroSearchBarActive,
    finalHeaderSearchActive,
    setFinalHeaderSearchActive,
  } = useAppContext();

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  // Pass an array of refs
  useClickOutside(navMenuRef, handleClickOutside);
  useClickOutside(navRef, () => {
    setFinalHeaderSearchActive(false);
  });

  return (
    <div className="relative ">
      <motion.header
        className={`fixed z-[60] top-0 left-0 right-0 w-full max-w-7xl mx-auto my-5 !px-6`}
        ref={navRef}
      >
        <div className="fixed top-0 left-0 right-0 h-24 w-full -z-50 pointer-events-none">
          <motion.div
            className={`size-full transition-all duration-200 ${
              !heroSearchBarActive ? "bg-black/15 backdrop-blur-2xl " : ""
            } ${!finalHeaderSearchActive ? "h-full" : "h-[200%]"}`}
          />
        </div>
        <nav className="px-4 lg:px-0 flex justify-between items-center py-4 lg:py-0 lg:h-12 ">
          <Logo />
          <CentralTab />
          {/* <div className="absolute left-1/2 -translate-x-1/2 opacity-0 bg-amber-200 w-96 top-0 h-full z-[99] bottom-0"> */}
          {!heroSearchBarActive && <HeaderSearch />}

          {/* </div> */}
          <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
        {isOpen && <NavMenu navMenuRef={navMenuRef} />}
        <div className="flex justify-center items-center mt-6">
          <HeaderSearchFinal />
        </div>
      </motion.header>
    </div>
  );
};
