"use client";

import ThemeProvider from "@/theme/theme-provider";
import { ReactNode } from "react";
import { RootTemplate } from "@/components/root-template/root-template";

const RouteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <RootTemplate>{children}</RootTemplate>
    </ThemeProvider>
  );
};

export default RouteLayout;
