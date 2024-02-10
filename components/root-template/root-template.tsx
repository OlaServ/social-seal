"use client";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { MobileContextProvider } from "@/context/mobile-context";
import { MegaMenu } from "../mega-menu/mega-menu";
import { MegaMenuData } from "@/data/mega-menu";
import { ReactNode } from "react";

interface IRootTemplateProps {
  children: ReactNode;
}

export const RootTemplate = ({ children }: IRootTemplateProps) => {
  const isMobile = useIsMobile();

  return (
    <MobileContextProvider value={{ isMobile }}>
      <MegaMenu data={MegaMenuData} />
      {children}
    </MobileContextProvider>
  );
};
