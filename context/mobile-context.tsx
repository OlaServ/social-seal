"use client";

import { createContext, ReactNode } from "react";

export const MobileContext = createContext<{
  isMobile: boolean | undefined | null;
}>({
  isMobile: null,
});

interface IMobileContextProviderProps {
  value: { isMobile: boolean | undefined | null };
  children: ReactNode;
}

export const MobileContextProvider = ({
  value,
  children,
}: IMobileContextProviderProps) => {
  return (
    <MobileContext.Provider value={value}>{children}</MobileContext.Provider>
  );
};
