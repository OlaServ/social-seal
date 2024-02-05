"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ChakraTheme } from "./chakra-theme";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChakraProvider theme={ChakraTheme}>{children}</ChakraProvider>;
}
