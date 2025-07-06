import { createContext, useState, ReactNode, useContext } from "react";
import { useInputValue } from "react-haiku";

interface AppContextType {
  heroSearchBarActive: boolean;
  setHeroSearchBarActive: React.Dispatch<React.SetStateAction<boolean>>;
  headerSearchBarClick: boolean;
  setHeaderSearchBarClick: React.Dispatch<React.SetStateAction<boolean>>;
  rowReverse: boolean;
  setRowReverse: React.Dispatch<React.SetStateAction<boolean>>;
  activeDialog: boolean;
  setActiveDialog: React.Dispatch<React.SetStateAction<boolean>>;
  fromValue: string;
  setFromValue: React.Dispatch<string>;
  activeDialogPill: number;
  setActiveDialogPill: React.Dispatch<React.SetStateAction<boolean>>;
  finalHeaderSearchActive: boolean;
  setFinalHeaderSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
  activeDialogHeader: boolean;
  setActiveDialogHeader: React.Dispatch<React.SetStateAction<boolean>>;
  activeDialogHeaderPill: any;
  setActiveDialogHeaderPill: React.Dispatch<React.SetStateAction<any>>;
  initalFinalHeaderPill: boolean;
  setInitalFinalHeaderPill: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [fromValue, setFromValue] = useInputValue("");
  const [rowReverse, setRowReverse] = useState(false);

  const [activeDialog, setActiveDialog] = useState<boolean>(false);
  const [activeDialogPill, setActiveDialogPill] = useState<any>(0);

  const [heroSearchBarActive, setHeroSearchBarActive] = useState<boolean>(true);
  const [headerSearchBarClick, setHeaderSearchBarClick] =
    useState<boolean>(true);
  const [activeDialogHeader, setActiveDialogHeader] = useState<boolean>(false);
  const [activeDialogHeaderPill, setActiveDialogHeaderPill] = useState<any>(0);
  const [finalHeaderSearchActive, setFinalHeaderSearchActive] = useState(false);
  const [initalFinalHeaderPill, setInitalFinalHeaderPill] = useState(false);
  const value = {
    heroSearchBarActive,
    setHeroSearchBarActive,
    fromValue,
    setFromValue,
    rowReverse,
    setRowReverse,
    activeDialog,
    setActiveDialog,
    activeDialogPill,
    setActiveDialogPill,
    headerSearchBarClick,
    setHeaderSearchBarClick,
    finalHeaderSearchActive,
    setFinalHeaderSearchActive,
    activeDialogHeader,
    setActiveDialogHeader,
    activeDialogHeaderPill,
    setActiveDialogHeaderPill,
    initalFinalHeaderPill,
    setInitalFinalHeaderPill,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
