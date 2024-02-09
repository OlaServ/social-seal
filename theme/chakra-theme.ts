import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["200", "400", "600", "800"], subsets: ['latin'] });

const breakpoints = {
  base: "0px",
  sm: "460px",
  md: "830px",
  lg: "1218px",
  xl: "1462px",
  "2xl": "1536px",
};


export const ChakraTheme = extendTheme({
  global: {
    html: {
      fontFamily: poppins.style.fontFamily,
    },
  },
  colors,
  fonts: {
    heading: poppins.style.fontFamily,
    body: poppins.style.fontFamily,
  },
  breakpoints,
  components: {},
});

