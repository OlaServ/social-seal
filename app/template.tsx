"use client";

import ThemeProvider from "@/theme/theme-provider";
import { MegaMenu } from "@/components/mega-menu/mega-menu";
import { ReactNode } from "react";

const RouteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <MegaMenu />
      {children}
    </ThemeProvider>
  );
};

export default RouteLayout;
