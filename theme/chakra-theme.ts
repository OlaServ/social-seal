import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["200", "400", "600", "800"], subsets: ['latin'] });

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

  components: {},
});

