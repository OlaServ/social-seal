import { styled, Grid } from "@chakra-ui/react";

const Container = styled("section", {
  baseStyle: {
    display: "grid",
    w: "100%",
    justifyItems: { base: "center", lg: "end" },
    whiteSpace: "pre-wrap",
    textAlign: { base: "center", lg: "left" },
  },
});

export const SectionGridElements = {Container}