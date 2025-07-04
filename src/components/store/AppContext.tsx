import { createContext, useState, ReactNode, useContext } from "react";
import { useInputValue } from "react-haiku";

interface AppContextType {
  heroSearchBarActive: boolean;
  setHeroSearchBarActive: React.Dispatch<React.SetStateAction<boolean>>;
  rowReverse: boolean;
  setRowReverse: React.Dispatch<React.SetStateAction<boolean>>;
  activeDialog: boolean;
  setActiveDialog: React.Dispatch<React.SetStateAction<boolean>>;
  fromValue: string;
  setFromValue: React.Dispatch<string>;
  activeDialogPill: number;
  setActiveDialogPill: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [fromValue, setFromValue] = useInputValue("");
  const [rowReverse, setRowReverse] = useState(false);

  const [activeDialog, setActiveDialog] = useState<boolean>(false);
  const [activeDialogPill, setActiveDialogPill] = useState<any>(0);

  const [heroSearchBarActive, setHeroSearchBarActive] = useState<boolean>(true);
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
