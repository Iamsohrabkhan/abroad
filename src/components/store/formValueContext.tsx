// context/FromValueContext.tsx
import { createContext, useContext, ReactNode, useState } from "react";
import { useInputValue } from "react-haiku";

type FromValueContextType = {
  fromValue: string;
  setFromValue: React.Dispatch<string>;
  toValue:string;
  setToValue:React.Dispatch<string>;
  rowReverse: boolean;
  setRowReverse: React.Dispatch<React.SetStateAction<boolean>>;
};

const FromValueContext = createContext<FromValueContextType | undefined>(
  undefined
);

export const FromValueProvider = ({ children }: { children: ReactNode }) => {
    const [rowReverse, setRowReverse] = useState(false);

  const [fromValue, setFromValue] = useInputValue("");
  const [toValue,setToValue]=useInputValue("")
  return (
    <FromValueContext.Provider
      value={{ fromValue, setFromValue, rowReverse, setRowReverse,toValue,setToValue }}
    >
      {children}
    </FromValueContext.Provider>
  );
};

export const useFromValue = () => {
  const context = useContext(FromValueContext);
  if (!context)
    throw new Error("useFromValue must be used within FromValueProvider");
  return context;
};
