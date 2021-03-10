import React, { createContext, ReactNode, useState } from 'react'

interface ILateralBarContextData{
  isSelected: boolean;
  setisSelectedd: () => void;
}

interface LateralProviderProps {
  children: ReactNode;
}

export const LateralBarContext = createContext({} as ILateralBarContextData);

export function LateralProvider({children}: LateralProviderProps) {
    const [isSelected, setisSelected] = useState(true);
    
    function setisSelectedd() {
      setisSelected(!isSelected);
      console.log(isSelected);      
    }

    return (
      <LateralBarContext.Provider value={{
        isSelected,
        setisSelectedd,
      }}>
      {children}
      </LateralBarContext.Provider>  
    );
}
