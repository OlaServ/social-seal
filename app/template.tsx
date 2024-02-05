"use client";

import ThemeProvider from "@/theme/theme-provider";
import { MegaMenu } from "@/components/mega-menu/mega-menu";
import { ReactNode } from "react";
import { MegaMenuData } from "@/data/mega-menu";

const RouteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <MegaMenu data={MegaMenuData}/>
      {children}
    </ThemeProvider>
  );
};

export default RouteLayout;
