import { styled } from "@chakra-ui/react";
import { Button } from "../button/button";

const StyledButton = styled(Button, {
  baseStyle: {
    bg: "primary.blue",
    color: "primary.white",
    justifySelf: { base: "center", lg: "flex-start" },
    alignSelf: { base: "center", lg: "flex-start" },
    w: { base: "100%", md: "max-content" },
  },
});

export const SectionContentButtonElements = { StyledButton };
